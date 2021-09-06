import {App} from 'vue';
import WdForm from './form.vue';
import WdFormItem from './form-item.vue';

const install = (app: App) => {
    app.component(WdForm.name, WdForm);
    app.component(WdFormItem.name, WdFormItem);
};

export default {
    install
};