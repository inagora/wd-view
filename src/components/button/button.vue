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
        'wd-btn-two-chinese-chars': hasTwoCNChar
      },
    ]"
    :type="nativeType"
    :disabled="disabled"
    @click="handleClick"
  >
    <component :is="icon" />
    <slot name="default"></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, reactive, PropType, onMounted, ref } from "vue";
type ButtonTypes = PropType<
  "primary" | "success" | "warning" | "danger" | "info" | "text" | "dashed"
>;
import {Sizes as ButtonSizes} from '../../utils/size';
// type ButtonSizes = PropType<"small" | "large">;
type ButtonRoundShape = PropType<"none" | "small" | "large" | "circle">;
type ButtonNativeType = PropType<"button" | "submit" | "reset">;
// import * as IconList from '@ant-design/icons-vue';
export default defineComponent({
  name: "wd-button",
  props: {
    type: {
      type: String as ButtonTypes,
      default: "default",
    },
    nativeType: {
      type: String as ButtonNativeType,
      default: "button",
    },
    size: {
      type: String as ButtonSizes,
      default: "middle",
    },
    roundShape: {
      type: String as ButtonRoundShape,
      default: "small",
    },
    icon: {
      type: String,
      default: "",
    },
    disabled: Boolean,
    loading: Boolean
  },
  // components: {
  //     ...IconList
  // },
  emits: ["click"],
  setup(props, context) {
    const handleClick = (options) => {
      context.emit("click", options);
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
      const buttonText = node.textContent;
      if (isTwoCNChar(buttonText)) {
        if (!hasTwoCNChar.value) {
          hasTwoCNChar.value = true;
        }
      } else if (hasTwoCNChar.value) {
        hasTwoCNChar.value = false;
      }
    }

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
      small: "sm",
      middle: '',
      large: "lg",
    });
    return {
      handleClick,
      sizeMap,
      hasTwoCNChar,
      buttonNode
    };
  },
});
</script>
<style lang="less">
@import url(./style/index);
</style>
