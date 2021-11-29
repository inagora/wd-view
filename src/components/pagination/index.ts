// @ts-nocheck
import {App} from 'vue';
import WdPagination from './pagination.vue';
import WdSelect from '../select/index';
const install = (app: App) => {
    app.component(WdPagination.name, WdPagination);
    app.component((WdSelect as any).name, WdSelect);
};

export default install;