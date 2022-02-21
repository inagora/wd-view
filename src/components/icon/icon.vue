<template>
	<i :class="['wd-icon', icon ? icon : '']"></i>
</template>
<script lang="ts">
import { defineComponent, getCurrentInstance, nextTick } from 'vue';

export default defineComponent({
	name: 'wd-icon',
	props: {
		icon: {
			type: String,
			value: '',
		},
	},
	setup() {
		const app = getCurrentInstance();
		const needLoadIcons = !app.appContext.config.globalProperties.hasIconLinks;
		// 设置css url
		const iconCssUrl =
			app.appContext.config.globalProperties.iconCssUrl ||
			'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css';
		if (needLoadIcons) {
			// 动态加载css
			const linkEl = document.createElement('link');
			linkEl.setAttribute('rel', 'stylesheet');
			linkEl.setAttribute('type', 'text/css');
			linkEl.setAttribute('data-extra', 'wd-icon');
			linkEl.setAttribute('href', iconCssUrl);
			document.getElementsByTagName('head')[0].appendChild(linkEl);
			app.appContext.config.globalProperties.hasIconLinks = true;
		}
	},
});
</script>
