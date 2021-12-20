<template>
  <div class="container">
    <div class="component-box">
      <div class="component-box-top">
        <wd-select
          multiple
          :multiple-limit="2"
          v-model="selectedValue"
          @change="selectedChangeHandler"
          placeholder="请选择搜索引擎"
          size="small"
          key="s1"
        >
          <wd-option label="百度" value="baidu">hhh</wd-option>
          <wd-option label="百度知道" value="baiduzhidao">hhh</wd-option>
          <wd-option label="谷歌" value="google">hhh</wd-option>
          <wd-option label="谷歌2" value="google2">hhh</wd-option>
          <wd-option label="谷歌3" value="google3">hhh</wd-option>
          <wd-option label="必应" value="bing">hhh</wd-option>
          <wd-option label="必2应" value="bing2">hhh</wd-option>
          <wd-option label="3必应" value="bing3">hhh</wd-option>
        </wd-select>
        <wd-select
          v-model="selectedValue1"
          @change="selectedChangeHandler1"
          placeholder="请选择搜索引擎"
          size="small"
          key="s2"
        >
          <wd-option label="百度" value="baidu">hhh</wd-option>
          <wd-option label="谷歌" value="google">hhh</wd-option>
          <wd-option label="必应" value="bing">hhh</wd-option>
        </wd-select>
      </div>
      <div class="component-box-bottom">
        <div class="component-title">下拉框</div>
        <div class="component-desc">
          下拉选择组件分为单选和多选，可以通过multiple设置，并且可以显示多选的长度；
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "Select",
  setup() {
    const selectedValue = ref('');
    const selectedValue1 = ref('');
    const selectedChangeHandler = () => {
      
    }
    const selectedChangeHandler1 = () => {

    }
    return {
      selectedValue,
      selectedValue1,
      selectedChangeHandler,
      selectedChangeHandler1,
    };
  },
});
</script>

<style lang="less" scoped>
.component-box {
  width: 500px;
  min-height: 150px;
  border: 1px solid #f0f0f0;
  background: #ffffff;
  margin-right: 10px;
}
.component-box-top {
  width: 100%;
  height: 80%;
  border-bottom: 1px solid #f0f0f0;
  padding: 10px 20px;
  display: flex !important;
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
.wd-select {
  margin-right: 10px !important;
}
</style>
