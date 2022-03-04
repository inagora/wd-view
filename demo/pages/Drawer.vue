<template>
	<!-- <wd-button @click="centerDialogVisible = true">show drawer</wd-button> -->
	<wd-drawer
		v-model="centerDialogVisible"
		title="Notice"
		width="40%"
		:show-close="true"
		@open="openHandler"
		@before-open="beforeOpen"
		@before-close="beforeClose"
		:append-to-body="true"
		:closeOnClickModal="false"
		:destroy-on-close="false"
		placement="right"
		:appear="true"
	>
		<span>
			<x-form />
		</span>
		<template #footer>
			<wd-button type="primary" @click="centerDialogVisible = false"
				>确定</wd-button
			>
		</template>
	</wd-drawer>
</template>
<script>
import { defineComponent, ref, watch } from 'vue';
import XForm from './Form.vue';
export default defineComponent({
	components: { XForm },
	props: {
		show: Boolean,
	},
	setup(props) {
		const openHandler = () => {
			console.log('drawer open');
		};
		const beforeOpen = () => {
			console.log('before open');
		};
		const beforeClose = () => {
			console.log('before close');
		};
		watch(
			() => props.show,
			(val) => {
				centerDialogVisible.value = val;
			}
		);
		const centerDialogVisible = ref(props.show);
		return {
			centerDialogVisible,
			openHandler,
			beforeOpen,
			beforeClose,
		};
	},
});
</script>
