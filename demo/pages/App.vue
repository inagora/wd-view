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
        return {
            counter, 
            isShowToast,
            toastMsg,
            doShowToastClickHandler,
            duration,
            clickHandler
        };
    }
}
</script>

<style lang="less" scoped>
.wd-btn, .wd-link {
    margin-right: 10px;
    margin-bottom: 10px;
}
fieldset {
    border-style: dotted;
    margin-top: 20px;
}
</style>


