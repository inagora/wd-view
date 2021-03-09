<template>
    <div
        :class="[
            type === 'textarea' ? 'wd-textarea' : 'wd-input__outer',
        ]">
        <template v-if="type !== 'textarea'">
            <input 
                :class="[
                    'wd-input',
                    'wd-input-' + sizeMap[size]
                ]"
                v-bind="$attrs"
                :type="type"
                :disabled="disabled"
                :readonly="readonly">
            <span v-if="isWordLimitVisible" class="wd-input__count">
                <span class="wd-input__count-inner">
                    {{textLength}}/{{upperLimit}}
                </span>
            </span>
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
import {defineComponent, PropType, reactive, computed} from 'vue';
interface WdInputProps {
    type: string,
    size: string,
    showWordLimit: boolean,
    clearable: boolean,
    showPassword: boolean,
    disabled: boolean,
    suffixIcon: string,
    prefixIcon: string,
    resize: boolean,
    readonly: boolean,
    modelValue: string
}
export default defineComponent({
    name: 'wd-input',
    inheritAttrs: false,
    props: {
        modelValue: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'text'
        },
        size: {
            type: String,
            default: 'default'
        },
        showWordLimit: {
            type: Boolean,
            default: false
        },
        showPassword: {
            type: Boolean,
            default: false
        },
        resize: {
            type: Boolean,
            default: true
        },
        suffixIcon: {
            type: String,
            default: ''
        },
        prefixIcon: {
            type: String,
            default: ''
        },
        disabled: Boolean,
        readonly: Boolean,
        clearable: Boolean
    },
    setup(props: WdInputProps, ctx) {
        const sizeMap = reactive({
            small: 'sm',
            large: 'lg',
            default: ''
        });
        // 是否显示字符限制
        const isWordLimitVisible = computed(() => {
            return props.showWordLimit && 
                ctx.attrs.maxlength && 
                (props.type === 'text' || props.type === 'textarea') &&
                !props.disabled &&
                !props.readonly && 
                !props.showPassword
        });
        // 输入的文本长度
        console.log(props.modelValue);
        const textLength = computed(() => {
            return props.modelValue.length;
        });
        const upperLimit = computed(() => {
            return ctx.attrs.maxlength;
        });
        return {
            sizeMap,
            isWordLimitVisible,
            textLength,
            upperLimit
        };
    }
});
</script>

<style lang="less" scoped>
@import url(./style/index);
</style>