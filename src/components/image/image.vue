<template>
	<div class="wd-image" :style="wrapperStyle">
		<div style="width: 100%; height: 100%" v-show="!isLoading">
			<img
				v-bind="$attrs"
				ref="imgEl"
				class="wd-image-img"
				:src="src"
				:style="{ objectFit }"
				@error="errorHandler"
				@load="loadHandler"
			/>
			<div
				v-if="previewSrcList && previewSrcList.length > 0"
				class="wd-image-mask"
			>
				<div class="wd-image-mask-info" @click="showPreview = true">
					<span role="img" aria-label="eye" class="anticon anticon-eye">
						<svg
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
							/>
						</svg>
					</span>
					预览
				</div>
			</div>
		</div>
		<div v-show="isLoading">
			<slot name="placeholder" />
		</div>
		<preview
			:img-list="previewSrcList"
			:visible="showPreview"
			@close="showPreview = false"
		>
			<template #toolbar>
				<slot name="toolbar" />
			</template>
		</preview>
	</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue';
import Preview from './img-preview.vue';
export default defineComponent({
	name: 'WdImage',
	components: {
		Preview,
	},
	inheritAttrs: false,

	props: {
		src: {
			type: String,
			default: '',
		},
		alt: {
			type: String,
			default: '',
		},
		objectFit: {
			type: String,
			default: 'cover',
		},
		width: {
			type: [String, Number],
			default: '',
		},
		height: {
			type: [String, Number],
			default: '',
		},
		fallback: {
			type: String,
			default: '',
		},
		previewSrcList: {
			type: Array,
			default: () => [],
		},
		closeOnPressEscape: {
			type: Boolean,
			default: false,
		},
	},
	emits: ['error'],
	// 清除之后需要抛出事件
	setup(props, { emit }) {
		const imgEl = ref(null);
		const isLoading = ref(true);
		const showPreview = ref(false); // 是否显示预览
		const wrapperStyle = ref({
			width: props.width,
			height: props.height,
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
		const errorHandler = (e) => {
			// fallback加载失败之后的处理
			isLoading.value = false;
			if (props.fallback) {
				imgEl.value.src = props.fallback;
			}
			emit('error', e);
		};
		const loadHandler = () => {
			isLoading.value = false;
		};
		onMounted(() => {
			if (props.closeOnPressEscape) {
				document.addEventListener('keydown', (e) => {
					if (e.key === 'Escape') {
						showPreview.value = false;
					}
				});
			}
		});
		onUnmounted(() => {
			document.removeEventListener('keydown', () => {});
		});
		return {
			wrapperStyle,
			imgEl,
			errorHandler,
			isLoading,
			loadHandler,
			showPreview,
		};
	},
});
</script>
<style lang="less">
@import url(./style/index);
</style>
