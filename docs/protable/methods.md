## 实例方法

protable 提供了一系列的实例方法，方便开发者获取组件内部的数据以及操作内部的组件；

#### getSelectedRows

获取选中的行

- **类型**：Function
- **用法**

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
			text: '获取选中行',
			click() {
				console.log(myProTable.value.getSelectedRows());
			},
		},
	],
});
</script>
```

#### getSearchParams

获取筛选条件

- **类型**：Function
- **用法**

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
			text: '获取筛选条件',
			click() {
				console.log(myProTable.value.getSearchParams());
			},
		},
	],
});
</script>
```

#### refresh

刷新列表

- **类型**：Function
- **用法**

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
			text: '获取筛选条件',
			click() {
				myProTable.value.refresh();
			},
		},
	],
});
</script>
```
