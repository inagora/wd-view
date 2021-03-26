<template>
    <div class="wd-checkbox-group">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref, watch} from 'vue';

interface WdCheckboxProps {
    disabled: boolean,
    checked: boolean,
    options: Array<string>
}
export default defineComponent({
    name: 'wd-checkbox-group',
    inheritAttrs: false,
    props: {
        checked: {
            required: true,
            default: false,
            type: Boolean
        },
        disabled: Boolean,
    },
    emits: ['update:modelValue', 'change'],
    setup(props: WdCheckboxProps, ctx) {
        const isChecked = ref(false);
        const handleInputChange = () => {
            isChecked.value = !isChecked.value;
            ctx.emit('change', isChecked.value);
        }
        watch(() => props.checked, val => {
            console.log(val, '#');
            isChecked.value = val;
        });
        return {
            isChecked,
            handleInputChange
        };
    }
});
</script>

<style lang="less">
@import url(./style/index);
</style>