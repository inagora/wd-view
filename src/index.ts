// @ts-nocheck
import type { App } from "vue";
import WdLink from "../src/components/link";
import WdButton from "../src/components/button";
import WdButtonGroup from '../src/components/buttongroup';
import WdInput from "../src/components/input";
import WdInputNumber from "../src/components/input-number";
import WdSwitch from "../src/components/switch";
import WdCheckbox from "../src/components/checkbox";
import WdCheckboxGroup from "../src/components/checkboxgroup";
import WdRadio from "../src/components/radio";
import WdDropdown from "../src/components/dropdown";
import WdDropdownMenu from "../src/components/dropdownmenu";
import WdDropdownMenuItem from "../src/components/dropdownmenuitem";
import WdDatePicker from "../src/components/date-picker";
import WdLayout from "../src/components/layout";
import WdSelect from "../src/components/select";
import WdOption from '../src/components/option';
import WdTable from "../src/components/table";
import WdForm from "../src/components/form";
import WdPagination from "./components/pagination";
import WdFormItem from "./components/form-item";
import WdLayoutHeader from "./components/layout/components/header.vue";
import WdLayoutFooter from "./components/layout/components/footer.vue";
import WdLayoutSider from "./components/layout/components/sider.vue";
import WdLayoutContent from "./components/layout/components/content.vue";
import WdMenu from "./components/menu";
import WdToast from './components/toast/toast';
import WdProgress from './components/progress';
import WdDialog from "./components/dialog";

const components = [
  WdButton,
  WdButtonGroup,
  WdLink,
  WdInput,
  WdInputNumber,
  WdSwitch,
  WdCheckbox,
  WdCheckboxGroup,
  WdRadio,
  WdDropdown,
  WdDropdownMenu,
  WdDropdownMenuItem,
  WdDatePicker,
  WdLayout,
  WdSelect,
  WdOption,
  WdTable,
  WdForm,
  WdFormItem,
  WdPagination,
  WdLayoutContent,
  WdLayoutFooter,
  WdLayoutSider,
  WdLayoutHeader,
  WdMenu,
  WdToast,
  WdProgress,
  WdDialog
];
const install = (app: App): void => {
  components.forEach((component) => {
    app.component((component as any).name, component);
  });
  app.config.globalProperties.$toast = WdToast;
};
export {
  WdLink,
  install,
  WdButton,
  WdButtonGroup,
  WdInput,
  WdInputNumber,
  WdSwitch,
  WdCheckbox,
  WdCheckboxGroup,
  WdRadio,
  WdDropdown,
  WdDropdownMenu,
  WdDropdownMenuItem,
  WdDatePicker,
  WdLayout,
  WdSelect,
  WdOption,
  WdTable,
  WdForm,
  WdFormItem,
  WdPagination,
  WdLayoutContent,
  WdLayoutFooter,
  WdLayoutSider,
  WdLayoutHeader,
  WdMenu,
  WdToast,
  WdProgress,
  WdDialog
};
export default {
  install
};
