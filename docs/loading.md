## Loading 加载 
### 用法
#### 基本用法
<div class="component-box">
  <div class="component-box-top"><ClientOnly>
      <wd-loading>
        <wd-button>加载中...</wd-button>
      </wd-loading> 
    </ClientOnly>
  </div>
  <div class="component-box-bottom">
    <div class="component-title">加载组件</div>
    <div class="component-desc">
      如果一个组件需要请求远程数据，并且需要一个加载中的状态，则可以使用Loading组件作为父组件
    </div>
  </div>
</div>

::: details 点击查看代码 
```html
<wd-loading>
  <wd-button>加载中...</wd-button>
</wd-loading> 
```
:::

### 属性
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--: | :--: | :--: | :--: | :--: |
| loading | 是否加载中 | boolean | true / false | false |
| text | 加载中的文案 | string | - | '' |