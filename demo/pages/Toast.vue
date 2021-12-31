<template>
  <wd-toast msg="这是一个toast" duration="3000" />
  <wd-button @click="showToast">show toast</wd-button>
</template>
<script>
import { getCurrentInstance, ref } from 'vue'
export default({
  setup() {
    const msg = ref(1);
    const app = getCurrentInstance();
    const showToast = () => {
      app.appContext.config.globalProperties.$toast({
        message: '这是一个toast',
        duration: 5000
      });
    }
    return {
      showToast,
      msg
    }
  }
});
</script>
