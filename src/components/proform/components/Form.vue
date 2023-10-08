<script setup>
import { inject, onMounted, ref } from 'vue';
import ADatePicker from 'ant-design-vue/lib/date-picker';
import { RangePicker } from 'ant-design-vue/lib/date-picker/dayjs';
import locale from 'ant-design-vue/es/date-picker/locale/zh_CN';
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
} from '../../../index.ts';
import { isObject, isFuction } from '../../protable/utils/util';
const config = inject('config');
const model = inject('model');
const emitter = inject('emitter');
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
const formData = ref({});
const searchFilters = ref(config.filters);
// format filter
const formatFilter = (valueEnum) => {
	return Object.keys(valueEnum).map((key) => {
		return {
			label: valueEnum[key],
			value: key,
		};
	});
};
searchFilters.value.forEach((filter) => {
	if (filter.type === 'checkbox') {
		formData.value[filter.prop] = filter.value || false;
	} else {
		formData.value[filter.prop] = filter.value || '';
	}
	if (filter.type === 'select' || filter.type === 'multiple') {
		if (filter.valueEnum) {
			if (isFuction(filter.valueEnum)) {
				const valueEnum = filter.valueEnum();
				if (isObject(valueEnum)) {
					filter.list = formatFilter(valueEnum);
				}
			} else {
				if (isObject(filter.valueEnum)) {
					filter.list = formatFilter(filter.valueEnum);
				}
			}
		}
	}
	if (filter.prop) {
		model[filter.prop] = formData.value[filter.prop];
	} else {
		console.error('filter.prop is required');
	}
});
const changeHandler = (val, fn) => {
	fn && fn(val);
};
</script>

<template>
	<div class="pro-form" v-if="searchFilters.length > 0">
		<wd-form
			ref="searchForm"
			:show-label="config.showLabel"
			:label-align="config.labelAlign || 'right'"
			:label-width="config.labelWidth"
			:label-position="config.labelPosition || 'top'"
			:inline="config.inline"
			:inline-message="config.inlineMessage || false"
			:show-message="config.showMessage || false"
			:size="config.size || 'small'"
			:disabled="config.disabled || false"
			:readonly="config.readonly || false"
			:rules="config.rules || {}"
			:validate-on-rule-change="config.validateOnRuleChange || true"
			:colon="config.colon || true"
		>
			<wd-form-item
				v-for="filter in searchFilters"
				:key="filter.prop"
				:label="filter.label"
				:prop="filter.prop"
			>
				<wd-select
					v-if="filter.type === 'select' || filter.type === 'multiple'"
					width="150px"
					:is="filterMap[filter.type]"
					:placeholder="filter.placeholder || filter.label"
					:value="model[filter.prop]"
					:multiple="filter.type === 'multiple'"
					v-model="model[filter.prop]"
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
					:value="model[filter.prop]"
					v-model:value="model[filter.prop]"
					v-bind="filter.dateOptions"
					:size="filter.dateOptions?.size || 'small'"
					:locale="locale"
					:show-time="filter.dateOptions?.showTime || false"
				></a-date-picker>
				<range-picker
					v-else-if="filter.type === 'range'"
					:value="model[filter.prop]"
					v-model:value="model[filter.prop]"
					v-bind="filter.dateOptions"
					:size="filter.dateOptions?.size || 'small'"
					:locale="locale"
					:show-time="filter.dateOptions?.showTime || false"
				></range-picker>
				<component
					v-else
					:is="filterMap[filter.type]"
					:placeholder="filter.placeholder || filter.label"
					:value="model[filter.prop]"
					v-model="model[filter.prop]"
				>
				</component>
			</wd-form-item>
			<wd-form-item>
				<slot />
			</wd-form-item>
		</wd-form>
	</div>
</template>
<style>
.pro-form {
	border-bottom: 1px solid #d0d0d0;
	padding: 10px 0 10px 10px;
}
.wv-search-btns {
	display: flex;
	align-items: center;
	gap: 10px 8px;
}
.wd-select {
	min-width: 150px;
}
.wd-form-inline {
	gap: 10px;
}
.wd-form-inline .wd-form-item {
	margin-right: 0;
}
.wd-form-inline .wd-form-item-with-help {
	margin-bottom: 0;
}
</style>
