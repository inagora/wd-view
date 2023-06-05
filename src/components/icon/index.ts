import { App } from 'vue';
import WdIcon from './icon.vue';

WdIcon.install = (app: App) => {
	app.component(WdIcon.name, WdIcon);
};

export default WdIcon;
