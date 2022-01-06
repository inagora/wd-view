<template>
  <wd-button @click="showInfoMessage('')">show Message</wd-button>
  <wd-button @click="showMessage('success')">show Success Message</wd-button>
  <wd-button @click="showMessage('warning')">show Warning Message</wd-button>
  <wd-button @click="showMessage('error')">show Error Message</wd-button>
</template>
<script>
import {WdMessage} from '../../src/index';
export default({
  setup() {
    const showInfoMessage = (type) => {
      WdMessage({
        message: 'hhh',
        type
      });
    }
    const showMessage = (type) => {
      WdMessage({
        message: 'hhh',
        type,
        duration: 5000
      });
    }
    return {
      showMessage,
      showInfoMessage
    }
  }
});
</script>
