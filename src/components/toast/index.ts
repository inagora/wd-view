// @ts-nocheck
import { App } from 'vue';
import WdToast from './toast.vue';

WdToast.install = (app: App) => {
    app.component(WdToast.name, WdToast);
} 

export default WdToast;