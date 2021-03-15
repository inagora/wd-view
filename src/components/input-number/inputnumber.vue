<template>
    <div
        :class="[
            'wd-input-number',
            {
                'wd-input-group': $slots.prepend || $slots.append,
                'wd-input-affix-wrapper': $slots.prefix || prefixIcon || clearable || $slots.suffix || suffixIcon
            }
        ]">
        <div class="wd-input-number-handler-wrap">
            <span
                unselectable="unselectable"
                class="wd-input-number-handler wd-input-number-handler-up"
                onClick={preventDefault}
            >
                <up-outlined />
            </span>
            <span
                unselectable="unselectable"
                class="wd-input-number-handler wd-input-number-handler-down"
                onClick={preventDefault}
            >
                <down-outlined />
            </span>
        </div>
        <wd-input 
            ref="input"
            type="text"
            :size="size"
            :disabled="disabled"
            :readonly="readonly"
            :model-value="displayValue"
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
    modelValue: number,
    max: number,
    min: number,
    step: string | number,
    precision: number,
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
            type: Number,
            default: 0
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
        },
        precision: {
            type: Number,
            validator: (val: number) => val >= 0 && val === parseInt(val + '', 10)
        }
    },
    emits: ['update:modelValue', 'input', 'change', 'clear'],
    setup(props: WdInputNumberProps, ctx) {
        const input = ref(null);

        const data = reactive({
            currentValue: props.modelValue
        });
        const displayValue = computed(() => {
            return data.currentValue;
        });

        const handleInput = val => {
            ctx.emit('update:modelValue', val);
            ctx.emit('input', val);
            // nextTick(setNativeInputValue);
        }
        const handleChange = event => {
            ctx.emit('change', event.target.value);
        }

        const toPrecision = (num, pre?) => {
            if(pre === undefined) pre = numPrecision.value;
            return parseFloat(
                Math.round(num * Math.pow(10, pre)) / Math.pow(10, pre) + ''
            );
        }

        const getPrecision = value => {
            if (value === undefined) return 0;
            const valueString = value.toString();
            const dotPosition = valueString.indexOf('.');
            let precision = 0;
            if (dotPosition !== -1) {
                precision = valueString.length - dotPosition - 1;
            }
            return precision;
        }

        const increase = val => {
            if(props.disabled || props.readonly) return;
            val++;
            setCurrentValue(val);
        }

        const setCurrentValue = val => {
            ctx.emit('update:modelValue', val);
            ctx.emit('input', val);
            data.currentValue = val;
        }

        const numPrecision = computed(() => {
            const stepPrecision = getPrecision(props.step);
            if (props.precision !== undefined) {
                if (stepPrecision > props.precision) {
                    console.warn(
                        '[Warn][InputNumber]precision should not be less than the decimal places of step',
                    )
                }
                return props.precision;
            } else {
                return Math.max(getPrecision(props.modelValue), stepPrecision);
            }
        })

        watch(() => props.modelValue, value => {
            let newVal = value === undefined ? 0 : Number(value);
            if(newVal !== undefined) {
                if(isNaN(newVal)) return;
                if(props.precision !== undefined) {
                    newVal = toPrecision(newVal, props.precision);
                }
            }
            if(newVal !== undefined && newVal >= props.max) {
                newVal = props.max;
                ctx.emit('update:modelValue', newVal);
            }
            if(newVal !== undefined && newVal <= props.min) {
                newVal = props.min;
                ctx.emit('update:modelValue', newVal);
            }
            data.currentValue = newVal;
        }, {
            immediate: true
        });
        onMounted(() => {
            
        });
        return {
            handleInput,
            handleChange,
            input,
            displayValue
        };
    }
});
</script>

<style lang="less" scoped>
@import url(./style/index);
</style>