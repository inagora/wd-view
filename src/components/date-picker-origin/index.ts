// @ts-nocheck
import { App } from 'vue';
import DatePickerOrigin from './date-picker-origin.vue';

DatePickerOrigin.install = (app: App) => {
	app.component(DatePickerOrigin.name, DatePickerOrigin);
};

export default DatePickerOrigin;
