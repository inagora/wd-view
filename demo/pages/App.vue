<template>
    <div>
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
        <fieldset>
            <legend>dropdown</legend>
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
            </wd-dropdown>
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
        </fieldset>
        <fieldset>
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
                <wd-layout>
                    <wd-layout-content>
                        content
                    </wd-layout-content> 
                    <wd-layout-sider>
                        menu1
                    </wd-layout-sider>       
                </wd-layout>
                <wd-layout-footer>
                    @footer
                </wd-layout-footer>
            </wd-layout>
        </fieldset>
    </div>
</template>

<script lang="ts">
import {computed, ref} from 'vue';
import WdToast from '../../src/components/toast/index.vue';
import WdProgress from '../../src/components/progress/index.vue';
import {DownOutlined} from '@ant-design/icons-vue';
// import WdLink from '../../src/components/link/link.vue';
export default {
    name: 'App',
    components: {
        DownOutlined
    },
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
        let datepickerValue = ref('2021-02-02 02:02:02');
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
            console.log(val);
        }
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
            datepickerChange
        };
    }
}
</script>

<style lang="less" scoped>
.wd-btn, .wd-link, .wd-input__outer {
    margin-right: 10px;
    margin-bottom: 10px;
}
fieldset {
    border-style: dotted;
    margin-top: 20px;
}
</style>


