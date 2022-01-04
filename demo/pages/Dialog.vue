<template>
  <wd-button @click="centerDialogVisible = true">show dialog</wd-button>
  <wd-dialog
    v-model="centerDialogVisible"
    title="Notice"
    width="40%"
    :show-close="true"
    @open="openHandler"
    :append-to-body="false"
    :closeOnClickModal="false"
  >
    <span
      >Notice: before dialog gets opened for the first time this node and the
      one bellow will not be rendered</span
    >
    <template #footer>
      <wd-button type="primary">确定</wd-button>
    </template>
  </wd-dialog>
</template>
<script>
import { getCurrentInstance, ref } from 'vue'
export default({
  setup() {
    const showDialog = () => {
      console.log(111);
    }
    const openHandler = () => {
      console.log('dialog open');
    }
    const centerDialogVisible = ref(false);
    return {
      showDialog,
      centerDialogVisible,
      openHandler
    }
  }
});
</script>
