## Select 下拉选择
### 用法
#### 单选
<div class="component-box">
  <div class="component-box-top"><ClientOnly>
    <wd-select
      v-model="selectedValue1"
      @change="selectedChangeHandler1"
      placeholder="请选择搜索引擎"
      size="small"
      key="s2"
    >
      <wd-option label="百度" value="baidu"></wd-option>
      <wd-option label="谷歌" value="google"></wd-option>
      <wd-option label="必应" value="bing"></wd-option>
    </wd-select>
    </ClientOnly>
  </div>
  <div class="component-box-bottom">
    <div class="component-title">单选下拉框</div>
    <div class="component-desc">
      如果没有设置multiple或者multiple=false，则为单选下拉框
    </div>
  </div>
</div>

::: details 点击查看代码 
```html
<wd-select
  v-model="selectedValue1"
  @change="selectedChangeHandler1"
  placeholder="请选择搜索引擎"
  size="small"
  key="s2"
>
  <wd-option label="百度" value="baidu"></wd-option>
  <wd-option label="谷歌" value="google"></wd-option>
  <wd-option label="必应" value="bing"></wd-option>
</wd-select>
```
:::

#### 多选
<div class="component-box">
  <div class="component-box-top"><ClientOnly>
    <wd-select
      multiple
      :multiple-limit="2"
      v-model="selectedValue"
      @change="selectedChangeHandler"
      placeholder="请选择搜索引擎"
      size="small"
      key="s1"
    >
      <wd-option label="百度" value="baidu"></wd-option>
      <wd-option label="百度知道" value="baiduzhidao"></wd-option>
      <wd-option label="谷歌" value="google"></wd-option>
    </wd-select>
    </ClientOnly>
  </div>
  <div class="component-box-bottom">
    <div class="component-title">下拉框</div>
    <div class="component-desc">
      设置multiple或者multiple=true，则为多选下拉框，并且可以显示多选的长度；
    </div>
  </div>
</div>

::: details 点击查看代码 
```html
<wd-select
  multiple
  :multiple-limit="2"
  v-model="selectedValue"
  @change="selectedChangeHandler"
  placeholder="请选择搜索引擎"
  size="small"
  key="s1"
>
  <wd-option label="百度" value="baidu"></wd-option>
  <wd-option label="百度知道" value="baiduzhidao"></wd-option>
  <wd-option label="谷歌" value="google"></wd-option>
</wd-select>
```
:::

### 属性
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--: | :--: | :--: | :--: | :--: |
| clearable | 是否可清空 | boolean | true / false | false |
| disabled | 是否可用 | boolean | true / false | true |
| filterable | 是否可搜索 | boolean | true / false | false |
| multiple | 是否为多选 | boolean | true / false | false |
| multiple-limit | 多选项个数显示 | number | - | - |
| size | 组件大小 | string | small / large / default | default |
### 事件
| 事件名称 | 说明 | 回调参数 |
| :--: | :--: | :--: |
| change | 值变化时触发 | Function(selectedValue) |
| remote-tag | 多选时删除已选项时触发 | () => void |
| clear | 清空选择的值时触发 | () => void |
| visible-change | 下拉选项显示与隐藏 | Function(visibleValue) |