<template>
    <div>
        <wd-toast 
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
        <button @click="doShowToastClickHandler">show toast</button>
    </div>
</template>

<script lang="ts">
import {computed, ref} from 'vue';
import WdToast from '../components/toast/index.vue';
import WdProgress from '../components/progress/index.vue';
export default {
    name: 'App',
    components: {
        WdToast,
        WdProgress
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
        // setInterval(() => {
        //     counter.value++;
        //     console.log(counter);
        // }, 1000);
        return {
            counter, 
            isShowToast,
            toastMsg,
            doShowToastClickHandler,
            duration
        };
    }
}
</script>

