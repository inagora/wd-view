<h1 align="center">wd-view</h1>
wd-view是一套UI组件库，包含丰富的常用组件，可以快速搭建页面。

## 📦 安装使用
### 浏览器
1、页面中引入js
```html
<script src="https://unpkg.com/vue@next"></script>
<script src="https://cdn.jsdelivr.net/gh/inagora/wd-view/dist/index.js"></script>
```
2、引入css
```html
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/inagora/wd-view/dist/index.css" />
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
npm install --save @inagora/wd-view
```
2、使用组件
```javascript
Vue.createApp({})
  .use(WdView)
  .mount('#app');
```
## 📒 使用文档
https://inagora.github.io/wd-view/install.html
## 📑 License
MIT