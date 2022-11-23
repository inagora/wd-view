## Drawer 抽屉
### 用法
#### 基本用法
<div class="component-box">
  <div class="component-box-top"><ClientOnly>
    <wd-button @click="centerDialogVisible = true">show drawer</wd-button>
    <wd-drawer
      v-model="centerDialogVisible"
      title="Notice"
      width="40%"
      :show-close="true"
      @open="openHandler"
      @before-open="beforeOpen"
      @before-close="beforeClose"
      :append-to-body="true"
      :closeOnClickModal="false"
      :destroy-on-close="false"
      placement="right"
      :appear="true"
    >
      <span>
        drawer
      </span>
      <template #footer>
        <wd-button type="primary" @click="centerDialogVisible = false"
          >确定</wd-button
        >
      </template>
    </wd-drawer>
    </ClientOnly>
  </div>
  <div class="component-box-bottom">
    <div class="component-title">抽屉组件</div>
    <div class="component-desc">
      有些时候, Dialog 组件并不满足我们的需求, 比如你的表单很长, 亦或是你需要临时展示一些文档, Drawer 拥有和 Dialog 几乎相同的 API, 在 UI 上带来不一样的体验
    </div>
  </div>
</div>

::: details 点击查看代码 
```html
<wd-button @click="centerDialogVisible = true">show drawer</wd-button>
<wd-dialog
  v-model="centerDialogVisible"
  title="Notice"
  width="40%"
  :show-close="true"
  @open="openHandler"
  @before-open="beforeOpen"
  @before-close="beforeClose"
  :append-to-body="false"
  :closeOnClickModal="false"
  :destroy-on-close="true"
>
  <span
    >drawer</span
  >
  <template #footer>
    <wd-button type="primary">确定</wd-button>
  </template>
</wd-dialog>
```
:::
#### 自定义底部
可以通过slot的方式自定义底部按钮
```html
<wd-drawer
  v-model="centerDialogVisible"
  title="Notice"
  width="40%"
  :show-close="true"
  @open="openHandler"
  @before-open="beforeOpen"
  @before-close="beforeClose"
  :append-to-body="false"
  :closeOnClickModal="false"
  :destroy-on-close="true"
>
  <span
    >drawer</span
  >
  <template #footer>
    <wd-button type="primary">确定</wd-button>
  </template>
</wd-drawer>
```

### 属性
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--: | :--: | :--: | :--: | :--: |
| appendToBody | 遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Drawer 的父元素上 | boolean | true / false | false |
| customClass | 自定义类名 | string | '' | '' |
| closeOnClickModal | 点击遮罩是否关闭Drawer | boolean | true / false | true |
| destroyOnClose | 关闭Drawer时是否移除元素 | boolean | true / false | false |
| showClose | 是否显示关闭按钮 | boolean | true / false | true |
| title | Drawer标题 | string | '' | '' |
| openDelay | 延迟打开Drawer | number | - | 0 |
| closeDelay | 延迟关闭Drawer | number | - | 0 |
| top | 顶部margin | string | - | 15vh |
| width | Drawer宽度 | string | - | 50% |
### 事件
| 事件名称 | 说明 | 回调参数 |
| :--: | :--: | :--: |
| close | Drawer关闭时触发 | Function() |
| before-close | Drawer关闭之前触发 | Function() |
| open | Drawer弹出时触发 | Function() |
| before-open | Drawer弹出之前触发 | Function() |