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
	<div class="wd-upload-list wd-upload-list-text">
		<div class="wd-upload-list-text-container" style="">
			<div
				v-for="(item, index) in fileList"
				:key="index"
				class="wd-upload-list-item wd-upload-list-item-list-type-text"
				:class="'wd-upload-list-item-' + item.status"
			>
				<div class="wd-upload-list-item-info">
					<span class="wd-upload-span"
						><div class="wd-upload-text-icon">
							<span
								role="img"
								aria-label="paper-clip"
								class="anticon anticon-paper-clip"
								><svg
									focusable="false"
									class=""
									data-icon="paper-clip"
									width="1em"
									height="1em"
									fill="currentColor"
									aria-hidden="true"
									viewBox="64 64 896 896"
								>
									<path
										d="M779.3 196.6c-94.2-94.2-247.6-94.2-341.7 0l-261 260.8c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l261-260.8c32.4-32.4 75.5-50.2 121.3-50.2s88.9 17.8 121.2 50.2c32.4 32.4 50.2 75.5 50.2 121.2 0 45.8-17.8 88.8-50.2 121.2l-266 265.9-43.1 43.1c-40.3 40.3-105.8 40.3-146.1 0-19.5-19.5-30.2-45.4-30.2-73s10.7-53.5 30.2-73l263.9-263.8c6.7-6.6 15.5-10.3 24.9-10.3h.1c9.4 0 18.1 3.7 24.7 10.3 6.7 6.7 10.3 15.5 10.3 24.9 0 9.3-3.7 18.1-10.3 24.7L372.4 653c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l215.6-215.6c19.9-19.9 30.8-46.3 30.8-74.4s-11-54.6-30.8-74.4c-41.1-41.1-107.9-41-149 0L463 364 224.8 602.1A172.22 172.22 0 00174 724.8c0 46.3 18.1 89.8 50.8 122.5 33.9 33.8 78.3 50.7 122.7 50.7 44.4 0 88.8-16.9 122.6-50.7l309.2-309C824.8 492.7 850 432 850 367.5c.1-64.6-25.1-125.3-70.7-170.9z"
									></path></svg
							></span>
						</div>
						<a class="wd-upload-list-item-name" :title="item.name">{{
							item && item.name
						}}</a
						><span class="wd-upload-list-item-card-actions"
							><!----><button
								class="wd-btn wd-btn-text wd-btn-sm wd-upload-list-item-card-actions-btn wd-btn-icon-only"
								title="删除文件"
								type="button"
								@click="delFileItem(index)"
							>
								<span
									role="img"
									aria-label="delete"
									class="anticon anticon-delete"
									><svg
										focusable="false"
										class=""
										data-icon="delete"
										width="1em"
										height="1em"
										fill="currentColor"
										aria-hidden="true"
										viewBox="64 64 896 896"
									>
										<path
											d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"
										></path></svg
								></span></button></span
					></span>
				</div>
				<!---->
			</div>
		</div>
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
		let uploadTasks = [];
		// 请求参数
		// 上传回调
		const onSuccess = (response, file, xhr) => {
			props.onSuccess && props.onSuccess(response, file, xhr);
		};
		const onError = (response, file, xhr) => {
			props.onError && props.onError(response);
		};
		const doSelectFileHandler = () => {
			// disabled不可选择文件
			if (props.disabled) return;
			uploadInput.value.click();
		};
		const changeHandler = (e) => {
			currentFiles = Array.from(e.target.files).map((rawFile: File) => {
				return {
					name: rawFile.name,
					percentage: 0,
					status: 'ready',
					size: rawFile.size,
					raw: rawFile,
					fid: genFid(),
				};
			});
			fileList.value = fileList.value.concat(currentFiles);
			if (!props.autoUpload) {
				emitChange();
				return;
			}
			if (!props.beforeUpload) {
				// do upload
				doUpload();
			} else {
				let result = props.beforeUpload();
				if (result === false) {
					emitChange();
					return;
				} else if (result && result.then) {
					result.then((res) => {
						if (res === true) {
							doUpload();
						} else {
							emitChange();
						}
					});
				} else {
					// do upload
					doUpload();
				}
			}
			e.target.value = '';
		};

		const doUpload = () => {
			for (let i = 0; i < currentFiles.length; i++) {
				const file = currentFiles[i];
				const options = {
					data: props.data,
					headers: props.headers,
					method: props.method,
					action: props.action,
					name: props.name,
					withCredentials: props.withCredentials,
					filename: props.name,
					file: file.raw,
					onSuccess: (res, xhr) => {
						getFile(file.fid).status = 'done';
						onSuccess(res, file, xhr);
					},
					onError: (err, xhr) => {
						getFile(file.fid).status = 'error';
						onError(err, file, xhr);
					},
				};
				Promise.resolve(upload(options)).then((res) => {
					console.log(res);
				});
			}
		};

		const emitChange = () => {
			emit('change', { file: currentFiles, fileList: fileList.value });
		};
		const delFileItem = (index) => {
			fileList.value.splice(index, 1);
		};
		// 生成fid
		const genFid = () => {
			return new Date().getTime();
		};
		// 根据fid获取文件
		const getFile = (fid) => {
			return fileList.value.find((file) => (file.fid = fid));
		};
		return {
			uploadInput,
			fileList,
			doSelectFileHandler,
			changeHandler,
			delFileItem,
		};
	},
});
</script>
<style lang="less">
@import url(./style/index);
</style>
