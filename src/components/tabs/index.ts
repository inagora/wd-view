// @ts-nocheck
import { App } from "vue";
import WdTabs from "./tabs.vue";
WdTabs.install = (app: App) => {
  app.component(WdTabs.name, WdTabs);
};

export default WdTabs;
