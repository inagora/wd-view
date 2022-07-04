<template>
	<div class="wd-upload wd-upload-select wd-upload-select-text">
		<span tabindex="0" class="wd-upload" role="button"
			><input
				type="file"
				accept=""
				capture="false"
				style="display: none" /><slot></slot
		></span>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
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
		withCredentials: {
			type: Boolean,
			default: false,
		},
	},
	setup() {
		return {};
	},
});
</script>
<style lang="less">
@import url(./style/index);
</style>
