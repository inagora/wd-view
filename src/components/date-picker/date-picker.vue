<!-- eslint-disable vue/no-mutating-props -->
<template>
	<component
		:is="pickerType"
		:placeholder="placeholder"
		:allow-clear="clearable"
		:disabled="pickDisabled"
		:format="format"
		:value-format="valueFormat"
		:size="inputSize"
		:separator="separator"
		:default-value="_defaultValue"
		:locale="dateLocale"
		v-model="modelValue"
		v-bind="$attrs"
		@change="change"
	/>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, inject, onMounted } from 'vue';
import {
	wdFormKey,
	wdFormItemKey,
	WdFormProps,
	WdFormItemProps,
	WdFormItemContext
} from '../form/props';
import ADatePicker from 'ant-design-vue/lib/date-picker';
import { RangePicker } from 'ant-design-vue/lib/date-picker/dayjs';
import 'ant-design-vue/lib/date-picker/style/index.css';
import 'ant-design-vue/lib/button/style/index.css';
import locale from 'ant-design-vue/lib/date-picker/locale/zh_CN';
import { loadJs, loadCss } from '../../utils/util';
interface WdPickerProps {
	type: string;
	clearable: boolean;
	disabled: boolean;
	defaultValue: any; // 日期类型或者string类型
	format: string; // 显示格式化： YYYY-MM-DD HH:mm:ss
	valueFormat: string; // 值的格式化
	size: string; // large/small
	modelValue: Date | string;
	placeholder: any;
	separator: string; // range 的分隔符
}
const pickerTypes = {
	date: 'ADatePicker',
	range: 'RangePicker'
};
export default defineComponent({
	name: 'wd-date-picker',
	components: {
		ADatePicker,
		RangePicker
	},
	props: {
		modelValue: {
			type: [Date, String] as PropType<Date | string>
		},
		type: {
			default: 'date',
			required: true
		},
		clearable: Boolean,
		disabled: Boolean,
		defaultValue: Object,
		format: String,
		size: String,
		placeholder: Object,
		separator: String,
		valueFormat: String
	},
	emits: ['update:modelValue', 'change'],
	setup(props: WdPickerProps, { emit }) {
		const dateLocale = ref(locale);
		const wdForm = inject(wdFormKey, {} as WdFormProps);
		const wdFormItem = inject(wdFormItemKey, {} as WdFormItemContext);
		let pickerType = ref('date');
		pickerType.value = pickerTypes[props.type];
		const change = (val) => {
			emit('update:modelValue', val);
			emit('change', val);
			wdFormItem.formItemMitt?.emit('wd.form.change', [val]);
		};

		let inputSize = props.size || wdFormItem.size || wdForm.size;
		let pickDisabled = props.disabled || wdFormItem.disabled || wdForm.disabled;
		// 默认日期
		let _defaultValue = ref('');
		if (props.defaultValue) _defaultValue.value = props.defaultValue;
		// rang类型需要设置数组
		if (props.type === 'range' && !(props.defaultValue instanceof Array)) {
			console.warn('rangepicker need Array form defaultValue');
		}
		// onMounted(() => {
		//   loadCss(
		//     "https://cdn.jsdelivr.net/npm/ant-design-vue@2.2.0/dist/antd.min.css"
		//   );
		//   loadJs(
		//     "https://cdn.jsdelivr.net/npm/ant-design-vue@2.2.0/dist/antd.min.js"
		//   );
		// });
		return {
			pickerType,
			change,
			_defaultValue,
			inputSize,
			pickDisabled,
			dateLocale,
			onMounted
		};
	}
});
</script>
