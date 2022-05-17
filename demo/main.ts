import { createApp } from "vue";
import App from "./pages/App.vue";
import * as WdView from '../src/index';

const app = createApp(App);
app.config.globalProperties.iconCssUrl = 'https://oss.wandougongzhu.cn/lib/bootstrap-icons/1.8.2/font/bootstrap-icons.css';
app.use(WdView);
app.mount("#app");
