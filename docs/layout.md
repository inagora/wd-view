## layout
使用layout组件可以很方便的搭建一个页面架构，包括页面顶部区域，侧边菜单栏，内容区域，底部区域。   
需要通过slot的方式使用组件，不同的页面部分对应的组件为：
* LayoutHeader：页面顶部区域
* LayoutSider：页面侧边栏，通常会放菜单；
> 如果使用了LayoutSider需要设置has-sider为true
* LayoutContent：页面内容区域
* LayoutFooter：页面底部区域
***
* 示例：
```javascript
  <wd-layout has-sider="true">
    <wd-layout-sider>
    </wd-layout-sider>
    <wd-layout-content>
    </wd-layout-content>
  </wd-layout>
```