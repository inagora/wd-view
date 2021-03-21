<template>
    <button 
        class="wd-switch"
        :class="{
            'wd-switch-checked': checked
        }"
        :aria-checked="checked">
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
            default: 'small'
        },
        disabled: Boolean,
        loading: Boolean
    },
    components: {
        ...IconList
    },
    emits: ['click'],
    setup(props: WdSwitchProps, context) {
        const handleClick = options => {
            context.emit('click', options);
        };
        const sizeMap = reactive({
            small: 'sm',
            large: 'lg'
        });
        const checked = computed((): ModelValueType => {
            return props.modelValue;
        });
        onMounted(() => {
            console.log(props);
        });
        return  {
            handleClick,
            sizeMap,
            checked
        };
    }
});
</script>

<style lang="less" scoped>
@import url(./style/index);
</style>