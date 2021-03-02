import {App} from 'vue';
import Button from './button.vue';

const install = (app: App) => {
    app.component(Button.name, Button);
};

export default {
    install
};