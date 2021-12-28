// @ts-nocheck
import type { App } from "vue";
import WdCheckboxGroup from "../checkbox/checkbox-group.vue";

WdCheckboxGroup.install = (app: App) => {
  app.component(WdCheckboxGroup.name, WdCheckboxGroup);
};

export default WdCheckboxGroup;
