<template>
	<footer class="wd-layout-footer">
		<slot></slot>
	</footer>
</template>

<script lang="ts">
//
import { defineComponent } from "vue"

export default defineComponent({
	name: "wd-layout-footer",
	props: {},
	emits: ["update:modelValue", "input", "change", "clear"],
	setup(props, ctx) {
		return {}
	}
})
</script>

<style lang="less"></style>
