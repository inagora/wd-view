//
import { App } from 'vue';
import WdMenu from './menu.vue';

WdMenu.install = (app: App) => {
	app.component(WdMenu.name, WdMenu);
};

export default WdMenu;
