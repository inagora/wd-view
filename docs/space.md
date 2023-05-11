## Space 间距

设置组件之间的间距

## 何时使用

避免组件紧贴在一起，拉开统一的空间。

- 适合行内元素的水平间距。
- 可以设置各种水平对齐方式。

## 用法

```vue
<wd-space wrap :size="[10, 20]" align="center" style="width: 100%" spacer="|">
	<div v-for="(item, index) in 20">
		<wd-button>{{ item }}</wd-button>
	</div>
</wd-space>
```

### 属性

|  参数  |    说明    |      类型       |                 可选值                 | 默认值 |
| :----: | :--------: | :-------------: | :------------------------------------: | :----: |
| align  | 对齐的方式 |     string      | true / start / end / center / baseline | center |
| style  |  额外样式  |  string/object  |                   -                    |   -    |
| spacer |   间隔符   | string / number |                 VNode                  |   -    |
|  size  |   间隔符   | number / array  |                   -                    | small  |
