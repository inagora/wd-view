<template>
    <component :is="pickerType"/>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
interface WdPickerProps {
    type: string
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
        type: {
            default: 'date',
            required: true
        }
    },
    emits: ['click'],
    setup(props: WdPickerProps, {emit}) {
        let pickerType = ref('date');
        pickerType = pickerTypes[props.type];
        return  {   
            pickerType
        };
    }
});
</script>

<style lang="less" scoped>
@import url(./style/index);
</style>