## Layout 布局
需要通过slot的方式使用组件，不同的页面部分对应的组件为：
* LayoutHeader：页面顶部区域
* LayoutSider：页面侧边栏，通常会放菜单；
> 如果使用了LayoutSider需要设置has-sider为true
* LayoutContent：页面内容区域
* LayoutFooter：页面底部区域
### 用法
#### 基本用法
<div class="component-box">
  <div class="component-box-top"><ClientOnly>
    <wd-layout has-sider="true">
      <wd-layout-sider>
        <wd-menu
          :menu-list="[{text: '表单组件', submenu: [{text: 'Button'}]}, {text: '表单组件', submenu: [{text: 'Button'}]},{text: '表单组件', submenu: [{text: 'Button'}]}]"
          theme="dark"
          @click="menuClickHandler"
        />
      </wd-layout-sider>
      <wd-layout-content>
        content
      </wd-layout-content>
    </wd-layout>
    </ClientOnly>
  </div>
  <div class="component-box-bottom">
    <div class="component-title">布局组件</div>
    <div class="component-desc">
    使用layout组件可以很方便的搭建一个页面架构，包括页面顶部区域，侧边菜单栏，内容区域，底部区域。   
    </div>
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