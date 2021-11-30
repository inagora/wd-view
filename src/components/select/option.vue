<template>
    <div
        v-show="isItemVisible" 
        tabindex="3"
        class="wd-select-item wd-select-item-option"
        :class="{'wd-select-item-option-selected': isItemSelected, 'wd-select-item-option-active': isItemActived}"
        @mouseover="mouseoverHandler"
        @mouseleave="mouseleaveHandler"
        @click="clickHandler">
        <span class="wd-select-item-option-content">
            {{label}}
        </span>
        <span v-if="isItemSelected" class="wd-select-item-option-state" unselectable="on" aria-hidden="true" style="user-select: none;"><span role="img" aria-label="check" class="anticon anticon-check"><svg focusable="false" class="" data-icon="check" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="64 64 896 896"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg></span></span>
    </div>
</template> 

<script lang="ts">
import {defineComponent, toRefs, ref, inject, watch} from 'vue';
export default defineComponent({
    name: 'WdOption',
    props: {
        label: String,
        value: String,
        selected: {
            type: Boolean,
            default: false
        },
        active: {
            type: Boolean,
            default: false
        },
        tabindex: Number
    },
    emits: ['optionSelected'],
    setup(props, context) {
        let {active, selected, value} = toRefs(props);
        let isItemActived = ref(active.value);
        let isItemSelected = ref(selected.value);
        const optionClickHandler: any = inject('optionClickHandler');
        const removeItem: any = inject('removeItem'); // 删除的元素
        const selectedItem: any = inject('selectedItem'); // 选择的元素
        let multiple = inject('multiple');
        let selectedArray: any = inject('selectedArray');
        let currentCount = selectedArray.length;
        let limitCount: number = inject('limitCount');
        let isItemVisible = ref(true);
        let searchKey: any = inject('searchKey');

        // methods
        const mouseoverHandler = () => {
            isItemActived.value = true;
        }   
        const mouseleaveHandler = () => {
            isItemActived.value = false;
        }
        // 选项点击
        const clickHandler = () => {
            console.log(isItemSelected.value);
            if(multiple) {
                if(!isItemSelected.value && currentCount >= limitCount) return; // 选中时才判断限制，取消选中不用判断
                isItemSelected.value = !isItemSelected.value;
            } else {
                isItemSelected.value = true;
            }
            optionClickHandler({
                value: value.value,
                selected: isItemSelected.value
            });
        }

        // 
        const updateOptions = () => {
            if(props.label.indexOf(searchKey.value) > -1) {
                isItemVisible.value = true;
            } else {
                isItemVisible.value = false;
            }
        }

        // watch 
        watch(removeItem, () => {
            if(removeItem.value.value === value.value) {
                isItemSelected.value = false;
            }
        });
        watch(selectedItem, () => {
            if(selectedItem.value.value === value.value) {
                isItemSelected.value = true;
            } else {
                isItemSelected.value = false;
            }
        });
        watch(selectedArray, () => {
            currentCount = selectedArray.length;
        });
        watch(searchKey, () => {
            updateOptions();
        });
        return {
            mouseoverHandler,
            mouseleaveHandler,
            clickHandler,
            isItemActived,
            optionClickHandler,
            isItemSelected,
            isItemVisible
        }
    }
});
</script>