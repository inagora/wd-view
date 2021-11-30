<template>
    <div class="container">
        <!-- <wd-toast 
            :visible="isShowToast"
            :msg="toastMsg"
            :duration="duration"
        />
        <wd-progress
            type="line"
            progress="40"
        />
        <wd-progress
            type="circle"
            progress="50"
        />
        <button @click="doShowToastClickHandler">show toast</button> -->
        <!-- <fieldset>
            <legend>按钮</legend>
            <wd-button 
                icon="filter-filled">普通按钮</wd-button>
            <wd-button 
                size="large" 
                type="primary"
                round-shape="none"
                icon="home-outlined"
                @click="clickHandler">主要按钮</wd-button>
            <wd-button 
                size="small" 
                type="danger">危险按钮</wd-button>
            <wd-button 
                size="small" 
                type="success">成功按钮</wd-button>
            <wd-button 
                size="small" 
                type="dashed">dashed按钮</wd-button>    
            <wd-button 
                size="small" 
                type="info">info按钮</wd-button>
            <wd-button 
                size="small" 
                type="text">text按钮</wd-button>
            <wd-button 
                size="large" 
                disabled="true"
                type="primary">按钮不可用</wd-button>
            <wd-button 
                size="small" 
                round-shape="circle"
                type="primary">C</wd-button>
        </fieldset>
        <fieldset>
            <legend>link</legend>
            <wd-link
                :underline="true"
                href="https://www.baidu.com"
                type="primary">这是一个主要链接</wd-link>
            <wd-link
                :disabled="true"
                href="https://www.baidu.com"
                type="success">这是一个成功链接</wd-link>
            <wd-link
                href="https://www.baidu.com"
                type="warning">这是一个警告链接</wd-link>
            <wd-link
                href="https://www.baidu.com"
                type="danger">这是一个错误链接</wd-link>
            <wd-link
                href="https://www.baidu.com"
                type="info">这是一个info链接</wd-link>
        </fieldset>
        <fieldset>
            <legend>input</legend>
            <wd-input
                type="text"
                size="large"
                placeholder="请输入内容"></wd-input>
            <wd-input
                :disabled="true"
                type="text"
                placeholder="这是一个不可用输入框"></wd-input>
            <wd-input
                :readonly="true"
                type="text"
                size="small"
                placeholder="这是一个只读输入框"></wd-input>
            <wd-input
                type="text"
                maxlength="10"
                show-word-limit
                v-model="textData"
                @input="handleInput"
                @change="handleChange"
                placeholder="限制内容长度的输入框"></wd-input>
            <wd-input
                type="text"
                placeholder="带前置内容的输入框">
                <template #prepend>https://</template>
            </wd-input>
            <wd-input
                type="text"
                placeholder="带后置内容的输入框">
                <template #append>.com</template>
            </wd-input>
            <wd-input
                type="text"
                placeholder="带后置和后置内容的输入框">
                <template #prepend>https://</template>
                <template #append>.com</template>
            </wd-input>
            <wd-input
                type="text"
                prefix-icon="home-outlined"
                suffix-icon="filter-filled"
                placeholder="带后置和后置图标的输入框">
            </wd-input>
            <wd-input
                type="text"
                clearable
                v-model="textData"
                @change="clearChangeHandler"
                placeholder="带后置和后置图标的输入框">
            </wd-input>
            <wd-input
                type="textarea"
                show-word-limit
                maxlength="50"
                v-model="textData"
                placeholder="这是一个文本框"></wd-input>
        </fieldset>
        <fieldset>
            <legend>input-number</legend>
            <wd-input-number
                v-model="inputNum"
                max=20
                min=0
                @input="handleInputNumber"
                @change="handleChangeNumber"
                type="text"></wd-input-number>
        </fieldset>
        <fieldset>
            <legend>switch</legend>
            <wd-switch 
                v-model="isSwitchChecked"
                :loading="isSwitchLoading"
                @change="handleSwitchChange"/>
            <wd-switch 
                disabled
                size="large"
                :loading="true"
                v-model="isSwitchChecked"/>
        </fieldset>
        <fieldset>
            <legend>checkbox</legend>
            <wd-checkbox 
                :checked="isCheckboxChecked"
                @change="handleCheckboxChange">
                复选框
            </wd-checkbox>
            <wd-checkbox 
                :checked="checkboxDefaultCheck"
                v-model="checkboxDefaultCheck"
                @change="handleCheckboxChange">
                复选框默认选中
            </wd-checkbox>
            <wd-checkbox 
                :checked="isCheckboxChecked"
                :disabled="true"
                @change="handleCheckboxChange">
                复选框不可用
            </wd-checkbox>
        </fieldset>
        <fieldset>
            <legend>checkbox-group</legend>
            <wd-checkbox-group 
                @change="handleCheckboxChange"
                v-model="checkboxGroupValue"
                :default-value="['a']"
                :options="checkboxGroupOptions">
            </wd-checkbox-group>
        </fieldset>
        <fieldset>
            <legend>radio</legend>
            <wd-radio 
                v-model="isRadioChecked"
                :checked="isRadioChecked"
                name="color"
                @change="handleRadioChange">
                红色
            </wd-radio>
        </fieldset> -->
        <!-- <fieldset> -->
            <!-- <legend>dropdown</legend>
            <wd-dropdown
                :visible="false"
                trigger="hover"
                @visibleChange="visibleChangeHandler">
                <a class="wd-dropdown-link">
                    下拉菜单
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
            </wd-dropdown> -->
            <!-- <wd-dropdown
                :visible="false"
                trigger="hover"
                @visibleChange="visibleChangeHandler">
                <wd-button 
                    type="primary"
                    round-shape="none"
                    @click="clickHandler">
                    主要按钮
                    <down-outlined></down-outlined>
                </wd-button>
                <template #dropdown>
                    <wd-dropdown-menu>
                        <wd-dropdown-menu-item>
                            <a href="https://www.baidu.com">百度</a>
                        </wd-dropdown-menu-item>
                        <wd-dropdown-menu-item>
                            <a href="javascript:;">1st menu item</a>
                        </wd-dropdown-menu-item>
                        <wd-dropdown-menu-item>
                            <a href="javascript:;">1st menu item</a>
                        </wd-dropdown-menu-item>
                    </wd-dropdown-menu>
                </template>
            </wd-dropdown> -->
        <!-- </fieldset> -->
        <!-- <fieldset>
            <legend>datepicker</legend>
            <wd-date-picker
                type="date"
                :clearable="false"
                :disabled="false"
                default-value="2021-02-02 02:02:02"
                format="YYYY/MM/DD HH:mm:ss"
                value-format="YYYY-MM-DD HH-mm-ss"
                size="small"
                placeholder="请选择日期"
                v-model="datepickerValue"
                @change="datepickerChange"></wd-date-picker>
            <wd-date-picker
                type="range"
                :clearable="true"
                :disabled="false"
                :default-value="['2021-02-02 02:02:02', '2021-02-03 02:02:02']"
                format="YYYY/MM/DD HH:mm:ss"
                value-format="YYYY-MM-DD HH-mm-ss"
                size="small"
                :placeholder="['请选择开始日期', '请选择结束日期']"
                v-model="datepickerValue"
                separator="|"
                @change="datepickerChange"></wd-date-picker>
        </fieldset>
        <fieldset>
            <legend>layout</legend>
            <wd-layout>
                <wd-layout-header>
                    这里是header
                </wd-layout-header>
                <wd-layout has-sider="true">
                    <wd-layout-sider>
                        <wd-button type="link">menu1</wd-button>
                    </wd-layout-sider> 
                    <wd-layout-content>
                        content
                    </wd-layout-content>       
                </wd-layout>
                <wd-layout-footer>
                    @footer
                </wd-layout-footer>
            </wd-layout>
        </fieldset> -->
        <!-- <fieldset>
            <legend>select</legend> -->
            <!-- <wd-select 
                multiple
                :multiple-limit="2"
                v-model="selectedValue"
                @change="selectedChangeHandler"
                placeholder="请选择搜索引擎"
                size="small">
                <wd-option label="百度" value="baidu">hhh</wd-option>    
                <wd-option label="百度知道" value="baiduzhidao">hhh</wd-option>    
                <wd-option label="谷歌" value="google">hhh</wd-option>    
                <wd-option label="谷歌2" value="google2">hhh</wd-option>    
                <wd-option label="谷歌3" value="google3">hhh</wd-option>    
                <wd-option label="必应" value="bing">hhh</wd-option>    
                <wd-option label="必2应" value="bing2">hhh</wd-option>    
                <wd-option label="3必应" value="bing3">hhh</wd-option>    
            </wd-select> -->
            <!-- <wd-select 
                v-model="selectedValue"
                @change="selectedChangeHandler"
                placeholder="请选择搜索引擎"
                size="small">
                <wd-option label="百度" value="baidu">hhh</wd-option>    
                <wd-option label="谷歌" value="google">hhh</wd-option>    
                <wd-option label="必应" value="bing">hhh</wd-option>    
            </wd-select> -->
        <!-- </fieldset> -->
        <!-- <fieldset>
            <legend>form: {{userInfo.name}}</legend>
            <wd-form 
                ref="userInfoForm" 
                label-width="100px" 
                label-align="right" 
                size="small" 
                :model="userInfo" 
                :validate-on-rule-change="true" 
                :rules="formRules" 
                :show-message="true"
                label-position="top"> 
                <wd-form-item label="姓名" prop="name">
                    <wd-input 
                        type="text"
                        v-model="userInfo.name"
                        placeholder="请输入姓名"></wd-input>
                </wd-form-item>  -->
                <!-- <wd-form-item label="性别" prop="gender">
                    <wd-radio 
                        v-model="userInfo.gender"
                        :checked="isMale"
                        name="color"
                        @change="handleRadioChange">
                        男
                    </wd-radio>
                    <wd-radio 
                        v-model="userInfo.gender"
                        :checked="isFemale"
                        name="color"
                        @change="handleRadioChange">
                        女
                    </wd-radio>
                </wd-form-item> -->
                <!-- <wd-form-item label="婚姻状况" prop="isMerried">
                    <wd-checkbox 
                        v-model="userInfo.isMerried"
                        :checked="userInfo.isMerried"
                        @change="handleCheckboxChange">
                        已婚
                    </wd-checkbox>
                </wd-form-item>
                <wd-form-item label="年龄" prop="age">
                    <wd-input-number
                        v-model="userInfo.age"
                        max=20
                        min=0
                        @input="handleInputNumber"
                        @change="handleChangeNumber"
                        type="text"></wd-input-number>
                </wd-form-item> -->
                <!-- <wd-form-item label="学历">
                    <wd-select 
                        v-model="selectedValue"
                        @change="selectedChangeHandler"
                        placeholder="请选择学历">
                        <wd-option label="研究生" value="baidu">hhh</wd-option>    
                        <wd-option label="本科" value="google">hhh</wd-option>    
                        <wd-option label="专科" value="bing">hhh</wd-option>    
                    </wd-select>
                </wd-form-item> -->
                <!-- <wd-form-item label="毕业日期" prop="date">
                    <wd-date-picker
                        type="date"
                        :clearable="false"
                        :disabled="false"
                        default-value="2021-02-02 02:02:02"
                        format="YYYY/MM/DD HH:mm:ss"
                        value-format="YYYY-MM-DD HH-mm-ss"
                        size="small"
                        placeholder="请选择日期"
                        v-model="userInfo.date"
                        @change="datepickerChange"></wd-date-picker>
                </wd-form-item>
                <wd-form-item>
                    <wd-button 
                        size="small" 
                        type="danger">重置</wd-button>
                    <wd-button 
                        size="small" 
                        type="success"
                        @click="regHandler">提交</wd-button>
                </wd-form-item>
            </wd-form>
        </fieldset> -->
        <!-- <wd-button @click="getTableRows" type="primary">获取选择项</wd-button>
        <wd-table
            ref="wdTable"
            :columns="tableColumns"
            :data-source="dataList"
            :show-header="true"
            size="small"
            bordered
            :sticky="true"
            @page-change="pageChangeHandler"
            @select-change="tableSelectChangeHandler"
            @cellClick="cellClickHandler"
            @rowClick="rowClickHandler"></wd-table> -->
            <wd-layout>
                <!-- <wd-layout-header>
                    WD-VIEW
                </wd-layout-header> -->
                <wd-layout has-sider="true">
                    <wd-layout-sider>
                        <!-- <div class="menu-item">
                            <wd-button type="link" @click="changeContent('button')">按钮组件</wd-button>
                        </div>
                        <div class="menu-item">
                            <wd-button type="link">input组件</wd-button>
                        </div>
                        <div class="menu-item">
                            <wd-button type="link">input-number组件</wd-button>
                        </div>
                        <div class="menu-item">
                            <wd-button type="link">Switch</wd-button>
                        </div>
                        <div class="menu-item">
                            <wd-button type="link">CheckBox</wd-button>
                        </div>
                        <div class="menu-item">
                            <wd-button type="link" @click="changeContent('form')">Form</wd-button>
                        </div>
                        <div class="menu-item">
                            <wd-button type="link" @click="changeContent('table')">Table</wd-button>
                        </div> -->
                        <div class="logo">
                          <img src="https://s1.wandougongzhu.cn/s/ed/logo2x_b9a58d.png">
                        </div>
                        <wd-menu 
                            :menu-list="menuList"
                            theme="dark"
                            @click="menuClickHandler"/>
                    </wd-layout-sider> 
                    <wd-layout-content>
                        <div class="header">
                          <span>hi~，牛利杰</span>
                          <img src="https://s4.wandougongzhu.cn/s/d8/_09d8fbe8-fbe1-4294-b9cd-9ad8d75f7b9a_25178a.png" alt="">
                          <wd-dropdown
                            :visible="false"
                            trigger="hover"
                            @visibleChange="visibleChangeHandler">
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
                        <component :is="componentType"></component>
                    </wd-layout-content>       
                </wd-layout>
                <!-- <wd-layout-footer>
                    @footer
                </wd-layout-footer> -->
            </wd-layout>
    </div>
</template>
<script lang="ts">
import {ref, defineComponent, reactive, onMounted, toRefs} from 'vue';
import {DownOutlined} from '@ant-design/icons-vue';
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
export default defineComponent({
    name: 'App',
    components: {
        DownOutlined,
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
        Select
    },
    setup() {
        let user = {
            name: 'niu',
            age: 18
        }
        // console.log('orignalUser', user);
        // console.log('refUser', ref(user));
        // console.log('reactiveUser', reactive(user));
        // console.log('toRefsUser', toRefs(user));

        let { name } = reactive(user);
        console.log(name, user);

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
            date: datepickerValue.value
        });
        let userInfoForm = <any>ref();
        let componentType = ref('');
        let menuList = ref([]);
        menuList.value = [
            {
                text: '表单组件',
                icon: '',
                submenu: [
                    {
                        text: 'Button',
                        type: 'button'
                    },
                    {
                        text: 'Checkbox',
                        type: 'checkbox'
                    },
                    {
                        text: 'DatePicker',
                        type: 'datepicker'
                    },
                    {
                        text: 'Dropdown',
                        type: 'dropdown'
                    },
                    {
                        text: 'Input',
                        type: 'input'
                    },
                    {
                        text: 'InputNumber',
                        type: 'input-number'
                    },
                    {
                        text: 'Link',
                        type: 'link'
                    },
                    {
                        text: 'Radio',
                        type: 'radio'
                    },
                    {
                        text: 'Select',
                        type: 'select'
                    },
                    {
                        text: 'Switch',
                        type: 'switch'
                    },
                    {
                        text: 'Form',
                        type: 'form'
                    },
                ]
            },
            {
                text: '列表组件',
                icon: '',
                submenu: [
                    {
                        text: 'Table',
                        type: 'table'
                    },
                    {
                        text: 'Pagination',
                        type: 'pagination'
                    },
                ]
            },
            {
                text: '其他组件',
                icon: '',
                submenu: [
                    {
                        text: 'Layout',
                        type: 'layout'
                    },
                    {
                        text: 'Menu',
                        type: 'menu'
                    },
                ]
            }
        ];
        const menuClickHandler = params => {
            console.log(params);
            componentType.value = params.type;
        }

        // 获取table引用
        let wdTable = ref(null);
        
        // userInfoForm._rowValue.validate(valid => {
        //     console.log(valid);
        // });
        const checkAge = (rule, value) => {
            if(value < 18) {
                return Promise.reject('未成年');
            } else {
                return Promise.resolve('成年');
            }
        }
        const checkDate = (rule, value) => {
            if(value > moment(new Date).format('YYYY-MM-DD HH-mm-ss')) {
                return Promise.reject('');
            } else {
                return Promise.resolve('');
            }
        }
        let formRules = {
            name: { required: true, message: '请填写姓名', trigger: 'change' },
            age: {message: '年龄不能小于18', trigger: 'change', validator: checkAge, required: true},
            date: [
                {message: '日期不能为空', trigger: 'change', required: true},
                {message: '所选日期不能大于当前日期', trigger: 'change', validator: checkDate},
            ],
            isMerried: {message: '请选择婚姻状况', trigger: 'change', required: true}
        }
        
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
        }
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
                key: 'id'
            },
            {
                title: '商品名',
                dataIndex: 'goods_name',
                key: 'goods_name',
                ellipsis: true,
                fixed: 'left'
            },
            {
                title: '价格',
                dataIndex: 'price',
                key: 'price',
                fixed: 'left',
                render(column, row) {
                    return `<span style="color: red;">${row[column.dataIndex]}</span>`;
                }
            },
            {
                title: '生产日期',
                dataIndex: 'ctime',
                key: 'ctime'
            },
            {
                title: '产地',
                dataIndex: 'location',
                key: 'location'
            },
            {
                title: '更新时间',
                dataIndex: 'update_time',
                key: 'update_time'
            }
        ]

        let dataList: any = ref([]);

        for (let i = 0; i < 60; i++) {
            dataList.value.push({
                id: '' + (4 + i),
                goods_name: 'sk4',
                price: '1180',
                ctime: '2021-09-26',
                update_time: '2021-09-26',
                location: '中国'
            });
        }

        const handleInput = val => {
            console.log(val, '##');
        }
        const handleChange = val => {
            console.log(val, '**');
        }
        const clearChangeHandler = val => {
            console.log(val, '%%');
        }
        const handleInputNumber = val => {
            console.log(val, ': input number');
        }
        const handleChangeNumber = val => {
            console.log(val, ': change number');
        }
        const handleSwitchChange = val => {
            setTimeout(() => {
                isSwitchLoading.value = !isSwitchLoading.value;
            }, 3000);
        }
        const handleCheckboxChange = val => {
            console.log(val);
        }
        const handleRadioChange = val => {

        }
        const visibleChangeHandler = val => {
            console.log(val);
        }
        const datepickerChange = val => {
            // console.log(val);
        }
        const selectedValue = ref('');
        const selectedChangeHandler = val => {
            console.log(val);
        }
        const regHandler = () => {
            userInfoForm.value.validate(isValid => {
                if(isValid) alert('提交成功');
            });
        }
        const pageChangeHandler = (page) => {
            setTableData(page);
        }
        const prevClickChangeHandler = page => {
            setTableData(page);
        }
        const nextClickChangeHandler = page => {
            setTableData(page);
        }
        const setTableData = page => {
            // dataList = dataList.substr(page * 15, 15);
            dataList.value.length = 0;
            for (let i = page * 60; i < (page + 1) * 15; i++) {
                dataList.value.push({
                    id: '' + (4 + i),
                    goods_name: 'sk4',
                    price: '1180',
                    ctime: '2021-09-26',
                    update_time: '2021-09-26',
                    location: '中国'
                });
            }
        }
        const tableSelectChangeHandler = selectedRows => {
            console.log(selectedRows);
        }
        const getTableRows = () => {
            console.log(wdTable.value.getSelectedRows());
        }
        const cellClickHandler = ({rowIndex, dataIndex, value}) => {
            console.log(dataIndex, value);
        }
        const rowClickHandler = (row) => {
            console.log(row);
        }
        
        const changeContent = (type) => {
            componentType.value = type;
        }
        onMounted(() => {
            
        });
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
            menuClickHandler
        };
    }
})
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
.wd-btn, .wd-link, .wd-input__outer {
    margin-right: 10px;
    margin-bottom: 10px;
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


