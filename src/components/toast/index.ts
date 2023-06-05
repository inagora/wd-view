//
import { App } from 'vue';
import WdToast from './toast';

WdToast.install = (app: App) => {
	app.config.globalProperties.$toast = WdToast;
};

export default WdToast;
