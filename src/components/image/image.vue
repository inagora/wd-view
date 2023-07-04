<template>
	<div class="wd-image" :style="wrapperStyle">
		<img v-bind="$attrs" class="wd-image-img" :src="src" @error="onError">
		<div class="wd-image-mask">
			<div class="wd-image-mask-info">
				<span
					role="img"
					aria-label="eye"
					class="anticon anticon-eye"
				><svg
					focusable="false"
					class=""
					data-icon="eye"
					width="1em"
					height="1em"
					fill="currentColor"
					aria-hidden="true"
					viewBox="64 64 896 896"
				>
					<path
						d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"
					/></svg></span>预览
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
export default defineComponent({
	name: 'WdImage',
	inheritAttrs: false,
	props: {
		src: {
			type: String,
			default: '',
		},
		alt: {
			type: String,
		},
		objectFit: {
			type: String,
			default: 'cover',
		},
		width: {
			type: [String, Number],
		},
		height: {
			type: [String, Number],
		},
		onError: {
			type: Function,
		},
	},
	emits: ['change', 'remove'],
	// 清除之后需要抛出事件
	setup(props, { emit }) {
		const wrapperStyle = ref({
			width: props.width,
			height: props.height,
			objectFit: props.objectFit,
		});
		const isNumber = (val) => {
			return (typeof val === 'number' && !isNaN(val)) || /^\d+$/.test(val);
		};
		if (isNumber(props.width)) {
			wrapperStyle.value.width = `${props.width}px`;
		}
		if (isNumber(props.height)) {
			wrapperStyle.value.height = `${props.height}px`;
		}
		return { wrapperStyle };
	},
});
</script>
<style lang="less">
@import url(./style/index);
</style>
