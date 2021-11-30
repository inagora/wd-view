<template>
    <div class="container">
        <fieldset>
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
                label-position="left"> 
                <wd-form-item label="姓名" prop="name">
                    <wd-input 
                        type="text"
                        v-model="userInfo.name"
                        placeholder="请输入姓名"></wd-input>
                </wd-form-item>
                <wd-form-item label="性别" prop="gender">
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
                </wd-form-item>
                <wd-form-item label="婚姻状况" prop="isMerried">
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
                </wd-form-item>
                <wd-form-item label="学历">
                    <wd-select 
                        v-model="selectedValue"
                        @change="selectedChangeHandler"
                        placeholder="请选择学历">
                        <wd-option label="研究生" value="baidu">hhh</wd-option>    
                        <wd-option label="本科" value="google">hhh</wd-option>    
                        <wd-option label="专科" value="bing">hhh</wd-option>    
                    </wd-select>
                </wd-form-item>
                <wd-form-item label="毕业日期" prop="date">
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
        </fieldset>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref, reactive, onMounted} from 'vue';
import moment from 'moment';
export default defineComponent({
    name: 'Form',
    setup() {
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
                        text: '按钮',
                        type: 'button',
                        submenu: [
                            {
                                text: '子菜单11',
                            },
                            {
                                text: '子菜单12',
                            }
                        ]
                    },
                    {
                        text: '子菜单1',
                        type: 'form',
                        submenu: [
                            {
                                text: '子菜单11',
                            },
                            {
                                text: '子菜单12',
                            }
                        ]
                    },
                    {
                        text: '子菜单2',
                        submenu: [
                            {
                                text: '子菜单21',
                            }
                        ]
                    }
                ]
            },
            {
                text: '导航2',
                icon: '',
                submenu: [
                    {
                        text: '子菜单1',
                        submenu: [
                            {
                                text: '子菜单11',
                            }
                        ]
                    }
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

</style>


