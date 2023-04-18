<script>
import {
	defineComponent,
	h,
	isVNode,
	Comment,
	renderSlot,
	Fragment,
	ref,
	computed,
	watchEffect,
	createTextVNode,
} from 'vue';
import { isNumber, isArray, isString } from '../../utils/util.ts';
import { isFragment, isValidElementNode } from '../../utils/vnode';
import { isTypeScript } from '@babel/types';
export default defineComponent({
	name: 'wd-space',
	props: {
		direction: {
			type: String,
			default: '', // 水平 竖直
		},

		style: {
			type: [String, Array, Object],
			default: '',
		},

		align: {
			type: String,
			default: 'center', // start, center ,end , baseline
		},

		size: {
			type: [String, Array, Number],
			default: 'small',
			validator:(val)=> isVNode(val) || isNumber(val) || isString(val)
		},
		wrap: Boolean,
		spacer: {
			type: [ String, Number],
			default: null,
			validator: (val) => isVNode(val) || isNumber(val) || isString(val),
		},
	},
	setup(props, content) {
		const horizontalSize = ref(0);
		const verticalSize = ref(0);
		const SIZE_MAP = {
			small: 8,
			default: 12,
			large: 16,
		};

		console.log('SIZE_MAP', SIZE_MAP);
		// 获取所有的子元素，

		const itemStyle = computed(() => {
			// const itemBaseStyle = {
			//   paddingBottom: `${verticalSize.value}px`,
			//   marginRight: `${horizontalSize.value}px`
			// }
			// return [itemBaseStyle]
			return {
				// paddingBottom: `${verticalSize.value}px`,
				// marginRight: `${horizontalSize.value}px`
			};
		});
		const containerStyle = computed(() => {
			const rowGap = `${verticalSize.value}px`;
			const columnGap = `${horizontalSize.value}px`;
			console.log('direction', props.direction);
			return {
				alignItems: props.align,
				flexDirection: props.direction,
				flexWrap: props.wrap ? 'wrap' : 'nowrap',
				...props.style,
				gap: `${rowGap} ${columnGap}`,
			};
		});
		// ${horizontalSize.value}px

		watchEffect(() => {
			const { size = 'small' } = props;
			console.log('size', size);

			if (isArray(size)) {
				const [h = 0, v = 0] = size;
				horizontalSize.value = h;
				verticalSize.value = v;
			} else {
				// let val: number | String;
				let val;
				if (isNumber(size)) {
					val = size;
				} else {
					val = SIZE_MAP[size || 'small'] || SIZE_MAP.small;
				}
				horizontalSize.value = verticalSize.value = val;
			}
		});
		// 对Fragement还要判断
		function updateChildSlots(children, parentKey = '', newNodes = []) {
			children.forEach((child, loopKey) => {
				if (isFragment(child)) {
					if (isArray(child.children)) {
						child.children.forEach((nested, key) => {
							if (isFragment(nested) && isArray(nested.children)) {
								updateChildSlots(
									nested.children,
									`${parentKey + key}-`,
									newNodes
								);
							} else {
								newNodes.push(
									h(
										'div',
										{
											class: 'wd-space_item',
											style: itemStyle.value,
											key: `nested-${parentKey + key}`,
										},
										nested
									)
								);
							}
						});
					}
				} else if (isValidElementNode(child)) {
					newNodes.push(
						h(
							'div',
							{
								class: 'wd-space_item',
								style: itemStyle.value,
								key: `LoopKey${parentKey + loopKey}`,
							},
							child
						)
					);
				}
			});
			console.log('newNodes', newNodes);

			return newNodes;
		}

		// 将虚拟dom,挂载到真实dom.renderSlot函数会返回当前插槽对应的VNode数组，可以在render函数中使用。
		return () => {
			const { spacer } = props;

			const children = renderSlot(
				content.slots,
				'default',
				{ key: 0 },
				() => []
			);
			console.log('children TESt', children);
			if ((children.children ?? []).length === 0) return null;

			if (isArray(children.children)) {
				let newNodes = updateChildSlots(children.children);
				if (spacer) {
					let len = newNodes.length - 1;
					console.log('newNodes', newNodes);
					newNodes = newNodes.reduce((acc, child, idx) => {
						// console.log('ac', acc, child, idx)
						// console.log('child', child)
						// console.log('idx', idx)
						// console.log('展开', ...acc)
						const children = [...acc, child];
						console.log('children', children);
						if (idx !== len) {
							console.log('spacer', spacer);
							children.push(
								h(
									'span',
									{
										key: idx,
									},
									[isVNode(spacer) ? spacer : createTextVNode(spacer)]
								)
							);
						}
						return children;
					}, []);
				}
				console.log('containerStyle', containerStyle.value);
				return h(
					'div',
					{ class: 'wd-space', style: containerStyle.value },
					newNodes
				);
			}
		};
	},
});
</script>
<style>
.wd-space {
	display: inline-flex;
}
.wd-space_item {
	display: inline-flex;
	flex-wrap: wrap;
}
</style>
