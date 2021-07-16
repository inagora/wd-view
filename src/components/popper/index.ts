import {App} from 'vue';
// import WdPopper from './popper.vue';
import WdPopper from './src/index.vue';

const install = (app: App) => {
    app.component(WdPopper.name, WdPopper);
};

export default {
    install
};