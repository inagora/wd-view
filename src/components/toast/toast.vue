<template>
  <div class="wd-toast" v-show="showToast">{{ msg }}</div>
</template>

<script lang="ts">
/**
 * msg: toast的内容
 * visible: toast显示/隐藏
 * duration: toast显示时长
 * position: toast显示的位置
 */
enum POSITION {
  top,
  center,
  bottom,
}
import { ref, watch, toRefs } from "vue";
export default {
  name: "wd-toast",
  props: {
    msg: String,
    visible: {
      type: Boolean,
      default: false,
    },
    duration: {
      type: Number,
      default: 3000,
    },
    position: {
      type: Number,
      default: POSITION.center,
    },
  },
  setup(props) {
    let { msg, visible, duration } = toRefs(props);
    let showToast = ref(false);
    watch(duration, () => {
      setTimeout(() => {
        showToast.value = false;
      }, duration.value);
    });
    watch(visible, () => {
      showToast.value = true;
    });
    return {
      showToast,
    };
  },
};
</script>

<style>
.wd-toast {
  position: absolute;
  z-index: 999;
  background-color: #00000080;
  color: #ffffff;
  padding: 5px 8px;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 4px;
}
</style>
