<template>
    <header class="wd-layout-header">
        <slot></slot>
    </header>
</template>

<script lang="ts">
// @ts-nocheck
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'wd-layout-header',
    props: {
        
    },
    emits: ['update:modelValue', 'input', 'change', 'clear'],
    setup(props, ctx) {
        
        return {
            
        };
    }
});
</script>

<style lang="less">

</style>