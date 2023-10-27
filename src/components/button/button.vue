<template>
	<button
		class="wd-btn"
		ref="buttonNode"
		:class="[
			type || groupProps.type ? 'wd-btn-' + type || groupProps.type : '',
			size ? 'wd-btn-' + sizeMap[size] : '',
			roundShape ? 'wd-btn-roundshape-' + roundShape : '',
			{
				'wd-btn-loading': loading,
				'wd-btn-disabled': disabled,
				'wd-btn-two-chinese-chars': hasTwoCNChar,
			},
		]"
		:type="nativeType"
		:disabled="disabled"
		@click="handleClick"
	>
		<wd-icon v-if="icon && !loading" :icon="icon" />
		<span
			v-else-if="loading"
			role="img"
			aria-label="loading"
			class="anticon anticon-loading"
			><svg
				focusable="false"
				class="anticon-spin"
				data-icon="loading"
				width="1em"
				height="1em"
				fill="currentColor"
				aria-hidden="true"
				viewBox="0 0 1024 1024"
			>
				<path
					d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"
				></path></svg
		></span>
		<span>
			<slot name="default"></slot>
		</span>
	</button>
</template>

<script lang="ts">
import { defineComponent, reactive, PropType, onMounted, ref } from 'vue';
type ButtonTypes = PropType<
	'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text' | 'dashed'
>;
import { Sizes as ButtonSizes } from '../../utils/size';
// type ButtonSizes = PropType<"small" | "large">;
type ButtonRoundShape = PropType<'none' | 'small' | 'large' | 'circle'>;
type ButtonNativeType = PropType<'button' | 'submit' | 'reset'>;
// import * as IconList from '@ant-design/icons-vue';
import WdIcon from '../icon/icon.vue';
export default defineComponent({
	name: 'wd-button',
	props: {
		type: {
			type: String as ButtonTypes,
			default: 'default',
		},
		nativeType: {
			type: String as ButtonNativeType,
			default: 'button',
		},
		size: {
			type: String as ButtonSizes,
			default: 'middle',
		},
		roundShape: {
			type: String as ButtonRoundShape,
			default: 'small',
		},
		icon: {
			type: String,
			default: '',
		},
		disabled: Boolean,
		loading: Boolean,
	},
	components: {
		WdIcon,
	},
	emits: ['click'],
	setup(props, context) {
		const handleClick = (options) => {
			context.emit('click', options);
		};
		const buttonNode = ref(null);
		const hasTwoCNChar = ref(false);
		// 两个中文字符自动插入空格
		const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
		const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
		onMounted(() => {
			fixTwoCNChar();
		});
		const fixTwoCNChar = () => {
			const node = buttonNode.value;
			if (!node) {
				return;
			}
			const buttonText = node.textContent.trim();
			if (isTwoCNChar(buttonText)) {
				if (!hasTwoCNChar.value) {
					hasTwoCNChar.value = true;
				}
			} else if (hasTwoCNChar.value) {
				hasTwoCNChar.value = false;
			}
		};

		// const isNeedInserted = () => {

		// }
		// insertSpace(child: VNode, needInserted: boolean) {
		//   const SPACE = needInserted ? ' ' : '';
		//   if (child.type === Text) {
		//     let text = (child.children as string).trim();
		//     if (isTwoCNChar(text)) {
		//       text = text.split('').join(SPACE);
		//     }
		//     return <span>{text}</span>;
		//   }
		//   return child;
		// },
		const sizeMap = reactive({
			small: 'sm',
			middle: '',
			large: 'lg',
		});
		return {
			handleClick,
			sizeMap,
			hasTwoCNChar,
			buttonNode,
		};
	},
});
</script>
<style lang="less">
@import url(./style/index);
</style>
