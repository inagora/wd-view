<template>
	<div class="wd-tabs wd-tabs-top">
		<tabs-nav :tabs="tabs"></tabs-nav>
		<tabs-panel></tabs-panel>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TabsNav from './tabsnav.vue';
import TabsPanel from './tabspanel.vue';
export default defineComponent({
	name: 'wd-tabs',
	components: {
		TabsNav,
		TabsPanel,
	},
	props: {
		activeKey: {
			type: String,
		},
		destroyInactiveTabPane: {
			type: Boolean,
		},
		hideAdd: {
			type: Boolean,
		},
		size: {
			type: String,
		},
		type: {
			type: String,
			default: 'line',
		},
	},
	setup(props, { slots, emit }) {
		console.log(slots.default?.());
		// default slots，获取所有的tabs配置
		const defaultSlots = slots.default?.();
		const tabs = defaultSlots.map((node) => {
			return {
				key: node.key,
				tab: node.props.tab,
				disabled: node.props.disabled || '',
				active: node.props.active,
			};
		});
		return {
			tabs,
		};
	},
});
</script>
<style lang="less">
@import url(./style/index);
</style>
