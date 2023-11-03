<template>
	<teleport v-if="visible" to="body">
		<div class="wd-image-preview-root">
			<div class="wd-image-preview-mask" />
			<div tabindex="-1" class="wd-image-preview-wrap" role="dialog">
				<div class="wd-image-preview" role="document">
					<div class="wd-image-preview-content">
						<div class="wd-image-preview-body">
							<ul class="wd-image-preview-operations">
								<li
									class="wd-image-preview-operations-operation"
									@click="$emit('close')"
								>
									<svg-icon icon="close" />
								</li>
								<li><slot name="toolbar"></slot></li>
								<li class="wd-image-preview-operations-operation">
									<svg-icon icon="zoom-in" @click="handleScale('in')" />
								</li>
								<li
									:class="[
										'wd-image-preview-operations-operation',
										transformStyle.scale === 1
											? 'wd-image-preview-operations-operation-disabled'
											: '',
									]"
								>
									<svg-icon icon="zoom-out" @click="handleScale('out')" />
								</li>
								<li class="wd-image-preview-operations-operation">
									<svg-icon
										icon="rotate-right"
										@click="handleRotate('right')"
									/>
								</li>
								<li class="wd-image-preview-operations-operation">
									<svg-icon icon="rotate-left" @click="handleRotate('left')" />
								</li>
							</ul>
							<div class="wd-image-preview-img-wrapper" @mousewheel="rollImg">
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
									@mousedown="moveImg($event)"
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
									<svg-icon icon="switch-left" />
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
									<svg-icon icon="switch-right" />
								</div>
							</template>
						</div>
					</div>
				</div>
			</div>
		</div>
	</teleport>
</template>
<script>
// zoom in \ out 的最大最小值
// toolbar区域支持slot
// 图片的缩小
import { defineComponent, ref } from 'vue';
import SvgIcon from './svg-icon.vue';
export default defineComponent({
	name: 'ImgPreview',
	components: {
		SvgIcon,
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
		const scale = 0.1; // 缩放比例
		const rotate = 90; // 旋转角度
		const handleScale = (type) => {
			if (type === 'in') {
				transformStyle.value.scale += scale;
			} else {
				if (transformStyle.value.scale.toFixed(2) <= '0.2') {
					return;
				}
				transformStyle.value.scale -= scale;
			}
		};
		const handleRotate = (type) => {
			if (type === 'right') {
				transformStyle.value.rotate += rotate;
			} else {
				transformStyle.value.rotate -= rotate;
			}
		};
		const handleSwitch = (type) => {
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
			initImgPosition();
		};
		// 滚轮放大缩小
		const rollImg = (e) => {
			if (e.wheelDelta > 0) {
				handleScale('out');
			} else if (e.wheelDelta < 0) {
				handleScale('in');
			}
		};
		// 初始化图片位置
		const initImgPosition = () => {
			const img = document.querySelector('.wd-image-preview-img');
			img.style.left = 'unset';
			img.style.top = 'unset';
			transformStyle.value = {
				scale: 1,
				rotate: 0,
			};
		};
		// 鼠标拖动图片
		const moveImg = (e) => {
			e.preventDefault();
			const wrapper = document.querySelector('.wd-image-preview-img-wrapper');
			const img = document.querySelector('.wd-image-preview-img');
			const x = e.pageX - img.offsetLeft;
			const y = e.pageY - img.offsetTop;
			function move(moveEvent) {
				img.style.left = moveEvent.pageX - x + 'px';
				img.style.top = moveEvent.pageY - y + 'px';
			}
			wrapper.addEventListener('mousemove', move);
			img.addEventListener('mouseup', () => {
				wrapper.removeEventListener('mousemove', move);
			});
			wrapper.addEventListener('mouseout', () => {
				wrapper.removeEventListener('mousemove', move);
			});
		};
		return {
			transformStyle,
			currentIndex,
			handleScale,
			handleRotate,
			handleSwitch,
			rollImg,
			moveImg,
		};
	},
});
</script>
