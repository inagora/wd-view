<!-- <script > -->
<script lang="ts">
// const SIZE_MAP = { small: 8, default: 12, large: 16 } as const;
const SIZE_MAP: Readonly<{ small: 8; default: 12; large: 16 }> = {
	small: 8,
	default: 12,
	large: 16,
};
import {
	defineComponent,
	h,
	isVNode,
	renderSlot,
	ref,
	computed,
	watchEffect,
	createTextVNode,
	VNode,
} from 'vue';
// import {  isArray, isString } from '../../utils/util.ts'; // ts 引入
import { isFragment, isValidElementNode } from '../../utils/vnode';
const isArray = (val: any) => Array.isArray(val);
const isString = (val: any) => typeof val === 'string';
const isNumber = (val: any) => typeof val === 'number';
// if (true) {
// 	console.log('112');
// }
export default defineComponent({
	name: 'WdSpace',
	props: {
		style: {
			type: Object,
			// default: {},
			default: () => {
				return {};
			},
		},
		direction: {
			type: String,
			default: '', // 水平 竖直
		},

		align: {
			type: String,
			default: 'center', // start, center ,end , baseline
		},

		size: {
			type: [String, Array, Number],
			default: 'small',
			validator: (val: unknown): val is [number, number] | number =>
				isNumber(val) || isString(val) || isArray(val),
		},
		wrap: Boolean,
		spacer: {
			type: [String, Number],
			default: null,
			validator: (val: unknown) =>
				isVNode(val) || isNumber(val) || isString(val),
		},
	},
	setup(props, content) {
		const horizontalSize = ref(0);
		const verticalSize = ref(0);
		const containerStyle = computed(() => {
			const rowGap = `${verticalSize.value}px`;
			const columnGap = `${horizontalSize.value}px`;
			return {
				alignItems: props.align,
				flexDirection: props.direction,
				flexWrap: props.wrap ? 'wrap' : 'nowrap',
				...(props.style || {}),
				gap: `${rowGap} ${columnGap}`,
			};
		});

		watchEffect(() => {
			const { size = '' } = props;

			if (Array.isArray(size)) {
				const [h = 0, v = 0] = size as [number, number];
				horizontalSize.value = h;
				verticalSize.value = v;
			} else {
				let val: number;
				if (isNumber(size)) {
					val = size as number;
				} else {
					val = SIZE_MAP[size || 'small'] || SIZE_MAP.small;
				}
				horizontalSize.value = verticalSize.value = val;
			}
		});
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
								key: `LoopKey${parentKey + loopKey}`,
							},
							child
						)
					);
				}
			});

			return newNodes;
		}

		// 将虚拟dom,挂载到真实dom.renderSlot函数会返回当前插槽对应的VNode数组，可以在render函数中使用。
		return () => {
			// debugger
			const { spacer } = props;

			const children = renderSlot(
				content.slots,
				'default',
				{ key: 0 },
				() => []
			);
			// if  assembly is empty direct return
			if ((children.children ?? []).length === 0) return null;

			if (isArray(children.children)) {
				let newNodes = updateChildSlots(children.children);
				if (spacer) {
					const len = newNodes.length - 1;
					// 给每一项 添加一个spacer
					newNodes = newNodes.reduce<VNode[]>((acc, child, idx) => {
						const children = [...acc, child];
						if (idx !== len) {
							children.push(
								h(
									'span',
									{
										key: idx,
									},
									[isVNode(spacer) ? spacer : createTextVNode(spacer as string)]
								)
							);
						}
						return children;
					}, []);
				}

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
