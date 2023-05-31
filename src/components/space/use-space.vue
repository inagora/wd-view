<template>
	<div class="wd-space" :style="{ containerStyle }">
		<div v-for="(child, index) in defaults" :style="[itemStyle]" :key="index">
			<component :is="child"></component>
		</div>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watchEffect, renderSlot, h } from "vue"

import { isArray, isNumber } from "../../utils/util"
import { isFragment } from "../../utils/vnode"
export default defineComponent({
	name: "wd-space",
	props: {
		direction: {
			type: String,
			default: "row" // 水平 竖直
		},

		style: {
			type: [String, Array, Object],
			default: ""
		},

		alignment: {
			type: String,
			default: "center"
		},

		size: {
			type: [String, Array, Number],
			default: "small"
		},
		wrap: Boolean
	},

	/**
	 * 1. 如果是数组或者fragement 就递归处理.否则push到数组里
	 * 2. 保不保留空节点可以根据 keepEmpty 的 option 来控制。
	 */
	setup(props, { slots }) {
		console.log("slots", slots)
		console.log("props", props)
		const horizontalSize = ref(0)
		const verticalSize = ref(0)
		const SIZE_MAP = {
			small: 8,
			default: 12,
			large: 16
		}

		console.log("SIZE_MAP", SIZE_MAP)
		// 获取所有的子元素，

		let defaults = slots.default()
		console.log("defaults", defaults)
		const itemStyle = computed(() => {
			const itemBaseStyle = {
				paddingBottom: `${verticalSize.value}px`,
				marginRight: `${horizontalSize.value}px`
			}
			return [itemBaseStyle]
		})
		const containerStyle = computed(() => {
			const alignment = {
				alignItems: props.alignment
			}

			const direction = {
				flexDirection: props.direction
			}
			const wrapKls = props.wrap ? { flexWrap: "wrap" } : {}

			return [alignment, props.style, direction, wrapKls]
		})

		watchEffect(() => {
			const { size = "small" } = props
			console.log("size", size)
			if (isArray(size)) {
				const [h = 0, v = 0] = size
				horizontalSize.value = h
				verticalSize.value = v
			} else {
				// let val: number | String;
				let val
				if (isNumber(size)) {
					val = size
				} else {
					val = SIZE_MAP[size || "small"] || SIZE_MAP.small
				}
				horizontalSize.value = verticalSize.value = val
			}
		})

		// 递归，不然注释 只能去掉一层，div层级也不确定
		// 	const extractChildren = (childSlots) => {
		// 		const childSlots = defaults || [];
		//   const slots = [];

		//   for (let i = 0; i < childSlots.length; i++) {
		//     const childSlot = childSlots[i];

		//     // 过滤掉空节点和注释节点
		//     if (!childSlot || childSlot.type === Comment) {
		//       continue;
		//     }

		//     // 如果是Space组件，递归渲染
		//     if (childSlot.type === 'wd-space') {
		//       const innerSlots = extractChildren(childSlot.children);
		//       slots.push(h(
		//         'wd-space',
		//         {
		//         //   className: childSlot.props.className,
		//         //   style: childSlot.props.style
		//         },
		//         {
		//           default: () => innerSlots
		//         }
		//       ));
		//     } else {
		//       // 其他情况，添加一层div元素
		//       slots.push(h(
		//         'div',
		//         {
		//           key: i,
		//         //   className: childSlot.props.className,
		//         //   style: childSlot.props.style
		//         },
		//         {
		//           default: () => childSlot
		//         }
		//       ));
		//     }
		//   }

		// 	return ()=> {

		// 		const children = renderSlot(slots, 'default', { key: 0 }, () => [])
		// 		console.log('children',children)
		// 		console.log('children',children.children ?? [])
		// 		if ((children.children ?? []).length === 0) return null

		//   if (isArray(children.children)) {
		//     let extractedChildren = extractChildren(children.children)

		// 	return h(
		//       'div',
		//       {
		//         // class: classes.value,
		//         // style: containerStyle.value,
		//       },
		//       extractedChildren
		//     )

		//   }

		return {
			defaults,
			itemStyle,
			containerStyle
			//   extractChildren,
		}
	}
})
</script>

<style lang="less">
@import url(./style/index);
</style>
