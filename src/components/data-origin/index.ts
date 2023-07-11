import { App } from 'vue';
import WdDialog from './dialog.vue';

WdDialog.install = (app: App) => {
	app.component(WdDialog.name, WdDialog);
};

export default WdDialog;
