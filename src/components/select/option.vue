<template>
    <div 
        class="wd-select-item"
        :class="{'wd-select-item-option-selected': selected, 'wd-select-item-option-active': isItemActived}"
        @mouseover="mouseoverHandler"
        @mouseleave="mouseleaveHandler">
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
    setup(props, context) {
        let {active} = toRefs(props);
        let isItemActived = ref(active.value);
        const mouseoverHandler = () => {
            isItemActived.value = true;
        }   
        const mouseleaveHandler = () => {
            isItemActived.value = false;
        }
        return {
            mouseoverHandler,
            mouseleaveHandler,
            isItemActived
        }
    }
});
</script>