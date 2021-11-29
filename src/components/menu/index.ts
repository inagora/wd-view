// @ts-nocheck
import {App} from 'vue';
import WdMenu from './menu.vue';

const install = (app: App) => {
    app.component(WdMenu.name, WdMenu);
};

export default install;