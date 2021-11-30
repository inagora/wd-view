<template>
    <button 
        class="wd-btn"
        :class="[
            type ? 'wd-btn-' + type : '',
            size ? 'wd-btn-' + sizeMap[size] : '',
            roundShape ? 'wd-btn-roundshape-' + roundShape : '',
            {
                'wd-btn-loading': loading,
                'wd-btn-disabled': disabled,
            }
        ]"
        :type="nativeType"
        :disabled="disabled"
        @click="handleClick"
        >
            <component :is="icon" />
            <slot name="default"></slot>
        </button>
</template>

<script lang="ts">
import {defineComponent, reactive, PropType} from 'vue';
type ButtonTypes = PropType<'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text' | 'dashed'>;
type ButtonSizes = PropType<'small' | 'large'>;
type ButtonRoundShape = PropType<'none' | 'small' | 'large' | 'circle'>;
type ButtonNativeType = PropType<'button' | 'submit' | 'reset'>;
// import * as IconList from '@ant-design/icons-vue';
export default defineComponent({
    name: 'wd-button',
    props: {
        type: {
            type: String as ButtonTypes,
            default: 'default'
        },
        nativeType: {
            type: String as ButtonNativeType,
            default: 'button'
        },
        size: {
            type: String as ButtonSizes,
            default: 'small'
        },
        roundShape: {
            type: String as ButtonRoundShape,
            default: 'small'
        },
        icon: {
            type: String,
            default: ''
        },
        disabled: Boolean,
        loading: Boolean
    },
    // components: {
    //     ...IconList
    // },
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
<style lang="less">
@import url(./style/index);
</style>