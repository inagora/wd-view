<template>
  <wd-button @click="centerDialogVisible = true">show drawer</wd-button>
  <wd-drawer
    v-model="centerDialogVisible"
    title="Notice"
    width="40%"
    :show-close="true"
    @open="openHandler"
    @before-open="beforeOpen"
    :append-to-body="false"
    :closeOnClickModal="false"
    placement="right"
  >
    <span>
      <x-form />
    </span>
    <template #footer>
      <wd-button type="primary">确定</wd-button>
    </template>
  </wd-drawer>
</template>
<script>
import { defineComponent, ref } from 'vue'
import XForm from './Form.vue'
export default defineComponent({
  components: {XForm},
  setup() {
    const openHandler = () => {
      console.log('drawer open');
    }
    const beforeOpen = () => {
      console.log('before open');
    }
    const centerDialogVisible = ref(false);
    return {
      centerDialogVisible,
      openHandler,
      beforeOpen
    }
  }
});
</script>
