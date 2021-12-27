## Button 按钮
### 用法
#### 基础用法
<div class="component-box">
  <div class="component-box-top">
    <wd-button-group>
      <wd-button size="large" icon="filter-filled">普通按钮</wd-button>
      <wd-button
        size="large"
        type="primary"
        round-shape="none"
        icon="home-outlined"
        @click="clickHandler"
        >主要按钮</wd-button
      >
      <wd-button size="large" type="danger">危险按钮</wd-button>
      <wd-button size="large" type="success">成功按钮</wd-button>
      <wd-button size="large" type="dashed">dashed按钮</wd-button>
      <wd-button size="large" type="info">info按钮</wd-button>
      <wd-button size="large" type="text">text按钮</wd-button>
      <wd-button size="large" disabled="true" type="primary">按钮不可用</wd-button>
    </wd-button-group>
  </div>
  <div class="component-box-bottom">
    <div class="component-title">不同样式按钮</div>
    <div class="component-desc">
      通过设置type属性，可以设置按钮的不同样式：primary | danger | success |
      dashed | info | text
    </div>
  </div>
</div>   

::: details 点击查看代码 
```html
<wd-button size="large" icon="filter-filled">普通按钮</wd-button>
  <wd-button
    size="large"
    type="primary"
    round-shape="none"
    icon="home-outlined"
    @click="clickHandler"
    >主要按钮</wd-button
  >
  <wd-button size="large" type="danger">危险按钮</wd-button>
  <wd-button size="large" type="success">成功按钮</wd-button>
  <wd-button size="large" type="dashed">dashed按钮</wd-button>
  <wd-button size="large" type="info">info按钮</wd-button>
  <wd-button size="large" type="text">text按钮</wd-button>
  <wd-button size="large" disabled="true" type="primary">按钮不可用</wd-button>
</wd-button-group>
```
:::

* 禁用状态
* 按钮图标
* 按钮组
* 按钮尺寸
### 属性
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--: | :--: | :--: | :--: | :--: |
| size | 组件大小 | string | small / large | small |