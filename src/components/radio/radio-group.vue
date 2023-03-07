<template>
	<div class="wd-checkbox-group">
		<wd-radio
			@change="handleInputChange"
			:name="name"
			v-for="(option, index) in getOptions"
			:key="index"
		>
			<slot></slot>
		</wd-radio>
	</div>
</template>

<script lang="ts">
import WdRadio from './radio.vue';
import { defineComponent, ref, watch, toRef, PropType, computed } from 'vue';

type optionType = {
	label: string;
	value: boolean;
};
interface WdRadioProps {
	disabled: boolean;
	modelValue: Array<string>;
	options: Array<string> | Array<optionType>;
}

type optionsType = Array<string> | Array<optionType>;
export default defineComponent({
	name: 'wd-radio-group',
	inheritAttrs: false,
	components: {
		WdRadio,
	},
	props: {
		modelValue: {
			required: true,
			type: [String, Object],
		},
		options: {
			required: true,
			type: Array as PropType<optionsType>,
		},
		disabled: Boolean,
		name: String,
	},
	emits: ['update:modelValue', 'change'],
	setup(props: WdRadioProps, ctx) {
		const radioGroupOptions = toRef(props, 'options');
		const getOptions = computed(() => {
			return (radioGroupOptions.value as (string | object)[]).map((option) => {
				if (typeof option === 'string') {
					return {
						label: option,
						value: option,
					};
				}
				let label = (option as optionType).label;
				return { ...option, label };
			});
		});
		const handleInputChange = (val) => {
			console.log(val);
			ctx.emit('change', val);
			ctx.emit('update:modelValue', val);
		};
		watch(
			() => props.modelValue,
			(val) => {
				console.log(val, '#');
			}
		);
		return {
			handleInputChange,
			getOptions,
		};
	},
});
</script>

<style lang="less">
@import url(./style/index);
</style>
