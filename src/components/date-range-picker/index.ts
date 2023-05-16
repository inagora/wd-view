// @ts-nocheck
import { App } from 'vue';
import DateRangePicker from './date-range-picker.vue';

DateRangePicker.install = (app: App) => {
	app.component(DateRangePicker.name, DateRangePicker);
};

export default DateRangePicker;
