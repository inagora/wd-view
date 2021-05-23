import {App} from 'vue';
import Select from './select.vue';

const install = (app: App) => {
    app.component(Select.name, Select);
};

export default {
    install
};