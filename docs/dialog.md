## Dialog 弹窗 
### 用法
#### 基本用法
<div class="component-box">
  <div class="component-box-top"><ClientOnly>
    <wd-button @click="centerDialogVisible = true">show dialog</wd-button>
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
        >Notice: before dialog gets opened for the first time this node and the
        one bellow will not be rendered</span
      >
    </wd-dialog>
    </ClientOnly>
  </div>
  <div class="component-box-bottom">
    <div class="component-title">对话框组件</div>
    <div class="component-desc">
      弹出一个对话框，提示用户确认信息
    </div>
  </div>
</div>

::: details 点击查看代码 
```html
<wd-button @click="centerDialogVisible = true">show dialog</wd-button>
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
    >Notice: before dialog gets opened for the first time this node and the
    one bellow will not be rendered</span
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
    >Notice: before dialog gets opened for the first time this node and the
    one bellow will not be rendered</span
  >
  <template #footer>
    <wd-button type="primary">确定</wd-button>
  </template>
</wd-dialog>
```

### 属性
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--: | :--: | :--: | :--: | :--: |
| appendToBody | 遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Dialog 的父元素上 | boolean | true / false | false |
| customClass | 自定义类名 | string | '' | '' |
| closeOnClickModal | 点击遮罩是否关闭Dialog | boolean | true / false | true |
| destroyOnClose | 关闭Dialog时是否移除元素 | boolean | true / false | false |
| showClose | 是否显示关闭按钮 | boolean | true / false | true |
| title | Dialog标题 | string | '' | '' |
| openDelay | 延迟打开Dialog | number | - | 0 |
| closeDelay | 延迟关闭Dialog | number | - | 0 |
| top | 顶部margin | string | - | 15vh |
| width | Dialog宽度 | string | - | 50% |
### 事件
| 事件名称 | 说明 | 回调参数 |
| :--: | :--: | :--: |
| close | Dialog关闭时触发 | Function() |
| before-close | Dialog关闭之前触发 | Function() |
| open | Dialog弹出时触发 | Function() |
| before-open | Dialog弹出之前触发 | Function() |