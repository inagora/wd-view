//
import { App } from 'vue';
import WdUpload from './upload.vue';
WdUpload.install = (app: App) => {
	app.component(WdUpload.name, WdUpload);
};

export default WdUpload;
