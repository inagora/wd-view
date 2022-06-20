<template>
	<wd-button @click="showModal('')">show Modal</wd-button>
</template>
<script>
import WdModal from '../../src/components/modal/index';
export default {
	setup() {
		const showModal = () => {
			WdModal({
				modelValue: true,
				title: 'model',
			});
		};
		return {
			showModal,
		};
	},
};
</script>
