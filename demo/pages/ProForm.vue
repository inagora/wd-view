<template>
	<pro-form ref="myProForm" :config="config" :model="formData">
		<wd-button type="primary" @click="doSearch" size="small">搜索</wd-button>
	</pro-form>
</template>
<script setup>
import { ref } from 'vue';
const formData = ref({});
const doSearch = () => {
	console.log(formData.value);
};
let config = ref({
	// showLabel: false,
	// disabled: true,
	inline: false,
	// labelWidth: '500px',
	filters: [
		{
			type: 'text',
			placeholder: '请输入姓名',
			label: '姓名',
			prop: 'name',
			value: 'niu',
		},
		{
			type: 'textarea',
			placeholder: '请输入评论内容',
			label: '评论',
			prop: 'comment',
			rows: 8,
		},
		{
			type: 'date',
			placeholder: '请选择时间',
			label: '开始时间',
			prop: 'start_time',
			dateOptions: {
				valueFormat: 'YYYY-MM-DD HH:mm:ss',
				showTime: true,
			},
		},
		{
			type: 'select',
			placeholder: '请选择',
			label: '年份',
			prop: 'year',
			list: [
				{
					label: '2022',
					value: '2022',
				},
				{
					label: '2023',
					value: '2023',
				},
			],
			change(val) {
				console.log(val);
			},
		},
		{
			type: 'select',
			placeholder: '请选择',
			label: '颜色',
			prop: 'color',
			valueEnum() {
				return {
					1: '红色',
					0: '绿色',
					2: '蓝色',
				};
			},
		},
	],
});
</script>
