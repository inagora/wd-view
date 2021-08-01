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
import {defineComponent, toRefs, ref} from 'vue';
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
        let {emit} = context;
        const mouseoverHandler = () => {
            isItemActived.value = true;
        }   
        const mouseleaveHandler = () => {
            isItemActived.value = false;
        }
        // 选项点击
        const clickHandler = () => {
            isItemSelected.value = true;
            console.log(222);
            emit('optionSelected', '111');
        }
        return {
            mouseoverHandler,
            mouseleaveHandler,
            clickHandler,
            isItemActived
        }
    }
});
</script>