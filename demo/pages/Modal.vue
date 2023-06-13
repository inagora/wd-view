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
			// WdModal.confirm({
			// 	title: 'model',
			// 	content: '这里是内容',
			// });
			const contentEl = '<div>自定义内容</div>';
			const wm = WdModal.success({
				title: 'model',
				content: contentEl,
				confirmButtonText: 'OK',
				cancelButtonText: 'Cancel',
				isShowCancelButton: true,
				onConfirm() {
					console.log(wm);
					wm.destroy();
				},
				onCancel() {
					return new Promise((resolve, reject) => {
						setTimeout(() => {
							console.log(123);
							resolve(true);
						}, 2000);
					});
				},
				buttons: [
					{
						type: 'primary',
						text: '自定义按钮',
						size: 'small',
						click() {
							return new Promise((resolve, reject) => {
								setTimeout(() => {
									console.log(123);
									resolve(true);
								}, 2000);
							});
						},
					},
				],
			});
			// const wm = WdModal.alert({
			// 	title: 'alert',
			// 	content: '这里是alert',
			// 	onConfirm() {
			// 		return new Promise((resolve, reject) => {
			// 			setTimeout(() => {
			// 				console.log(123);
			// 				resolve(true);
			// 			}, 2000);
			// 		});
			// 	},
			// });
		};
		return {
			showModal,
		};
	},
};
</script>
