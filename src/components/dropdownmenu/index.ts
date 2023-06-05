//
import type { App } from 'vue';
import DropdownMenu from '../dropdown/dropdown-menu.vue';

DropdownMenu.install = (app: App) => {
	app.component(DropdownMenu.name, DropdownMenu);
};

export default DropdownMenu;
