// @ts-nocheck
import { App } from "vue";
import WdMessage from "./message";

WdMessage.install = (app: App) => {
  app.config.globalProperties.$message = WdMessage;
};

export default WdMessage;
