<template>
    <div
        :class="[
            'wd-input-number',
            {
                'wd-input-group': $slots.prepend || $slots.append,
                'wd-input-affix-wrapper': $slots.prefix || prefixIcon || clearable || $slots.suffix || suffixIcon
            }
        ]">
        <span class="wd-input-prefix" v-if="$slots.prefix || prefixIcon">
            <component :is="prefixIcon" />
        </span>
        <wd-input 
            :class="[
                'wd-input',
                'wd-input-' + sizeMap[size]
            ]"
            v-bind="$attrs"
            ref="input"
            type="text"
            :disabled="disabled"
            :readonly="readonly"
            @input="handleInput"
            @change="handleChange"></wd-input>
    </div>
</template>

<script lang="ts">
import {defineComponent, reactive, computed, watch, ref, nextTick, shallowRef, onMounted} from 'vue';
import WdInput from '../input/input.vue';
import * as IconList from '@ant-design/icons-vue';
import {isObject} from '@vue/shared';
import type { PropType } from 'vue';

interface WdInputNumberProps {
    type: string,
    size: string,
    disabled: boolean,
    prefixIcon: string,
    readonly: boolean,
    modelValue: string,
    max: number,
    min: number,
    step: string | number
}

type StepType = Number | String;
export default defineComponent({
    name: 'wd-input-number',
    inheritAttrs: false,
    components: {
        ...IconList,
        WdInput
    },
    props: {
        modelValue: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'text'
        },
        size: {
            type: String,
            default: 'default'
        },
        prefixIcon: {
            type: String,
            default: ''
        },
        disabled: Boolean,
        readonly: Boolean,
        max: {
            type: Number,
            default: 0,
        },
        min: {
            type: Number,
            default: 0
        },
        step: {
            type: [Number, String] as PropType<string|number>,
            default: 1
        }
    },
    emits: ['update:modelValue', 'input', 'change', 'clear'],
    setup(props: WdInputNumberProps, ctx) {
        const sizeMap = reactive({
            small: 'sm',
            large: 'lg',
            default: ''
        });
        const input = ref(null);

        const nativeInputValue = computed(() => (props.modelValue === null || props.modelValue === undefined) ? '' : String(props.modelValue));
        watch(() => props.modelValue, val => {
            nextTick(() => {
                // setNativeInputValue();
            });
        });
        watch(nativeInputValue, val => {
            // setNativeInputValue();
        });

        const handleInput = event => {
            const { value } = event.target;
            ctx.emit('update:modelValue', value);
            ctx.emit('input', value);
            // nextTick(setNativeInputValue);
        }
        const handleChange = event => {
            ctx.emit('change', event.target.value);
        }
        const clear = () => {
            ctx.emit('update:modelValue', '');
            ctx.emit('change', '');
            ctx.emit('clear');
        }
        onMounted(() => {
            
        });
        return {
            sizeMap,
            handleInput,
            handleChange,
            clear,
            input,
        };
    }
});
</script>

<style lang="less" scoped>
@import url(./style/index);
</style>