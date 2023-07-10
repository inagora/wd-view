<template>
	<wd-image
		src="https://o4.wandougongzhu.cn/5db8429cb0e8b6a8a22b18a707093d64.png"
		width="200"
		fallback="https://oss.wandougongzhu.cn/5db8429cb0e8b6a8a22b18a707093d64.png"
		:preview-src-list="[
			'https://oss.wandougongzhu.cn/5db8429cb0e8b6a8a22b18a707093d64.png',
		]"
		@error="errorHandler"
	>
		<template #placeholder> hhh </template>
	</wd-image>
</template>
<script setup>
import { ref } from 'vue';
const errorHandler = (e) => {
	console.log(e);
};
</script>
