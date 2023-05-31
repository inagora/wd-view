<template>
	<div class="wd-progress-circle">
		<canvas
			ref="wd-progress-circle-canvas"
			id="wd-progress-circle-canvas"
			width="100"
			height="100"
		></canvas>
	</div>
</template>

<script lang="ts">
import { onMounted } from "vue"
import drawCircle from "./draw"
export default {
	name: "wd_progress_circle",
	props: ["progress"],
	setup(props) {
		onMounted(() => {
			const canvas = document.getElementById(
				"wd-progress-circle-canvas"
			) as HTMLCanvasElement
			drawCircle(canvas, props.progress)
		})
	}
}
</script>

<style lang="less"></style>
