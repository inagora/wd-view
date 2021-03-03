import {createApp} from 'vue';
import App from './pages/App.vue';
import WdLink from '../src/components/link';
import WdButton from '../src/components/button';
const app = createApp(App);
app.use(WdLink);
app.use(WdButton);
app.mount('#app');