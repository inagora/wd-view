import {App} from 'vue';
import WdPagination from './pagination.vue';
const install = (app: App) => {
    app.component(WdPagination.name, WdPagination);
};

export default {
    install
};