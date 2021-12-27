## Checkbox 多选
### 用法
#### 基本用法
<div class="component-box">
    <div class="component-box-top">
        <wd-checkbox
            :checked="isCheckboxChecked"
            @change="handleCheckboxChange"
        >
            复选框
        </wd-checkbox>
        <wd-checkbox
            :checked="checkboxDefaultCheck"
            v-model="checkboxDefaultCheck"
            @change="handleCheckboxChange"
        >
            复选框默认选中
        </wd-checkbox>
        <wd-checkbox
            :checked="isCheckboxChecked"
            :disabled="true"
            @change="handleCheckboxChange"
        >
            复选框不可用
        </wd-checkbox>
    </div>
    <div class="component-box-bottom">
        <div class="component-title">复选框</div>
        <div class="component-desc">
            设置checked属性，可以设置checkbox是否默认选中；
            设置disabled为true则该checkbox不可更改值；
        </div>
    </div>
</div> 

::: details 点击查看代码 
```html
<wd-checkbox
    :checked="isCheckboxChecked"
    @change="handleCheckboxChange"
>
    复选框
</wd-checkbox>
<wd-checkbox
    :checked="checkboxDefaultCheck"
    v-model="checkboxDefaultCheck"
    @change="handleCheckboxChange"
>
    复选框默认选中
</wd-checkbox>
<wd-checkbox
    :checked="isCheckboxChecked"
    :disabled="true"
    @change="handleCheckboxChange"
>
    复选框不可用
</wd-checkbox>
```
:::

#### 复选框组
<div class="component-box">
    <div class="component-box-top">
        <wd-checkbox-group
          @change="handleCheckboxChange"
          v-model="checkboxGroupValue"
          :default-value="['a']"
          :options="checkboxGroupOptions"
        >
        </wd-checkbox-group>
    </div>
    <div class="component-box-bottom">
        <div class="component-title">复选框组</div>
        <div class="component-desc">
            options属性可以设置多个选项；default-value可以设置默认值
        </div>
    </div>
</div> 

::: details 点击查看代码 
```html
<wd-checkbox-group
    @change="handleCheckboxChange"
    v-model="checkboxGroupValue"
    :default-value="['a']"
    :options="checkboxGroupOptions"
>
</wd-checkbox-group>
```
:::

### 属性
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--: | :--: | :--: | :--: | :--: |
| checked | 是否选中 | boolean | true / false | false |
| name | 组件名称 | string | - | - |
| default-value | 复选框组才有的属性 | Array | - | - |
| disabled | 是否可用 | boolean | true / false | true |