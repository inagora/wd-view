<template>
  <div
    :class="[
      'wd-input__outer',
      {
        'wd-input-group': $slots.prepend || $slots.append,
        'wd-input-affix-wrapper':
          $slots.prefix ||
          prefixIcon ||
          clearable ||
          $slots.suffix ||
          suffixIcon,
      },
    ]"
  >
    <template v-if="type !== 'textarea'">
      <span
        v-if="$slots.prepend"
        :class="[
          'wd-input__prepend',
          {
            'wd-input-group-addon': $slots.prepend,
          },
        ]"
      >
        <slot name="prepend"></slot>
      </span>
      <span class="wd-input-prefix" v-if="$slots.prefix || prefixIcon">
        <component :is="prefixIcon" />
      </span>
      <input
        :class="['wd-input', 'wd-input-' + inputSize]"
        v-bind="$attrs"
        :type="type"
        ref="input"
        :disabled="inputDisabled"
        :readonly="readonly"
        @input="handleInput"
        @change="handleChange"
        @blur="handleBlur"
      />
      <span v-if="isWordLimitVisible" class="wd-input__count">
        <span class="wd-input__count-inner">
          {{ textLength }}/{{ upperLimit }}
        </span>
      </span>
      <span
        v-if="$slots.append"
        :class="[
          'wd-input__append',
          {
            'wd-input-group-addon': $slots.append,
          },
        ]"
      >
        <slot name="append"></slot>
      </span>
      <span
        class="wd-input-affix"
        v-if="clearable"
        @mousedown.prevent
        @click="clear"
      >
        <close-circle-outlined />
      </span>
      <span class="wd-input-affix" v-else-if="$slots.suffix || suffixIcon">
        <component :is="suffixIcon" />
      </span>
    </template>
    <textarea
      v-else
      class="textarea wd-input wd-input-textarea"
      v-bind="$attrs"
      ref="textarea"
      :disabled="inputDisabled"
      :readonly="readonly"
      :style="textareaStyle"
      @input="handleInput"
      @change="handleChange"
      @blur="handleBlur"
    >
    </textarea>
    <span
      v-if="isWordLimitVisible && type === 'textarea'"
      class="wd-input__count wd-textarea"
    >
      <span class="wd-input__count-inner">
        {{ textLength }}/{{ upperLimit }}
      </span>
    </span>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  PropType,
  reactive,
  computed,
  watch,
  ref,
  nextTick,
  shallowRef,
  onMounted,
  inject,
} from "vue";
// import * as IconList from "@ant-design/icons-vue";
import calcTextareaHeight from "./calcTextareaHeight";
import { isObject } from "@vue/shared";
import {
  wdFormKey,
  wdFormItemKey,
  WdFormProps,
  WdFormItemProps,
  WdFormItemContext,
} from "../form/props";
interface WdInputProps {
  type: string;
  size: string;
  showWordLimit: boolean;
  clearable: boolean;
  showPassword: boolean;
  disabled: boolean;
  suffixIcon: string;
  prefixIcon: string;
  resize: boolean;
  readonly: boolean;
  modelValue: string;
  autosize: any;
}
type AutosizeProp =
  | {
      minRows?: number;
      maxRows?: number;
    }
  | boolean;
export default defineComponent({
  name: "wd-input",
  inheritAttrs: false,
  // components: {
  //   ...IconList,
  // },
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    size: {
      type: String,
      default: "default",
    },
    showWordLimit: {
      type: Boolean,
      default: false,
    },
    showPassword: {
      type: Boolean,
      default: false,
    },
    resize: {
      type: Boolean,
      default: true,
    },
    suffixIcon: {
      type: String,
      default: "",
    },
    prefixIcon: {
      type: String,
      default: "",
    },
    disabled: Boolean,
    readonly: Boolean,
    clearable: Boolean,
    autosize: {
      type: [Boolean, Object] as PropType<AutosizeProp>,
      default: false,
    },
  },
  emits: ["update:modelValue", "input", "change", "clear"],
  setup(props: WdInputProps, ctx) {
    const sizeMap = reactive({
      small: "sm",
      large: "lg",
      default: "",
    });
    const wdForm = inject(wdFormKey, {} as WdFormProps);
    const wdFormItem = inject(wdFormItemKey, {} as WdFormItemContext);
    let inputSize =
      sizeMap[props.size] || sizeMap[wdFormItem.size] || sizeMap[wdForm.size];
    let inputDisabled =
      props.disabled || wdFormItem.disabled || wdForm.disabled;
    const input = ref(null);
    const textarea = ref(null);
    const inputOrTextarea = computed(() => input.value || textarea.value);
    const _textareaCalcStyle = shallowRef({});
    const textareaStyle = computed(() => ({
      ..._textareaCalcStyle.value,
      resize: props.resize,
    }));
    const resizeTextarea = () => {
      const { type, autosize } = props;
      if (type !== "textarea") return;
      if (autosize) {
        const minRows = isObject(autosize) ? autosize.minRows : void 0;
        const maxRows = isObject(autosize) ? autosize.maxRows : void 0;
        _textareaCalcStyle.value = calcTextareaHeight(
          textarea.value,
          minRows,
          maxRows
        );
      } else {
        _textareaCalcStyle.value = {
          minHeight: calcTextareaHeight(textarea.value).minHeight,
        };
      }
    };
    // 是否显示字符限制
    const isWordLimitVisible = computed(() => {
      return (
        props.showWordLimit &&
        ctx.attrs.maxlength &&
        (props.type === "text" || props.type === "textarea") &&
        !props.disabled &&
        !props.readonly &&
        !props.showPassword
      );
    });
    // 输⼊的⽂本⻓度
    const textLength = computed(() => {
      return props.modelValue.length;
    });
    const upperLimit = computed(() => {
      return ctx.attrs.maxlength;
    });
    const setNativeInputValue = () => {
      const input = inputOrTextarea.value;
      if (!input || input.value === nativeInputValue.value) return;
      input.value = nativeInputValue.value;
    };
    const nativeInputValue = computed(() =>
      props.modelValue === null || props.modelValue === undefined
        ? ""
        : String(props.modelValue)
    );
    watch(
      () => props.modelValue,
      (val) => {
        nextTick(() => {
          setNativeInputValue();
        });
      }
    );
    watch(nativeInputValue, (val) => {
      setNativeInputValue();
    });
    const handleInput = (event) => {
      const { value } = event.target;
      ctx.emit("update:modelValue", value);
      ctx.emit("input", value);
      nextTick(setNativeInputValue);
      wdFormItem.formItemMitt?.emit("wd.form.change", [event.target.value]);
    };
    const handleChange = (event) => {
      ctx.emit("change", event.target.value);
      wdFormItem.formItemMitt?.emit("wd.form.change", [event.target.value]);
    };
    const handleBlur = (event) => {
    //   wdFormItem.formItemMitt?.emit("wd.form.blur", [event.target.value]);
    };
    const clear = () => {
      ctx.emit("update:modelValue", "");
      ctx.emit("change", "");
      ctx.emit("clear");
    };
    onMounted(() => {
      nextTick(resizeTextarea);
    });
    return {
      inputSize,
      sizeMap,
      isWordLimitVisible,
      textLength,
      upperLimit,
      handleInput,
      handleChange,
      clear,
      setNativeInputValue,
      input,
      textarea,
      inputOrTextarea,
      textareaStyle,
      inputDisabled,
      handleBlur
    };
  },
});
</script>
<style lang="less" scoped>
@import url(./style/index);
</style>