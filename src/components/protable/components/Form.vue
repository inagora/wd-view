<script setup>
import { ref } from 'vue';
import ADatePicker from 'ant-design-vue/lib/date-picker';
import { RangePicker } from 'ant-design-vue/lib/date-picker/dayjs';
import 'ant-design-vue/lib/date-picker/style/index.css';
import {
	WdForm,
	WdFormItem,
	WdInput,
	WdSelect,
	WdOption,
	WdDatePicker,
	WdRadio,
	WdCheckbox,
	WdSwitch,
	WdButton,
	WdInputNumber,
} from '../../../index';
const props = defineProps({
	filters: Array,
	modelValue: Object,
});
const filters = ref(props.filters);
const formData = ref(props.modelValue);
const filterMap = {
	text: WdInput,
	datetime: WdDatePicker,
	date: ADatePicker,
	range: RangePicker,
	number: WdInputNumber,
	select: WdSelect,
	multiple: WdSelect,
	checkbox: WdCheckbox,
	switch: WdSwitch,
	radio: WdRadio,
};
const changeHandler = (val, fn) => {
	fn && fn(val);
};
</script>

<template>
	<div class="wv-form">
		<wd-form
			ref="wvForm"
			label-align="right"
			size="small"
			action="/login"
			method="post"
			label-position="top"
		>
			<wd-form-item
				v-for="filter in filters"
				:key="filter.prop"
				:label="filter.label"
				:prop="filter.prop"
			>
				<wd-select
					v-if="filter.type === 'select' || filter.type === 'multiple'"
					:is="filterMap[filter.type]"
					:placeholder="filter.placeholder || filter.label"
					:value="formData[filter.prop]"
					v-model="formData[filter.prop]"
					:multiple="filter.type === 'multiple'"
					@change="changeHandler($event, filter.change)"
				>
					<wd-option
						v-for="(option, index) in filter.list"
						:key="index"
						:label="option.label"
						:value="option.value"
					></wd-option>
				</wd-select>
				<a-date-picker
					v-else-if="filter.type === 'date'"
					:value="formData[filter.prop]"
					v-model:value="formData[filter.prop]"
					v-bind="filter.options"
					:size="filter.options.size || 'small'"
				></a-date-picker>
				<range-picker
					v-else-if="filter.type === 'range'"
					:value="formData[filter.prop]"
					v-model:value="formData[filter.prop]"
					v-bind="filter.dateOptions"
					:size="filter.dateOptions?.size || 'small'"
				></range-picker>
				<component
					v-else
					:is="filterMap[filter.type]"
					:placeholder="filter.placeholder || filter.label"
					:value="formData[filter.prop]"
					v-model="formData[filter.prop]"
				>
				</component>
			</wd-form-item>
		</wd-form>
	</div>
</template>
