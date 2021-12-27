## Datepicker 日期组件
> 日期组件目前是对ant-desigin-vue中的日期组件的二次封装，使用时需要引入ant-desigin-vue，之后会开发日期组件
### 用法
#### 基本用法
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

::: details 点击查看代码 
```html
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
```
:::

### 属性
> 详细属性可以参考[ant-desigin-vue的日期组件](https://2x.antdv.com/components/date-picker-cn)