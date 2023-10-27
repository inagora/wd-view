## ProForm

proform 是对 wd-form 组件的封装，可以通过配置项生成 wd-form，不需要在模版中写大量的代码，缩小模板文件，更专注业务逻辑的开发。

### 使用方法

proform 组件的使用方法非常简单，通过 config 的配置即可生成 form；

#### config

config 的配置可以分为两部分：

1、wd-form 组件的属性，可以直接透传到 wd-form 上；

2、fields 表单项配置，每个表单项包含 wd-form-item 的属性配置，属性也是直接透传到每一个表单组件；
| 属性 | 说明 |
| :------------: | :--------------: |
| type | 表单类型，wd-view 支持的表单组件 |
| label | 表单项的 label |
| name | 表单项对应的属性 |
| dateOptions | 特殊属性，设置日期组件的属性（目前使用的 ant-design 的 datepicker，属性要参考 antd） |

- **类型**：Object
- **用法**

```vue
<template>
	<pro-form ref="myProForm" :config="config" />
</template>
<script setup>
import { reactive } from 'vue';
const config = reactive({
	// showLabel: false,
	// disabled: true,
	inline: false,
	// labelWidth: '500px',
	fields: [
		{
			type: 'text',
			placeholder: '请输入姓名',
			label: '姓名',
			name: 'name',
			value: 'niu',
		},
		{
			type: 'textarea',
			placeholder: '请输入评论内容',
			label: '评论',
			name: 'comment',
			rows: 8,
		},
		{
			type: 'date',
			placeholder: '请选择时间',
			label: '开始时间',
			name: 'start_time',
			dateOptions: {
				valueFormat: 'YYYY-MM-DD HH:mm:ss',
				showTime: true,
			},
		},
		{
			type: 'select',
			placeholder: '请选择',
			label: '年份',
			name: 'year',
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
			name: 'color',
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
```

#### model

表单数据绑定的对象，表单设置的值都会绑定到该对象的属性上；

- **类型**：Object
- **用法**

```vue
<template>
	<pro-form ref="myProForm" :config="config" :model="formData" />
</template>
<script setup>
import { reactive } from 'vue';
const formData = ref({});
const config = reactive({
	// showLabel: false,
	// disabled: true,
	inline: false,
	// labelWidth: '500px',
	fields: [
		{
			type: 'text',
			placeholder: '请输入姓名',
			label: '姓名',
			name: 'name',
			value: 'niu',
		},
	],
});
</script>
```
