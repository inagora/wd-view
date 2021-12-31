// @ts-nocheck
import { App } from "vue";
import WdProgress from "./progress.vue";

WdProgress.install = (app: App) => {
  app.component(WdProgress.name, WdProgress);
};

export default WdProgress;
