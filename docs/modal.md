## Modal 对话框 
### 用法
#### 基本用法
<div class="component-box">
  <div class="component-box-top"><ClientOnly>
    <wd-button @click="WdModal({
        title: '提示',
        content: '确定要提交吗？'
      });">show Modal</wd-button>
    </ClientOnly>
  </div>
  <div class="component-box-bottom">
    <div class="component-title">对话框组件</div>
    <div class="component-desc">
      Modal组件其实是对Dialog组件的封装，默认会有一些操作按钮，并且新增了不同场景下的弹窗样式；弹出一个对话框，提示用户确认信息
    </div>
  </div>
</div>

::: details 点击查看代码 
```html
<wd-button @click="showModal">show Message</wd-button>
<script>
  import {WdMessage} from '@inagora/wd-view'
  cosnt showMessage = () => {
    const wm = WdModal({
      title: 'model',
      content: '这里是内容',
      cancelButtonText: 'OK',
      cancelButtonText: 'Cancel',
      isShowCancelButton: true,
      onCancel() {
        console.log('cancel');
        wm.destroy();
      },
      onConfirm() {
        console.log('confirm');
      },
    });
  }
</script>
```
:::

### 属性
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--: | :--: | :--: | :--: | :--: |
| buttons | 自定义底部按钮 | array | - | [] |
| confirmButtonText | 确定按钮文案 | string | - | '' |
| cancelButtonText | 取消按钮文案 | string | - | '' |
| content | Modal内容 | string | - | '' |
| isShowCancelButton | 是否显示取消按钮 | boolean | true / false | true |
| onCancel | 取消按钮点击 | function | - | - |
| onConfirm | 确定按钮点击 | function | - | - |
| content | Modal内容 | string | - | '' |
| title | Modal标题 | string | - | '' |
### destroy方法
WdModal()方法返回一个wm实例，可以调用实例方法destroy让WdModal消失