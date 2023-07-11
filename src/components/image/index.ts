import { App } from 'vue';
import WdImage from './image.vue';
WdImage.install = (app: App) => {
	app.component(WdImage.name, WdImage);
};

export default WdImage;
