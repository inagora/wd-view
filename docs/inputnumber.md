## Inputnumber 数字输入框
### 用法
#### 基本用法
<div class="component-box">
  <div class="component-box-top"><ClientOnly>
    <wd-input-number
      v-model="inputNum"
      max="20"
      min="0"
      size="small"
      @input="handleInputNumber"
      @change="handleChangeNumber"
      type="text"
    ></wd-input-number>
    </ClientOnly>
  </div>
  <div class="component-box-bottom">
    <div class="component-title">数字输入框</div>
    <div class="component-desc">
      数字输入框只能输入数字，可以设置数值的最大值和最小值；
      并且可以通过上下按钮增加或者减小数值
    </div>
  </div>
</div>

::: details 点击查看代码 
```html
<wd-input-number
  v-model="inputNum"
  max="20"
  min="0"
  size="small"
  @input="handleInputNumber"
  @change="handleChangeNumber"
  type="text"
></wd-input-number>
```
:::

### 属性
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--: | :--: | :--: | :--: | :--: |
| autosize | 当type为textarea时生效 | boolean | true / false | false |
| clearable | 是否可清空内容 | boolean | true / false | false |
| disabled | 是否可用 | boolean | true / false | true |
| max | 最大值 | number | - | - |
| min | 最小值 | number | - | - |
| readonly | 是否只读 | boolean | true / false | false |
| step | 用箭头控制时每次改变的大小 | number | - | 1 |
| size | 组件大小 | string | small / large / default | default |

### 事件
| 事件名称 | 说明 | 回调参数 |
| :--: | :--: | :--: |
| input | 输入过程中触发 | Function(inputValue) |
| change | 输入框的值变化时触发 | Function(inputValue) |