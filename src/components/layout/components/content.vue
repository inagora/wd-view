<template>
    <div class="wd-layout-content">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'wd-layout-content',
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