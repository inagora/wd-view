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
        <fieldset>
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
    </div>
</template>

<script lang="ts">
import {computed, ref} from 'vue';
import WdToast from '../../src/components/toast/index.vue';
import WdProgress from '../../src/components/progress/index.vue';
// import WdLink from '../../src/components/link/link.vue';
export default {
    name: 'App',
    components: {},
    setup() {
        let counter = ref(1);
        let isShowToast = ref(false);
        let toastMsg = ref('');
        let duration = ref(3000); 
        let inputNum = ref(0);  
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
            handleChangeNumber
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


