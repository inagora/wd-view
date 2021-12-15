<template>
  <div ref="dropdown" tabindex="0" class="wd-dropdown-trigger">
    <slot></slot>
    <div :class="['wd-dropdown', visibleValue ? 'wd-dropdown-show' : '']">
      <slot name="dropdown"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  watch,
  ref,
  toRefs,
  computed,
  onMounted,
  nextTick,
  onUnmounted,
} from "vue";
import "./style/index";
import WdPopper from "../popper/index";
interface WdDropdownProps {
  disabled: boolean;
  visible: boolean;
  trigger: string;
}
export default defineComponent({
  name: "wd-dropdown",
  props: {
    disabled: Boolean, // 是否可用
    visible: {
      // 显示与隐藏
      type: Boolean,
      default: false,
    },
    trigger: {
      // 控制显示与隐藏的方法
      type: String,
      default: "hover",
    },
  },
  components: {
    WdPopper,
  },
  emits: ["visibleChange"], // onchange
  setup(props: WdDropdownProps, context) {
    let { visible } = toRefs(props);
    let visibleValue = ref(visible.value);
    let dropdown = ref(null);
    let menu = ref("menu");
    const visibleChange = () => {
      context.emit("visibleChange", visibleValue.value);
    };
    const clickHandler = (e) => {
      visibleValue.value = !visibleValue.value;
      visibleChange();
    };
    const showMenu = () => {
      visibleValue.value = true;
      visibleChange();
    };
    const hideMenu = () => {
      visibleValue.value = false;
      visibleChange();
    };
    if (props.trigger === "hover") {
      if (props.disabled) return;
      nextTick(() => {
        dropdown.value.addEventListener("mouseenter", showMenu, false);
        dropdown.value.addEventListener("mouseleave", hideMenu, false);
      });
    } else if (props.trigger === "click") {
      if (props.disabled) return;
      nextTick(() => {
        dropdown.value.addEventListener("click", clickHandler, false);
        dropdown.value.addEventListener("blur", hideMenu, false);
      });
    }
    onUnmounted(() => {
      if (dropdown.value) {
        dropdown.value.removeEventListener("mouseenter", showMenu);
        dropdown.value.removeEventListener("mouseleave", hideMenu);
        dropdown.value.removeEventListener("click", clickHandler);
        dropdown.value.removeEventListener("blur", hideMenu);
      }
    });
    return {
      visibleValue,
      clickHandler,
      dropdown,
      menu,
    };
  },
});
</script>
