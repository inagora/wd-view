## Input 输入框
### 用法
#### 不同尺寸
<div class="component-box">
    <div class="component-box-top"><ClientOnly>
        <wd-input type="text" size="large" placeholder="请输入内容"></wd-input>
        <wd-input
          type="text"
        ></wd-input>
        <wd-input
          type="text"
          size="small"
        ></wd-input>
    </ClientOnly></div>
    <div class="component-box-bottom">
        <div class="component-title">不同尺寸的输入框</div>
        <div class="component-desc">
            可以通过设置size属性设置输入框的大小：small | large | default
        </div>
    </div>
</div> 

::: details 点击查看代码 
```html
<wd-input type="text" size="large" placeholder="请输入内容"></wd-input>
<wd-input
  type="text"
></wd-input>
<wd-input
  type="text"
  size="small"
></wd-input>
```
:::

#### 限制长度
<div class="component-box">
    <div class="component-box-top"><ClientOnly>
        <wd-input
          type="text"
          size="small"
          maxlength="10"
          show-word-limit
        ></wd-input>
    </ClientOnly></div>
    <div class="component-box-bottom">
        <div class="component-title">限制长度的输入框</div>
        <div class="component-desc">
            可以设置maxlength属性设置输入框的最多的字符数；
        </div>
    </div>
</div> 

::: details 点击查看代码 
```html
<wd-input
  type="text"
  size="small"
  maxlength="10"
  show-word-limit
></wd-input>
```
:::

#### 前置或者后置
<div class="component-box">
    <div class="component-box-top"><ClientOnly>
        <wd-input type="text" placeholder="带前置内容的输入框">
          <template #prepend>https://</template>
        </wd-input>
        <wd-input type="text" placeholder="带后置内容的输入框">
          <template #append>.com</template>
        </wd-input>
    </ClientOnly></div>
    <div class="component-box-bottom">
        <div class="component-title">带前置或者后置的输入框</div>
        <div class="component-desc">
            设置name为prepend或者append的slot可以设置前置或者后置内容
        </div>
    </div>
</div> 

::: details 点击查看代码 
```html
<wd-input type="text" placeholder="带前置内容的输入框">
  <template #prepend>https://</template>
</wd-input>
<wd-input type="text" placeholder="带后置内容的输入框">
  <template #append>.com</template>
</wd-input>
```
:::

#### 文本框
<div class="component-box">
    <div class="component-box-top"><ClientOnly>
        <wd-input
          type="textarea"
          show-word-limit
          maxlength="50"
          v-model="textData"
          placeholder="这是一个文本框"
        ></wd-input>
    </ClientOnly></div>
    <div class="component-box-bottom">
        <div class="component-title">文本框</div>
        <div class="component-desc">
          默认是输入框，如果设置了type为textarea，则为文本框，文本框和输入框的属性和
          方法基本一致；
        </div>
    </div>
</div> 

::: details 点击查看代码 
```html
<wd-input
  type="textarea"
  show-word-limit
  maxlength="50"
  v-model="textData"
  placeholder="这是一个文本框"
></wd-input>
```
:::

### 属性
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--: | :--: | :--: | :--: | :--: |
| autosize | 当type为textarea时生效 | boolean | true / false | false |
| clearable | 是否可清空内容 | boolean | true / false | false |
| disabled | 是否可用 | boolean | true / false | true |
| prefixIcon | 前置图标 | string | - | - |
| suffixIcon | 后置图标 | string | - | - |
| size | 组件大小 | string | small / large / default | default |
| show-password | 是否显示密码，当type为password时生效 | boolean | true / false | false |
| show-word-limit | 是否显示字数限制提示 | boolean | true / false | false |
| type | 文本框类型 | string | 参考[原生type](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input) | text |

### 事件
| 事件名称 | 说明 | 回调参数 |
| :--: | :--: | :--: |
| input | 输入过程中触发 | Function(inputValue) |
| change | 输入框的值变化时触发 | Function(inputValue) |
| clear | 点击情况按钮时触发 | (event) => void |