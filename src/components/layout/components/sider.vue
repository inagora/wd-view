<template>
	<aside class="wd-layout-sider">
		<div class="wd-layout-sider-children">
			<slot></slot>
		</div>
	</aside>
</template>

<script lang="ts">
//
import { defineComponent } from "vue"

export default defineComponent({
	name: "wd-layout-sider",
	props: {},
	emits: ["update:modelValue", "input", "change", "clear"],
	setup(props, ctx) {
		return {}
	}
})
</script>

<style lang="less"></style>
