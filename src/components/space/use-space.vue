

  

<script lang="ts">
import { computed, defineComponent, PropType, watchEffect } from 'vue';
import type { SpaceProps } from './space.vue';
type ButtonTypes = PropType<
	'primary' | 'success' | 'warning' | 'danger' | 'info'
>;
export default defineComponent({
	name: 'wd-space',
	props: {
		/**
		 * @description Placement direction
		 */
		direction: {
			type: String,
			values: ['horizontal', 'vertical'],
			default: 'horizontal',
		},
	},

	emits: ['click'],

	/**
	 * 1. 如果是数组或者fragement 就递归处理.否则push到数组里
	 * 2. 保不保留空节点可以根据 keepEmpty 的 option 来控制。
	 */
	setup(props, context) {
		const containerStyle = computed(() => {
			const wrapKls =
				props.wrap || props.fill
					? { flexWrap: 'wrap', marginBottom: `-${verticalSize.value}px` }
					: {};
			const alignment = {
				alignItems: props.alignment,
			};
			return [wrapKls, alignment, props.style];
		});

		const itemStyle = computed<StyleValue>(() => {
			const itemBaseStyle = {
				paddingBottom: `${verticalSize.value}px`,
				marginRight: `${horizontalSize.value}px`,
			};

			const fillStyle = props.fill
				? { flexGrow: 1, minWidth: `${props.fillRatio}%` }
				: {};

			return [itemBaseStyle, fillStyle];
		});

		watchEffect(() => {
			const { size = 'small', wrap, direction: dir, fill } = props;

			// when the specified size have been given
			if (isArray(size)) {
				const [h = 0, v = 0] = size;
				horizontalSize.value = h;
				verticalSize.value = v;
			} else {
				let val: number;
				if (isNumber(size)) {
					val = size;
				} else {
					val = SIZE_MAP[size || 'small'] || SIZE_MAP.small;
				}

				if ((wrap || fill) && dir === 'horizontal') {
					horizontalSize.value = verticalSize.value = val;
				} else {
					if (dir === 'horizontal') {
						horizontalSize.value = val;
						verticalSize.value = 0;
					} else {
						verticalSize.value = val;
						horizontalSize.value = 0;
					}
				}
			}
		});
		return {
			// classes,
			containerStyle,
			itemStyle,
		};
	},
});
</script>

<style lang="less">
</style>
