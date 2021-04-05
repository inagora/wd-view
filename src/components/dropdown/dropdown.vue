<template>
    <trigger>
        <slot></slot>
    </trigger>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Trigger from '../trigger/trigger.vue';
export default defineComponent({
    name: 'wd-dropdown',
    props: {
        
    },
    components: {
        Trigger
    },
    emits: ['click'],
    setup(props, context) {
        
        return  {
            
        };
    }
});
</script>

<style lang="less">
@import url(./style/index);
</style>