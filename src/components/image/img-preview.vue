<template>
	<div v-show="visible" class="wd-image-preview-root">
		<div class="wd-image-preview-mask" />
		<div tabindex="-1" class="wd-image-preview-wrap" role="dialog">
			<div class="wd-image-preview" role="document">
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
								:class="[
									'wd-image-preview-operations-operation',
									transformStyle.scale === 1
										? 'wd-image-preview-operations-operation-disabled'
										: '',
								]"
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
								class="wd-image-preview-img"
								:src="imgList[currentIndex]"
								:style="{
									transform:
										'scale3d(' +
										transformStyle.scale +
										', ' +
										transformStyle.scale +
										', 1) rotate(' +
										transformStyle.rotate +
										'deg)',
								}"
							/>
						</div>
						<template v-if="imgList.length > 1">
							<div
								:class="[
									'wd-image-preview-switch-left',
									currentIndex === 0
										? 'wd-image-preview-switch-left-disabled'
										: '',
								]"
								@click="handleSwitch('left')"
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
								@click="handleSwitch('right')"
							>
								<svg-icons icon="switch-right" />
							</div>
						</template>
					</div>
					<!---->
				</div>
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
	setup(props) {
		const transformStyle = ref({
			scale: 1,
			rotate: 0,
		}); // 图片缩放和旋转
		const currentIndex = ref(0); // 当前图片索引
		const scale = 1; // 缩放比例
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
		const handleSwitch = (type: string) => {
			if (currentIndex.value === 0 && type === 'left') {
				return;
			} else if (
				currentIndex.value === props.imgList.length - 1 &&
				type === 'right'
			) {
				return;
			}
			if (type === 'left') {
				currentIndex.value -= 1;
			} else {
				currentIndex.value += 1;
			}
		};
		return {
			transformStyle,
			currentIndex,
			handleScale,
			handleRotate,
			handleSwitch,
		};
	},
});
</script>
