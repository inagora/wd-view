<template>
	<input
		:type="type"
		:value="startValue"
		@input="onStartDateInput"
		placeholder="Start Date"
	/>
	<input
		:type="type"
		:value="endValue"
		@input="onEndDateInput"
		placeholder="End Date"
	/>
</template>

<script>
import { defineComponent, ref, watchEffect } from 'vue';
export default defineComponent({
	name: 'DatePangePicker',
	props: {
		type: 'date',
		modelValue: Array,
	},

	setup(props, { emit }) {
		const [startValue, endValue] = props.modelValue.map((date) => ref(date));

		const onStartDateInput = (event) => {
			startValue.value = event.target.value;
			updateModelValue(startValue);
		};
		const onEndDateInput = (event) => {
			endValue.value = event.target.value;
			updateModelValue(endValue);
		};
		const updateModelValue = () => {
			emit('update:modelValue', [startValue.value, endValue.value]);
		};

		return {
			startValue,
			endValue,
			onStartDateInput,
			onEndDateInput,
		};
	},
});
</script>

<style></style>
