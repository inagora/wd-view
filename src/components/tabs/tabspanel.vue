<template>
	<div class="wd-tabs-content-holder">
		<div class="wd-tabs-content wd-tabs-content-top">
			<div
				role="tabpanel"
				tabindex="0"
				aria-hidden="false"
				class="wd-tabs-tabpane wd-tabs-tabpane-active"
				id="rc-tabs-0-panel-1"
				aria-labelledby="rc-tabs-0-tab-1"
				style=""
			>
				Content of Tab Pane 1
			</div>
			<div
				role="tabpanel"
				tabindex="-1"
				aria-hidden="true"
				class="wd-tabs-tabpane"
				id="rc-tabs-0-panel-2"
				aria-labelledby="rc-tabs-0-tab-2"
				style="display: none"
			>
				Content of Tab Pane 2
			</div>
			<div
				role="tabpanel"
				tabindex="-1"
				aria-hidden="true"
				class="wd-tabs-tabpane"
				id="rc-tabs-0-panel-3"
				aria-labelledby="rc-tabs-0-tab-3"
				style="display: none"
			>
				Content of Tab Pane 3
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
	name: 'wd-panel',
	props: {},
	setup() {
		return {};
	},
});
</script>
<style lang="less">
@import url(./style/index);
</style>
