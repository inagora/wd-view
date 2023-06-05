<template>
	<div :class="['wd-tabs', 'wd-tabs-top', 'wd-tabs-' + type]">
		<tabs-nav
			:tabs="tabs"
			:active-key="currentActiveKey"
			@change="changeHandler"
		>
			<template #tab>
				<slot name="tab"></slot>
			</template>
		</tabs-nav>
		<tabs-panel :tabs="tabs" :active-key="currentActiveKey"></tabs-panel>
	</div>
</template>

<script lang="ts">
import { defineComponent, watch, reactive, ref, watchEffect } from 'vue';
import TabsNav from './tabsnav.vue';
import TabsPanel from './tabspanel.vue';
export default defineComponent({
	name: 'wd-tabs',
	components: {
		TabsNav,
		TabsPanel
	},
	props: {
		activeKey: {
			type: String
		},
		destroyInactiveTabPane: {
			type: Boolean
		},
		hideAdd: {
			type: Boolean
		},
		size: {
			type: String
		},
		type: {
			type: String,
			default: 'line'
		}
	},
	setup(props, { slots, emit }) {
		// default slots，获取所有的tabs配置
		const defaultSlots = slots.default?.();
		const currentActiveKey: any = ref(props.activeKey);
		const tabs = reactive(
			defaultSlots.map((node) => {
				let active = node.key === currentActiveKey.value; // 设置默认选中项
				return {
					key: node.key,
					tab: node.props.tab,
					disabled: node.props.disabled || '',
					active: active,
					node
				};
			})
		);
		// watch activeKey 设置默认active
		watch(
			() => props.activeKey,
			() => {
				currentActiveKey.value = props.activeKey;
				tabs.forEach((tab) => {
					tab.active = tab.key === currentActiveKey.value;
				});
			}
		);

		watchEffect(() => {
			currentActiveKey.value = props.activeKey;
		});

		// tab change
		const changeHandler = ({ tab, index }) => {
			tabs.forEach((tab) => {
				tab.active = false;
			});
			tabs[index].active = true;
			currentActiveKey.value = tabs[index].key;
		};
		return {
			tabs,
			currentActiveKey,
			changeHandler
		};
	}
});
</script>
<style lang="less">
@import url(./style/index);
</style>
