// @ts-nocheck
import { App } from 'vue';
import WdToast from './toast.vue';

const install = (app: App) => {
    app.component(WdToast.name, WdToast);
} 

export default install;