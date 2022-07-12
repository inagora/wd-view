<template>
	<div
		class="wd-upload wd-upload-select wd-upload-select-text"
		:class="[disabled ? 'wd-upload-disabled' : '']"
	>
		<span
			@click="doSelectFileHandler"
			tabindex="0"
			class="wd-upload"
			role="button"
			><input
				ref="uploadInput"
				type="file"
				:accept="accept"
				capture="false"
				:multiple="multiple"
				@change="changeHandler"
				style="display: none" /><slot></slot
		></span>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import upload from './request.js';
export default defineComponent({
	name: 'wd-upload',
	props: {
		accept: {
			type: String,
			default: '',
		},
		action: {
			type: String,
			default: '',
		},
		autoUpload: {
			type: Boolean,
			default: true,
		},
		beforeUpload: {
			type: Function,
		},
		data: {
			type: Object,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		fileList: {
			type: Array,
		},
		headers: {
			type: Object,
		},
		maxCount: {
			type: Number,
		},
		method: {
			type: String,
			default: 'post',
		},
		multiple: {
			type: Boolean,
			default: false,
		},
		name: {
			type: String,
			default: 'file',
		},
		onSuccess: {
			type: Function,
		},
		onError: {
			type: Function,
		},
		withCredentials: {
			type: Boolean,
			default: false,
		},
	},
	emits: ['change'],
	setup(props, { emit }) {
		const uploadInput = ref(null);
		const fileList = ref([]);
		let currentFiles = [];
		// 请求参数
		// 上传回调
		const onSuccess = (response, file, xhr) => {
			props.onSuccess && props.onSuccess(response, file, xhr);
		};
		const onError = (e) => {
			props.onError && props.onError(e);
		};
		const options = {
			data: props.data,
			headers: props.headers,
			method: props.method,
			action: props.action,
			name: props.name,
			withCredentials: props.withCredentials,
			filename: props.name,
			file: null,
			onSuccess,
			onError,
		};
		const doSelectFileHandler = () => {
			// disabled不可选择文件
			if (props.disabled) return;
			uploadInput.value.click();
		};
		const changeHandler = (e) => {
			fileList.value = fileList.value.concat(...e.target.files);
			currentFiles = e.target.files;
			options.file = currentFiles[0];
			if (!props.autoUpload) {
				emitChange();
				return;
			}
			if (!props.beforeUpload) {
				// do upload
				upload(options);
			} else {
				let result = props.beforeUpload();
				if (result === false) {
					emitChange();
					return;
				}
				// do upload
				upload(options);
				// if(result && result.then) {
				//   result.then();
				// }
			}
			e.target.value = '';
		};

		const emitChange = () => {
			emit('change', { file: currentFiles, fileList: fileList.value });
		};
		return {
			uploadInput,
			fileList,
			doSelectFileHandler,
			changeHandler,
		};
	},
});
</script>
<style lang="less">
@import url(./style/index);
</style>
