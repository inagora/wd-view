<template>
    <button class="wd-button"><slot></slot></button>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    name: 'wd-button',
    props: {},
    setup() {

    }
});
</script>

<style lang="less" scoped>
@import url(./style/index.less);
</style>

