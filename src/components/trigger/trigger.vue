<template>
  <div class="wd-dropdown-trigger">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "wd-trigger",
  props: {},
  components: {},
  emits: ["click"],
  setup(props, context) {
    return {};
  },
});
</script>

<style lang="less">
@import url(./style/index);
</style>
