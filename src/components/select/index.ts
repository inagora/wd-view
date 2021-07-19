import {App} from 'vue';
import Select from './select.vue';
import WdPopper from '../popper/src/index.vue';

const install = (app: App) => {
    app.component(Select.name, Select);
    app.component(WdPopper.name, WdPopper);
};

export default {
    install
};