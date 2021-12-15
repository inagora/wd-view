<template>
  <div class="wd-checkbox-group">
    <wd-checkbox
      v-for="(option, index) in getOptions"
      :checked="defaultValue.indexOf(option.value) > -1"
      :key="index"
    >
      {{ option.label }}
    </wd-checkbox>
  </div>
</template>

<script lang="ts">
import WdCheckbox from "./checkbox.vue";
import { defineComponent, ref, watch, toRef, PropType, computed } from "vue";

type optionType = {
  label: string;
  value: boolean;
};
interface WdCheckboxProps {
  disabled: boolean;
  modelValue: Array<string>;
  options: Array<string> | Array<optionType>;
  defaultValue: Array<string>;
}

type optionsType = Array<string> | Array<optionType>;
export default defineComponent({
  name: "wd-checkbox-group",
  inheritAttrs: false,
  components: {
    WdCheckbox,
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
    defaultValue: Array,
  },
  emits: ["update:modelValue", "change"],
  setup(props, ctx) {
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
