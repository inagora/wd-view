import {App} from 'vue';
import WdTable from './table.vue';
import WdCheckbox from '../checkbox/index';
const install = (app: App) => {
    app.component(WdTable.name, WdTable);
    app.component((WdCheckbox as any).name, WdCheckbox);
};

export default {
    install
};