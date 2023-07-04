<template>
	<wd-image
		src="https://o4.wandougongzhu.cn/5db8429cb0e8b6a8a22b18a707093d64.png"
		width="200"
		:onError="errorHandler"
	/>
</template>
<script setup>
import { ref } from 'vue';
const errorHandler = (e) => {
	console.log(e);
};
</script>
