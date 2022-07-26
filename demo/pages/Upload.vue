<template>
	<wd-upload
		:disabled="false"
		@change="changeHandler"
		:multiple="true"
		action="http://localhost:8081"
		method="post"
		:headers="headers"
		:on-error="onError"
	>
		<wd-button>点击上传</wd-button>
	</wd-upload>
	<wd-upload-dragger
		:disabled="false"
		@change="draggerChangeHandler"
		:multiple="true"
		action="http://localhost:8081"
		method="post"
		:headers="headers"
		:on-error="onError"
	>
		<div style="width: 200px; height: 200px; background-color: #cccccc"></div>
	</wd-upload-dragger>
</template>
<script setup>
import { ref } from 'vue';
const draggerChangeHandler = (val) => {
	console.log('val: ', val);
};
const changeHandler = ({ fileList }) => {
	console.log(fileList);
};
const onError = (e) => {
	console.log('error: ', e);
};
const headers = ref({
	'X-Requested-With': '123',
});
const beforeUpload = () => {
	console.log('before upload...');
	return new Promise((resolve, reject) => {
		resolve(false);
	});
};
</script>
