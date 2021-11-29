// @ts-nocheck
import { App } from 'vue';
import InputNumber from './inputnumber.vue';

const install = (app: App) => {
    app.component(InputNumber.name, InputNumber);
}

export default install;