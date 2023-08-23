<template>
	<!-- disabled -->
	<!-- class="wd-input" -->

	<input
		v-if="!isRangeInput"
		ref="input"
		:class="[bem.b()]"
		:value="formattedValue"
		autocomplete="off"
		:type="type"
		:placeholder="placeholder"
		:disabled="props.disabled"
		v-bind="attrs"
		@change="handleChange"
		@input="handleInput"
		@focus="handleFocus"
		@blur="handleBlur"
	/>

	<!-- <div :class="[bem.e('inner')]">abv</div> -->

	<div v-else>
		<input
			ref="startDateInput"
			class="input-left"
			:class="[bem.b()]"
			:value="formattedDateRange && formattedDateRange[0]"
			autocomplete="off"
			:type="inputType"
			:max="formattedDateRange[1]"
			@click="showDropdown"
			@input="handleStartInput"
			@change="handleStartDateChange"
			@focus="handleFocus"
			@blur="handleFocus"
		/>

		<input
			ref="endDateInput"
			:class="[bem.b()]"
			:value="formattedDateRange && formattedDateRange[1]"
			autocomplete="off"
			:type="inputType"
			:min="formattedDateRange[0]"
			@click="showDropdown"
			@input="handleEndInput"
			@change="handleEndDateChange"
			@focus="handleFocus"
			@blur="handleFocus"
		/>
	</div>
	<div :class="[bem.e('element')]">
abv
</div>
	<div :class="[bem.m('modify')]">
abv
</div>
	<div :class="[bem.m('modify'), bem.is('checked', true)]">
abv
</div>
</template>

<script lang="ts">
export default {
	name: 'WdDate',
};
</script>
<script setup lang="ts">
// import wdInput from '../../input/input.vue';
import dayjs from 'dayjs';
import { useAttrs, onMounted, watch, ref, computed, reactive } from 'vue';
import { dateProps, dateEmits } from './date-origin';

import { RANGEMAP } from './constants';
console.log('RANGEMAP', RANGEMAP);
import { createNameSpace } from '../../../utils/create';
console.log('createNameSpace', createNameSpace);
const bem = createNameSpace('input');
console.log('bem', bem);
const attrs = useAttrs();
console.log('attrs', attrs);
const props = defineProps(dateProps);
console.log('props', props);
const emits = defineEmits(dateEmits);
const displayValue = reactive([]);
watch(
	() => props.modelValue,
	() => {
		console.log('props.modelValue', props.modelValue);
		setInputValue();
	}
);
const isRangeInput = computed(() => {
	return props.type.includes('range');
});
const inputType = computed(() => {
	return RANGEMAP[props.type];
});
const showDropdown = () => {
	console.log('we');
	const startValue = startDateInput.value;
	const endValue = endDateInput.value;
	startValue.dispatchEvent(new MouseEvent('mousedown'));
	endValue.dispatchEvent(new MouseEvent('mousedown'));
};

const formattedValue = computed(() => {
	if (props.modelValue) {
		return formattedDate(props.modelValue);
	} else if (props.defaultValue) {
		return formattedDate(props.defaultValue);
	}
	return '';
});
const formattedDateRange = computed(() => {
	if (props.modelValue && props.modelValue.length >= 2) {
		return [
			formattedDate(props.modelValue[0]),
			formattedDate(props.modelValue[1]),
		];
	}
	return ['', ''];
});

const handleStartInput = (event: Event) => {
	const value = formattedDate((event.target as HTMLInputElement).value);
	if (value) {
		// 更新模型值的第一个日期
		// eslint-disable-next-line vue/no-mutating-props
		props.modelValue[0] = value;
	} else {
		// 更新模型值的第一个日期
		// eslint-disable-next-line vue/no-mutating-props
		props.modelValue[0] = null;
		// formattedDateRange.value = [value, null];
	}
};
// console.log('value,', value);
// emits('input', value);
// emits('update:modelValue', value);
// formattedDateRange

const handleEndInput = (event: Event) => {
	const value = formattedDate((event.target as HTMLInputElement).value);
	if (value) {
		// 更新模型值的第一个日期
		// eslint-disable-next-line vue/no-mutating-props
		props.modelValue[1] = value;
	} else {
		// 更新模型值的第一个日期
		// eslint-disable-next-line vue/no-mutating-props
		props.modelValue[1] = null;
		// formattedDateRange.value = [value, null];
	}
	// if (value) {
	// 	userInput.value = [userInput.value[0], target.value];
	// } else {
	// 	userInput.value = [null, target.value];
	// }
};
// console.log('inputType', inputType.value);

const formattedDate = (value: string | number) => {
	// const date = value + ''.replace(/T/g, ' ');
	// 日期输入类型datetime-local，期望的输入格式是YYYY-MM-DDTHH:mm,标准
	// return dayjs(value).format(props.format).replace(/T/g, ' '); // 格式替换
	let day = '';
	if (props.type === 'time') {
		day = value + '';
	} else {
		day = dayjs(value).format(props.format).replace(/T/g, ' '); // 格式替换
	}
	return day;
};

console.log('props,', props);
// 都需要格式化，所以不做formate 判断了
const handleInput = (event: Event) => {
	const value = formattedDate((event.target as HTMLInputElement).value);
	console.log('value,', value);
	emits('input', value);
	emits('update:modelValue', value);
};
const handleChange = (event: Event) => {
	const value = formattedDate((event.target as HTMLInputElement).value);
	console.log('子组件value', value);
	if (value === 'Invalid Date') {
		console.log('清空');
		handleClear();
	}
	emits('change', value);
};

const handleFocus = (event: FocusEvent) => {
	emits('focus', event);
};
const handleBlur = (event: FocusEvent) => {
	emits('blur', event);
};
const input = ref<HTMLInputElement | null>(null);
const startDateInput = ref<HTMLInputElement | null>(null);
const endDateInput = ref<HTMLInputElement | null>(null);
const setInputValue = () => {
	// if (!isRangeInput.value) {
	// 	const ele = input.value;
	// 	if (props.modelValue) {
	// 		ele.value = formattedDate(props.modelValue);
	// 		console.log('ele.value', ele.value);
	// 	} else if (props.defaultValue) {
	// 		ele.value = formattedDate(props.defaultValue);
	// 	}
	// } else {
	// if (props.modelValue) {
	// 	const startValue = startDateInput.value;
	// 	const endValue = endDateInput.value;
	// 	console.log('props.modelValue[0]', formattedDate(props.modelValue[0]));
	// 	startValue.value = formattedDate(props.modelValue[0]);
	// 	endValue.value = formattedDate(props.modelValue[1]);
	// }
	// }
};
// 清除了，但是还有默认值，正常
const handleClear = () => {
	emits('update:modelValue', '');
	emits('input', '');
	emits('change', '');
	emits('clear');
};
onMounted(() => {
	setInputValue();
});
</script>
<style lang="less" scoped>
@import url(../style/index);
</style>
