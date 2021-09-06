<template>
    <div>
        <form class="wd-form wd-form-horizontal">
            <slot></slot>
        </form>
    </div>
</template> 

<script lang="ts">
import {defineComponent, provide, reactive, toRefs} from 'vue';
export default defineComponent({
    name: 'wd-form',
    props: {
        modelValue: {
            type: Object
        },
        labelAlign: String,
        labelWidth: String,
        inline: Boolean,
        inlineMessage: String,
        showMessage: Boolean,
        size: String,
        disabled: Boolean
    },
    setup(props, context) {
        const sizeMap = reactive({
            small: 'sm',
            large: 'lg',
            default: ''
        });

        provide('wdForm', reactive({...toRefs(props)}));

        return {
            sizeMap
        }
    }
});
</script>
<style lang="less">
@import url(./style/index);
</style>