<template>
	<pro-table ref="myProTable" :config="config" />
</template>
<script setup>
import {
	onMounted,
	reactive,
	ref,
	h,
	createVNode,
	getCurrentInstance,
} from 'vue';
import Ajax from '../../src/components/protable/utils/Ajax';
import WdButton from '../../src/components/button/index';
import WdInput from '../../src/components/input/index';
import { WdModal } from '../../src';
const emit = defineEmits(['update:modelValue']);
let sortKey = '';
let dataList = ref([]);
let total = ref(0);
const currentPage = ref(1);
const rowData = [];
const ajax = new Ajax();
const myProTable = ref(null);
const instance = getCurrentInstance();

setTimeout(() => {
	for (let i = 0; i < 15; i++) {
		rowData.push({
			id: '' + (4 + i),
			goods_name: 'sk4',
			price: '1180',
			ctime: '2021-09-26 2021-09-26 2021-09-26 2021-09-26 2021-09-26',
			update_time: '2021-09-26',
			location: '中国',
			color: i % 2 === 0 ? 'red' : 'blue',
		});
	}
	total.value = 200;
	dataList.value = rowData;
	currentPage.value = 2;
}, 2000);
let _id = 0;
const getRemoteList = () => {
	rowData.length = 0;
	_id++;
	return new Promise((resolve) => {
		setTimeout(() => {
			for (let i = 0; i < 60; i++) {
				rowData.push({
					id: '' + (_id + i),
					goods_name: 'sk4',
					price: '1180',
					ctime: '2021-09-26 2021-09-26 2021-09-26 2021-09-26 2021-09-26',
					update_time: '2021-09-26',
					location: '中国',
					color: i % 2 === 0 ? 'red' : 'blue',
					img: 'https://oss1.52ritao.cn/f7188ca531b2ec1bfc5236f966dc7bea.png',
				});
			}
			resolve({
				data: {
					list: rowData,
					total_count: Math.ceil(rowData.length / 10),
					totals: rowData.length,
				},
			});
		}, 500);
	});
};
// 获取远程valueEnum
const getRemoteEnum = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				green: '绿色',
				blue: '蓝色',
				green2: '绿色',
			});
		}, 3000);
	});
};
// 编辑
const doEdit = (row) => {
	console.log(row);
};
// 自定义组件点击
const customClickHandler = () => {
	console.log(123);
};
const deleteItem = (record) => {
	WdModal({
		title: '提示',
		content: '确定要删除吗？',
	});
};
const msg = ref('niu');
const btnType = ref('primary');
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
		title: '是否选中',
		dataIndex: 'isCheck',
		valueType: 'checkbox',
		defaultValue: 0,
	},
	{
		title: 'ID',
		dataIndex: 'id',
		key: 'id',
		fixed: 'left',
		sorter: (val) => {
			getSortData(val);
		},
		visible: true, // 是否可见
		exportable: false, // 是否可导出
		hideInTable: false,
	},
	{
		title: '商品名商品名商品名商品名商品名商品名商品名商品名',
		dataIndex: 'goods_name',
		key: 'goods_name',
		ellipsis: true,
		fixed: 'right',
		defaultValue: 11,
	},
	{
		title: '价格',
		dataIndex: 'price',
		key: 'price',
		fixed: 'left',
		sorter: (val) => {
			sortKey = val;
			console.log(app);
			// app.refresh();
		},
		render(text, record, col) {
			// return `<span style="color: red;">${row[column.dataIndex]}</span>`;
			// const vnode = h({
			// 	name: 'CustomComponent',
			// 	template: `<wd-button :type="btnType" @click="customClickHandler2">${
			// 		row[column.dataIndex]
			// 	}</wd-button>`,
			// 	methods: {
			// 		customClickHandler2() {
			// 			customClickHandler();
			// 		},
			// 	},
			// });
			const vnode = h('div', null, [
				h(
					WdButton,
					{
						type: btnType.value,
						onClick() {
							alert(msg.value);
						},
					},
					[text]
				),
				h(WdInput, {
					modelValue: msg.value,
					onInput: (val) => {
						msg.value = val;
						console.log(val);
					},
				}),
			]);
			return vnode;
		},
		valueType: 'text', // 表单类型
		defaultValue: '',
		valueEnum() {
			// 对应key的枚举值，减少render
			return {};
		},
	},
	{
		title: '自定义列',
		dataIndex: 'color',
		render(text, record, col) {
			// return `<span style="color: red;">${text}</span>`;
			return <span>aaa</span>;
		},
	},
	{
		title: '颜色',
		dataIndex: 'color',
		key: 'color',
		// hideInTable: true,
		// render(column, row) {
		//   return `<span style="color: red;">${row[column.dataIndex]}</span>`;
		// },
		valueType: 'multiple', // 表单类型
		defaultValue: ['green'],
		valueEnum() {
			// 对应key的枚举值，减少render，但是render的优先级更高
			// return getRemoteEnum();
			return {
				green: '绿色',
				blue: '蓝色',
				green2: '绿色',
			};
		},
	},
	{
		title: '状态',
		dataIndex: 'status',
		valueType: 'select',
		defaultValue: 0,
		list: [
			{
				label: '关闭',
				value: '1',
			},
			{
				label: '运行中',
				value: '0',
			},
			{
				label: '已上线',
				value: '2',
			},
			{
				label: '异常',
				value: '3',
			},
		],
		// valueEnum() {
		// 	// 当使用int类型做为key时，请使用返回数组的形式
		// 	const data = [
		// 		{
		// 			label: '关闭',
		// 			value: '1',
		// 		},
		// 		{
		// 			label: '运行中',
		// 			value: '0',
		// 		},
		// 		{
		// 			label: '已上线',
		// 			value: '2',
		// 		},
		// 		{
		// 			label: '异常',
		// 			value: '3',
		// 		},
		// 	];
		// 	return data;
		// },
	},
	{
		title: '图片',
		dataIndex: 'img',
		render(text) {
			return <wd-image src={text} previewSrcList={[text]} />;
		},
	},
	{
		title: '生产日期',
		dataIndex: 'ctime',
		key: 'ctime',
		valueType: 'date',
		dateOptions: {
			format: 'YYYY/MM/DD',
			valueFormat: 'YYYY-MM-DD',
			picker: 'month',
			placeholder: '生产日期',
		},
		// fixed: "right",
	},
	{
		title: '产地',
		dataIndex: 'location',
		key: 'location',
		hideInSearch: true,
	},
	{
		title: '生产日期',
		dataIndex: 'update_time',
		valueType: 'range',
		dateOptions: {
			format: 'YYYY/MM/DD',
			valueFormat: 'YYYY-MM-DD',
			placeholder: ['开始日期', '截止日期'],
		},
	},
	{
		title: '更新时间',
		dataIndex: 'update_time',
		key: 'update_time',
	},
	{
		title: '更新时间',
		dataIndex: 'update_time',
		key: 'update_time',
	},
	{
		title: '更新时间',
		dataIndex: 'update_time',
		key: 'update_time',
	},
	{
		title: '更新时间',
		dataIndex: 'update_time',
		key: 'update_time',
	},
	{
		title: '操作',
		fixed: 'right',
		width: '300px',
		render(_, record) {
			return (
				<wd-button-group>
					<wd-button type="primary" onClick={() => doEdit(record)}>
						编辑
					</wd-button>
					<wd-button type="danger" onClick={() => deleteItem(record)}>
						删除
					</wd-button>
				</wd-button-group>
			);
			// return h('div', [
			// 	h(
			// 		WdButton,
			// 		{
			// 			type: 'primary',
			// 			size: 'small',
			// 			onClick() {
			// 				alert(record.color);
			// 			},
			// 		},
			// 		['编辑']
			// 	),
			// 	h(
			// 		WdButton,
			// 		{
			// 			type: 'danger',
			// 			size: 'small',
			// 		},
			// 		['删除']
			// 	),
			// ]);
		},
	},
	// {
	// 	title: '操作',
	// 	dataIndex: 'action',
	// 	key: 'action',
	// 	fixed: 'right',
	// 	width: '300px',
	// 	buttons: [
	// 		{
	// 			type: 'primary',
	// 			text: '编辑',
	// 			click() {},
	// 		},
	// 		{
	// 			type: 'danger',
	// 			text: '删除',
	// 			click() {},
	// 		},
	// 	],
	// },
];
let config = ref({
	columns: tableColumns,
	downloadable: true,
	url: 'http://123.57.68.108:8080',
	showTotal: true,
	showFormLabel: false,
	// records: dataList.value,
	// ajaxSetting: {
	// 	totalKey: 'totals',
	// 	pageCountKey: 'total_count',
	// },
	request: async (params) => {
		const res = await getRemoteList();
		return {
			list: res.data.list,
			pageCount: res.data.total_count,
			total: res.data.totals,
		};
	},
	toolbar: [
		{
			type: 'primary',
			text: '刷新',
			// loading: true,
			click() {
				// app.refresh();
			},
		},
		{
			type: 'primary',
			text: '导出全部1',
			// loading: true,
			click() {
				console.log(123);
			},
		},
		'|',
		{
			type: 'danger',
			text: '批量删除',
			// loading: true,
			click() {
				console.log(123);
			},
		},
		{
			type: 'primary',
			subtype: 'upload',
			text: '上传文件',
			click(val) {
				console.log(val);
			},
		},
		{
			type: 'primary',
			text: '导出2',
			// loading: true,
			click() {
				console.log(123);
			},
		},
		{
			type: 'primary',
			text: '导出全部2',
			// loading: true,
			click() {
				console.log(123);
			},
		},
		'|',
		{
			type: 'danger',
			text: '批量删除',
			// loading: true,
			click() {
				console.log(123);
			},
		},
		{
			type: 'upload',
			subtype: 'upload',
			text: '上传文件',
			click(val) {
				console.log(val);
			},
		},
	],
	searchAreaBtns: [
		{
			type: 'primary',
			text: '自定义按钮',
			// loading: true,
			click() {
				console.log(myProTable.value);
				myProTable.value.setSearchParams({
					goods_name: '123',
					color: ['blue'],
				});

				// instance.appContext.components['pro-table'].props[0] = {}
			},
		},
		{
			type: 'primary',
			text: '获取搜索项',
			click() {
				console.log(myProTable.value.getSearchParams());
			},
		},
	],
	listeners: {
		dataLoad(res) {
			console.log('dataload: ', res);
			return [];
		},
		beforeDataRequest(data) {
			console.log(data);
			if (sortKey) data.sortKey = sortKey;
			return data;
		},
		// beforeAdd() {},
		// beforeEdit() {},
		// beforeDelete() {},
		add() {},
		edit() {},
		delete() {},
		// beforeSearch(params) {},
		// beforeDownload(params) {},
	},
});
onMounted(() => {
	// const app = init({
	//   el: "#wd-table",
	//   // title: "pro-table",
	//   // tips: "<div>tips</div>",
	//   columns: tableColumns,
	//   downloadable: true,
	//   autoRequest: true,
	//   // tableHeight: "100px",
	//   // pageMode: "waterfall",
	//   // autoWidth: true,
	//   // records: dataList,
	//   url: "http://123.57.68.108:8080",
	//   addUrl: "http://123.57.68.108:8080",
	//   updateUrl: "http://123.57.68.108:8080",
	//   deleteUrl: "http://123.57.68.108:8080",
	//   batchDelete: true,
	//   // showPagination: true,
	//   addConf: [
	//     {
	//       type: "text",
	//       placeholder: "请输入ID",
	//       label: "ID",
	//       prop: "id",
	//       value: "123",
	//     },
	//     {
	//       type: "select",
	//       placeholder: "请选择学历",
	//       label: "学历",
	//       prop: "education",
	//       list: [
	//         {
	//           label: "研究生",
	//           value: 1,
	//         },
	//         {
	//           label: "本科",
	//           value: 2,
	//         },
	//       ],
	//     },
	//   ],
	//   searchFilters: [
	//     {
	//       type: "text",
	//       placeholder: "请输入姓名",
	//       label: "姓名",
	//       prop: "name",
	//     },
	//     {
	//       type: "number",
	//       placeholder: "请输入年龄",
	//       label: "年龄",
	//       prop: "age",
	//     },
	//     {
	//       type: "checkbox",
	//       label: "是否检查",
	//       prop: "isCheck",
	//     },
	//     {
	//       type: "select",
	//       placeholder: "请选择",
	//       label: "年份",
	//       prop: "year",
	//       list: [
	//         {
	//           label: "2022",
	//           value: "2022",
	//         },
	//         {
	//           label: "2023",
	//           value: "2023",
	//         },
	//       ],
	//       change(val) {
	//         console.log(app._instance.ctx.searchFilters[4].list);
	//         app._instance.ctx.searchFilters[4].list = [
	//           {
	//             label: "研究生",
	//             value: 1,
	//           },
	//           {
	//             label: "本科",
	//             value: 2,
	//           },
	//         ];
	//       },
	//     },
	//     {
	//       type: "select",
	//       placeholder: "请选择学历",
	//       label: "学历",
	//       prop: "education",
	//       change(val) {
	//         console.log(val);
	//       },
	//     },
	//     {
	//       type: "date",
	//       placeholder: "请选择时间",
	//       label: "开始时间",
	//       prop: "start_time",
	//       options: {
	//         format: "YYYY/MM/DD",
	//         valueFormat: "YYYY-MM-DD",
	//       },
	//     },
	//   ],
	//   toolbar: [
	//     {
	//       type: "primary",
	//       text: "刷新",
	//       // loading: true,
	//       click() {
	//         app.refresh();
	//       },
	//     },
	//     {
	//       type: "primary",
	//       text: "导出全部1",
	//       // loading: true,
	//       click() {
	//         console.log(123);
	//       },
	//     },
	//     "|",
	//     {
	//       type: "danger",
	//       text: "批量删除",
	//       // loading: true,
	//       click() {
	//         console.log(123);
	//       },
	//     },
	//     {
	//       type: "primary",
	//       subtype: "upload",
	//       text: "上传文件",
	//       click(val) {
	//         console.log(val);
	//       },
	//     },
	//     {
	//       type: "primary",
	//       text: "导出2",
	//       // loading: true,
	//       click() {
	//         console.log(123);
	//       },
	//     },
	//     {
	//       type: "primary",
	//       text: "导出全部2",
	//       // loading: true,
	//       click() {
	//         console.log(123);
	//       },
	//     },
	//     "|",
	//     {
	//       type: "danger",
	//       text: "批量删除",
	//       // loading: true,
	//       click() {
	//         console.log(123);
	//       },
	//     },
	//     {
	//       type: "upload",
	//       subtype: "upload",
	//       text: "上传文件",
	//       click(val) {
	//         console.log(val);
	//       },
	//     },
	//   ],
	//   searchAreaBtns: [
	//     {
	//       type: "primary",
	//       text: "自定义按钮",
	//       // loading: true,
	//       click() {
	//         console.log(123);
	//       },
	//     },
	//   ],
	//   listeners: {
	//     dataLoad(res) {
	//       console.log("dataload: ", res);
	//     },
	//     beforeDataRequest(data) {
	//       console.log(data);
	//       data.page = 3;
	//       if (sortKey) data.sortKey = sortKey;
	//       return data;
	//     },
	//     // beforeAdd() {},
	//     // beforeEdit() {},
	//     // beforeDelete() {},
	//     add() {},
	//     edit() {},
	//     delete() {},
	//     // beforeSearch(params) {},
	//     // beforeDownload(params) {},
	//   },
	// });
});
</script>
