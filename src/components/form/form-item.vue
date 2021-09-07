<template>
    <div 
        class="wd-form-item">
        <label 
            v-if="label"
            :style="labelStyle"
            class="wd-form-item-label">{{label}}</label>
        <slot></slot>
    </div>
</template> 

<script lang="ts">
import {computed, defineComponent, inject, provide, reactive, toRefs} from 'vue';
import {wdFormItemKey, WdFormProps, wdFormKey} from './props';
export default defineComponent({
    name: 'wd-form-item',
    props: {
        label: String,
        labelWidth: String,
    },
    setup(props) {
        let wdForm = inject(wdFormKey, {} as WdFormProps);
        let labelStyle = computed(() => {
            let labelWidth = props.labelWidth || wdForm.labelWidth;
            let labelAlign = wdForm.labelAlign;
            return {
                width: labelWidth,
                align: labelAlign
            }
        });
        
        provide(wdFormItemKey, reactive({...toRefs(props)}));
        return {
            labelStyle,
            wdForm
        }
    }
});
</script>