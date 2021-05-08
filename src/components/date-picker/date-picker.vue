<template>
    <a-date-picker></a-date-picker>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
export default defineComponent({
    name: 'wd-date-picker',
    props: {
        
    },
    emits: ['click'],
    setup(props, {emit}) {
        
        return  {   
            
        };
    }
});
</script>

<style lang="less" scoped>
@import url(./style/index);
</style>