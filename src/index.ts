import type { App } from 'vue';
import WdLink from '../src/components/link';
import WdButton from '../src/components/button';
import WdButtonGroup from '../src/components/buttongroup';
import WdInput from '../src/components/input';
import WdInputNumber from '../src/components/input-number';
import WdSwitch from '../src/components/switch';
import WdCheckbox from '../src/components/checkbox';
import WdCheckboxGroup from '../src/components/checkboxgroup';
import WdRadio from '../src/components/radio';
import WdDropdown from '../src/components/dropdown';
import WdDropdownMenu from '../src/components/dropdownmenu';
import WdDropdownMenuItem from '../src/components/dropdownmenuitem';
import WdDatePicker from '../src/components/date-picker';
import WdDate from '../src/components/date-origin';
import WdLayout from '../src/components/layout';
import WdSelect from '../src/components/select';
import WdOption from '../src/components/option';
import WdTable from '../src/components/table';
import WdForm from '../src/components/form';
import WdPagination from './components/pagination';
import WdFormItem from './components/form-item';
import WdLayoutHeader from './components/layout/components/header.vue';
import WdLayoutFooter from './components/layout/components/footer.vue';
import WdLayoutSider from './components/layout/components/sider.vue';
import WdLayoutContent from './components/layout/components/content.vue';
import WdMenu from './components/menu';
import WdToast from './components/toast/toast';
import WdProgress from './components/progress';
import WdDialog from './components/dialog';
import WdDrawer from './components/drawer';
import WdMessage from './components/message';
import WdLoading from './components/loading';
import WdIcon from './components/icon';
import WdModal from './components/modal';
import WdUpload from './components/upload';
import WdUploadDragger from './components/dragger';
import WdTabs from './components/tabs';
import ProTable from './components/protable';
import WdSpace from './components/space';
import WdImage from './components/image';

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
	WdDate,
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
	WdDialog,
	WdMessage,
	WdDrawer,
	WdLoading,
	WdIcon,
	WdModal,
	WdUpload,
	WdUploadDragger,
	WdTabs,
	WdSpace,
	ProTable,
	WdImage,
];
const install = async (app: App): void => {
	// 是否需要加载icon css
	const iconLinks = document.querySelector('link[data-extra="wd-icon"]');
	if (iconLinks) {
		app.config.globalProperties.hasIconLinks = true;
	}
	components.forEach((component) => {
		app.component((component as any).name, component);
	});
	app.config.globalProperties.$toast = WdToast;
	app.config.globalProperties.$message = WdMessage;
	app.config.warnHandler = () => null;
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
	WdDate,
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
	WdDialog,
	WdMessage,
	WdDrawer,
	WdLoading,
	WdIcon,
	WdModal,
	WdUpload,
	WdUploadDragger,
	WdTabs,
	WdSpace,
	ProTable,
	WdImage,
};
export default {
	install,
};
