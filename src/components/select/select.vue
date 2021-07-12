<template>
    <div class="wd-select wd-select-enabled wd-select-sm" style="width: 120px;">
        <div role="combobox" class="wd-select-selection wd-select-selection--single">
            <div class="wd-select-selection__rendered">
                <div title="Lucy" class="wd-select-selection-selected-value" style="display: block; opacity: 1;"></div>
            </div>
            <span unselectable="on" class="wd-select-arrow" style="user-select: none;">
                <i aria-label="图标: down" class="anticon anticon-down wd-select-arrow-icon">
                    <svg viewBox="64 64 896 896" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg>
                </i>
            </span>
        </div>
    </div>
</template> 

<script lang="ts">
import {defineComponent} from 'vue';
import './style/index';
export default defineComponent({
    name: 'wd-select',
    props: {
        modelValue: [Array, String, Number, Boolean, Object],
        autocomplete: {
            type: String,
            default: 'off',
        },
        automaticDropdown: Boolean,
        disabled: Boolean,
        clearable: Boolean,
        filterable: Boolean,
        allowCreate: Boolean, // 是否允许用户自己创建选项
        loading: Boolean, // 远程加载
        remote: Boolean, // 是否是远程加载
        loadingText: String,
        noMatchText: String,
        noDataText: String,
        remoteMethod: Function,
        multiple: Boolean, // 是否多选
        multipleLimit: {
            type: Number,
            default: 0,
        },
        placeholder: {
            type: String,
        },
        defaultFirstOption: Boolean,
        reserveKeyword: Boolean,
        popperAppendToBody: {
            type: Boolean,
            default: true,
        },
        clearIcon: {
            type: String,
            default: 'el-icon-circle-close',
        },
    },
    emits: ['update:modelValue', 'change', 'remove-tag', 'clear', 'visible-change', 'focus', 'blur'],
    setup(props) {
        return {
            
        }
    }
});
</script>
<style lang="less" scoped>
@import url(./style/index);
</style>