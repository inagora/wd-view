// @ts-nocheck
import { App } from "vue";
import Radio from "./radio.vue";

const install = (app: App) => {
  app.component(Radio.name, Radio);
};

export default install;
