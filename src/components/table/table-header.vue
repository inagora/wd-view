<template>
	<div :class="['wd-table-header', fixed ? 'wd-table-fixed-header' : '']">
		<table border="0" cellpadding="0" cellspacing="0">
			<colgroup>
				<col
					v-for="column in store.columns"
					:width="column.width + 'px'"
					:key="column.dataIndex || column.key"
				/>
			</colgroup>
			<thead class="wd-table-thead">
				<tr>
					<template
						v-for="(column, index) in store.columns"
						:key="column.dataIndex || column.key"
					>
						<th
							class="wd-table-cell wd-table-row-cell-break-word"
							v-if="!column.sorter"
							:style="[
								filterColumnStyle(column, index),
								{
									textAlign:
										column.type === 'checkbox' ? 'center' : headerAlign,
								},
							]"
							:class="[
								column.type === 'checkbox' || column.type === 'index'
									? 'wd-table-selection-column'
									: '',
							]"
						>
							<template v-if="column.type === 'checkbox'">
								<div class="wd-table-header-column">
									<span class="wd-table-column-title">
										<div class="wd-table-selection">
											<wd-checkbox
												:checked="isSelectedAll"
												@change="selectAllChangeHandler"
											></wd-checkbox>
										</div>
									</span>
								</div>
							</template>
							<div class="wd-table-header-column" v-else>
								<span class="wd-table-column-title">{{ column.title }}</span>
							</div>
						</th>
						<th
							class="wd-table-cell wd-table-column-has-sorters"
							v-else
							:style="[
								filterColumnStyle(column, index),
								{
									textAlign: headerAlign,
								},
							]"
						>
							<div @click="doSort(column)" class="wd-table-column-sorters">
								<span class="wd-table-column-title">{{ column.title }}</span>
								<span
									class="wd-table-column-sorter wd-table-column-sorter-full"
								>
									<span class="wd-table-column-sorter-inner"
										><span
											role="img"
											aria-label="caret-up"
											class="anticon anticon-caret-up wd-table-column-sorter-up"
											:class="[column.orderType === 'asc' ? 'active' : '']"
											><svg
												focusable="false"
												class=""
												data-icon="caret-up"
												width="1em"
												height="1em"
												fill="currentColor"
												aria-hidden="true"
												viewBox="0 0 1024 1024"
											>
												<path
													d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"
												></path></svg></span
										><span
											role="img"
											aria-label="caret-down"
											class="anticon anticon-caret-down wd-table-column-sorter-down"
											:class="[column.orderType === 'desc' ? 'active' : '']"
											><svg
												focusable="false"
												class=""
												data-icon="caret-down"
												width="1em"
												height="1em"
												fill="currentColor"
												aria-hidden="true"
												viewBox="0 0 1024 1024"
											>
												<path
													d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"
												></path></svg></span
									></span>
								</span>
							</div>
						</th>
					</template>
				</tr>
			</thead>
		</table>
	</div>
</template>
<script lang="ts">
// @ts-nocheck
import { defineComponent, PropType, reactive, ref, watch } from 'vue';
import WdCheckbox from '../checkbox/checkbox.vue';
import { StoreProps } from './table-type';
export default defineComponent({
	name: 'table-header',
	components: { WdCheckbox },
	props: {
		store: Object as PropType<StoreProps>,
		fixed: {
			type: Boolean,
		},
		headerAlign: String,
	},
	emits: ['select-change'],
	setup(props, { emit }) {
		let isSelectedAll = ref(false);
		let { store } = props;
		const selectAllChangeHandler = (val) => {
			let dataSource: any = store.dataSource;
			dataSource.forEach((data) => {
				data.isSelected = val;
			});
			emit('select-change');
		};

		const filterColumnStyle = (column, index) => {
			if (column.fixed === 'left') {
				return {
					position: column.fixed ? 'sticky' : '',
					left: index * column.width + 'px',
					zIndex: 1000 - index,
					backgroundColor: '#ffffff',
				};
			} else if (column.fixed === 'right') {
				return {
					position: column.fixed ? 'sticky' : '',
					right: index * column.width + 'px',
					zIndex: 1000 - index,
					backgroundColor: '#ffffff',
				};
			} else {
				return {};
			}
		};

		// 点击了排序
		const doSort = (column) => {
			if (!column.orderType) {
				column.orderType = 'desc';
			} else {
				column.orderType = column.orderType === 'asc' ? 'desc' : 'asc';
			}
			// 排序回调
			if (column.sorter) {
				if (typeof column.sorter === 'function') {
					column.sorter(column.orderType);
				}
			}
		};

		watch(store.dataSource, (val) => {
			isSelectedAll.value = checkSelectedAll(val);
		});
		const checkSelectedAll = (data) => {
			return !data.some((item) => !item.isSelected); // 全选
		};
		return {
			isSelectedAll,
			selectAllChangeHandler,
			filterColumnStyle,
			doSort,
		};
	},
});
</script>
