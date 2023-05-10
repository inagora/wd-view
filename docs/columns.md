## columns

> 注意：wd-table 和 pro-talbe 都可以设置 columns 属性，以下对于 form 中的说明只会在 pro-table 中生效：比如 title 属性，在 wd-table 中只会渲染为 table 的列标题，不会对自定义的 wd-form 起作用。

### 属性

#### title

> 在 table 部分渲染为列的标题；
> 在 form 部分渲染为 form-item 的 label；

- **类型**：String
- **用法**

```vue
<template>
	<pro-table ref="myProTable" :config="config" />
</template>
<script setup>
import { reactive } from 'vue';
const config = reactive({
	columns: [
		{
			title: 'ID',
		},
	],
});
</script>
```

#### dataIndex

> table 中用作每一列对应的属性值；
> form 中用作搜索请求的参数名；

- **类型**：String
- **用法**

```vue
<template>
	<pro-table ref="myProTable" :config="config" />
</template>

<script setup>
import { reactive } from 'vue';
const config = reactive({
	columns: [
		{
			dataIndex: 'id',
		},
	],
});
</script>
```

#### valueType

表单类型，只对搜索区域的 form 生效；table 中列的渲染不受影响；

- **类型**：String
- **枚举项**: text(默认) | datatime(日期时间) | date(日期) | range(日期范围) | number(数值) | select(下拉单选) | multiple(下拉多选) | checkbox(checkbox) | switch(开关) | radio(radio)
- **用法**

```vue
<template>
	<pro-table ref="myProTable" :config="config" />
</template>

<script setup>
import { reactive } from 'vue';
const config = reactive({
	columns: [
		{
			title: 'ID',
			dataIndex: 'id',
			valueType: 'select',
		},
	],
});
</script>
```

#### valueEnum

> table: 格式化单元格的值，只影响渲染，不影响原始值；
> form: valueType 为 select 或者 multiple 时生效，作为下拉列表的项；
> 如果没有 key 对应的值，则直接显示 key。

- **类型**：Object | Function
- **用法**
  当设置为对象时，对象的 key 为原始值，对应的 value 为要渲染的值；如果作为下拉列表的项，对象的 key 为选项的值，对应的 value 为下拉项的显示文本；
  如果设置为 Function，此 Function 必须要返回一个对象，该 Function 支持返回一个 Promise；

```vue
<template>
	<pro-table ref="myProTable" :config="config" />
</template>

<script setup>
import { reactive } from 'vue';
const config = reactive({
	columns: [
		{
			title: 'ID',
			dataIndex: 'id',
			valueType: 'select',
			valueEnum() {
				return {
					green: '绿色',
					blue: '蓝色',
					green2: '绿色',
				};
			},
		},
		{
			title: 'ID',
			dataIndex: 'id',
			valueType: 'select',
			valueEnum() {
				return getRemoteEnum();
			},
		},
	],
});
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
</script>
```

#### defaultValue

> form 表单项的默认值

- **类型**：String
- **用法**

```vue
<template>
	<pro-table ref="myProTable" :config="config" />
</template>

<script setup>
import { reactive } from 'vue';
const config = reactive({
	columns: [
		{
			dataIndex: 'id',
			defaultValue: 1,
		},
	],
});
</script>
```

#### dateOptions

当设置 valueType 为 date|datetime|range 时生效;
全部属性可以参考 ant-design-vue 中的[日期组件](https://next.antdv.com/components/date-picker-cn#api)属性;

- **类型**：Object
- **用法**

```vue
<template>
	<pro-table ref="myProTable" :config="config" />
</template>

<script setup>
import { reactive } from 'vue';
const config = reactive({
	columns: [
		{
			dataIndex: '开始时间',
			valueType: 'date',
			dateOptions: {
				format: 'YYYY/MM/DD',
				valueFormat: 'YYYY-MM-DD',
				picker: 'month',
				placeholder: '生产日期',
			},
		},
	],
});
</script>
```

#### render

自定义列的渲染函数；该函数返回一个组件。

- **类型**：Function
- **用法**
  最新版本的组件已经支持 vnode 方式；如果需要使用 jsx，则要在业务中引入相应的插件。
  函数返回三个参数：text（当前单元格的文本）| record（当前行）| column（当前列）

```vue
<template>
	<pro-table ref="myProTable" :config="config" />
</template>

<script setup>
import { reactive } from 'vue';
const config = reactive({
	columns: [
		{
			dataIndex: 'name',
			render(text, record, column) {
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
			},
		},
		{
			dataIndex: 'color',
			render(text, record, column) {
				return `<div>${text}</div>`;
			},
		},
	],
});
</script>
```

#### width

列的宽度

- **类型**：String | Number
- **用法**

```vue
<template>
	<pro-table ref="myProTable" :config="config" />
</template>

<script setup>
import { reactive } from 'vue';
const config = reactive({
	columns: [
		{
			title: '开始时间',
			dataIndex: 'stime',
			width: '300px',
		},
		{
			title: '结束时间',
			dataIndex: 'etime',
			width: 300,
		},
	],
});
</script>
```

#### fixed

列固定的位置：

- left：固定到左边
- right：固定到右边

* **类型**：String
* **用法**

```vue
<template>
	<pro-table ref="myProTable" :config="config" />
</template>

<script setup>
import { reactive } from 'vue';
const config = reactive({
	columns: [
		{
			title: '开始时间',
			dataIndex: 'stime',
			fixed: 'left',
		},
		{
			title: '结束时间',
			dataIndex: 'etime',
			fixed: 'right',
		},
	],
});
</script>
```

#### hideInTable

值为 true 时该列不会在 table 中显示，只会显示在搜索项；

- **类型**：String
- **用法**

```vue
<template>
	<pro-table ref="myProTable" :config="config" />
</template>

<script setup>
import { reactive } from 'vue';
const config = reactive({
	columns: [
		{
			title: '开始时间',
			dataIndex: 'stime',
			hideInTable: true,
		},
	],
});
</script>
```

#### hideInForm

值为 true 时该列不会在搜索项中显示，只会显示在 table 中；

- **类型**：String
- **用法**

```vue
<template>
	<pro-table ref="myProTable" :config="config" />
</template>

<script setup>
import { reactive } from 'vue';
const config = reactive({
	columns: [
		{
			title: '开始时间',
			dataIndex: 'stime',
			hideInForm: true,
		},
	],
});
</script>
```
