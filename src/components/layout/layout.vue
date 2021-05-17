<template>
    <div :class="['wd-layout', hasSider ? 'wd-layout-has-sider' : '']">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import './style/index';
export default defineComponent({
    name: 'wd-layout',
    props: {
        
    },
    emits: ['update:modelValue', 'input', 'change', 'clear'],
    setup(props, ctx) {
        let hasSider = ref(false);
        return {
            hasSider
        };
    }
});
</script>

<style lang="less" scoped>

</style>