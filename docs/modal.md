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
	    },
	    onConfirm() {
	      console.log('confirm');
	    },
	  });
	}
</script>
```

:::

#### 自定义内容

<div class="component-box">
  <div class="component-box-top"><ClientOnly>
    <wd-button @click="WdModal({
        title: '提示',
        content: '确定要提交吗？'
      });">show Modal</wd-button>
    </ClientOnly>
  </div>
  <div class="component-box-bottom">
    <div class="component-title">自定义内容</div>
    <div class="component-desc">
      content是以slot方式渲染的，所以对于content的内容可以是html字符串，自定义组件
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
	    content: `<wd-button>点击</wd-button><div>自定义内容</div>`,
	    cancelButtonText: 'OK',
	    cancelButtonText: 'Cancel',
	    isShowCancelButton: true,
	  });
	}
</script>
```

:::

#### 自定义按钮

<div class="component-box">
  <div class="component-box-top"><ClientOnly>
    <wd-button @click="WdModal({
        title: '提示',
        content: '确定要提交吗？'
      });">show Modal</wd-button>
    </ClientOnly>
  </div>
  <div class="component-box-bottom">
    <div class="component-title">自定义按钮</div>
    <div class="component-desc">
     自定义按钮点击之后处理完逻辑，会自动关闭Modal；如果需要保持Modal，则需要return false;
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
	    buttons: [
	      {
					type: 'primary',
					text: '自定义按钮',
					size: 'small',
					click() {
						return new Promise((resolve, reject) => {
							setTimeout(() => {
								resolve(true);
							}, 2000);
						});
					},
				},
	    ]
	  });
	}
</script>
```

:::

### 属性

|        参数        |       说明       |   类型   |    可选值    | 默认值 |
| :----------------: | :--------------: | :------: | :----------: | :----: |
|      buttons       |  自定义底部按钮  |  array   |      -       |   []   |
| confirmButtonText  |   确定按钮文案   |  string  |      -       |   ''   |
|  cancelButtonText  |   取消按钮文案   |  string  |      -       |   ''   |
|      content       |    Modal 内容    |  string  |      -       |   ''   |
| isShowCancelButton | 是否显示取消按钮 | boolean  | true / false |  true  |
|      onCancel      |   取消按钮点击   | function |      -       |   -    |
|     onConfirm      |   确定按钮点击   | function |      -       |   -    |
|      content       |    Modal 内容    |  string  |      -       |   ''   |
|       title        |    Modal 标题    |  string  |      -       |   ''   |

### destroy 方法

WdModal()方法返回一个 wm 实例，可以调用实例方法 destroy 让 WdModal 消失
