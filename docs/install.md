## 安装
### 更新日志
当前最新beta版本：[v1.0.5](https://github.com/inagora/wd-view/releases/tag/v1.0.5)
### 浏览器
1、页面中引入js
```html
<script src="https://unpkg.com/vue@next"></script>
<script src="https://cdn.jsdelivr.net/gh/inagora/wd-view@v1.0.5/dist/index.js"></script>
```
2、引入css
```html
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/inagora/wd-view@v1.0.5/dist/index.css" />
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
npm install @inagora/wd-view
```
2、使用组件
```javascript
Vue.createApp({})
  .use(WdView)
  .mount('#app');
```
