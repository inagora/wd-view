<template>
	<div class="wd-radio-wrapper">
		<span
			:class="[
				'wd-radio',
				{
					'wd-radio-checked': isChecked,
					'wd-radio-disabled': inputDisabled
				}
			]"
		>
			<input
				ref="input"
				class="wd-radio-input"
				:name="name"
				:disabled="inputDisabled"
				:checked="isChecked"
				@change="handleInputChange"
				type="radio"
				v-bind="attrs"
			/>
			<span class="wd-radio-inner"></span>
		</span>
		<span><slot></slot></span>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, inject } from 'vue';
import {
	wdFormKey,
	wdFormItemKey,
	WdFormProps,
	WdFormItemProps,
	WdFormItemContext
} from '../form/props';

interface WdRadioProps {
	disabled: boolean;
	checked: boolean;
	modelValue: boolean;
	name: string;
}
export default defineComponent({
	name: 'wd-radio',
	inheritAttrs: false,
	props: {
		modelValue: {
			type: Boolean,
			default: ''
		},
		checked: {
			required: true,
			default: false,
			type: Boolean
		},
		disabled: Boolean,
		name: String
	},
	emits: ['update:modelValue', 'change'],
	setup(props: WdRadioProps, ctx) {
		const isChecked = ref(props.modelValue);
		const wdForm = inject(wdFormKey, {} as WdFormProps);
		const wdFormItem = inject(wdFormItemKey, {} as WdFormItemContext);
		const handleInputChange = () => {
			isChecked.value = !isChecked.value;
			ctx.emit('change', isChecked.value);
			ctx.emit('update:modelValue', isChecked.value);
			wdFormItem.formItemMitt?.emit('wd.form.change', [isChecked.value]);
		};
		let radioDisabled =
			props.disabled || wdFormItem.disabled || wdForm.disabled;
		watch(
			() => props.checked,
			(val) => {
				isChecked.value = val;
			}
		);
		watch(
			() => props.modelValue,
			(val) => {
				isChecked.value = val;
			}
		);
		return {
			isChecked,
			handleInputChange,
			radioDisabled
		};
	}
});
</script>

<style lang="less">
@import url(./style/index);
</style>
