## Table 表格
### 用法
#### 基本用法
<div class="component-box">
  <div class="component-box-top"><ClientOnly>
    <wd-table
      :columns="[{title: 'ID', dataIndex: 'id'}, {title: '商品名', dataIndex: 'goods_name'}, {title: '价格', dataIndex: 'price'}, {title: '生产日期', dataIndex: 'ctime'}]"
      :data-source="[{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'}]"
      :bordered="false"
    ></wd-table>
    </ClientOnly>
  </div>
  <div class="component-box-bottom">
    <div class="component-title">基础表格</div>
    <div class="component-desc">
      当有大量的结构化的数据需要展示的时候，可以使用表格组件；需要指定每列的数据和数据源
    </div>
  </div>
</div>

::: details 点击查看代码 
```html
<wd-table
  :columns="[{title: 'ID', dataIndex: 'id'}, {title: '商品名', dataIndex: 'goods_name'}, {title: '价格', dataIndex: 'price'}, {title: '生产日期', dataIndex: 'ctime'}]"
  :data-source="[{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'}]"
></wd-table>
```
:::

#### 带边框
<div class="component-box">
  <div class="component-box-top"><ClientOnly>
    <wd-table
      :columns="[{title: 'ID', dataIndex: 'id'}, {title: '商品名', dataIndex: 'goods_name'}, {title: '价格', dataIndex: 'price'}, {title: '生产日期', dataIndex: 'ctime'}]"
      :data-source="[{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'}]"
      bordered
    ></wd-table>
    </ClientOnly>
  </div>
  <div class="component-box-bottom">
    <div class="component-title">带边框表格</div>
    <div class="component-desc">
      设置bordered或者bordered=true，表格会带边框
    </div>
  </div>
</div>

::: details 点击查看代码 
```html
<wd-table
  :columns="[{title: 'ID', dataIndex: 'id'}, {title: '商品名', dataIndex: 'goods_name'}, {title: '价格', dataIndex: 'price'}, {title: '生产日期', dataIndex: 'ctime'}]"
  :data-source="[{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'}]"
  bordered
></wd-table>
```
:::

#### 自动省略
<div class="component-box">
  <div class="component-box-top"><ClientOnly>
    <wd-table
      :columns="[{title: 'ID', dataIndex: 'id'}, {title: '商品名', dataIndex: 'goods_name'}, {title: '价格', dataIndex: 'price'}, {title: '生产日期', dataIndex: 'ctime'}]"
      :data-source="[{id: '1', goods_name: 'sk2sk2sk2sk2sk2sk2sk2sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'}]"
      :cell-wrap="true"
    ></wd-table>
    </ClientOnly>
  </div>
  <div class="component-box-bottom">
    <div class="component-title">单元格内容自动省略</div>
    <div class="component-desc">
      如果设置了单元格自动省略，当内容过长时会显示省略号
    </div>
  </div>
</div>

::: details 点击查看代码 
```html
<wd-table
  :columns="[{title: 'ID', dataIndex: 'id'}, {title: '商品名', dataIndex: 'goods_name'}, {title: '价格', dataIndex: 'price'}, {title: '生产日期', dataIndex: 'ctime'}]"
  :data-source="[{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'}]"
  :cell-wrap="true"
></wd-table>
```
:::

#### 固定表头
<div class="component-box">
  <div class="component-box-top"><ClientOnly>
    <wd-table
      :columns="[{title: 'ID', dataIndex: 'id'}, {title: '商品名', dataIndex: 'goods_name'}, {title: '价格', dataIndex: 'price'}, {title: '生产日期', dataIndex: 'ctime'}]"
      :data-source="[{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'}]"
      :sticky="true"
    ></wd-table>
    </ClientOnly>
  </div>
  <div class="component-box-bottom">
    <div class="component-title">固定表头</div>
    <div class="component-desc">
      设置sticky=true后，表头会固定，只有表体部分可以滚动
    </div>
  </div>
</div>

::: details 点击查看代码 
```html
<wd-table
  :columns="[{title: 'ID', dataIndex: 'id'}, {title: '商品名', dataIndex: 'goods_name'}, {title: '价格', dataIndex: 'price'}, {title: '生产日期', dataIndex: 'ctime'}]"
  :data-source="[{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'}]"
  :sticky="true"
></wd-table>
```
:::

#### 选择行
<div class="component-box">
  <div class="component-box-top"><ClientOnly>
    <wd-table
      :columns="[{title: '', dataIndex: '', type: 'checkbox'}, {title: 'ID', dataIndex: 'id'}, {title: '商品名', dataIndex: 'goods_name'}, {title: '价格', dataIndex: 'price'}, {title: '生产日期', dataIndex: 'ctime'}]"
      :data-source="[{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'}]"
    ></wd-table>
    </ClientOnly>
  </div>
  <div class="component-box-bottom">
    <div class="component-title">表格行选择</div>
    <div class="component-desc">
      在设置columns属性时，如果列的type为checkbox，则该列为选择列
    </div>
  </div>
</div>

::: details 点击查看代码 
```html
<wd-table
  :columns="[{title: '', dataIndex: '', type: 'checkbox'}, {title: 'ID', dataIndex: 'id'}, {title: '商品名', dataIndex: 'goods_name'}, {title: '价格', dataIndex: 'price'}, {title: '生产日期', dataIndex: 'ctime'}]"
  :data-source="[{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'}]"
  :sticky="true"
></wd-table>
```
:::
### 属性
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--: | :--: | :--: | :--: | :--: |
| bordered | 是否显示边框 | boolean | true / false | false |
| columns | 列的配置 | array | - | - |
| current-page | 当前页 | number | - | 1 |
| data-source | 数据源 | array | - | - |
| height | 表格高度 | string | - | - |
| header-align | 表头文字位置 | string | left / center / right | left |
| page-count | 总页数 | number / string | - | 1 |
| page-size | 每页数据个数 | number / string | - | 15 |
| pagination-position | 分页器位置 |  string | left / center / right | left |
| total | 数据总数 | number / string | - | - |
### 事件
| 事件名称 | 说明 | 回调参数 |
| :--: | :--: | :--: |
| current-change | 当前页变化的回调函数 | Function(currentPage) |
| select-change | 选择行变化的回调函数 | Function(selectedRows) |
| cell-click | 单元格点击 | Function({ row, rowIndex, dataIndex, value }) |
| row-click | 行的点击 | Function(currentRow) |
| next-click | 分页器下一页点击的回调函数 | Function(currentPage) |
| prev-click | 分页器上一页点击的回调函数 | Function(currentPage) |