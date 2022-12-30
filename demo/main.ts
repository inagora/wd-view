import { createApp } from "vue";
import App from "./pages/App.vue";
import * as WdView from '../src/index';

const app = createApp(App);
app.config.globalProperties.iconCssUrl = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css';
app.use(WdView);
app.mount("#app");

// z-index
// 500及以上为弹层
// drawer 500
// modal 501
// message 502
