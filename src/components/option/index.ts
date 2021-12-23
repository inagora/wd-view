// @ts-nocheck
import { App } from "vue";
import WdOption from "../select/option.vue";

WdOption.install = (app: App) => {
  app.component(WdOption.name, WdOption);
};

export default WdOption;
