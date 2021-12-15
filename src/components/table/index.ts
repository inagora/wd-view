// @ts-nocheck
import { App } from "vue";
import WdTable from "./table.vue";
import WdCheckbox from "../checkbox/index";
import WdPagination from "../pagination/index";
WdTable.install = (app: App) => {
  app.component(WdTable.name, WdTable);
  app.component((WdCheckbox as any).name, WdCheckbox);
  app.component((WdPagination as any).name, WdPagination);
};

export default WdTable;
