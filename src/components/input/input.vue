<template>
    <div
        :class="[
            type === 'textarea' ? 'wd-textarea' : 'wd-input__outer',
        ]">
        <template v-if="type !== 'textarea'">
            <input 
                class="wd-input"
                v-bind="$attrs"
                :type="type"
                :disabled="disabled"
                :readonly="readonly">
        </template> 
        <textarea 
            v-else
            class="textarea wd-input-textarea wd-textarea"
            v-bind="$attrs"
            :type="type"
            :disabled="disabled"
            :readonly="readonly"> 
        </textarea>  
    </div>
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
        size: {
            type: String,
            default: ''
        },
        resize: {
            type: Boolean,
            default: ''
        },
        disabled: Boolean,
        readonly: Boolean
    },
    setup(props, {emit}) {
        
    }
});
</script>

<style lang="less" scoped>
@import url(./style/index);
</style>