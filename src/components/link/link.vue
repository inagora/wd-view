<template>
	<a
		class="wd-link"
		:class="[
			type ? 'wd-link-' + type : '',
			disabled && 'wd-link-disabled',
			underline && !disabled && 'wd-link-underline'
		]"
		:href="disabled ? null : href ? href : null"
		@click="handleClick"
		><slot></slot
	></a>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
type ButtonTypes = PropType<
	"primary" | "success" | "warning" | "danger" | "info"
>
export default defineComponent({
	name: "wd-link",
	props: {
		type: {
			type: String as ButtonTypes,
			default: "default"
		},
		href: {
			type: String,
			default: ""
		},
		icon: {
			type: Boolean,
			default: false
		},
		underline: Boolean,
		disabled: Boolean
	},
	emits: ["click"],
	setup(props, { emit }) {
		const handleClick = (options) => {
			if (!props.disabled) {
				emit("click", options)
			}
		}
		return {
			handleClick
		}
	}
})
</script>

<style lang="less">
@import url(./style/index);
</style>
