## Image 图片

### 用法

#### 基本用法

<div class="component-box">
  <div class="component-box-top"><ClientOnly>
      <wd-image
        src="https://o4.wandougongzhu.cn/5db8429cb0e8b6a8a22b18a707093d64.png"
        width="200"
        fallback="https://oss.wandougongzhu.cn/5db8429cb0e8b6a8a22b18a707093d64.png"
        :preview-src-list="[
          'https://oss.wandougongzhu.cn/5db8429cb0e8b6a8a22b18a707093d64.png',
          'https://oss4.wandougongzhu.cn/09a897d1c903bef4fcecb6db528419c7.png?x-oss-process=image/resize,w_900,h_4000/format,webp',
        ]"
        @error="errorHandler"
      >
        <template #placeholder> hhh </template>
        <template #toolbar>
          <wd-button>自定义按钮</wd-button>
        </template>
      </wd-image>
    </ClientOnly>
  </div>
  <div class="component-box-bottom">
    <div class="component-title">图片组件</div>
    <div class="component-desc">
    用来展示一张图片，支持点击图片查看大图和轮播图；
    </div>
  </div>
</div>

::: details 点击查看代码

```html
<wd-image
	src="https://o4.wandougongzhu.cn/5db8429cb0e8b6a8a22b18a707093d64.png"
	width="200"
	fallback="https://oss.wandougongzhu.cn/5db8429cb0e8b6a8a22b18a707093d64.png"
	:preview-src-list="[
          'https://oss.wandougongzhu.cn/5db8429cb0e8b6a8a22b18a707093d64.png',
          'https://oss4.wandougongzhu.cn/09a897d1c903bef4fcecb6db528419c7.png?x-oss-process=image/resize,w_900,h_4000/format,webp',
        ]"
	@error="errorHandler"
>
	<template #placeholder> hhh </template>
	<template #toolbar>
		<wd-button>自定义按钮</wd-button>
	</template>
</wd-image>
```

:::

### 属性

|      参数      |       说明       |      类型       |                  可选值                   | 默认值 |
| :------------: | :--------------: | :-------------: | :---------------------------------------: | :----: |
|      src       |     图片链接     |     string      |                     -                     |   -    |
|      alt       |     替代文本     |     string      |                     -                     |   -    |
|   objectFit    |   图片适应方式   |     string      | fill / contain / cover/ none / scale-down | cover  |
|     width      |     图片宽度     | string / number |                     -                     |   -    |
|     height     |     图片高度     | string / number |                     -                     |   -    |
|    fallback    | 加载失败的替代图 |     string      |                     -                     |   -    |
| previewSrcList |   预览图片列表   |      array      |                     -                     |   []   |

### 事件

| 事件名称 |     说明     |    回调参数     |
| :------: | :----------: | :-------------: |
|  error   | 图片加载失败 | (event) => void |
