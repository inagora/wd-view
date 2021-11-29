// @ts-nocheck
import { App } from 'vue';
import WdProgress from './pregress.vue';

const install = (app: App) => {
    app.component(WdProgress.name, WdProgress);
}

export default install;