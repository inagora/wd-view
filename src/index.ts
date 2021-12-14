import type { App } from 'vue';
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
import WdTable from '../src/components/table';
import WdForm from '../src/components/form';

const components = [
    WdButton,
    WdLink,
    WdInput,
    WdInputNumber,
    WdSwitch,
    WdCheckbox,
    WdCheckboxGroup,
    WdRadio,
    WdDropdown,
    WdDatePicker,
    WdLayout,
    WdSelect,
    WdTable,
    WdForm
];
const install = (app: App): void => {
    components.forEach(component => {
        console.log(component);
        app.component((component as any).name, component)
    })
}
export {
  WdLink,
  install,
  WdButton,
  WdInput,
  WdInputNumber,
  WdSwitch,
  WdCheckbox,
  WdCheckboxGroup,
  WdRadio,
  WdDropdown,
  WdDatePicker,
  WdLayout,
  WdSelect,
  WdTable,
  WdForm
}
export default {
    WdLink,
    install,
    WdButton,
    WdInput,
    WdInputNumber,
    WdSwitch,
    WdCheckbox,
    WdCheckboxGroup,
    WdRadio,
    WdDropdown,
    WdDatePicker,
    WdLayout,
    WdSelect,
    WdTable,
    WdForm
}