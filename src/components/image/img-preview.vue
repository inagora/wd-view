<template>
	<div v-show="visible" class="wd-image-preview-root">
		<div class="wd-image-preview-mask" />
		<div tabindex="-1" class="wd-image-preview-wrap" role="dialog">
			<div class="wd-image-preview" role="document">
				<div
					tabindex="0"
					aria-hidden="true"
					style="width: 0px; height: 0px; overflow: hidden; outline: none"
				/>
				<div class="wd-image-preview-content">
					<!----><!---->
					<div class="wd-image-preview-body">
						<ul class="wd-image-preview-operations">
							<li
								class="wd-image-preview-operations-operation"
								@click="$emit('close')"
							>
								<svg-icons icon="close" />
							</li>
							<li class="wd-image-preview-operations-operation">
								<svg-icons icon="zoom-in" @click="handleScale('in')" />
							</li>
							<li
								class="wd-image-preview-operations-operation wd-image-preview-operations-operation-disabled"
							>
								<svg-icons icon="zoom-out" @click="handleScale('out')" />
							</li>
							<li class="wd-image-preview-operations-operation">
								<svg-icons icon="rotate-right" @click="handleRotate('right')" />
							</li>
							<li class="wd-image-preview-operations-operation">
								<svg-icons icon="rotate-left" @click="handleRotate('left')" />
							</li>
						</ul>
						<div
							class="wd-image-preview-img-wrapper"
							style="transform: translate3d(0px, 0px, 0px)"
						>
							<img
								v-for="(src, index) in imgList"
								:key="index"
								class="wd-image-preview-img"
								:src="src"
								:style="{
									transform:
										'scale3d(1, 1, 1) rotate(' + transformStyle.rotate + 'deg)',
								}"
							/>
						</div>
						<div
							:class="[
								'wd-image-preview-switch-left',
								currentIndex === 0
									? 'wd-image-preview-switch-left-disabled'
									: '',
							]"
						>
							<svg-icons icon="switch-left" />
						</div>
						<div
							:class="[
								'wd-image-preview-switch-right',
								currentIndex === imgList.length - 1
									? 'wd-image-preview-switch-right-disabled'
									: '',
							]"
						>
							<svg-icons icon="switch-right" />
						</div>
					</div>
					<!---->
				</div>
				<div
					tabindex="0"
					aria-hidden="true"
					style="width: 0px; height: 0px; overflow: hidden; outline: none"
				/>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import SvgIcons from './svg-icons.vue';
export default defineComponent({
	name: 'ImgPreview',
	components: {
		SvgIcons,
	},
	props: {
		visible: {
			type: Boolean,
			default: false,
		},
		imgList: {
			type: Array,
			default: () => [],
		},
	},
	setup() {
		const transformStyle = ref({
			scale: 1,
			rotate: 0,
		}); // 图片缩放和旋转
		const currentIndex = ref(0); // 当前图片索引
		const scale = 0.1; // 缩放比例
		const rotate = 90; // 旋转角度
		const handleScale = (type: string) => {
			if (type === 'in') {
				transformStyle.value.scale += scale;
			} else {
				transformStyle.value.scale -= scale;
			}
		};
		const handleRotate = (type: string) => {
			if (type === 'right') {
				transformStyle.value.rotate += rotate;
			} else {
				transformStyle.value.rotate -= rotate;
			}
		};
		return { transformStyle, currentIndex, handleScale, handleRotate };
	},
});
</script>
