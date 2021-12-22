<template>
  <div :class="['wd-layout', hasSider ? 'wd-layout-has-sider' : '']">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import "./style/index";
export default defineComponent({
  name: "wd-layout",
  props: {
    hasSider: {
      type: [Boolean, String]
    },
  },
  setup(props, ctx) {
    // let hasSider = ref(false);
    // let slots = ctx.slots;
    // console.log(slots.name);
    // return {
    //     hasSider
    // };
  },
});
</script>

<style lang="less"></style>
