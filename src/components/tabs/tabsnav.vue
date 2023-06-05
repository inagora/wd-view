<template>
	<div role="tablist" class="wd-tabs-nav">
		<!---->
		<div class="wd-tabs-nav-wrap">
			<div class="wd-tabs-nav-list" style="transform: translate(0px, 0px)">
				<div
					:ref="setNavTabs"
					:class="['wd-tabs-tab', nav.active ? 'wd-tabs-tab-active' : '']"
					v-for="(nav, index) in navList"
					:key="index"
					@click="tabClickHandler(index)"
				>
					<div
						role="tab"
						aria-selected="true"
						class="wd-tabs-tab-btn"
						tabindex="0"
						id="rc-tabs-0-tab-1"
						aria-controls="rc-tabs-0-panel-1"
					>
						<slot name="tab">
							{{ nav.tab }}
						</slot>
					</div>
					<!---->
				</div>
				<!---->
				<div
					class="wd-tabs-ink-bar wd-tabs-ink-bar-animated"
					:style="inkBarStyle"
				></div>
			</div>
		</div>
		<div class="wd-tabs-nav-operations wd-tabs-nav-operations-hidden">
			<!----><button
				type="button"
				class="wd-tabs-nav-more"
				tabindex="-1"
				aria-hidden="true"
				aria-haspopup="listbox"
				aria-controls="rc-tabs-0-more-popup"
				id="rc-tabs-0-more"
				aria-expanded="false"
				style="visibility: hidden; order: 1"
			>
				<span role="img" aria-label="ellipsis" class="anticon anticon-ellipsis"
					><svg
						focusable="false"
						class=""
						data-icon="ellipsis"
						width="1em"
						height="1em"
						fill="currentColor"
						aria-hidden="true"
						viewBox="64 64 896 896"
					>
						<path
							d="M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"
						></path></svg
				></span></button
			><!---->
		</div>
		<!----><!---->
	</div>
</template>

<script lang="ts">
import {
	defineComponent,
	nextTick,
	onMounted,
	reactive,
	ref,
	watchEffect
} from 'vue';
export default defineComponent({
	name: 'wd-tabsnav',
	props: {
		tabs: Array,
		activeKey: String
	},
	emits: ['change'],
	setup(props, { emit }) {
		// variable
		const navList = reactive(props.tabs);
		const navTabRefs = [];
		// nav item下划线
		const inkBarStyle = reactive({
			left: '0px',
			width: '36px'
		});

		// 设置下划线
		const setInkBarStyle = (index) => {
			inkBarStyle.left = navTabRefs[index].offsetLeft + 'px';
			inkBarStyle.width = navTabRefs[index].offsetWidth + 'px';
		};

		// 处理点击
		const tabClickHandler = (index) => {
			const nav: any = navList[index];
			setInkBarStyle(index);
			// nav.active = true;
			emit('change', { nav, index });
		};

		// * 设置多个引用
		const setNavTabs = (el) => {
			navTabRefs.push(el);
		};

		watchEffect(() => {
			navList.forEach((nav, index) => {
				if ((nav as any).key === props.activeKey) {
					nextTick(() => {
						setInkBarStyle(index);
					});
				}
			});
		});
		return {
			tabClickHandler,
			setNavTabs,
			navList,
			inkBarStyle,
			navTabRefs
		};
	}
});
</script>
<style lang="less">
@import url(./style/index);
</style>
