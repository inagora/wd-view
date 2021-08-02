<template>
    <div 
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
import {defineComponent, toRefs, ref, inject} from 'vue';
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
        }
    },
    emits: ['optionSelected'],
    setup(props, context) {
        let {active, selected} = toRefs(props);
        let isItemActived = ref(active.value);
        let isItemSelected = ref(selected.value);
        const select = inject('selectWrapper');
        const optionClickHandler = inject('optionClickHandler');
        let multiple = inject('multiple');
        const mouseoverHandler = () => {
            isItemActived.value = true;
        }   
        const mouseleaveHandler = () => {
            isItemActived.value = false;
        }
        // 选项点击
        const clickHandler = () => {
            if(multiple) {
                isItemSelected.value = !isItemSelected.value;
            } else {
                console.log(222);
                isItemSelected.value = true;
            }
            // @ts-ignore
            optionClickHandler(props.value);
        }
        return {
            mouseoverHandler,
            mouseleaveHandler,
            clickHandler,
            isItemActived,
            select,
            optionClickHandler,
            isItemSelected
        }
    }
});
</script>