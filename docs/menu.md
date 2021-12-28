## Menu 菜单
### 用法
#### 基本用法
<div class="component-box">
  <div class="component-box-top"><ClientOnly>
    <wd-menu
      :menu-list="[{text: '表单组件', submenu: [{text: 'Button'}]}, {text: '表单组件', submenu: [{text: 'Button'}]},{text: '表单组件', submenu: [{text: 'Button'}]}]"
      theme="dark"
      @click="menuClickHandler"
    />
    </ClientOnly>
  </div>
  <div class="component-box-bottom">
    <div class="component-title">菜单组件</div>
    <div class="component-desc">
      该组件需要传入一个数据数组，描述菜单项
    </div>
  </div>
</div>

::: details 点击查看代码 
```html
<wd-menu
  :menu-list="[{text: '表单组件', submenu: [{text: 'Button'}]}, {text: '表单组件', submenu: [{text: 'Button'}]},{text: '表单组件', submenu: [{text: 'Button'}]}]"
  theme="dark"
  @click="menuClickHandler"
/>
```
:::

### 属性
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--: | :--: | :--: | :--: | :--: |
| menu-list | 菜单列表 | Array | - | - |
| theme | 主题 | string | dark / light | light |

### MenuList

### MenuItem
### 事件
| 事件名称 | 说明 | 回调参数 |
| :--: | :--: | :--: |
| click | 菜单项点击 | Function(MenuItem) |