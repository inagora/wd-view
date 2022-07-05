<template>
	<wd-tabs :active-key="activeKey">
		<wd-tabs-panel key="1" tab="tab1">这里是tab1的内容</wd-tabs-panel>
		<wd-tabs-panel key="2" tab="tab2">
			<wd-button>自定义内容</wd-button>
		</wd-tabs-panel>
		<wd-tabs-panel key="3" tab="tab3">
			<template #tab>
				<wd-button>自定义</wd-button>
			</template>
			这里是tab3的内容
		</wd-tabs-panel>
	</wd-tabs>
</template>
<script setup>
import { ref } from 'vue';
const activeKey = ref('1');
setTimeout(() => {
	activeKey.value = '2';
}, 2000);
</script>
