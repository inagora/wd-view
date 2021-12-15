<template>
  <div class="container">
    <div class="component-box">
      <div class="component-box-top">
        <wd-link :underline="true" href="https://www.baidu.com" type="primary"
          >这是一个主要链接</wd-link
        >
        <wd-link :disabled="true" href="https://www.baidu.com" type="success"
          >这是一个成功链接</wd-link
        >
        <wd-link href="https://www.baidu.com" type="warning"
          >这是一个警告链接</wd-link
        >
        <wd-link href="https://www.baidu.com" type="danger"
          >这是一个错误链接</wd-link
        >
        <wd-link href="https://www.baidu.com" type="info"
          >这是一个info链接</wd-link
        >
      </div>
      <div class="component-box-bottom">
        <div class="component-title">链接组件</div>
        <div class="component-desc">
          该组件主要是为了提供一个超链接，可以设置不同的超链接的样式（同button组件的type）;
          可以设置href属性为链接地址；
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "Link",
  setup() {
    return {};
  },
});
</script>
<style lang="less">
.component-box {
  width: 500px;
  min-height: 150px;
  border: 1px solid #f0f0f0;
  background: #ffffff;
  display: inline-block;
  margin-right: 10px;
}
.component-box-top {
  width: 100%;
  height: 80%;
  border-bottom: 1px solid #f0f0f0;
  padding: 10px 20px;
}
.component-box-bottom {
  position: relative;
  width: 100%;
  min-height: 50px;
}
.component-title {
  height: 30px;
  background: #ffffff;
  position: absolute;
  top: -11px;
  left: 20px;
  padding: 0 10px;
  color: #000000;
  font-weight: 500;
}
.component-desc {
  padding: 20px 10px 10px 10px;
}
</style>
