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
import { isObject, isFuction } from '../utils/util';
const config = inject('config');
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
});
const changeHandler = (val, fn) => {
	fn && fn(val);
};
// 获取搜索参数
const getSearchParams = () => {
	return formData.value;
};
const setSearchParams = (data) => {
	formData.value = Object.assign({}, formData.value, data);
};
// 暴露事件
defineExpose({
	getSearchParams,
	setSearchParams,
});
</script>

<template>
	<div class="pro-form" v-if="searchFilters.length > 0">
		<wd-form
			ref="searchForm"
			label-align="right"
			size="small"
			label-position="top"
			inline
			:show-label="config.showFormLabel"
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
					:value="formData[filter.prop]"
					:multiple="filter.type === 'multiple'"
					v-model="formData[filter.prop]"
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
					v-bind="filter.dateOptions"
					:size="filter.dateOptions?.size || 'small'"
					:locale="locale"
				></a-date-picker>
				<range-picker
					v-else-if="filter.type === 'range'"
					:value="formData[filter.prop]"
					v-model:value="formData[filter.prop]"
					v-bind="filter.dateOptions"
					:size="filter.dateOptions?.size || 'small'"
					:locale="locale"
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
