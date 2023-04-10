<template>
	<div class="wd-space" :style="[containerStyle]">
		<!-- defaults -->

		<div v-for="(child, index) in defaults" :style="[itemStyle]" :key="index">
			<component :is="child"></component>
		</div>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watchEffect } from 'vue';

import { isArray, isNumber } from '../../utils/util';
import { isFragment } from '../../utils/vnode';
export default defineComponent({
	name: 'wd-space',
	props: {
		direction: {
			type: String,
			default: 'row',
		},

		style: {
			type: [String, Array, Object],
			default: '',
		},

		alignment: {
			type: String,
			default: 'center',
		},

		size: {
			type: [String, Array, Number],
			default: 'small',
		},
		wrap: Boolean,
	},

	/**
	 * 1. 如果是数组或者fragement 就递归处理.否则push到数组里
	 * 2. 保不保留空节点可以根据 keepEmpty 的 option 来控制。
	 */
	setup(props, context) {
		console.log('context', context);
		console.log('props', props);
		const horizontalSize = ref(0);
		const verticalSize = ref(0);
		const SIZE_MAP = {
			small: 8,
			default: 12,
			large: 16,
		};
		// const isFragment = (node) => {
		// 	return isVNode(node) && node.type === Fragment;
		// };
		console.log('SIZE_MAP', SIZE_MAP);
		// 获取所有的子元素，

		let defaults = context.slots.default();
		console.log('defaults', defaults);
		const itemStyle = computed(() => {
			const itemBaseStyle = {
				paddingBottom: `${verticalSize.value}px`,
				marginRight: `${horizontalSize.value}px`,
			};
			return [itemBaseStyle];
		});
		const containerStyle = computed(() => {
			const alignment = {
				alignItems: props.alignment,
			};

			const direction = {
				flexDirection: props.direction,
			};
			const wrapKls = props.wrap ? { flexWrap: 'wrap' } : {};

			return [alignment, props.style, direction, wrapKls];
		});

		watchEffect(() => {
			const { size = 'small' } = props;
			console.log('size', size);
			if (isArray(size)) {
				const [h = 0, v = 0] = size;
				horizontalSize.value = h;
				verticalSize.value = v;
			} else {
				let val;
				if (isNumber(size)) {
					val = size;
				} else {
					val = SIZE_MAP[size || 'small'] || SIZE_MAP.small;
				}
				horizontalSize.value = verticalSize.value = val;
			}
		});

		// 递归，不然注释 只能去掉一层，div层级也不确定
		const extractChildren = (children, Option = { keepEmpty: '' }) => {
			console.log('children', children);
			console.log('children', Array.isArray(children));
			let extractedChildren = [];
			children.forEach((child) => {
				console.log('child', child);
				if (child == null && !Option?.keepEmpty) return;
				if (Array.isArray(child)) {
					console.log('');
					extractedChildren = extractedChildren.concat(extractChildren(child));
				} else if (isFragment(child) && child.props) {
					extractedChildren = extractedChildren.concat(
						extractChildren(child.props.children, Option)
					);
				} else {
					extractedChildren.push(child);
				}
			});
			console.log('extractedChildren', extractedChildren);
			return extractedChildren;
		};
		extractChildren(defaults, { keepEmpty: '' });

		return {
			defaults,
			itemStyle,
			containerStyle,
			// extractChildren,
		};
	},
});
</script>

<style lang="less">
@import url(./style/index);
</style>
