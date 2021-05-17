<template>
    <component 
        :is="pickerType"
        :placeholder="placeholder"
        :allow-clear="clearable"
        :disabled="disabled"
        :format="format"
        :value-format="valueFormat"
        :size="size"
        :separator="separator"
        :default-value="_defaultValue"
        v-model="modelValue"
        @change="change"/>
</template>

<script lang="ts">
import {defineComponent, PropType, ref} from 'vue';
interface WdPickerProps {
    type: string,
    clearable: boolean,
    disabled: boolean,
    defaultValue: any, // 日期类型或者string类型
    format: string, // 显示格式化： YYYY-MM-DD HH:mm:ss
    valueFormat: string, // 值的格式化
    size: string, // large/small
    modelValue: Date | string,
    placeholder: any,
    separator: string // range 的分隔符
}
const pickerTypes = {
    date: 'ADatePicker',
    month: 'AMonthPicker',
    range: 'ARangePicker',
    week: 'AWeekPicker',
    time: 'ATimePicker'
}
export default defineComponent({
    name: 'wd-date-picker',
    props: {
        modelValue: {
            type: [Date, String] as PropType<Date|string>
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
        separator: String
    },
    emits: ['update:modelValue', 'change'],
    setup(props: WdPickerProps, {emit}) {
        let pickerType = ref('date');
        pickerType = pickerTypes[props.type];
        const change = (val) => {
            emit('update:modelValue', val);
            emit('change', val);
        }
        // 默认日期
        let _defaultValue = ref('');
        if(props.defaultValue) _defaultValue.value = props.defaultValue;
        // rang类型需要设置数组
        if(props.type === 'range' && !(props.defaultValue instanceof Array)) {
            console.warn('rangepicker need Array form defaultValue');
        }
        return  {   
            pickerType,
            change,
            _defaultValue
        };
    }
});
</script>

<style lang="less" scoped>
@import url(./style/index);
</style>