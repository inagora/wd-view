import {App} from 'vue';
import Dropdown from './dropdown.vue';

const install = (app: App) => {
    app.component(Dropdown.name, Dropdown);
};

export default {
    install
};