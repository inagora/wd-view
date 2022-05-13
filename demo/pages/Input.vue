<template>
  <div class="container">
    <div class="component-box">
      <div class="component-box-top">
        <wd-input type="text" size="large" placeholder="请输入内容"></wd-input>
        <wd-input
          :disabled="true"
          type="text"
          placeholder="这是一个不可用输入框"
        ></wd-input>
        <wd-input
          :readonly="true"
          type="text"
          size="small"
          placeholder="这是一个只读输入框"
        ></wd-input>
        <wd-input
          type="text"
          maxlength="10"
          show-word-limit
          v-model="textData"
          @input="handleInput"
          @change="handleChange"
          @blur="handleBlur"
          placeholder="限制内容长度的输入框"
        ></wd-input>
        <wd-input type="text" placeholder="带前置内容的输入框">
          <template #prepend>https://</template>
        </wd-input>
        <wd-input type="text" placeholder="带后置内容的输入框">
          <template #append>.com</template>
        </wd-input>
        <wd-input type="text" placeholder="带后置和后置内容的输入框">
          <template #prepend>https://</template>
          <template #append>.com</template>
        </wd-input>
        <wd-input
          type="text"
          prefix-icon="home-outlined"
          suffix-icon="filter-filled"
          placeholder="带后置和后置图标的输入框"
        >
        </wd-input>
        <wd-input
          type="text"
          clearable
          v-model="textData"
          @change="clearChangeHandler"
          placeholder="带后置和后置图标的输入框"
        >
        </wd-input>
        <wd-input
          type="textarea"
          show-word-limit
          maxlength="50"
          v-model="textData"
          placeholder="这是一个文本框"
        ></wd-input>
      </div>
      <div class="component-box-bottom">
        <div class="component-title">不同尺寸的输入框</div>
        <div class="component-desc">
          可以通过设置size属性设置输入框的大小：small | large | default
        </div>
      </div>
    </div>
    <div class="component-box">
      <div class="component-box-top">
        <wd-input
          :disabled="true"
          type="text"
          placeholder="这是一个不可用输入框"
        ></wd-input>
        <wd-input
          :readonly="true"
          type="text"
          size="small"
          placeholder="这是一个只读输入框"
        ></wd-input>
        <wd-input
          type="text"
          maxlength="10"
          show-word-limit
          v-model="textData"
          @input="handleInput"
          @change="handleChange"
          placeholder="限制内容长度的输入框"
        ></wd-input>
      </div>
      <div class="component-box-bottom">
        <div class="component-title">限制长度的输入框</div>
        <div class="component-desc">
          可以设置maxlength属性设置输入框的最多的字符数；
        </div>
      </div>
    </div>
    <div class="component-box">
      <div class="component-box-top">
        <wd-input
          type="textarea"
          show-word-limit
          maxlength="50"
          v-model="textData"
          placeholder="这是一个文本框"
        ></wd-input>
      </div>
      <div class="component-box-bottom">
        <div class="component-title">文本框</div>
        <div class="component-desc">
          默认是输入框，如果设置了type为textarea，则为文本框，文本框和输入框的属性和
          方法基本一致；
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "input",
  setup() {
    const handleChange = (val) => {
      console.log(val);
    };
    const handleInput = () => {};
    const handleBlur = (val) => {
      console.log(val);
    }
    const clearChangeHandler = () => {};
    const textData = ref("");
    return {
      handleChange,
      handleInput,
      clearChangeHandler,
      textData,
      handleBlur
    };
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
