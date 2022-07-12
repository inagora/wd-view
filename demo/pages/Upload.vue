<template>
	<wd-upload
		:disabled="false"
		@change="changeHandler"
		:multiple="true"
		action="http://localhost:8081"
		method="post"
		:on-error="onError"
	>
		<wd-button>点击上传</wd-button>
	</wd-upload>
</template>
<script setup>
const changeHandler = ({ fileList }) => {
	console.log(fileList);
};
const onError = (e) => {
	console.log(e);
};
</script>
