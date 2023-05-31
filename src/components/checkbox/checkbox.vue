<template>
	<div class="wd-checkbox-wrapper">
		<span
			:class="[
				'wd-checkbox',
				{
					'wd-checkbox-checked': isChecked,
					'wd-checkbox-disabled': checkDisabled
				}
			]"
		>
			<input
				ref="input"
				class="wd-checkbox-input"
				:name="name"
				:disabled="checkDisabled"
				:checked="isChecked"
				@change="handleInputChange"
				v-bind="attrs"
				type="checkbox"
			/>
			<span class="wd-checkbox-inner"></span>
		</span>
		<span><slot></slot></span>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, inject } from "vue"
import {
	wdFormKey,
	wdFormItemKey,
	WdFormProps,
	WdFormItemProps,
	WdFormItemContext
} from "../form/props"

interface WdCheckboxProps {
	disabled: boolean
	checked: boolean
	modelValue: boolean | string | number
	name: string
}
export default defineComponent({
	name: "wd-checkbox",
	inheritAttrs: false,
	props: {
		checked: {
			required: true,
			default: false,
			type: Boolean
		},
		disabled: Boolean,
		modelValue: {
			type: [Boolean, String, Number]
		},
		name: String
	},
	emits: ["update:modelValue", "change"],
	setup(props, ctx) {
		const isChecked = ref(props.modelValue || props.checked)
		const wdForm = inject(wdFormKey, {} as WdFormProps)
		const wdFormItem = inject(wdFormItemKey, {} as WdFormItemContext)
		let checkDisabled = props.disabled || wdFormItem.disabled || wdForm.disabled
		const handleInputChange = () => {
			isChecked.value = !isChecked.value
			ctx.emit("change", isChecked.value)
			ctx.emit("update:modelValue", isChecked.value)
		}
		watch(
			() => props.checked,
			(val) => {
				isChecked.value = val
				wdFormItem.formItemMitt?.emit("wd.form.change", [val])
			}
		)
		return {
			isChecked,
			handleInputChange,
			checkDisabled
		}
	}
})
</script>

<style lang="less">
@import url(./style/index);
</style>
