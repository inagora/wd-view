<template>
    <div 
        class="wd-select wd-select-single"
        :class="[disabled ? 'wd-select-disabled' : 'wd-select-enabled', 'wd-select-' + sizeMap[size]]">
        <wd-popper>
            <template #trigger>
                <div class="select-trigger">
                    <div 
                        v-if="multiple"
                        @click="clickHandler"
                        tabindex="0"
                        ref="selectSelector"
                        class="wd-select-selector"
                        style="width: 120px;">
                        <div role="combobox" class="wd-select-selection wd-select-selection--single">
                            <div v-if="modelValue">
                                {{modelValue}}
                            </div>
                            <span unselectable="on" class="wd-select-arrow" style="user-select: none;">
                                <i aria-label="图标: down" class="anticon anticon-down wd-select-arrow-icon">
                                    <svg viewBox="64 64 896 896" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg>
                                </i>
                            </span>
                        </div>
                    </div>
                    <div 
                        v-else
                        @click="clickHandler"
                        tabindex="1"
                        ref="selectSelector"
                        class="wd-select-selector"
                        style="width: 120px;">
                        <div role="combobox" class="wd-select-selection wd-select-selection--multiple">
                            <div v-if="modelValue">
                                {{modelValue}}
                            </div>
                            <span unselectable="on" class="wd-select-arrow" style="user-select: none;">
                                <i aria-label="图标: down" class="anticon anticon-down wd-select-arrow-icon">
                                    <svg viewBox="64 64 896 896" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg>
                                </i>
                            </span>
                        </div>
                    </div>
                </div>
            </template>
            <div :class="['wd-select-dropdown wd-select-dropdown--single wd-select-dropdown-placement-bottomLeft', optionsShow ? '' : 'wd-select-dropdown-hidden']">
                <div class="wd-select-dropdown-content">
                    <div class="wd-select-item" v-for="item in 20" :key="item">{{item}}</div>
                </div>
            </div>
        </wd-popper>
    </div>
</template> 

<script lang="ts">
/**
 * todo
 * 1、options组件 // 7.18前完成
 * 2、下拉项的选择 // 7.18前完成
 * 2、multiple模式 // 7.25前完成
 * 3、value为tag的形式 // 7.25前完成
 * 4、cascade模式 // 7.31前完成
 */
import {defineComponent, reactive, ref, toRefs, nextTick} from 'vue';
// import WdPopper from '../popper/index';
export default defineComponent({
    name: 'wd-select',
    // components: {
    //     WdPopper  
    // },
    props: {
        modelValue: [Array, String, Number, Boolean, Object],
        autocomplete: {
            type: String,
            default: 'off',
        },
        disabled: Boolean,
        clearable: Boolean,
        filterable: Boolean,
        allowCreate: Boolean, // 是否允许用户自己创建选项
        loading: Boolean, // 远程加载
        remote: Boolean, // 是否是远程加载
        loadingText: String,
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
        clearIcon: {
            type: String,
            default: 'a-icon-circle-close',
        },
        size: String,
        visibleValue: {
            type: Boolean,
            default: false
        },
        valueType: { // 选项是否是标签
            type: Boolean,
            default: false
        }
    },
    emits: ['update:modelValue', 'change', 'remove-tag', 'clear', 'visibleChange', 'focus', 'blur'],
    setup(props, context) {
        const sizeMap = reactive({
            small: 'sm',
            large: 'lg',
            default: ''
        });
        const selectSelector = ref(null);
        nextTick(() => {
            // 失去焦点隐藏选项
            selectSelector.value.addEventListener('blur', () => {
                optionsShow.value = false;
            }, false);
        });
        
        let {visibleValue} = toRefs(props);
        let optionsShow = ref(visibleValue.value);
        // 点击显示与隐藏
        const clickHandler = () => {
            optionsShow.value = !optionsShow.value;
        } 
        // 选项显示与隐藏钩子
        const visibleChange = () => {
            context.emit('visibleChange', visibleValue.value);
        }
        return {
            sizeMap,
            clickHandler,
            optionsShow,
            selectSelector,
            visibleChange
        }
    }
});
</script>
<style lang="less" scoped>
@import url(./style/index);
</style>