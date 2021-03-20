<template>
    <div 
        class="wd-switch"
        :class="{}">
        <input
            ref="input"
            class="wd-switch__input"
            type="checkbox"
            @change="handleChange"
            :disabled="switchDisabled"
        />    
    </div>
</template>

<script lang="ts">
import {defineComponent, reactive, PropType} from 'vue';
type SwitchSizes = PropType<'small' | 'large'>;
import * as IconList from '@ant-design/icons-vue';
export default defineComponent({
    name: 'wd-switch',
    props: {
        modelValue: {
            type: [Boolean, String, Number],
            value: false
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
    setup(props, context) {
        const handleClick = options => {
            context.emit('click', options);
        };
        const sizeMap = reactive({
            small: 'sm',
            large: 'lg'
        });
        return  {
            handleClick,
            sizeMap
        };
    }
});
</script>

<style lang="less" scoped>
@import url(./style/index);
</style>