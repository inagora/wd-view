<template>
    <a 
        class="wd-input"
        :class="[
            type ? 'wd-input-' + type : '',
            disabled && 'wd-input-disabled',
            underline && !disabled && 'wd-input-underline'
        ]"
        :href="disabled ? null : href"
        @click="handleClick"
        ><slot></slot></a>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
type ButtonTypes = PropType<'primary' | 'success' | 'warning' | 'danger' | 'info'>;
export default defineComponent({
    name: 'wd-input',
    props: {
        type: {
            type: String as ButtonTypes,
            default: 'default'
        },
        href: {
            type: String,
            default: ''
        },
        icon: {
            type: Boolean,
            default: ''
        },
        underline: Boolean,
        disabled: Boolean
    },
    emits: ['click'],
    setup(props, {emit}) {
        const handleClick = options => {
            if(!props.disabled) {
                emit('click', options);
            }
        };
        return  {   
            handleClick
        };
    }
});
</script>

<style lang="less" scoped>
@import url(./style/index);
</style>