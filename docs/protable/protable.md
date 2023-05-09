## ProTable

protable 是对 wd-table 的高度封装，包含了列表页需要的基本功能：toolbar，搜索区域，列表等；
对于列的配置支持了 vnode，可以灵活创建列；

### 属性

#### title

显示页面内容标题

- **类型**：String
- **用法**

```vue
<template>
	<pro-table ref="myProTable" :config="config" />
</template>
<script setup>
import { reactive } from 'vue';
const config = reactive({
	title: '页面内容标题',
});
</script>
```

#### tips

自定义页面内容，显示在页面内容 title 和 toolbar 之间;
支持 html 标签，但是不支持自定义组件；

- **类型**：String
- **用法**

```vue
<template>
	<pro-table ref="myProTable" :config="config" />
</template>

<script setup>
import { reactive } from 'vue';
const config = reactive({
	tips: '<div>这里是自定义内容</div>',
});
</script>
```

#### url

列表请求的 url

- **类型**：String
- **用法**

```vue
<template>
	<pro-table ref="myProTable" :config="config" />
</template>

<script setup>
import { reactive } from 'vue';
const config = reactive({
	url: 'https://remoteapi',
});
</script>
```

#### request

自定义请求：主要用于格式化业务中返回的列表数据结构，以及在请求之前对参数的处理；
如果配置的该属性，则会执行该方法进行列表数据的请求，忽略 url 的配置；

- **类型**：Function
- **用法**

```vue
<template>
	<pro-table ref="myProTable" :config="config" />
</template>

<script setup>
import { reactive } from 'vue';
const config = reactive({
	request: async (params) => {
		const res = await ajax.request({
			url: 'http://remoteapi',
			data: params,
		});
		return {
			list: res.data.list,
			pageCount: res.data.total_count,
			total: res.data.total,
		};
	},
});
</script>
```

#### columns

列的配置；搜索区域的配置也依赖该属性，列的每一项如果未配置 hideInTable 或者 hideInSearch，则该项配置同时对 talbe 和 form 生效；设置了 hideInTable 属性后则只会显示在 form 中，设置了 hideInSearch 属性后则只会显示在 talbe 的列中，如果同时设置，则 Table 和 form 中都不会渲染。
每一项的 column 设置请参考[columns](/columns)

- **类型**：Array
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
			title: '产地',
			dataIndex: 'location',
			hideInSearch: true,
		},
		{
			title: '颜色',
			dataIndex: 'color',
			valueType: 'multiple',
			defaultValue: ['green'],
			valueEnum() {
				return {
					green: '绿色',
					blue: '蓝色',
					green2: '绿色',
				};
			},
		},
	],
});
</script>
```

#### toolbar

页面顶部操作区域

- **类型**：Array
- **用法**
  toolbar 的每一项为一个 button

```vue
<template>
	<pro-table ref="myProTable" :config="config" />
</template>

<script setup>
import { reactive } from 'vue';
const config = reactive({
	toolbar: [
		{
			type: 'primary',
			text: '刷新',
			click() {},
		},
	],
});
</script>
```

#### downloadable

是否显示下载按钮：

- false: 不显示
- true: 显示“导出当前页”和“导出全部”两个按钮
- single: 显示“导出当前页”

* **类型**：Boolean | String
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
			title: '产地',
			dataIndex: 'location',
			hideInSearch: true,
		},
	],
	downloadable: true,
});
</script>
```

#### showTotal

table 底部是否显示统计信息

- **类型**：Boolean
- **默认值**：true
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
			title: '产地',
			dataIndex: 'location',
			hideInSearch: true,
		},
	],
	showTotal: true,
});
</script>
```

#### searchAreaBtns

搜索按钮后面显示的自定义按钮

- **类型**：Array
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
			title: '产地',
			dataIndex: 'location',
			hideInSearch: true,
		},
	],
	searchAreaBtns: [
		{
			type: 'primary',
			text: '自定义按钮',
			// loading: true,
			click() {
				console.log(myProTable.value.getSelectedRows());
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
});
</script>
```

#### records

静态列表数据：如果设置了 records，则不会再请求接口，table 直接渲染 records 数据

- **类型**：Array
- **用法**

```vue
<template>
	<pro-table ref="myProTable" :config="config" />
</template>

<script setup>
import { reactive } from 'vue';
const config = reactive({
	records: [
		{
			id: 1,
		},
	],
});
</script>
```

#### listeners

特定时机触发的钩子函数：

- dataLoad: 数据加载完成
- beforeDataRequest: 查询接口请求之前

* **类型**：Function
* **用法**

```vue
<template>
	<pro-table ref="myProTable" :config="config" />
</template>

<script setup>
import { reactive } from 'vue';
const config = reactive({
	dataLoad(res) {
		// res为查询接口返回的数据
		return res;
	},
	beforeDataRequest(data) {
		// data为请求的参数
		if (sortKey) data.sortKey = sortKey;
		return data;
	},
});
</script>
```
