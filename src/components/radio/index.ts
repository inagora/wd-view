// @ts-nocheck
import { App } from "vue";
import WdRadio from "./radio.vue";

WdRadio.install = (app: App) => {
  app.component(WdRadio.name, WdRadio);
};

export default WdRadio;
