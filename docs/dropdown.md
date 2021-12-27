## Dropdown 下拉列表
### 用法
#### 基本用法
<div class="component-box">
    <div class="component-box-top">
        <wd-dropdown
            :visible="false"
            trigger="hover"
            @visibleChange="visibleChangeHandler"
        >
            <a class="wd-dropdown-link">
            下拉菜单
            <down-outlined></down-outlined>
            </a>
            <template #dropdown>
                <wd-dropdown-menu>
                    <wd-dropdown-menu-item>
                    <a href="https://www.baidu.com">百度</a>
                    </wd-dropdown-menu-item>
                    <wd-dropdown-menu-item disabled>
                    <a href="https://www.baidu.com">百度</a>
                    </wd-dropdown-menu-item>
                    <wd-dropdown-menu-item>
                    <a href="javascript:;">1st menu item</a>
                    </wd-dropdown-menu-item>
                </wd-dropdown-menu>
            </template>
        </wd-dropdown>
    </div>
    <div class="component-box-bottom">
    <div class="component-title">下拉组件</div>
    <div class="component-desc">
        点击或者鼠标移到组件上可以出现下拉的选项，每个选项可以自定义样式；
    </div>
    </div>
</div>

::: details 点击查看代码 
```html
<wd-dropdown
    :visible="false"
    trigger="hover"
    @visibleChange="visibleChangeHandler"
>
    <a class="wd-dropdown-link">
    下拉菜单
    <down-outlined></down-outlined>
    </a>
    <template #dropdown>
        <wd-dropdown-menu>
            <wd-dropdown-menu-item>
            <a href="https://www.baidu.com">百度</a>
            </wd-dropdown-menu-item>
            <wd-dropdown-menu-item disabled>
            <a href="https://www.baidu.com">百度</a>
            </wd-dropdown-menu-item>
            <wd-dropdown-menu-item>
            <a href="javascript:;">1st menu item</a>
            </wd-dropdown-menu-item>
        </wd-dropdown-menu>
    </template>
</wd-dropdown>
```
:::

### 属性
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--: | :--: | :--: | :--: | :--: |
| visible | 是否显示下拉选项 | boolean | true / false | false |
| trigger | 触发选项弹出的事件 | string | hover / click | hover |
| disabled | 是否可用 | boolean | true / false | false |