//
import { App } from 'vue';
import Loading from './loading.vue';

Loading.install = (app: App) => {
	app.component(Loading.name, Loading);
};

export default Loading;
