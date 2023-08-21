import { App } from 'vue';
import WdDate from './src/date-origin.vue';

WdDate.install = (app: App) => {
	app.component(WdDate.name, WdDate);
};
export type { DateProps, dateEmits } from './src/date-origin';

export default WdDate;
