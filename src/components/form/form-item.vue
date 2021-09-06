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
import {computed, defineComponent, inject, reactive} from 'vue';
import {WdFormProps} from './props';
export default defineComponent({
    name: 'wd-form-item',
    props: {
        label: String,
        labelWidth: String,
    },
    setup(props) {
        let wdForm = inject('wdForm', {} as WdFormProps);
        let labelStyle = computed(() => {
            let labelWidth = props.labelWidth || wdForm.labelWidth;
            let labelAlign = wdForm.labelAlign;
            return {
                width: labelWidth,
                align: labelAlign
            }
        });
        return {
            labelStyle,
            wdForm
        }
    }
});
</script>