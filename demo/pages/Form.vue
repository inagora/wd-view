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
                label-position="top"> 
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
import {defineComponent} from 'vue';
export default defineComponent({
    name: 'Form',
    setup() {
        
    }
})
</script>

<style lang="less">

</style>


