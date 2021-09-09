import { App } from 'vue';
import 'ant-design-vue/lib/date-picker/style';
import 'ant-design-vue/lib/time-picker/style';
import DatePicker from './date-picker.vue';
import ADatePicker from 'ant-design-vue/lib/date-picker';
// import AWeekPicker from 'ant-design-vue/lib/date-picker/WeekPicker';
import ATimePicker from 'ant-design-vue/lib/time-picker';
// import {DatePicker as ADatePicker, TimePicker as ATimePicker} from 'ant-design-vue';
const install = (app: App) => {
    // console.log(AWeekPicker);
    app.component(DatePicker.name, DatePicker);
    app.component(ADatePicker.name, ADatePicker);
    app.component(ADatePicker.WeekPicker.name, ADatePicker.WeekPicker);
    app.component(ADatePicker.MonthPicker.name, ADatePicker.MonthPicker);
    app.component(ADatePicker.RangePicker.name, ADatePicker.RangePicker);
    // app.component(AWeekPicker.name, AWeekPicker);
    app.component(ATimePicker.name, ATimePicker);
}

export default {
    install
};