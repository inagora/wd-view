// @ts-nocheck
import {App} from 'vue';
import Dropdown from './dropdown.vue';
import DropdownMenu from './dropdown-menu.vue';
import DropdownMenuItem from './dropdown-menu-item.vue';

const install = (app: App) => {
    app.component(Dropdown.name, Dropdown);
    app.component(DropdownMenu.name, DropdownMenu);
    app.component(DropdownMenuItem.name, DropdownMenuItem);
};

export default install;