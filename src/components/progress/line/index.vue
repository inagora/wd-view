<template>
  <div class="wd-progress-line">
    <canvas
      ref="wd-progress-line-canvas"
      id="wd-progress-line-canvas"
      width="300"
      height="20"
    ></canvas>
  </div>
</template>

<script lang="ts">
import drawLine from "./draw";
import { onMounted } from "vue";
export default {
  name: "wd_progress_line",
  props: ["progress"],
  setup(props) {
    onMounted(() => {
      const canvas = document.getElementById(
        "wd-progress-line-canvas"
      ) as HTMLCanvasElement;
      drawLine(canvas, props.progress);
    });
  },
};
</script>

<style lang="less"></style>
