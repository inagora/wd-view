//
import { App } from 'vue';
import WdTable from './table.vue';
WdTable.install = (app: App) => {
	app.component(WdTable.name, WdTable);
};

export default WdTable;
