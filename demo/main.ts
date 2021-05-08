import {createApp} from 'vue';
import App from './pages/App.vue';
import WdLink from '../src/components/link';
import WdButton from '../src/components/button';
import WdInput from '../src/components/input';
import WdInputNumber from '../src/components/input-number';
import WdSwitch from '../src/components/switch';
import WdCheckbox from '../src/components/checkbox';
import WdCheckboxGroup from '../src/components/checkbox';
import WdRadio from '../src/components/radio';
import WdDropdown from '../src/components/dropdown';
import WdDatePicker from '../src/components/date-picker';


const app = createApp(App);
app.use(WdLink);
app.use(WdButton);
app.use(WdInput);
app.use(WdInputNumber);
app.use(WdSwitch);
app.use(WdCheckbox);
app.use(WdCheckboxGroup);
app.use(WdRadio);
app.use(WdDropdown);
app.use(WdDatePicker);
app.mount('#app');