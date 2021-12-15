// @ts-nocheck
import { App } from "vue";
import InputNumber from "./inputnumber.vue";

InputNumber.install = (app: App) => {
  app.component(InputNumber.name, InputNumber);
};

export default InputNumber;
