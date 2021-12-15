// @ts-nocheck
import { App } from "vue";
import WdSelect from "./select.vue";
import WdPopper from "../popper/src/index.vue";
import WdOption from "./option.vue";

WdSelect.install = (app: App) => {
  app.component(WdSelect.name, WdSelect);
  app.component(WdPopper.name, WdPopper);
  app.component(WdOption.name, WdOption);
};

export default WdSelect;
