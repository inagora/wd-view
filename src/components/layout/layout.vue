<template>
    <div class="wd-layout">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import './style/index';
export default defineComponent({
    name: 'wd-layout',
    props: {
        
    },
    emits: ['update:modelValue', 'input', 'change', 'clear'],
    setup(props, ctx) {
        
        return {
            
        };
    }
});
</script>

<style lang="less" scoped>

</style>