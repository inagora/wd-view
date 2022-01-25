## Drawer 抽屉
### 用法
#### 基本用法
<div class="component-box">
  <div class="component-box-top"><ClientOnly>
    <wd-switch
      v-model="isSwitchChecked"
      :loading="isSwitchLoading"
      @change="handleSwitchChange"
    />
    <wd-switch
      disabled
      size="large"
      :loading="true"
      v-model="isSwitchChecked"
    />
    </ClientOnly>
  </div>
  <div class="component-box-bottom">
    <div class="component-title">开关组件</div>
    <div class="component-desc">
      开关组件可以控制一个状态，当异步切换状态的时候可以显示loading状态；
    </div>
  </div>
</div>

::: details 点击查看代码 
```html
<wd-switch
  v-model="isSwitchChecked"
  :loading="isSwitchLoading"
  @change="handleSwitchChange"
/>
<wd-switch
  disabled
  size="large"
  :loading="true"
  v-model="isSwitchChecked"
/>
```
:::

### 属性
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--: | :--: | :--: | :--: | :--: |
| checked | 是否选中 | boolean | true / false | false |
| disabled | 是否可用 | boolean | true / false | true |
| loading | 是否正在加载 | boolean | true / false | false |
| size | 组件大小 | string | small / large / default | default |
### 事件
| 事件名称 | 说明 | 回调参数 |
| :--: | :--: | :--: |
| change | 值变化时触发 | Function(checkedValue) |