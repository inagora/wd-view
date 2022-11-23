## Button 按钮
### 用法
#### 按钮样式
<div class="component-box">
  <div class="component-box-top"><ClientOnly>
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
    </ClientOnly>
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
```
:::

#### 按钮大小
<div class="component-box">
  <div class="component-box-top"><ClientOnly>
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
      <wd-button size="small" type="danger">危险按钮</wd-button>
      <wd-button type="success">成功按钮</wd-button>
      <wd-button size="small" type="dashed">dashed按钮</wd-button>
      <wd-button size="large" type="info">info按钮</wd-button>
      <wd-button size="small" type="text">text按钮</wd-button>
      <wd-button size="large" disabled="true" type="primary"
        >按钮不可用</wd-button
      >
    </wd-button-group>
    </ClientOnly>
  </div>
  <div class="component-box-bottom">
    <div class="component-title">不同尺寸按钮</div>
    <div class="component-desc">
      通过设置size属性，可以设置按钮的大小：small | middle | large
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
<wd-button size="small" type="danger">危险按钮</wd-button>
<wd-button size="middle" type="success">成功按钮</wd-button>
<wd-button size="small" type="dashed">dashed按钮</wd-button>
<wd-button size="large" type="info">info按钮</wd-button>
<wd-button size="small" type="text">text按钮</wd-button>
<wd-button size="large" disabled="true" type="primary"
  >按钮不可用</wd-button
>
```
:::

#### 按钮形状
<div class="component-box">
  <div class="component-box-top"><ClientOnly>
    <wd-button-group>
      <wd-button
        size="large"
        type="primary"
        round-shape="none"
        icon="home-outlined"
        @click="clickHandler"
        >主要按钮</wd-button
      >
      <wd-button size="small" round-shape="circle" type="primary"
        >C</wd-button
      >
    </wd-button-group>
    </ClientOnly>
  </div>
  <div class="component-box-bottom">
    <div class="component-title">不同样式按钮</div>
    <div class="component-desc">
      通过设置round-shape属性，可以设置按钮的形状：circle | none
    </div>
  </div>
</div>

::: details 点击查看代码 
```html
<wd-button
  size="large"
  type="primary"
  round-shape="none"
  icon="home-outlined"
  @click="clickHandler"
  >主要按钮</wd-button
>
<wd-button size="small" round-shape="circle" type="primary"
  >C</wd-button
>
```
:::

#### 按钮组
<div class="component-box">
  <div class="component-box-top"><ClientOnly>
    <wd-button-group size="small" type="success">
      <wd-button
        round-shape="none"
        icon="home-outlined"
        @click="clickHandler"
        >成功按钮</wd-button
      >
      <wd-button
        size="large"
        round-shape="none"
        icon="home-outlined"
        type="primary"
        @click="clickHandler"
        >主要按钮</wd-button
      >
      <wd-button
        round-shape="none"
        icon="home-outlined"
        type="primary"
        @click="clickHandler"
        >按钮</wd-button
      >
      <wd-button round-shape="circle" type="primary"
        >C</wd-button
      >
    </wd-button-group>
    </ClientOnly>
  </div>
  <div class="component-box-bottom">
    <div class="component-title">ButtonGroup</div>
    <div class="component-desc">
      在按钮组中的按钮会自动加上间隔，并且可以设置按钮组中的按钮的大小和类型，如果按钮也设置了大小和类型，则以按钮组上的属性会被覆盖。
    </div>
  </div>
</div>

::: details 点击查看代码 
```html
<wd-button-group size="small" type="success">
  <wd-button
    round-shape="none"
    icon="home-outlined"
    @click="clickHandler"
    >成功按钮</wd-button
  >
  <wd-button
    size="large"
    round-shape="none"
    icon="home-outlined"
    type="primary"
    @click="clickHandler"
    >主要按钮</wd-button
  >
  <wd-button
    round-shape="none"
    icon="home-outlined"
    type="primary"
    @click="clickHandler"
    >按钮</wd-button
  >
  <wd-button round-shape="circle" type="primary"
    >C</wd-button
  >
</wd-button-group>
```
:::

### 属性
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--: | :--: | :--: | :--: | :--: |
| size(ButtonGroup组件) | 组件大小 | string | small / middle / large | middle |
| type(ButtonGroup组件) | 类型 | string | primary / success / warning / danger / info / text / dashed | - |
| roundShape | 形状 | string | circle / none | none |
| disabled | 是否可用 | boolean | true / false | true |
| loading | 加载中 | boolean | true / false | false |

### 事件
| 事件名称 | 说明 | 回调参数 |
| :--: | :--: | :--: |
| click | 按钮的点击事件 | (event) => void |