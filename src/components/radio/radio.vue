<template>
    <div class="wd-radio-wrapper">
        <span :class="[
            'wd-radio',
            {
                'wd-radio-checked': isChecked,
                'wd-radio-disabled': disabled
            }
        ]">
            <input 
                ref="input"
                class="wd-radio-input"
                :disabled="disabled"
                :checked="isChecked"
                @change="handleInputChange"
                type="radio">
            <span class="wd-radio-inner"></span>
        </span>
        <span><slot></slot></span>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref, watch} from 'vue';

interface WdRadioProps {
    disabled: boolean,
    checked: boolean,
    modelValue: boolean | string | number
}
export default defineComponent({
    name: 'wd-radio',
    inheritAttrs: false,
    props: {
        modelValue: {
            type: [Boolean, String, Number],
            default: ''
        },
        checked: {
            required: true,
            default: false,
            type: Boolean
        },
        disabled: Boolean,
    },
    emits: ['update:modelValue', 'change'],
    setup(props: WdRadioProps, ctx) {
        const isChecked = ref(false);
        const handleInputChange = () => {
            isChecked.value = !isChecked.value;
            ctx.emit('change', isChecked.value);
            ctx.emit('update:modelValue', isChecked.value);
        }
        watch(() => props.checked, val => {
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