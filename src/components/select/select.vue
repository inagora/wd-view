<template>
    <div 
        ref="selectWrapper"
        class="wd-select"
        :class="[disabled ? 'wd-select-disabled' : 'wd-select-enabled', 'wd-select-' + sizeMap[size], multiple ? ' wd-select-multiple' : ' wd-select-single']">
        <wd-popper
            ref="popper"
            style="width: 150px;"
            placement="bottom-start"
            effect="light"
            pure
            transition="el-zoom-in-top"
            :stop-popper-mouse-event="false"
            :gpu-acceleration="false"
        >
            <template #trigger>
                <div class="select-trigger">
                    <div 
                        v-if="multiple"
                        @click="clickHandler"
                        tabindex="0"
                        ref="selectSelector"
                        class="wd-select-selector">
                        <div role="combobox" class="wd-select-selection wd-select-selection--multiple">
                            <template 
                                v-if="selectedArray.length > 0">
                                <div 
                                    v-for="(selected, index) in selectedArray" 
                                    :key="index"
                                    class="wd-select-selection-item">
                                    <span class="wd-select-selection-item">
                                        <span class="wd-select-selection-item-content">
                                            {{selected.label}}
                                        </span>
                                        <span @click="removeSelectedItem(index)" class="wd-select-selection-item-remove" unselectable="on" aria-hidden="true" style="user-select: none;"><span role="img" aria-label="close" class="anticon anticon-close"><svg focusable="false" class="" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="64 64 896 896"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg></span></span>
                                    </span>
                                </div>
                            </template>
                            <div v-else class="wd-select-selection-placeholder">
                                {{placeholder}}
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
                        class="wd-select-selector">
                        <div role="combobox" class="wd-select-selection wd-select-selection--single">
                            <div v-if="selectedValue">
                                {{selectedValue.label}}
                            </div>
                            <div v-else class="wd-select-selection-placeholder">
                                {{placeholder}}
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
            <template #default>
                <div class="wd-select-options">
                    <slot></slot>
                </div>
            </template>
        </wd-popper>
    </div>
</template> 

<script lang="ts">
/**
 * todo
 * 1、options组件 // 7.18前完成
 * 2、下拉选项append到body上 // 7.18前完成
 * 3、multiple模式 // 7.25前完成
 * 4、value为tag的形式 // 7.25前完成
 * 5、cascade模式 // 7.31前完成
 * 
 * z-index 的深度区分，统一规范
 * option的优化：每一个item可以增加z-index
 */
import {defineComponent, reactive, ref, toRefs, nextTick, provide} from 'vue';
type optionType = {
    value: any,
    selected: boolean
}
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
        const {slots, emit} = context;
        const selectSelector = ref(null);
        const selectWrapper = ref<HTMLElement | null>(null);
        const isMultiple = ref(props.multiple);
        const removeItem = ref(null); // 删除的元素
        // nextTick(() => {
        //     // 失去焦点隐藏选项
        //     selectSelector.value.addEventListener('blur', () => {
        //         optionsShow.value = false;
        //     }, false);
        // });
        let selectedValue = ref(props.modelValue);
        let selectedArray = ref([]);
        let {visibleValue} = toRefs(props);
        let optionsShow = ref(visibleValue.value);
        
        // methods
        // 点击显示与隐藏
        const clickHandler = () => {
            optionsShow.value = !optionsShow.value;
        } 
        // 选项显示与隐藏钩子
        const visibleChange = () => {
            context.emit('visibleChange', visibleValue.value);
        }
        // option item 点击
        const optionClickHandler = (value) => {
            setSelectedValue(value);
        }
        // 设置选择的值
        const setSelectedValue = (val: optionType) => {
            let options = slots.default();
            if(isMultiple.value) { // 多选
                if(val.selected) {
                    let selectedOption = options.filter(item => {
                        return item.props.value === val.value;
                    })[0];
                    selectedArray.value.push(selectedOption.props);
                } else {
                    let removeIndex = -1;
                    selectedArray.value.forEach((item, index) => {
                        if(item.value === val.value) removeIndex = index;
                    });
                    if(removeIndex > -1) {
                        selectedArray.value.splice(removeIndex, 1);
                    }
                }
                
            } else {
                let selectedOption = options.filter(item => {
                    return item.props.value === val.value;
                })[0];
                selectedValue.value = selectedOption.props;
            }
            emit('update:modelValue', val);
            emit('change', val);
        }
        const removeSelectedItem = (index) => {
            removeItem.value = selectedArray.value.splice(index, 1)[0];
        }
        provide('selectedItem', selectedValue);
        provide('removeItem', removeItem);
        provide('multiple', isMultiple.value);
        // vue3中没有$on，所以用provide方法将父组件的方法传给子组件，子组件直接调用
        provide('optionClickHandler', optionClickHandler);
        return {
            sizeMap,
            clickHandler,
            optionsShow,
            selectSelector,
            selectWrapper,
            visibleChange,
            selectedValue,
            optionClickHandler,
            selectedArray,
            removeSelectedItem
        }
    }
});
</script>
<style lang="less">
@import url(./style/index);
// .wd-popper {
//     transform: translate3d(12px, 100px, 0) !important;
// }
</style>