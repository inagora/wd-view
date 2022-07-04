<template>
	<div class="container">
		<wd-layout>
			<wd-layout-header> 这里是header </wd-layout-header>
			<wd-layout has-sider="true">
				<wd-layout-sider>
					<div class="logo">
						<img src="https://s1.wandougongzhu.cn/s/ed/logo2x_b9a58d.png" />
					</div>
					<wd-menu
						:menu-list="menuList"
						theme="dark"
						@click="menuClickHandler"
					/>
				</wd-layout-sider>
				<wd-layout-content>
					<!-- <wd-layout-header>
            <div class="header">
              <span>hi~，牛利杰</span>
              <img
                src="https://s4.wandougongzhu.cn/s/d8/_09d8fbe8-fbe1-4294-b9cd-9ad8d75f7b9a_25178a.png"
                alt=""
              />
              <wd-dropdown
                :visible="false"
                trigger="hover"
                @visibleChange="visibleChangeHandler"
              >
                <a class="wd-dropdown-link">
                  设置
                  <down-outlined></down-outlined>
                </a>
                <template #dropdown>
                  <wd-dropdown-menu>
                    <wd-dropdown-menu-item>
                      <a href="https://www.baidu.com">百度</a>
                    </wd-dropdown-menu-item>
                    <wd-dropdown-menu-item disabled>
                      <a href="https://www.baidu.com">百度</a>
                    </wd-dropdown-menu-item>
                    <wd-dropdown-menu-item>
                      <a href="javascript:;">1st menu item</a>
                    </wd-dropdown-menu-item>
                  </wd-dropdown-menu>
                </template>
              </wd-dropdown>
            </div>
          </wd-layout-header> -->
					<component :is="componentType"></component>
				</wd-layout-content>
			</wd-layout>
			<wd-layout-footer> @footer </wd-layout-footer>
		</wd-layout>
	</div>
</template>
<script lang="ts">
import { ref, defineComponent, reactive, onMounted, toRefs } from 'vue';
import Button from './Button.vue';
import Checkbox from './Checkbox.vue';
import Form from './Form.vue';
import Input from './Input.vue';
import InputNumber from './Inputnumber.vue';
import Table from './Table.vue';
import Link from './Link.vue';
import Radio from './Radio.vue';
import Switch from './Switch.vue';
import Select from './Select.vue';
import Datepicker from './Datepicker.vue';
import Dropdown from './Dropdown.vue';
import moment from 'moment';
import Toast from './Toast.vue';
import Message from './Message.vue';
import Dialog from './Dialog.vue';
import Drawer from './Drawer.vue';
import Loading from './Loading.vue';
import Modal from './Modal.vue';
import Upload from './Upload.vue';
import Tabs from './Tabs.vue';
export default defineComponent({
	name: 'App',
	components: {
		Button,
		Form,
		Table,
		Checkbox,
		Datepicker,
		Dropdown,
		Input,
		InputNumber,
		Link,
		Radio,
		Switch,
		Select,
		Toast,
		Dialog,
		Message,
		Drawer,
		Loading,
		Modal,
		Upload,
		Tabs,
	},
	setup() {
		let user = { name: 'niu', age: 18 };

		let { name } = reactive(user);

		let counter = ref(1);
		let isShowToast = ref(false);
		let toastMsg = ref('');
		let duration = ref(3000);
		let inputNum = ref(0);
		let isSwitchChecked = ref(true);
		let isSwitchLoading = ref(false);
		let isCheckboxChecked = ref(false);
		let checkboxGroupOptions = ref([]);
		checkboxGroupOptions.value = ['a', 'b'];
		let checkboxGroupValue = ref([]);
		let checkboxDefaultCheck = ref(true);
		let isRadioChecked = ref(false);
		let isMale = ref(false);
		let isFemale = ref(false);
		let datepickerValue = ref('2021-02-02 02:02:02');
		let userInfo = reactive({
			name: '',
			age: '',
			isMerried: '',
			date: datepickerValue.value,
		});
		let userInfoForm = <any>ref();
		let componentType = ref('tabs');
		let menuList = ref([]);
		menuList.value = [
			{
				text: '表单组件',
				icon: 'bi-github',
				submenu: [
					{
						text: 'Button',
						type: 'button',
					},
					{
						text: 'Checkbox',
						type: 'checkbox',
					},
					{
						text: 'DatePicker',
						type: 'datepicker',
					},
					{
						text: 'Dropdown',
						type: 'dropdown',
					},
					{
						text: 'Input',
						type: 'input',
					},
					{
						text: 'InputNumber',
						type: 'input-number',
					},
					{
						text: 'Link',
						type: 'link',
					},
					{
						text: 'Radio',
						type: 'radio',
					},
					{
						text: 'Select',
						type: 'select',
					},
					{
						text: 'Switch',
						type: 'switch',
					},
					{
						text: 'Form',
						type: 'form',
					},
					{
						text: 'Message',
						type: 'message',
					},
					{
						text: 'Drawer',
						type: 'drawer',
					},
				],
			},
			{
				text: '列表组件',
				icon: 'bi-github',
				submenu: [
					{
						text: 'Table',
						type: 'table',
						icon: 'bi-bank',
					},
					{
						text: 'Pagination',
						type: 'pagination',
					},
				],
			},
			{
				text: '其他组件',
				icon: '',
				submenu: [
					{
						text: 'Layout',
						type: 'layout',
					},
					{
						text: 'Menu',
						type: 'menu',
					},
					{
						text: '其他',
						type: 'other',
						open: true,
						submenu: [
							{
								text: 'Layout',
								type: 'layout',
							},
							{
								text: 'Menu',
								type: 'menu',
							},
							{
								text: '其他',
								type: 'other',
							},
						],
					},
				],
			},
		];
		const menuClickHandler = (params) => {
			console.log(params);
			componentType.value = params.type;
			menuList.value = [];
		};

		// 获取table引用
		let wdTable = ref(null);

		// userInfoForm._rowValue.validate(valid => {
		//     console.log(valid);
		// });
		const checkAge = (rule, value) => {
			if (value < 18) {
				return Promise.reject('未成年');
			} else {
				return Promise.resolve('成年');
			}
		};
		const checkDate = (rule, value) => {
			if (value > moment(new Date()).format('YYYY-MM-DD HH-mm-ss')) {
				return Promise.reject('');
			} else {
				return Promise.resolve('');
			}
		};
		let formRules = {
			name: { required: true, message: '请填写姓名', trigger: 'change' },
			age: {
				message: '年龄不能小于18',
				trigger: 'change',
				validator: checkAge,
				required: true,
			},
			date: [
				{ message: '日期不能为空', trigger: 'change', required: true },
				{
					message: '所选日期不能大于当前日期',
					trigger: 'change',
					validator: checkDate,
				},
			],
			isMerried: {
				message: '请选择婚姻状况',
				trigger: 'change',
				required: true,
			},
		};

		// setTimeout(() => {
		//     isShowToast.value = true;
		//     toastMsg.value = '这里是toast内容';
		// }, 3000);
		const doShowToastClickHandler = () => {
			isShowToast.value = true;
			toastMsg.value = '这里是toast内容';
			duration.value = 2000;
		};
		const clickHandler = () => {
			window.open('https://www.baidu.com');
		};
		// setInterval(() => {
		//     counter.value++;
		//     console.log(counter);
		// }, 1000);
		const textData = ref('');

		// table数据
		const tableColumns = [
			// {
			//     title: '',
			//     dataIndex: '',
			//     key: '',
			//     type: 'checkbox'
			// },
			// {
			//     type: 'index',
			//     index: (index) => {
			//         return index * 2;
			//     }
			// },
			{
				title: 'ID',
				dataIndex: 'id',
				key: 'id',
			},
			{
				title: '商品名',
				dataIndex: 'goods_name',
				key: 'goods_name',
				ellipsis: true,
				fixed: 'left',
			},
			{
				title: '价格',
				dataIndex: 'price',
				key: 'price',
				fixed: 'left',
				render(column, row) {
					return `<span style="color: red;">${row[column.dataIndex]}</span>`;
				},
			},
			{
				title: '生产日期',
				dataIndex: 'ctime',
				key: 'ctime',
			},
			{
				title: '产地',
				dataIndex: 'location',
				key: 'location',
			},
			{
				title: '更新时间',
				dataIndex: 'update_time',
				key: 'update_time',
			},
		];

		let dataList: any = ref([]);

		for (let i = 0; i < 60; i++) {
			dataList.value.push({
				id: '' + (4 + i),
				goods_name: 'sk4',
				price: '1180',
				ctime: '2021-09-26',
				update_time: '2021-09-26',
				location: '中国',
			});
		}

		const handleInput = (val) => {
			console.log(val, '##');
		};
		const handleChange = (val) => {
			console.log(val, '**');
		};
		const clearChangeHandler = (val) => {
			console.log(val, '%%');
		};
		const handleInputNumber = (val) => {
			console.log(val, ': input number');
		};
		const handleChangeNumber = (val) => {
			console.log(val, ': change number');
		};
		const handleSwitchChange = (val) => {
			setTimeout(() => {
				isSwitchLoading.value = !isSwitchLoading.value;
			}, 3000);
		};
		const handleCheckboxChange = (val) => {
			console.log(val);
		};
		const handleRadioChange = (val) => {};
		const visibleChangeHandler = (val) => {
			console.log(val);
		};
		const datepickerChange = (val) => {
			// console.log(val);
		};
		const selectedValue = ref('');
		const selectedChangeHandler = (val) => {
			console.log(val);
		};
		const regHandler = () => {
			userInfoForm.value.validate((isValid) => {
				if (isValid) alert('提交成功');
			});
		};
		const pageChangeHandler = (page) => {
			setTableData(page);
		};
		const prevClickChangeHandler = (page) => {
			setTableData(page);
		};
		const nextClickChangeHandler = (page) => {
			setTableData(page);
		};
		const setTableData = (page) => {
			// dataList = dataList.substr(page * 15, 15);
			dataList.value.length = 0;
			for (let i = page * 60; i < (page + 1) * 15; i++) {
				dataList.value.push({
					id: '' + (4 + i),
					goods_name: 'sk4',
					price: '1180',
					ctime: '2021-09-26',
					update_time: '2021-09-26',
					location: '中国',
				});
			}
		};
		const tableSelectChangeHandler = (selectedRows) => {
			console.log(selectedRows);
		};
		const getTableRows = () => {
			console.log(wdTable.value.getSelectedRows());
		};
		const cellClickHandler = ({ rowIndex, dataIndex, value }) => {
			console.log(dataIndex, value);
		};
		const rowClickHandler = (row) => {
			console.log(row);
		};

		const changeContent = (type) => {
			componentType.value = type;
		};
		onMounted(() => {});
		return {
			counter,
			isShowToast,
			toastMsg,
			doShowToastClickHandler,
			duration,
			clickHandler,
			textData,
			handleInput,
			handleChange,
			clearChangeHandler,
			inputNum,
			handleInputNumber,
			handleChangeNumber,
			isSwitchChecked,
			handleSwitchChange,
			isSwitchLoading,
			handleCheckboxChange,
			isCheckboxChecked,
			checkboxGroupOptions,
			checkboxGroupValue,
			checkboxDefaultCheck,
			isRadioChecked,
			handleRadioChange,
			visibleChangeHandler,
			datepickerValue,
			datepickerChange,
			selectedChangeHandler,
			selectedValue,
			isMale,
			isFemale,
			userInfo,
			formRules,
			userInfoForm,
			regHandler,
			dataList,
			tableColumns,
			pageChangeHandler,
			prevClickChangeHandler,
			nextClickChangeHandler,
			tableSelectChangeHandler,
			wdTable,
			getTableRows,
			cellClickHandler,
			rowClickHandler,
			componentType,
			changeContent,
			menuList,
			menuClickHandler,
		};
	},
});
</script>

<style lang="less">
#app {
	height: 100%;
}
.container {
	height: 100%;
}
.wd-layout {
	height: 100%;
}
fieldset {
	border-style: dotted;
	margin-top: 20px;
}
.wd-layout-header {
	color: #ffffff;
}
.wd-layout-sider-children {
	display: flex;
	flex-direction: column;
}
.menu-item {
	min-width: 100px;
	height: 40px;
}
.logo {
	width: 100%;
	height: 64px;
	display: flex;
	align-items: center;
}
.logo img {
	height: 50px;
	margin-left: 12px;
}
.header {
	width: 100%;
	position: relative;
	height: 64px;
	padding: 0;
	background: #fff;
	box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
	display: flex;
	align-items: center;
	justify-content: end;
}
.header img {
	width: 30px;
	height: 30px;
	border-radius: 50%;
	margin: 0 10px;
}
</style>
