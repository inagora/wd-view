import {App} from 'vue';
import WdPopper from './popper.vue';

const install = (app: App) => {
    app.component(WdPopper.name, WdPopper);
};

export default {
    install
};