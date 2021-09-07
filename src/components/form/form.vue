<template>
    <div>
        <form class="wd-form wd-form-horizontal">
            <slot></slot>
        </form>
    </div>
</template> 

<script lang="ts">
/**
 * 1、form以及foritem组件以及基本属性
 * 2、各个组件的整合
 * 3、子组件基本属性
 * 
 * todo
 * 1、子组件属性
 * 2、表单验证
 * 
 * seperator
 * offset 
 * layout: label的align属性
 * 
 * 原生表单回车触发提交问题
 * 
 * 每一个item增加错误message
 */
import {defineComponent, provide, reactive, toRefs} from 'vue';
import {wdFormKey} from './props';
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
        provide(wdFormKey, reactive({...toRefs(props)}));

        return {
            
        }
    }
});
</script>
<style lang="less">
@import url(./style/index);
</style>