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
import WdLayout from '../src/components/layout';
import WdSelect from '../src/components/select';
import WdForm from '../src/components/form';
import WdTable from '../src/components/table';
import WdPagination from '../src/components/pagination';
import WdMenu from '../src/components/menu';


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
app.use(WdLayout);
app.use(WdSelect);
app.use(WdForm);
app.use(WdTable);
app.use(WdPagination);
app.use(WdMenu);
app.mount('#app');