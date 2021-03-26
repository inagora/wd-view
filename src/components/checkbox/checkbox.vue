<template>
    <div class="wd-checkbox-wrapper">
        <span :class="[
            'wd-checkbox',
            {
                'wd-checkbox-checked': isChecked,
                'wd-checkbox-disabled': disabled
            }
        ]">
            <input 
                ref="input"
                class="wd-checkbox-input"
                :disabled="disabled"
                :checked="isChecked"
                @change="handleInputChange"
                type="checkbox">
            <span class="wd-checkbox-inner"></span>
        </span>
        <span><slot></slot></span>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref, watch} from 'vue';

interface WdCheckboxProps {
    disabled: boolean,
    checked: boolean
}
export default defineComponent({
    name: 'wd-checkbox',
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