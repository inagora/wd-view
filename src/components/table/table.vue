<template>
	<wd-loading :loading="loading" :text="loadingText">
		<div class="wd-table-container">
			<div
				class="wd-table"
				:class="[
					'wd-table-' + size,
					store.bordered ? 'wd-table-bordered' : '',
					tableLayoutFixed ? 'wd-table-layout-fixed' : '',
				]"
			>
				<div class="wd-table-content">
					<!-- table header -->
					<table-header
						v-if="showHeader"
						:store="store"
						:fixed="sticky"
						:header-align="headerAlign"
						@select-change="selectChangeHandler"
					></table-header>
					<!-- table body -->
					<table-body
						:store="store"
						:data-source="dataSource"
						:cell-wrap="cellWrap"
						:empty-text="emptyText"
						@select-change="selectChangeHandler"
						@cell-click="cellClickHandler"
						@row-click="rowClickHandler"
					></table-body>
				</div>
			</div>
			<wd-pagination
				class="wd-table-pagination"
				:page-size="pageSize"
				:page-count="pageCount"
				:pager-count="pagerCount"
				:total="total"
				:position="paginationPosition"
				:current-page="currentPage"
				@current-change="pageChangeHandler"
				@prev-click="prevClickChangeHandler"
				@next-click="nextClickChangeHandler"
			></wd-pagination>
			<!-- <div v-if="loading">loading...</div> -->
		</div>
	</wd-loading>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, watchEffect } from 'vue';
import TableHeader from './table-header.vue';
import TableBody from './table-body.vue';
import WdPagination from '../pagination/pagination.vue';
import WdLoading from '../loading/loading.vue';
import { StoreProps } from './table-type';

/**
 * 1、table基本功能：数据展示
 *     (1) bordered
 *     (2) header、body显示; header固定
 *     (3) 列的显示：折行、省略; 省略情况下增加title属性
 * 2、操作
 * 3、分页
 * 4、固定列
 * 5、列的选择
 * 6、表头操作
 * ...
 *
 * tr自定义class
 * 自定义单元格
 * 行号 done
 */
export default defineComponent({
	components: { TableHeader, TableBody, WdPagination, WdLoading },
	name: 'wd-table',
	props: {
		dataSource: {
			type: Object,
			default: () => {
				return {};
			},
		},
		columns: Array,
		size: {
			type: String,
			default: 'default',
		},
		bordered: {
			type: Boolean,
			default: false,
		},
		showHeader: {
			type: Boolean,
			default: true,
		},
		sticky: {
			type: Boolean,
			default: false,
		},
		pageSize: [Number, String],
		pageCount: {
			type: [Number, String],
			default: 1,
		},
		pagerCount: [Number, String],
		total: [Number, String],
		currentPage: {
			type: [Number, String],
			default: 1,
		},
		paginationPosition: {
			type: String,
			default: 'right',
		},
		height: String,
		headerAlign: {
			type: String,
			default: 'left',
		},
		cellWrap: {
			type: Boolean,
			default: true,
		},
		loading: Boolean,
		emptyText: {
			type: String,
			default: '暂无数据',
		},
		loadingText: {
			type: String,
			default: '',
		},
	},
	emits: [
		'current-change',
		'select-change',
		'cell-click',
		'row-click',
		'next-click',
		'prev-click',
	],
	setup(props, { emit }) {
		const store = {} as StoreProps;
		store.originColumns = reactive(props.columns);
		store.dataSource = reactive(props.dataSource);
		store.bordered = props.bordered;
		let dataSource: any = store.dataSource;
		let tableLayoutFixed = ref(true);

		let leftFixedColumns = ref([]);
		let rightFixedColumns = ref([]);
		let normalColumns = ref([]);
		let checkColumn = ref(null);

		store.originColumns.forEach((column) => {
			if (!column.width) {
				column.width = 150;
			}
			if (column.type === 'checkbox') {
				checkColumn.value = column;
			} else {
				if (column.fixed === 'left') {
					leftFixedColumns.value.push(column);
				} else if (column.fixed === 'right') {
					rightFixedColumns.value.push(column);
				} else {
					normalColumns.value.push(column);
				}
			}
		});
		// 处理最后左边固定的最后一个和右边固定的最后一个
		if (leftFixedColumns.value.length > 0) {
			leftFixedColumns.value[leftFixedColumns.value.length - 1].leftLast = true;
		}
		if (rightFixedColumns.value.length > 0) {
			rightFixedColumns.value[0].rightFirst = true;
		}
		store.columns = []
			.concat(leftFixedColumns.value)
			.concat(normalColumns.value)
			.concat(rightFixedColumns.value);
		// 选择列放在第一列
		if (checkColumn.value) {
			store.columns.unshift(checkColumn.value);
		}
		// 页码变化
		const pageChangeHandler = (page) => {
			emit('current-change', page);
		};
		const nextClickChangeHandler = (page) => {
			emit('next-click', page);
		};
		const prevClickChangeHandler = (page) => {
			emit('prev-click', page);
		};
		// select-change
		const selectChangeHandler = () => {
			emit(
				'select-change',
				dataSource
					.filter((item) => item.isSelected)
					.map((item) => {
						const selectedRow = { ...item };
						delete selectedRow.isSelected;
						return selectedRow;
					})
			);
		};
		// 获取选中的项
		const getSelectedRows = () => {
			return dataSource
				.filter((item) => item.isSelected)
				.map((item) => {
					const selectedRow = { ...item };
					delete selectedRow.isSelected;
					return selectedRow;
				});
		};
		// 行点击
		const cellClickHandler = ({ row, rowIndex, dataIndex, value }) => {
			emit('cell-click', { row, rowIndex, dataIndex, value });
		};
		const rowClickHandler = (row) => {
			emit('row-click', row);
		};
		watchEffect(() => {
			store.dataSource = reactive(props.dataSource);
		});
		return {
			store,
			tableLayoutFixed,
			pageChangeHandler,
			nextClickChangeHandler,
			prevClickChangeHandler,
			selectChangeHandler,
			getSelectedRows,
			cellClickHandler,
			rowClickHandler,
			leftFixedColumns,
		};
	},
});
</script>
<style lang="less">
@import url(./style/index);
</style>
