//
import { App } from 'vue';
import WdUploadDragger from './dragger.vue';
WdUploadDragger.install = (app: App) => {
	app.component(WdUploadDragger.name, WdUploadDragger);
};

export default WdUploadDragger;
