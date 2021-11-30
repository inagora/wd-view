// import type { App } from 'vue';
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

// const components = [
//     WdButton
// ];
// const install = (app: App): void => {
//     components.forEach(component => {
//         console.log(component);
//         app.component((component as any).name, component)
//     })
// }
export default {
    WdLink,
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
    WdSelect
}