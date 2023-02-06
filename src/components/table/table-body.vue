<template>
	<div class="wd-table-body" v-if="dataSource.length > 0" :style="{ height }">
		<table border="0" cellpadding="0" cellspacing="0">
			<!-- 设置对齐 -->
			<colgroup>
				<col
					v-for="column in store.columns"
					:width="column.width + 'px'"
					:key="column.dataIndex || column.key"
				/>
			</colgroup>
			<tbody class="wd-table-tbody">
				<tr
					:class="[
						'wd-table-row',
						clickRowIndex === rowIndex ? 'wd-table-row-clicked' : '',
					]"
					v-for="(row, rowIndex) in dataSource"
					:key="rowIndex"
					@click="rowClickHandler(row)"
				>
					<td
						:class="[
							column.type === 'checkbox' || column.type === 'index'
								? 'wd-table-selection-column'
								: '',
							column.leftLast && isShowLeftShadow
								? 'wd-table-fixed-left-last'
								: '',
							column.rightFirst && isShowRightShadow
								? 'wd-table-fixed-right-first'
								: '',
						]"
						v-for="(column, colIndex) in store.columns"
						:style="filterColumnStyle(column, colIndex)"
						:key="column.dataIndex || column.key"
						:title="column.ellipsis || !cellWrap ? row[column.dataIndex] : ''"
						@click="
							cellClickHandler(
								column.type,
								row,
								rowIndex,
								column.dataIndex,
								row[column.dataIndex]
							)
						"
					>
						<template v-if="column.type === 'checkbox'">
							<div class="wd-table-header-column">
								<span class="wd-table-column-title">
									<div class="wd-table-selection">
										<wd-checkbox
											:checked="row.isSelected"
											@change="selectChangeHandler($event, rowIndex)"
										></wd-checkbox>
									</div>
								</span>
							</div>
						</template>
						<template v-else-if="column.type === 'index'">
							<span class="wd-table-column-title">
								<div class="wd-table-selection">
									{{ rowNum(column, rowIndex) }}
								</div>
							</span>
						</template>
						<template v-else-if="column.render">
							<span class="wd-table-column-title">
								<div
									class="wd-table-selection"
									v-html="renderColumn(column, row)"
								></div>
							</span>
						</template>
						<div
							v-else
							:class="[
								column.ellipsis || !cellWrap
									? 'wd-table-row-cell-ellipsis'
									: 'wd-table-row-cell-break-word',
							]"
						>
							<slot
								name="custom"
								:row="row"
								:column="column"
								:row-index="rowIndex"
								>{{ row[column.dataIndex] }}</slot
							>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
	<div v-else class="wd-table-empty">{{ emptyText }}</div>
</template>
<script lang="ts">
// @ts-nocheck
import {
	defineComponent,
	PropType,
	toRefs,
	reactive,
	ref,
	nextTick,
	onMounted,
	watch,
} from 'vue';
import WdCheckbox from '../checkbox/checkbox.vue';
import { StoreProps } from './table-type';
export default defineComponent({
	components: { WdCheckbox },
	name: 'table-body',
	props: {
		store: Object as PropType<StoreProps>,
		cellWrap: Boolean,
		emptyText: String,
		isShowLeftShadow: Boolean,
		isShowRightShadow: Boolean,
		dataSource: Object,
		fixedHeight: Boolean,
		height: String,
	},
	emits: ['select-change', 'cell-click', 'row-click'],
	setup(props, { emit, slots }) {
		const clickRowIndex = ref(-1);
		const { dataSource } = toRefs(reactive(props.store));
		const selectChangeHandler = (val, index) => {
			const store: any = toRefs(reactive(props.store));
			store.dataSource.value[index].isSelected = val;
			emit('select-change');
		};
		const cellClickHandler = (type, row, rowIndex, dataIndex, value) => {
			if (type === 'checkbox') return; // 如果点击的是选择列则不处理
			const clickRow = { ...row };
			clickRowIndex.value = rowIndex;
			emit('cell-click', { row: clickRow, rowIndex, dataIndex, value });
		};
		const rowClickHandler = (row) => {
			emit('row-click', { ...row });
		};
		const rowNum = (column, index) => {
			if (column.index && column.index instanceof Function) {
				return column.index(index);
			}
			return index;
		};
		// 自定义列样式
		const renderColumn = (column, row) => {
			if (column.render && column.render instanceof Function) {
				return column.render(column, row);
			}
		};
		const filterColumnStyle = (column, index) => {
			if (column.fixed === 'left') {
				const leftOffset = getOffset(column, 'left');
				return {
					position: column.fixed ? 'sticky' : '',
					left: leftOffset + 'px',
					zIndex: 500 - index,
				};
			} else if (column.fixed === 'right') {
				const rightOffset = getOffset(column, 'right');
				return {
					position: column.fixed ? 'sticky' : '',
					right: rightOffset + 'px',
					zIndex: 500 - index,
				};
			} else {
				return {};
			}
		};

		const getOffset = (column, type) => {
			let columns = [];
			if (type === 'left') {
				columns = props.store.leftFixedColumns;
			} else {
				columns = props.store.rightFixedColumns;
			}
			if (column.type === 'checkbox') {
				return 0;
			}
			let offset = 0;
			if (
				props.store.columns &&
				props.store.columns.length > 0 &&
				props.store.columns[0].type === 'checkbox' &&
				type === 'left'
			) {
				offset += props.store.columns[0].width;
			}
			if (type === 'right') {
				for (let i = columns.length - 1; i >= 0; i--) {
					const item = columns[i];
					if (item.dataIndex === column.dataIndex) {
						break;
					}
					offset += item.width;
				}
			} else {
				for (let i = 0; i < columns.length; i++) {
					const item = columns[i];
					if (item.dataIndex === column.dataIndex) {
						break;
					}
					offset += item.width;
				}
			}
			return offset;
		};
		// 是否是自定义
		const isCustom = ref(false);
		if (slots.custom) {
			isCustom.value = true;
		}
		const height = ref('');
		const getTableBodyHeight = () => {
			if (!props.fixedHeight && !props.height) {
				return;
			}
			nextTick(() => {
				const tableBody = document.querySelector('.wd-table-tbody');
				if (tableBody) {
					const boundRect = tableBody.getBoundingClientRect();
					const layoutFooter = document.querySelector('.wd-layout-footer');
					const tableFooter = document.querySelector('.wd-table-footer');
					height.value = props.height
						? props.height
						: document.body.clientHeight -
						  boundRect.top -
						  50 -
						  (layoutFooter ? layoutFooter.clientHeight : 0) -
						  (tableFooter ? tableFooter.clientHeight : 0) +
						  'px';
				}
			});
		};
		watch(
			() => props.dataSource,
			() => {
				getTableBodyHeight();
			}
		);
		onMounted(() => {
			getTableBodyHeight();
			window.onresize = () => {
				getTableBodyHeight();
			};
		});
		return {
			selectChangeHandler,
			cellClickHandler,
			rowClickHandler,
			rowNum,
			dataSource,
			isCustom,
			filterColumnStyle,
			renderColumn,
			clickRowIndex,
			height,
		};
	},
});
</script>
