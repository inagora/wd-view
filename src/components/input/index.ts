import { App } from 'vue';
import Input from './input.vue';

const install = (app: App) => {
    app.component(Input.name, Input);
}

export default {
    install
};