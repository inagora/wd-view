<template>
  <div class="wd-checkbox-group">
    <wd-radio v-for="(option, index) in getOptions" :key="index">
      <slot></slot>
    </wd-radio>
  </div>
</template>

<script lang="ts">
import WdRadio from "./radio.vue";
import { defineComponent, ref, watch, toRef, PropType, computed } from "vue";

type optionType = {
  label: string;
  value: boolean;
};
interface WdRadioProps {
  disabled: boolean;
  modelValue: Array<string>;
  options: Array<string> | Array<optionType>;
}

type optionsType = Array<string> | Array<optionType>;
export default defineComponent({
  name: "wd-radio-group",
  inheritAttrs: false,
  components: {
    WdRadio,
  },
  props: {
    modelValue: {
      required: true,
      type: [String, Object],
    },
    options: {
      required: true,
      type: Array as PropType<optionsType>,
    },
    disabled: Boolean,
  },
  emits: ["update:modelValue", "change"],
  setup(props: WdRadioProps, ctx) {
    const isChecked = ref(false);
    const checkboxOptions = toRef(props, "options");
    const getOptions = computed(() => {
      return (checkboxOptions.value as (string | object)[]).map((option) => {
        if (typeof option === "string") {
          return {
            label: option,
            value: option,
          };
        }
        let label = (option as optionType).label;
        return { ...option, label };
      });
    });
    console.log(getOptions);
    const handleInputChange = () => {
      isChecked.value = !isChecked.value;
      ctx.emit("change", isChecked.value);
      ctx.emit("update:modelValue", isChecked.value);
    };
    watch(
      () => props.modelValue,
      (val) => {
        console.log(val, "#");
      }
    );
    return {
      isChecked,
      handleInputChange,
      getOptions,
    };
  },
});
</script>

<style lang="less">
@import url(./style/index);
</style>
