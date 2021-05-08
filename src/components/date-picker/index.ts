import { App } from 'vue';
import DatePicker from './date-picker.vue';
import ADatePicker from 'ant-design-vue/lib/date-picker';
import 'ant-design-vue/lib/date-picker/style';

const install = (app: App) => {
    app.component(DatePicker.name, DatePicker);
    app.component(ADatePicker.name, ADatePicker);
}

export default {
    install
};