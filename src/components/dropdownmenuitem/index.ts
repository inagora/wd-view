//
import type { App } from 'vue';
import DropdownMenuItem from '../dropdown/dropdown-menu-item.vue';

DropdownMenuItem.install = (app: App) => {
	app.component(DropdownMenuItem.name, DropdownMenuItem);
};

export default DropdownMenuItem;
