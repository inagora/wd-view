<template>
	<wd-button @click="centerDialogVisible = true">show dialog</wd-button>
	<wd-dialog
		:open="centerDialogVisible"
		title="Notice"
		width="40%"
		:centered="true"
		:show-close="true"
		class="my-class"
		:bodyStyle="{ maxHeight: '300px', overflow: 'scroll' }"
		:before-open="beforeOpenHandler"
		:before-close="beforeCloseHandler"
		@open="openHandler"
		@close="closeHandler"
		@before-open="beforeOpen"
		@before-close="beforeClose"
		:append-to-body="false"
		:closeOnClickModal="false"
		:destroy-on-close="true"
		zIndex="3000"
	>
		<span v-for="item in 20" :key="item"
			>Notice: before dialog gets opened for the first time this node and the
			one bellow will not be rendered</span
		>
		<template #footer>
			<wd-button type="primary" @click="centerDialogVisible = false"
				>确定</wd-button
			>
		</template>
	</wd-dialog>
</template>
<script>
import { getCurrentInstance, ref } from 'vue';
export default {
	setup() {
		const showDialog = () => {
			console.log(111);
		};
		const openHandler = () => {
			console.log('dialog open');
		};
		const beforeOpen = () => {
			console.log('before open');
		};
		const beforeClose = () => {
			console.log('before close');
		};
		const closeHandler = () => {
			console.log('close');
			centerDialogVisible.value = false;
		};
		const beforeOpenHandler = () => {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve(true);
				}, 2000);
			});
		};
		const beforeCloseHandler = () => {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve(true);
				}, 2000);
			});
		};
		const centerDialogVisible = ref(false);
		return {
			showDialog,
			centerDialogVisible,
			openHandler,
			beforeOpen,
			beforeClose,
			closeHandler,
			beforeOpenHandler,
			beforeCloseHandler,
		};
	},
};
</script>
