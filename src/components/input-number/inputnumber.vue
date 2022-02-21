<template>
	<div
		:class="[
			'wd-input-number',
			{
				'wd-input-group': $slots.prepend || $slots.append,
				'wd-input-affix-wrapper':
					$slots.prefix ||
					prefixIcon ||
					clearable ||
					$slots.suffix ||
					suffixIcon,
			},
		]"
	>
		<div class="wd-input-number-handler-wrap">
			<span
				unselectable="unselectable"
				:class="[
					'wd-input-number-handler',
					'wd-input-number-handler-up',
					{ 'wd-input-number-handler-up-disabled': maxDisabled },
				]"
				@click="increase"
			>
				<wd-icon
					icon="bi-chevron-up"
					class="wd-input-number-handler-up-inner"
				/>
			</span>
			<span
				unselectable="unselectable"
				:class="[
					'wd-input-number-handler',
					'wd-input-number-handler-down',
					{ 'wd-input-number-handler-down-disabled': minDisabled },
				]"
				@click="decrease"
			>
				<wd-icon
					icon="bi-chevron-down"
					class="wd-input-number-handler-down-inner"
				/>
			</span>
		</div>
		<wd-input
			ref="input"
			type="text"
			:size="inputSize"
			:disabled="inputDisabled"
			:readonly="readonly"
			:max="max"
			:min="min"
			style="border: none"
			@keydown.up.prevent="increase"
			@keydown.down.prevent="decrease"
			:model-value="displayValue"
			@input="handleInput"
			@change="handleChange"
		></wd-input>
	</div>
</template>

<script lang="ts">
import {
	defineComponent,
	reactive,
	computed,
	watch,
	ref,
	nextTick,
	shallowRef,
	onMounted,
	inject,
} from 'vue';
import WdInput from '../input/input.vue';
import WdIcon from '../icon/icon.vue';
import type { PropType } from 'vue';
import {
	wdFormKey,
	wdFormItemKey,
	WdFormProps,
	WdFormItemProps,
	WdFormItemContext,
} from '../form/props';

interface WdInputNumberProps {
	type: string;
	size: string;
	disabled: boolean;
	prefixIcon: string;
	readonly: boolean;
	modelValue: number;
	max: number;
	min: number;
	step: string | number;
	precision: number;
}

type StepType = Number | String;

export default defineComponent({
	name: 'wd-input-number',
	inheritAttrs: false,
	components: {
		WdInput,
		WdIcon,
	},
	props: {
		modelValue: {
			required: true,
		},
		type: {
			type: String,
			default: 'text',
		},
		size: {
			type: String,
			default: 'default',
		},
		prefixIcon: {
			type: String,
			default: '',
		},
		disabled: Boolean,
		readonly: Boolean,
		max: {
			type: Number,
			default: Infinity,
		},
		min: {
			type: Number,
			default: -Infinity,
		},
		step: {
			type: [Number, String] as PropType<string | number>,
			default: 1,
		},
		precision: {
			type: Number,
			validator: (val: number) => val >= 0 && val === parseInt(val + '', 10),
		},
	},
	emits: ['update:modelValue', 'input', 'change', 'clear'],
	setup(props, ctx) {
		const input = ref(null);
		const wdForm = inject(wdFormKey, {} as WdFormProps);
		const wdFormItem = inject(wdFormItemKey, {} as WdFormItemContext);
		let inputSize = props.size || wdFormItem.size || wdForm.size;

		const data = reactive({
			currentValue: props.modelValue,
		});

		const maxDisabled = computed(() => {
			return data.currentValue >= props.max;
		});

		const minDisabled = computed(() => {
			return data.currentValue <= props.min;
		});

		const inputDisabled = computed(() => {
			return props.disabled || wdFormItem.disabled || wdForm.disabled;
		});
		const displayValue = computed(() => {
			return data.currentValue;
		});

		const handleInput = (val) => {
			ctx.emit('update:modelValue', val);
			ctx.emit('input', val);
			// nextTick(setNativeInputValue);
			wdFormItem.formItemMitt?.emit('wd.form.change', [val]);
		};
		const handleChange = (val) => {
			ctx.emit('change', val);
			wdFormItem.formItemMitt?.emit('wd.form.change', [val]);
		};

		const toPrecision = (num, pre?) => {
			if (pre === undefined) pre = numPrecision.value;
			return parseFloat(
				Math.round(num * Math.pow(10, pre)) / Math.pow(10, pre) + ''
			);
		};

		const getPrecision = (value) => {
			if (value === undefined) return 0;
			const valueString = value.toString();
			const dotPosition = valueString.indexOf('.');
			let precision = 0;
			if (dotPosition !== -1) {
				precision = valueString.length - dotPosition - 1;
			}
			return precision;
		};

		const increase = () => {
			if (props.disabled || props.readonly) return;
			let val = input.value.input.value;
			if (val === '' || val === undefined) val = props.min;
			val++;
			setCurrentValue(val);
		};

		const decrease = () => {
			if (props.disabled || props.readonly) return;
			let val = input.value.input.value;
			if (val === '' || val === undefined) val = props.min;
			val--;
			setCurrentValue(val);
		};

		const setCurrentValue = (val) => {
			ctx.emit('update:modelValue', val);
			ctx.emit('input', val);
			ctx.emit('change', val);
			data.currentValue = val;
		};

		const numPrecision = computed(() => {
			const stepPrecision = getPrecision(props.step);
			if (props.precision !== undefined) {
				if (stepPrecision > props.precision) {
					console.warn(
						'[Warn][InputNumber]precision should not be less than the decimal places of step'
					);
				}
				return props.precision;
			} else {
				return Math.max(getPrecision(props.modelValue), stepPrecision);
			}
		});

		watch(
			() => props.modelValue,
			(value) => {
				let newVal = value === undefined ? 0 : Number(value);
				if (newVal !== undefined) {
					if (isNaN(newVal)) return;
					if (props.precision !== undefined) {
						newVal = toPrecision(newVal, props.precision);
					}
				}
				if (newVal !== undefined && newVal >= props.max) {
					newVal = props.max;
					ctx.emit('update:modelValue', newVal);
				}
				if (newVal !== undefined && newVal <= props.min) {
					newVal = props.min;
					ctx.emit('update:modelValue', newVal);
				}
				data.currentValue = newVal;
			},
			{
				immediate: true,
			}
		);
		onMounted(() => {});
		return {
			handleInput,
			handleChange,
			input,
			displayValue,
			inputDisabled,
			increase,
			decrease,
			maxDisabled,
			minDisabled,
			inputSize,
		};
	},
});
</script>

<style lang="less">
@import url(./style/index);
</style>
