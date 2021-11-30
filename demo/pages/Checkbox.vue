<template>
    <div class="container">
        <div class="component-box">
          <div class="component-box-top">
            <wd-checkbox 
                :checked="isCheckboxChecked"
                @change="handleCheckboxChange">
                复选框
            </wd-checkbox>
            <wd-checkbox 
                :checked="checkboxDefaultCheck"
                v-model="checkboxDefaultCheck"
                @change="handleCheckboxChange">
                复选框默认选中
            </wd-checkbox>
            <wd-checkbox 
                :checked="isCheckboxChecked"
                :disabled="true"
                @change="handleCheckboxChange">
                复选框不可用
            </wd-checkbox>
          </div>
          <div class="component-box-bottom">
            <div class="component-title">复选框</div>
            <div class="component-desc">
              设置checked属性，可以设置checkbox是否默认选中；
              设置disabled为true则该checkbox不可更改值；
            </div>
          </div>
        </div>
        <div class="component-box">
          <div class="component-box-top">
           <wd-checkbox-group 
                @change="handleCheckboxChange"
                v-model="checkboxGroupValue"
                :default-value="['a']"
                :options="checkboxGroupOptions">
            </wd-checkbox-group>
          </div>
          <div class="component-box-bottom">
            <div class="component-title">复选框组</div>
            <div class="component-desc">
              options属性可以设置多个选项；default-value可以设置默认值
            </div>
          </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
export default defineComponent({
    name: 'Checkbox',
    setup() {
        let isCheckboxChecked = ref(false);
        let checkboxGroupOptions = ref([]);
        checkboxGroupOptions.value = ['a', 'b'];
        let checkboxGroupValue = ref([]);
        let checkboxDefaultCheck = ref(true);
        return {
          isCheckboxChecked,
          checkboxGroupOptions,
          checkboxGroupValue,
          checkboxDefaultCheck
        }
    }
})
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


