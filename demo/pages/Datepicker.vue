<template>
  <div class="container">
    <div class="component-box">
      <div class="component-box-top">
        <wd-date-picker
          type="date"
          :clearable="false"
          :disabled="false"
          default-value="2021-02-02 02:02:02"
          format="YYYY/MM/DD HH:mm:ss"
          value-format="YYYY-MM-DD HH-mm-ss"
          size="small"
          placeholder="请选择日期"
          v-model="datepickerValue"
          @change="datepickerChange"
        ></wd-date-picker>
        <wd-date-picker
          type="range"
          :clearable="true"
          :disabled="false"
          :default-value="['2021-02-02 02:02:02', '2021-02-03 02:02:02']"
          format="YYYY/MM/DD HH:mm:ss"
          value-format="YYYY-MM-DD HH-mm-ss"
          size="small"
          :placeholder="['请选择开始日期', '请选择结束日期']"
          v-model="datepickerValue"
          separator="|"
          @change="datepickerChange"
        ></wd-date-picker>
      </div>
      <div class="component-box-bottom">
        <div class="component-title">日期时间</div>
        <div class="component-desc">
          可以通过type设置不同的组件类型：date | mounth | range | time | week
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "Datepicker",
  setup() {
    let datepickerValue = ref("2021-02-02 02:02:02");
    const datepickerChange = (val) => {
      // console.log(val);
    };
    return {
      datepickerValue,
      datepickerChange,
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
