<template>
	<input :type="inputType" :value="value" @input="onInput" />
</template>

<script>
import { ref, defineComponent } from 'vue';
export default defineComponent({
	name: 'wd-date-picker-origin',
	props: {
		type: {
			type: String,
			default: 'date',
			validator: (val) =>
				['data', 'datetime-local', 'month', 'time'].includes(val),
		},
		placeholder: String,
		modelValue: String,
	},
	setup(props, { emit }) {
		const value = ref(props.modelValue);
		const onInput = (event) => {
			const newValue = event.target.value;
			value.value = newValue;
			emit('update:modelValue', newValue);
		};
		return {
			value,
			onInput,
			inputType: props.type,
		};
	},
});
</script>
<style scoped></style>
