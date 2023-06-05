//
import { App } from 'vue';
import WdDrawer from './drawer.vue';

WdDrawer.install = (app: App) => {
	app.component(WdDrawer.name, WdDrawer);
};

export default WdDrawer;
