import {App} from 'vue';
import WdTable from './table.vue';

const install = (app: App) => {
    app.component(WdTable.name, WdTable);
};

export default {
    install
};