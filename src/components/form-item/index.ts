//
import { App } from 'vue';
import WdFormItem from '../form/form-item.vue';

WdFormItem.install = (app: App) => {
	app.component(WdFormItem.name, WdFormItem);
};

export default WdFormItem;
