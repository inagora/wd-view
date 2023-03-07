<template>
	<div class="wd-radio-wrapper">
		<span
			:class="[
				'wd-radio',
				{
					'wd-radio-checked': isChecked,
					'wd-radio-disabled': inputDisabled,
				},
			]"
		>
			<input
				ref="input"
				class="wd-radio-input"
				:name="formItemName"
				:disabled="inputDisabled"
				@change="handleInputChange"
				type="radio"
				:value="value"
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
	WdFormItemContext,
} from '../form/props';

interface WdRadioProps {
	disabled: boolean;
	checked: boolean;
	modelValue: string;
	name: string;
	value: string;
}
export default defineComponent({
	name: 'wd-radio',
	inheritAttrs: false,
	props: {
		modelValue: {
			type: String,
			default: '',
		},
		checked: {
			required: true,
			default: false,
			type: Boolean,
		},
		disabled: Boolean,
		name: String,
		value: String,
	},
	emits: ['update:modelValue', 'change'],
	setup(props: WdRadioProps, ctx) {
		const isChecked = ref(props.checked);
		const wdForm = inject(wdFormKey, {} as WdFormProps);
		const wdFormItem = inject(wdFormItemKey, {} as WdFormItemContext);
		const formItemName = props.name || wdFormItem.name;
		const handleInputChange = (e) => {
			const value = e.target.value;
			isChecked.value = value === props.value;
			ctx.emit('change', value);
			ctx.emit('update:modelValue', value);
			wdFormItem.formItemMitt?.emit('wd.form.change', [value]);
		};
		let radioDisabled =
			props.disabled || wdFormItem.disabled || wdForm.disabled;
		watch(
			() => props.checked,
			(val) => {
				isChecked.value = val;
			}
		);
		return {
			isChecked,
			handleInputChange,
			radioDisabled,
			formItemName,
		};
	},
});
</script>

<style lang="less">
@import url(./style/index);
</style>
