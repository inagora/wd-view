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
        <wd-button >普通按钮</wd-button>
        <wd-button 
            size="large" 
            type="primary"
            round-shape="none"
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
    </div>
</template>

<script lang="ts">
import {computed, ref} from 'vue';
import WdToast from '../../src/components/toast/index.vue';
import WdProgress from '../../src/components/progress/index.vue';
import WdButton from '../../src/components/button/button.vue';
export default {
    name: 'App',
    components: {
        WdToast,
        WdProgress,
        WdButton
    },
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
.wd-btn {
    margin-right: 10px;
    margin-bottom: 10px;
}
</style>


