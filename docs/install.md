## 安装
### 更新日志
当前最新beta版本：[v0.0.2](https://github.com/inagora/wd-view/releases/tag/v0.0.2)
### 浏览器
1、页面中引入js
```html
<script src="https://unpkg.com/vue@next"></script>
<script src="https://cdn.jsdelivr.net/gh/lijieniu/wd-view@v0.0.3/dist/index.js"></script>
```
2、引入css
```html
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/lijieniu/wd-view@v0.0.3/dist/index.css" />
```
> 注意：如果要使用日期组件，需要在页面中引入[moment.js](http://momentjs.cn/)
3、使用组件
```javascript
Vue.createApp({})
  .use(WdView)
  .mount('#app');
```
### NPM
1、通过npm安装
```javascript
npm install wd-view
```
2、使用组件
```javascript
Vue.createApp({})
  .use(WdView)
  .mount('#app');
```
