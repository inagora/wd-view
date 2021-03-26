import { App } from 'vue';
import Checkbox from './checkbox.vue';

const install = (app: App) => {
    app.component(Checkbox.name, Checkbox);
} 

export default {
    install
};