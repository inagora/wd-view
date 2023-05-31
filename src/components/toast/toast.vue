<template>
	<div class="wd-toast" v-show="showToast">{{ message }}</div>
</template>

<script lang="ts">
/**
 * message: toast的内容
 * visible: toast显示/隐藏
 * duration: toast显示时长
 * position: toast显示的位置
 */
enum POSITION {
	top,
	center,
	bottom
}
import { ref, watch, toRefs, onMounted } from "vue"
export default {
	name: "wd-toast",
	props: {
		message: String,
		duration: {
			type: Number,
			default: 3000
		},
		position: {
			type: Number,
			default: POSITION.center
		}
	},
	setup(props) {
		let { message, duration } = toRefs(props)
		let showToast = ref(true)
		onMounted(() => {
			setTimeout(() => {
				showToast.value = false
			}, duration.value)
		})
		return {
			showToast
		}
	}
}
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
