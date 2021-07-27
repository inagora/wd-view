import {App} from 'vue';
import Select from './select.vue';
import WdPopper from '../popper/src/index.vue';
import WdOption from './option.vue';

const install = (app: App) => {
    app.component(Select.name, Select);
    app.component(WdPopper.name, WdPopper);
    app.component(WdOption.name, WdOption);
};

export default {
    install
};