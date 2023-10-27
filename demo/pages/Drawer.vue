<template>
	<wd-button @click="centerDialogVisible = true">show drawer</wd-button>
	<wd-drawer
		title="Notice"
		width="70%"
		:show-close="true"
		:open="centerDialogVisible"
		:before-open="beforeOpenHandler"
		:before-close="beforeCloseHandler"
		@open="openHandler"
		@close="centerDialogVisible = false"
		@before-open="beforeOpen"
		@before-close="beforeClose"
		:append-to-body="true"
		:closeOnClickModal="false"
		:destroy-on-close="false"
		placement="right"
		zIndex="3000"
	>
		<span>
			<x-form />
		</span>
		<wd-table
			ref="wdTable"
			:columns="tableColumns"
			:data-source="dataList"
			:page-count="2"
			:current-page="1"
			:cell-wrap="true"
			:sticky="true"
			:total="100"
			:fixed-height="false"
			text="数据加载中"
			empty-text="现在还没有数据噢~"
		>
		</wd-table>
		<div style="height: 200px">
			<wd-button type="primary" @click="doConfirm"> 确定 </wd-button>
			<wd-button type="danger" @click="doConfirm">删除</wd-button>
		</div>
		<template #footer>
			<wd-button type="primary" @click="doConfirm">确定</wd-button>
			<wd-button type="danger" @click="doConfirm">删除</wd-button>
		</template>
	</wd-drawer>
</template>
<script>
import { defineComponent, ref, watch } from 'vue';
import XForm from './Form.vue';
import { WdMessage, WdModal } from '../../src/index';
export default defineComponent({
	components: { XForm },
	props: {
		show: Boolean,
		default: false,
	},
	setup(props) {
		const beforeOpenHandler = () => {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve(true);
				}, 2000);
			});
		};
		const beforeCloseHandler = () => {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve(true);
				}, 2000);
			});
		};
		const openHandler = () => {
			console.log('drawer open');
		};
		const beforeOpen = () => {
			console.log('before open');
		};
		const beforeClose = () => {
			console.log('before close');
		};
		const doConfirm = () => {
			WdMessage({
				message: '成功',
				type: 'success',
				zIndex: 2000,
			});
			// WdModal.alert({
			// 	content: 'test',
			// 	onConfirm() {
			// 		WdMessage({
			// 			message: '成功',
			// 			type: 'success',
			// 		});
			// 	},
			// });
		};
		// table数据
		const tableColumns = [
			{
				title: 'ID',
				dataIndex: 'id',
				key: 'id',
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
		let dataList = ref([]);
		let total = ref(0);
		const currentPage = ref(1);
		const rowData = [];

		setTimeout(() => {
			for (let i = 0; i < 15; i++) {
				rowData.push({
					id: '' + (4 + i),
					goods_name: 'sk4',
					price: '1180',
					ctime:
						i > 18
							? '2021-09-26 2021-09-26 2021-09-26 2021-09-26 2021-09-26'
							: '',
					update_time: '2021-09-26',
					location: '中国',
				});
			}
			total.value = 200;
			dataList.value = rowData;
		}, 2000);
		watch(
			() => props.show,
			(val) => {
				centerDialogVisible.value = val;
			}
		);
		const centerDialogVisible = ref(props.show);
		return {
			centerDialogVisible,
			openHandler,
			beforeOpen,
			beforeClose,
			dataList,
			tableColumns,
			beforeOpenHandler,
			beforeCloseHandler,
			doConfirm,
		};
	},
});
</script>
