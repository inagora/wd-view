<template>
	<wd-button @click="showModal('')">show Modal</wd-button>
</template>
<script>
import { WdModal } from '../../src/index';
export default {
	setup() {
		const showModal = () => {
			// WdModal({
			// 	title: 'model',
			// 	content: '这里是内容',
			// 	confirmButtonText: 'OK',
			// 	cancelButtonText: 'Cancel',
			// 	isShowCancelButton: true,
			// 	onCancel() {
			// 		console.log('cancel');
			// 	},
			// 	onConfirm() {
			// 		console.log('confirm');
			// 	},
			// });
			WdModal.confirm({
				title: 'model',
				content: '这里是内容',
			});
		};
		return {
			showModal,
		};
	},
};
</script>
