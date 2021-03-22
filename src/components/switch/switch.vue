<template>
    <button 
        class="wd-switch"
        :class="[
            {
                'wd-switch-checked': checked,
                'wd-switch-disabled': disabled,
                'wd-switch-sm': size,
            },
            'wd-switch-loading'
        ]"
        :aria-checked="checked"
        @click.prevent="handleChange">
        <LoadingOutlined loading class="wd-switch-loading-icon"/>
        <span class="wd-switch-inner"></span>   
    </button>
</template>

<script lang="ts">
import {defineComponent, reactive, PropType, computed, onMounted} from 'vue';
type SwitchSizes = PropType<'small' | 'large'>;
import * as IconList from '@ant-design/icons-vue';

type ModelValueType = boolean | string | number;

interface WdSwitchProps {
    modelValue: ModelValueType,
    size: string,
    disabled: boolean,
    loading: boolean
}

export default defineComponent({
    name: 'wd-switch',
    props: {
        modelValue: {
            type: [Boolean, String, Number] as PropType<ModelValueType>,
            value: false,
            required: true
        },
        size: {
            type: String as SwitchSizes,
            default: ''
        },
        disabled: Boolean,
        loading: Boolean
    },
    components: {
        ...IconList
    },
    emits: ['update:modelValue', 'change'],
    setup(props: WdSwitchProps, {emit}) {
        const sizeMap = reactive({
            small: 'sm'
        });
        const checked = computed((): ModelValueType => {
            return props.modelValue;
        });
        const handleChange = () => {
            if(props.disabled) return;
            const val = !props.modelValue;
            emit('update:modelValue', val);
            emit('change', val);
        }
        onMounted(() => {
            console.log(props);
        });
        return  {
            sizeMap,
            checked,
            handleChange
        };
    }
});
</script>

<style lang="less" scoped>
@import url(./style/index);
</style>