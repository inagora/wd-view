<template>
  <li
    :class="[
      'wd-dropdown-menu-item',
      disabled ? 'wd-dropdown-menu-item-disabled' : '',
    ]"
  >
    <slot></slot>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "WdDropdownMenuItem",
  props: {
    disabled: Boolean,
  },
  setup() {
    const menuItem = "menuItem";
    return {
      menuItem,
    };
  },
});
</script>
