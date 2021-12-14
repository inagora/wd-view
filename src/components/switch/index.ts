// @ts-nocheck
import {App} from 'vue';
import Switch from './switch.vue';

Switch.install = (app: App) => {
    app.component(Switch.name, Switch);
};

export default Switch;