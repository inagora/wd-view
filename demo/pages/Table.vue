<template>
	<div class="container">
		<wd-button @click="getTableRows">获取选中项</wd-button>
		<!-- <div class="component-box">
      <div class="component-box-top">
        <wd-form></wd-form>
        <wd-table
          ref="wdTable"
          :columns="tableColumns"
          :data-source="dataList"
          :show-header="true"
          size="small"
          bordered
          :sticky="true"
          page-count="3"
          current-page="1"
          height="100%"
          pagination-position="center"
          @current-change="pageChangeHandler"
          @prev-click="prevClickChangeHandler"
          @next-click="nextClickChangeHandler"
          @select-change="tableSelectChangeHandler"
          @cellClick="cellClickHandler"
          @rowClick="rowClickHandler"
        ></wd-table>
      </div>
      <div class="component-box-bottom">
        <div class="component-title">列表组件</div>
        <div class="component-desc">
          该组件主要是显示一个列表，并且在列表底部可以显示分页；
        </div>
      </div>
    </div> -->
		<!-- <wd-form></wd-form> -->
		<wd-table
			ref="wdTable"
			:columns="tableColumns"
			:data-source="dataList"
			:page-count="pageCount"
			:current-page="currentPage"
			:cell-wrap="false"
			:sticky="true"
			:total="total"
			:loading="loading"
			:is-show-page="false"
			text="数据加载中"
			empty-text="现在还没有数据噢~"
			@current-change="pageChangeHandler"
		>
			<!-- <wd-table-column prop="id"> -->
			<template v-slot:custom="slotScope">
				<template v-if="slotScope.column.dataIndex === 'id'">
					<span>{{ slotScope.row.id }}</span>
				</template>
				<template v-else-if="slotScope.column.dataIndex === 'action'">
					<wd-button-group>
						<wd-button
							size="small"
							v-if="slotScope.row.id === '4'"
							@click="doEdit(slotScope.row)"
							type="primary"
							>按钮</wd-button
						>
						<wd-button size="small" @click="openDrawer" type="primary"
							>按钮</wd-button
						>
					</wd-button-group>
				</template>
			</template>
			<!-- </wd-table-column> -->
			<template #headercell="slotScope">
				<template v-if="slotScope.column.dataIndex === 'id'">
					<div>ID</div>
					<div>自定义</div>
				</template>
			</template>
			<template #footer> 这里是footer </template>
		</wd-table>
		<drawer v-model="isDrawerOpen" :show="isDrawerOpen"></drawer>
	</div>
</template>

<script lang="ts">
import { ref, defineComponent, reactive, onMounted } from 'vue';
import WdForm from './Form.vue';
import Drawer from './Drawer.vue';
export default defineComponent({
	name: 'Table',
	components: {
		WdForm,
		Drawer,
	},
	setup() {
		let loading = ref(true);
		// 获取table引用
		let wdTable = ref(null);
		let pageCount = ref(0);

		const textData = ref('');

		// table数据
		const tableColumns = [
			{
				title: '',
				dataIndex: '',
				key: '',
				type: 'checkbox',
				width: 80,
			},
			// {
			//     type: 'index',
			//     index: (index) => {
			//         return index * 2;
			//     }
			// },
			{
				title: 'ID',
				dataIndex: 'id',
				key: 'id',
				sorter: (val) => {
					getSortData(val);
				},
			},
			{
				title: '商品名',
				dataIndex: 'goods_name',
				key: 'goods_name',
				ellipsis: true,
				fixed: 'left',
			},
			{
				title: '价格',
				dataIndex: 'price',
				key: 'price',
				fixed: 'left',
				sorter: (val) => {
					getSortData(val);
				},
				render(column, row) {
					return `<span style="color: red;">${row[column.dataIndex]}</span>`;
				},
			},
			{
				title: '生产日期',
				dataIndex: 'ctime',
				key: 'ctime',
				fixed: 'right',
			},
			{
				title: '产地',
				dataIndex: 'location',
				key: 'location',
			},
			{
				title: '更新时间',
				dataIndex: 'update_time',
				key: 'update_time',
			},
			{
				title: '操作',
				dataIndex: 'action',
				key: 'action',
				fixed: 'right',
				width: '300px',
			},
		];

		let dataList: any = ref([]);
		let total = ref(0);
		const currentPage = ref(1);
		const rowData = [];

		setTimeout(() => {
			for (let i = 0; i < 15; i++) {
				rowData.push({
					id: '' + (4 + i),
					goods_name: 'sk4',
					price: '1180',
					ctime: '2021-09-26 2021-09-26 2021-09-26 2021-09-26 2021-09-26',
					update_time: '2021-09-26',
					location: '中国',
				});
			}
			total.value = 200;
			dataList.value = rowData;
			loading.value = false;
			pageCount.value = 100;
			currentPage.value = 3;
		}, 2000);

		const getSortData = (sort) => {
			const data = dataList.value;
			data.sort((item1, item2) => {
				if (sort === 'desc') {
					return parseInt(item2.id) - parseInt(item1.id);
				} else {
					return parseInt(item1.id) - parseInt(item2.id);
				}
			});
			dataList.value = data;
		};

		const pageChangeHandler = (page) => {
			setTableData(page);
			console.log(page);
		};
		const prevClickChangeHandler = (page) => {
			console.log(page);
		};
		const nextClickChangeHandler = (page) => {
			console.log(page);
		};
		const setTableData = (page) => {
			loading.value = true;
			// dataList = dataList.substr(page * 15, 15);
			setTimeout(() => {
				let rowData = [];
				for (let i = page * 15; i < (page + 1) * 15; i++) {
					rowData.push({
						id: '' + (4 + i),
						goods_name: 'sk4',
						price: '1180',
						ctime: '2021-09-26',
						update_time: '2021-09-26',
						location: '中国',
					});
				}
				console.log(rowData);
				// dataList.value.length = 0;
				dataList.value = rowData;
				loading.value = false;
				total.value = 300;
			}, 2000);
		};
		const tableSelectChangeHandler = (selectedRows) => {
			console.log(selectedRows);
		};
		const getTableRows = () => {
			console.log(wdTable.value.getSelectedRows());
		};
		const cellClickHandler = ({ rowIndex, dataIndex, value }) => {
			console.log(dataIndex, value);
		};
		const rowClickHandler = (row) => {
			console.log(row);
		};
		let componentType = ref('');
		const changeContent = (type) => {
			componentType.value = type;
		};
		onMounted(() => {});
		const doEdit = (row) => {
			console.log(row.id);
		};
		const isDrawerOpen = ref(false);
		const openDrawer = () => {
			isDrawerOpen.value = true;
		};
		return {
			textData,
			dataList,
			tableColumns,
			pageChangeHandler,
			prevClickChangeHandler,
			nextClickChangeHandler,
			tableSelectChangeHandler,
			wdTable,
			getTableRows,
			cellClickHandler,
			rowClickHandler,
			componentType,
			changeContent,
			loading,
			pageCount,
			doEdit,
			isDrawerOpen,
			openDrawer,
			total,
			currentPage,
		};
	},
});
</script>
<style lang="less">
.component-box {
	width: 1000px !important;
}
</style>
