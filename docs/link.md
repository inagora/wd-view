## Link 链接
### 用法
#### 基本用法
<div class="component-box">
  <div class="component-box-top"><ClientOnly>
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
    </ClientOnly>
  </div>
  <div class="component-box-bottom">
    <div class="component-title">链接组件</div>
    <div class="component-desc">
      该组件主要是为了提供一个超链接，可以设置不同的超链接的样式（同button组件的type）;
      可以设置href属性为链接地址；
    </div>
  </div>
</div>

::: details 点击查看代码 
```html
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
```
:::

### 属性
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--: | :--: | :--: | :--: | :--: |
| type | 类型 | string | primary / success / warning / danger / info / text / dashed | - |
| disabled | 是否可用 | boolean | true / false | true |
| href | 跳转链接 | string | - | - |
| underline | 是否显示下划线 | boolean | true / false | false |

### 事件
| 事件名称 | 说明 | 回调参数 |
| :--: | :--: | :--: |
| click | 点击事件 | (event) => void |