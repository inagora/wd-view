## Radio 单选
### 用法
#### 基本用法
<div class="component-box">
  <div class="component-box-top">
    <wd-radio
      v-model="isRadioChecked"
      :checked="isRadioChecked"
      name="color"
      @change="handleRadioChange"
    >
      红色
    </wd-radio>
  </div>
  <div class="component-box-bottom">
    <div class="component-title">单选组件</div>
    <div class="component-desc">用于选择多个值中的一个；</div>
  </div>
</div>

::: details 点击查看代码 
```html
<wd-radio
  v-model="isRadioChecked"
  :checked="isRadioChecked"
  name="color"
  @change="handleRadioChange"
>
  红色
</wd-radio>
```
:::

### 属性
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--: | :--: | :--: | :--: | :--: |
| checked | 是否选中 | boolean | true / false | false |
| name | 组件名称 | string | - | - |
| disabled | 是否可用 | boolean | true / false | true |

### 事件
| 事件名称 | 说明 | 回调参数 |
| :--: | :--: | :--: |
| change | 值变化时触发 | Function(checkedValue) |