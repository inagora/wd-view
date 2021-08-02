<template>
    <div 
        class="wd-select-item"
        :class="{'wd-select-item-option-selected': selected, 'wd-select-item-option-active': isItemActived}"
        @mouseover="mouseoverHandler"
        @mouseleave="mouseleaveHandler"
        @click="clickHandler">
        <span class="wd-select-item-option">{{label}}</span>
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
        const mouseoverHandler = () => {
            isItemActived.value = true;
        }   
        const mouseleaveHandler = () => {
            isItemActived.value = false;
        }
        // 选项点击
        const clickHandler = () => {
            isItemSelected.value = true;
            // @ts-ignore
            optionClickHandler(props.value);
        }
        return {
            mouseoverHandler,
            mouseleaveHandler,
            clickHandler,
            isItemActived,
            select,
            optionClickHandler
        }
    }
});
</script>