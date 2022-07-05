<script>
import { defineComponent, h, watch, ref } from 'vue';
export default defineComponent({
	name: 'wd-panel',
	props: {
		tabs: Array,
		activeKey: String,
	},
	setup(props) {
		// const activeKey = ref(props.activeKey);
		// console.log(activeKey.value);
		// watch(
		// 	() => props.tabs,
		// 	(val) => {
		// 		props.tabs.forEach((tab) => {
		// 			if (tab.active) {
		// 				activeKey.value = tab.key;
		// 			}
		// 		});
		// 	}
		// );
		return () => {
			return h('div', { class: 'wd-tabs-content-holder' }, [
				h(
					'div',
					{ class: 'wd-tabs-content wd-tabs-content-top' },
					props.tabs.map((tab) => {
						return h(
							'div',
							{
								class: [
									'wd-tabs-tabpanel',
									tab.key === props.activeKey ? 'wd-tabs-tabpanel-active' : '',
								],
								style: {
									display: props.activeKey === tab.key ? 'block' : 'none',
								},
							},
							tab.node.children
						);
					})
				),
			]);
		};
	},
});
</script>
<style lang="less">
@import url(./style/index);
</style>
