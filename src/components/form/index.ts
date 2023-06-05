//
import { App } from 'vue';
import WdForm from './form.vue';
import WdFormItem from './form-item.vue';

WdForm.install = (app: App) => {
	app.component(WdForm.name, WdForm);
	app.component(WdFormItem.name, WdFormItem);
};

export default WdForm;
