## Message 消息提示
### 用法
#### 基本用法
<div class="component-box">
  <div class="component-box-top"><ClientOnly>
    <wd-button @click="WdMessage({
        message: 'hhh',
        duration: 5000
      });">show Message</wd-button>
    </ClientOnly>
  </div>
  <div class="component-box-bottom">
    <div class="component-title">消息提示组件</div>
    <div class="component-desc">
      常用于主动操作后的反馈提示
    </div>
  </div>
</div>

::: details 点击查看代码 
```html
<wd-button @click="showMessage">show Message</wd-button>
<script>
  import {WdMessage} from '@inagora/wd-view'
  cosnt showMessage = () => {
    WdMessage({
      message: '提示消息',
      type: 'info'
    });
  }
</script>
```
:::

### 属性
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--: | :--: | :--: | :--: | :--: |
| duration | 消息提示显示时长 | number | - | 3 |
| message | 提示内容 | string | - | '' |
| offset | 提示框距离顶部的位置 | number | - | - |
| type | 消息类型 | string | info\success\warning\error | info |
### 事件
| 事件名称 | 说明 | 回调参数 |
| :--: | :--: | :--: |
| destroy | Message组件销毁 | Function() |