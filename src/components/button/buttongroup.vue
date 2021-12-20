<template>
  <div class="wd-button-group">
    <component 
      v-for="(slot, index) in slots" 
      :type="slot.props.type || type"
      :size="slot.props.size || size" 
      :key="index" 
      :is="slot"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, PropType } from "vue";
type ButtonTypes = PropType<
  "primary" | "success" | "warning" | "danger" | "info" | "text" | "dashed"
>;
type ButtonSizes = PropType<"small" | "large">;
import WdButton from './button.vue';
// import * as IconList from '@ant-design/icons-vue';
export default defineComponent({
  name: "wd-button-group",
  props: {
    type: {
      type: String as ButtonTypes,
      default: "default",
    },
    size: {
      type: String as ButtonSizes,
      default: "small",
    },
  },
  components: {
      WdButton
  },
  emits: ["click"],
  setup(props, context) {
    const handleClick = (options) => {
      context.emit("click", options);
    };
    const slots = reactive(context.slots.default());
    console.log(slots);
    const sizeMap = reactive({
      small: "sm",
      large: "lg",
    });
    return {
      handleClick,
      sizeMap,
      slots
    };
  },
});
</script>
<style lang="less">
@import url(./style/index);
</style>
