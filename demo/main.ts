import { createApp } from "vue";
import App from "./pages/App.vue";
import * as WdView from '../src/index';

const app = createApp(App);
app.use(WdView);
console.log(WdView);
app.mount("#app");
