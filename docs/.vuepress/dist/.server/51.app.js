"use strict";
exports.id = 51;
exports.ids = [51];
exports.modules = {

/***/ 1917:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-73b28584",
  "path": "/table.html",
  "title": "",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Table 表格",
      "slug": "table-表格",
      "children": [
        {
          "level": 3,
          "title": "用法",
          "slug": "用法",
          "children": []
        },
        {
          "level": 3,
          "title": "属性",
          "slug": "属性",
          "children": []
        },
        {
          "level": 3,
          "title": "事件",
          "slug": "事件",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "table.md"
}


/***/ }),

/***/ 4428:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ table_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(4498);
;// CONCATENATED MODULE: ./node_modules/@vuepress/bundler-webpack/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/table.html.vue?vue&type=template&id=2a13190f



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ClientOnly = (0,external_vue_.resolveComponent)("ClientOnly")
  const _component_wd_table = (0,external_vue_.resolveComponent)("wd-table")

  _push(`<!--[--><h2 id="table-表格" tabindex="-1"><a class="header-anchor" href="#table-表格" aria-hidden="true">#</a> Table 表格</h2><h3 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h3><h4 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h4><div class="component-box"><div class="component-box-top">`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ClientOnly, null, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_wd_table, {
          columns: [{title: 'ID', dataIndex: 'id'}, {title: '商品名', dataIndex: 'goods_name'}, {title: '价格', dataIndex: 'price'}, {title: '生产日期', dataIndex: 'ctime'}],
          "data-source": [{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'}],
          bordered: false
        }, null, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)(_component_wd_table, {
            columns: [{title: 'ID', dataIndex: 'id'}, {title: '商品名', dataIndex: 'goods_name'}, {title: '价格', dataIndex: 'price'}, {title: '生产日期', dataIndex: 'ctime'}],
            "data-source": [{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'}],
            bordered: false
          })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</div><div class="component-box-bottom"><div class="component-title">基础表格</div><div class="component-desc"> 当有大量的结构化的数据需要展示的时候，可以使用表格组件；需要指定每列的数据和数据源 </div></div></div><details class="custom-container details"><summary>点击查看代码</summary><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-table</span>
  <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[{title: <span class="token punctuation">&#39;</span>ID<span class="token punctuation">&#39;</span>, dataIndex: <span class="token punctuation">&#39;</span>id<span class="token punctuation">&#39;</span>}, {title: <span class="token punctuation">&#39;</span>商品名<span class="token punctuation">&#39;</span>, dataIndex: <span class="token punctuation">&#39;</span>goods_name<span class="token punctuation">&#39;</span>}, {title: <span class="token punctuation">&#39;</span>价格<span class="token punctuation">&#39;</span>, dataIndex: <span class="token punctuation">&#39;</span>price<span class="token punctuation">&#39;</span>}, {title: <span class="token punctuation">&#39;</span>生产日期<span class="token punctuation">&#39;</span>, dataIndex: <span class="token punctuation">&#39;</span>ctime<span class="token punctuation">&#39;</span>}]<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:data-source</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[{id: <span class="token punctuation">&#39;</span>1<span class="token punctuation">&#39;</span>, goods_name: <span class="token punctuation">&#39;</span>sk2<span class="token punctuation">&#39;</span>, price: <span class="token punctuation">&#39;</span>123<span class="token punctuation">&#39;</span>, ctime: <span class="token punctuation">&#39;</span>2021-09-26<span class="token punctuation">&#39;</span>},{id: <span class="token punctuation">&#39;</span>1<span class="token punctuation">&#39;</span>, goods_name: <span class="token punctuation">&#39;</span>sk2<span class="token punctuation">&#39;</span>, price: <span class="token punctuation">&#39;</span>123<span class="token punctuation">&#39;</span>, ctime: <span class="token punctuation">&#39;</span>2021-09-26<span class="token punctuation">&#39;</span>},{id: <span class="token punctuation">&#39;</span>1<span class="token punctuation">&#39;</span>, goods_name: <span class="token punctuation">&#39;</span>sk2<span class="token punctuation">&#39;</span>, price: <span class="token punctuation">&#39;</span>123<span class="token punctuation">&#39;</span>, ctime: <span class="token punctuation">&#39;</span>2021-09-26<span class="token punctuation">&#39;</span>},{id: <span class="token punctuation">&#39;</span>1<span class="token punctuation">&#39;</span>, goods_name: <span class="token punctuation">&#39;</span>sk2<span class="token punctuation">&#39;</span>, price: <span class="token punctuation">&#39;</span>123<span class="token punctuation">&#39;</span>, ctime: <span class="token punctuation">&#39;</span>2021-09-26<span class="token punctuation">&#39;</span>},{id: <span class="token punctuation">&#39;</span>1<span class="token punctuation">&#39;</span>, goods_name: <span class="token punctuation">&#39;</span>sk2<span class="token punctuation">&#39;</span>, price: <span class="token punctuation">&#39;</span>123<span class="token punctuation">&#39;</span>, ctime: <span class="token punctuation">&#39;</span>2021-09-26<span class="token punctuation">&#39;</span>}]<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wd-table</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></details><h4 id="带边框" tabindex="-1"><a class="header-anchor" href="#带边框" aria-hidden="true">#</a> 带边框</h4><div class="component-box"><div class="component-box-top">`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ClientOnly, null, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_wd_table, {
          columns: [{title: 'ID', dataIndex: 'id'}, {title: '商品名', dataIndex: 'goods_name'}, {title: '价格', dataIndex: 'price'}, {title: '生产日期', dataIndex: 'ctime'}],
          "data-source": [{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'}],
          bordered: ""
        }, null, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)(_component_wd_table, {
            columns: [{title: 'ID', dataIndex: 'id'}, {title: '商品名', dataIndex: 'goods_name'}, {title: '价格', dataIndex: 'price'}, {title: '生产日期', dataIndex: 'ctime'}],
            "data-source": [{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'}],
            bordered: ""
          })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</div><div class="component-box-bottom"><div class="component-title">带边框表格</div><div class="component-desc"> 设置bordered或者bordered=true，表格会带边框 </div></div></div><details class="custom-container details"><summary>点击查看代码</summary><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-table</span>
  <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[{title: <span class="token punctuation">&#39;</span>ID<span class="token punctuation">&#39;</span>, dataIndex: <span class="token punctuation">&#39;</span>id<span class="token punctuation">&#39;</span>}, {title: <span class="token punctuation">&#39;</span>商品名<span class="token punctuation">&#39;</span>, dataIndex: <span class="token punctuation">&#39;</span>goods_name<span class="token punctuation">&#39;</span>}, {title: <span class="token punctuation">&#39;</span>价格<span class="token punctuation">&#39;</span>, dataIndex: <span class="token punctuation">&#39;</span>price<span class="token punctuation">&#39;</span>}, {title: <span class="token punctuation">&#39;</span>生产日期<span class="token punctuation">&#39;</span>, dataIndex: <span class="token punctuation">&#39;</span>ctime<span class="token punctuation">&#39;</span>}]<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:data-source</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[{id: <span class="token punctuation">&#39;</span>1<span class="token punctuation">&#39;</span>, goods_name: <span class="token punctuation">&#39;</span>sk2<span class="token punctuation">&#39;</span>, price: <span class="token punctuation">&#39;</span>123<span class="token punctuation">&#39;</span>, ctime: <span class="token punctuation">&#39;</span>2021-09-26<span class="token punctuation">&#39;</span>},{id: <span class="token punctuation">&#39;</span>1<span class="token punctuation">&#39;</span>, goods_name: <span class="token punctuation">&#39;</span>sk2<span class="token punctuation">&#39;</span>, price: <span class="token punctuation">&#39;</span>123<span class="token punctuation">&#39;</span>, ctime: <span class="token punctuation">&#39;</span>2021-09-26<span class="token punctuation">&#39;</span>},{id: <span class="token punctuation">&#39;</span>1<span class="token punctuation">&#39;</span>, goods_name: <span class="token punctuation">&#39;</span>sk2<span class="token punctuation">&#39;</span>, price: <span class="token punctuation">&#39;</span>123<span class="token punctuation">&#39;</span>, ctime: <span class="token punctuation">&#39;</span>2021-09-26<span class="token punctuation">&#39;</span>},{id: <span class="token punctuation">&#39;</span>1<span class="token punctuation">&#39;</span>, goods_name: <span class="token punctuation">&#39;</span>sk2<span class="token punctuation">&#39;</span>, price: <span class="token punctuation">&#39;</span>123<span class="token punctuation">&#39;</span>, ctime: <span class="token punctuation">&#39;</span>2021-09-26<span class="token punctuation">&#39;</span>},{id: <span class="token punctuation">&#39;</span>1<span class="token punctuation">&#39;</span>, goods_name: <span class="token punctuation">&#39;</span>sk2<span class="token punctuation">&#39;</span>, price: <span class="token punctuation">&#39;</span>123<span class="token punctuation">&#39;</span>, ctime: <span class="token punctuation">&#39;</span>2021-09-26<span class="token punctuation">&#39;</span>}]<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">bordered</span>
<span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wd-table</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></details><h4 id="自动省略" tabindex="-1"><a class="header-anchor" href="#自动省略" aria-hidden="true">#</a> 自动省略</h4><div class="component-box"><div class="component-box-top">`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ClientOnly, null, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_wd_table, {
          columns: [{title: 'ID', dataIndex: 'id'}, {title: '商品名', dataIndex: 'goods_name'}, {title: '价格', dataIndex: 'price'}, {title: '生产日期', dataIndex: 'ctime'}],
          "data-source": [{id: '1', goods_name: 'sk2sk2sk2sk2sk2sk2sk2sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'}],
          "cell-wrap": true
        }, null, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)(_component_wd_table, {
            columns: [{title: 'ID', dataIndex: 'id'}, {title: '商品名', dataIndex: 'goods_name'}, {title: '价格', dataIndex: 'price'}, {title: '生产日期', dataIndex: 'ctime'}],
            "data-source": [{id: '1', goods_name: 'sk2sk2sk2sk2sk2sk2sk2sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'}],
            "cell-wrap": true
          })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</div><div class="component-box-bottom"><div class="component-title">单元格内容自动省略</div><div class="component-desc"> 如果设置了单元格自动省略，当内容过长时会显示省略号 </div></div></div><details class="custom-container details"><summary>点击查看代码</summary><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-table</span>
  <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[{title: <span class="token punctuation">&#39;</span>ID<span class="token punctuation">&#39;</span>, dataIndex: <span class="token punctuation">&#39;</span>id<span class="token punctuation">&#39;</span>}, {title: <span class="token punctuation">&#39;</span>商品名<span class="token punctuation">&#39;</span>, dataIndex: <span class="token punctuation">&#39;</span>goods_name<span class="token punctuation">&#39;</span>}, {title: <span class="token punctuation">&#39;</span>价格<span class="token punctuation">&#39;</span>, dataIndex: <span class="token punctuation">&#39;</span>price<span class="token punctuation">&#39;</span>}, {title: <span class="token punctuation">&#39;</span>生产日期<span class="token punctuation">&#39;</span>, dataIndex: <span class="token punctuation">&#39;</span>ctime<span class="token punctuation">&#39;</span>}]<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:data-source</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[{id: <span class="token punctuation">&#39;</span>1<span class="token punctuation">&#39;</span>, goods_name: <span class="token punctuation">&#39;</span>sk2<span class="token punctuation">&#39;</span>, price: <span class="token punctuation">&#39;</span>123<span class="token punctuation">&#39;</span>, ctime: <span class="token punctuation">&#39;</span>2021-09-26<span class="token punctuation">&#39;</span>},{id: <span class="token punctuation">&#39;</span>1<span class="token punctuation">&#39;</span>, goods_name: <span class="token punctuation">&#39;</span>sk2<span class="token punctuation">&#39;</span>, price: <span class="token punctuation">&#39;</span>123<span class="token punctuation">&#39;</span>, ctime: <span class="token punctuation">&#39;</span>2021-09-26<span class="token punctuation">&#39;</span>},{id: <span class="token punctuation">&#39;</span>1<span class="token punctuation">&#39;</span>, goods_name: <span class="token punctuation">&#39;</span>sk2<span class="token punctuation">&#39;</span>, price: <span class="token punctuation">&#39;</span>123<span class="token punctuation">&#39;</span>, ctime: <span class="token punctuation">&#39;</span>2021-09-26<span class="token punctuation">&#39;</span>},{id: <span class="token punctuation">&#39;</span>1<span class="token punctuation">&#39;</span>, goods_name: <span class="token punctuation">&#39;</span>sk2<span class="token punctuation">&#39;</span>, price: <span class="token punctuation">&#39;</span>123<span class="token punctuation">&#39;</span>, ctime: <span class="token punctuation">&#39;</span>2021-09-26<span class="token punctuation">&#39;</span>},{id: <span class="token punctuation">&#39;</span>1<span class="token punctuation">&#39;</span>, goods_name: <span class="token punctuation">&#39;</span>sk2<span class="token punctuation">&#39;</span>, price: <span class="token punctuation">&#39;</span>123<span class="token punctuation">&#39;</span>, ctime: <span class="token punctuation">&#39;</span>2021-09-26<span class="token punctuation">&#39;</span>}]<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:cell-wrap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wd-table</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></details><h4 id="固定表头" tabindex="-1"><a class="header-anchor" href="#固定表头" aria-hidden="true">#</a> 固定表头</h4><div class="component-box"><div class="component-box-top">`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ClientOnly, null, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_wd_table, {
          columns: [{title: 'ID', dataIndex: 'id'}, {title: '商品名', dataIndex: 'goods_name'}, {title: '价格', dataIndex: 'price'}, {title: '生产日期', dataIndex: 'ctime'}],
          "data-source": [{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'}],
          sticky: true
        }, null, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)(_component_wd_table, {
            columns: [{title: 'ID', dataIndex: 'id'}, {title: '商品名', dataIndex: 'goods_name'}, {title: '价格', dataIndex: 'price'}, {title: '生产日期', dataIndex: 'ctime'}],
            "data-source": [{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'}],
            sticky: true
          })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</div><div class="component-box-bottom"><div class="component-title">固定表头</div><div class="component-desc"> 设置sticky=true后，表头会固定，只有表体部分可以滚动 </div></div></div><details class="custom-container details"><summary>点击查看代码</summary><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-table</span>
  <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[{title: <span class="token punctuation">&#39;</span>ID<span class="token punctuation">&#39;</span>, dataIndex: <span class="token punctuation">&#39;</span>id<span class="token punctuation">&#39;</span>}, {title: <span class="token punctuation">&#39;</span>商品名<span class="token punctuation">&#39;</span>, dataIndex: <span class="token punctuation">&#39;</span>goods_name<span class="token punctuation">&#39;</span>}, {title: <span class="token punctuation">&#39;</span>价格<span class="token punctuation">&#39;</span>, dataIndex: <span class="token punctuation">&#39;</span>price<span class="token punctuation">&#39;</span>}, {title: <span class="token punctuation">&#39;</span>生产日期<span class="token punctuation">&#39;</span>, dataIndex: <span class="token punctuation">&#39;</span>ctime<span class="token punctuation">&#39;</span>}]<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:data-source</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[{id: <span class="token punctuation">&#39;</span>1<span class="token punctuation">&#39;</span>, goods_name: <span class="token punctuation">&#39;</span>sk2<span class="token punctuation">&#39;</span>, price: <span class="token punctuation">&#39;</span>123<span class="token punctuation">&#39;</span>, ctime: <span class="token punctuation">&#39;</span>2021-09-26<span class="token punctuation">&#39;</span>},{id: <span class="token punctuation">&#39;</span>1<span class="token punctuation">&#39;</span>, goods_name: <span class="token punctuation">&#39;</span>sk2<span class="token punctuation">&#39;</span>, price: <span class="token punctuation">&#39;</span>123<span class="token punctuation">&#39;</span>, ctime: <span class="token punctuation">&#39;</span>2021-09-26<span class="token punctuation">&#39;</span>},{id: <span class="token punctuation">&#39;</span>1<span class="token punctuation">&#39;</span>, goods_name: <span class="token punctuation">&#39;</span>sk2<span class="token punctuation">&#39;</span>, price: <span class="token punctuation">&#39;</span>123<span class="token punctuation">&#39;</span>, ctime: <span class="token punctuation">&#39;</span>2021-09-26<span class="token punctuation">&#39;</span>},{id: <span class="token punctuation">&#39;</span>1<span class="token punctuation">&#39;</span>, goods_name: <span class="token punctuation">&#39;</span>sk2<span class="token punctuation">&#39;</span>, price: <span class="token punctuation">&#39;</span>123<span class="token punctuation">&#39;</span>, ctime: <span class="token punctuation">&#39;</span>2021-09-26<span class="token punctuation">&#39;</span>},{id: <span class="token punctuation">&#39;</span>1<span class="token punctuation">&#39;</span>, goods_name: <span class="token punctuation">&#39;</span>sk2<span class="token punctuation">&#39;</span>, price: <span class="token punctuation">&#39;</span>123<span class="token punctuation">&#39;</span>, ctime: <span class="token punctuation">&#39;</span>2021-09-26<span class="token punctuation">&#39;</span>}]<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:sticky</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wd-table</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></details><h4 id="选择行" tabindex="-1"><a class="header-anchor" href="#选择行" aria-hidden="true">#</a> 选择行</h4><div class="component-box"><div class="component-box-top">`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ClientOnly, null, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_wd_table, {
          columns: [{title: '', dataIndex: '', type: 'checkbox'}, {title: 'ID', dataIndex: 'id'}, {title: '商品名', dataIndex: 'goods_name'}, {title: '价格', dataIndex: 'price'}, {title: '生产日期', dataIndex: 'ctime'}],
          "data-source": [{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'}]
        }, null, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)(_component_wd_table, {
            columns: [{title: '', dataIndex: '', type: 'checkbox'}, {title: 'ID', dataIndex: 'id'}, {title: '商品名', dataIndex: 'goods_name'}, {title: '价格', dataIndex: 'price'}, {title: '生产日期', dataIndex: 'ctime'}],
            "data-source": [{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'},{id: '1', goods_name: 'sk2', price: '123', ctime: '2021-09-26'}]
          })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</div><div class="component-box-bottom"><div class="component-title">表格行选择</div><div class="component-desc"> 在设置columns属性时，如果列的type为checkbox，则该列为选择列 </div></div></div><details class="custom-container details"><summary>点击查看代码</summary><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-table</span>
  <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[{title: <span class="token punctuation">&#39;</span><span class="token punctuation">&#39;</span>, dataIndex: <span class="token punctuation">&#39;</span><span class="token punctuation">&#39;</span>, type: <span class="token punctuation">&#39;</span>checkbox<span class="token punctuation">&#39;</span>}, {title: <span class="token punctuation">&#39;</span>ID<span class="token punctuation">&#39;</span>, dataIndex: <span class="token punctuation">&#39;</span>id<span class="token punctuation">&#39;</span>}, {title: <span class="token punctuation">&#39;</span>商品名<span class="token punctuation">&#39;</span>, dataIndex: <span class="token punctuation">&#39;</span>goods_name<span class="token punctuation">&#39;</span>}, {title: <span class="token punctuation">&#39;</span>价格<span class="token punctuation">&#39;</span>, dataIndex: <span class="token punctuation">&#39;</span>price<span class="token punctuation">&#39;</span>}, {title: <span class="token punctuation">&#39;</span>生产日期<span class="token punctuation">&#39;</span>, dataIndex: <span class="token punctuation">&#39;</span>ctime<span class="token punctuation">&#39;</span>}]<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:data-source</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[{id: <span class="token punctuation">&#39;</span>1<span class="token punctuation">&#39;</span>, goods_name: <span class="token punctuation">&#39;</span>sk2<span class="token punctuation">&#39;</span>, price: <span class="token punctuation">&#39;</span>123<span class="token punctuation">&#39;</span>, ctime: <span class="token punctuation">&#39;</span>2021-09-26<span class="token punctuation">&#39;</span>},{id: <span class="token punctuation">&#39;</span>1<span class="token punctuation">&#39;</span>, goods_name: <span class="token punctuation">&#39;</span>sk2<span class="token punctuation">&#39;</span>, price: <span class="token punctuation">&#39;</span>123<span class="token punctuation">&#39;</span>, ctime: <span class="token punctuation">&#39;</span>2021-09-26<span class="token punctuation">&#39;</span>},{id: <span class="token punctuation">&#39;</span>1<span class="token punctuation">&#39;</span>, goods_name: <span class="token punctuation">&#39;</span>sk2<span class="token punctuation">&#39;</span>, price: <span class="token punctuation">&#39;</span>123<span class="token punctuation">&#39;</span>, ctime: <span class="token punctuation">&#39;</span>2021-09-26<span class="token punctuation">&#39;</span>},{id: <span class="token punctuation">&#39;</span>1<span class="token punctuation">&#39;</span>, goods_name: <span class="token punctuation">&#39;</span>sk2<span class="token punctuation">&#39;</span>, price: <span class="token punctuation">&#39;</span>123<span class="token punctuation">&#39;</span>, ctime: <span class="token punctuation">&#39;</span>2021-09-26<span class="token punctuation">&#39;</span>},{id: <span class="token punctuation">&#39;</span>1<span class="token punctuation">&#39;</span>, goods_name: <span class="token punctuation">&#39;</span>sk2<span class="token punctuation">&#39;</span>, price: <span class="token punctuation">&#39;</span>123<span class="token punctuation">&#39;</span>, ctime: <span class="token punctuation">&#39;</span>2021-09-26<span class="token punctuation">&#39;</span>}]<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:sticky</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wd-table</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></details><h3 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h3><table><thead><tr><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">参数</th><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">说明</th><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">类型</th><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">可选值</th><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">默认值</th></tr></thead><tbody><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">bordered</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">是否显示边框</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">boolean</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">true / false</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">false</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">columns</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">列的配置</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">array</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">-</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">-</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">current-page</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">当前页</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">number</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">-</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">1</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">data-source</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">数据源</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">array</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">-</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">-</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">height</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">表格高度</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">string</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">-</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">-</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">header-align</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">表头文字位置</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">string</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">left / center / right</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">left</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">page-count</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">总页数</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">number / string</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">-</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">1</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">page-size</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">每页数据个数</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">number / string</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">-</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">15</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">pagination-position</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">分页器位置</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">string</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">left / center / right</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">left</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">total</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">数据总数</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">number / string</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">-</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">-</td></tr></tbody></table><h3 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h3><table><thead><tr><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">事件名称</th><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">说明</th><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">回调参数</th></tr></thead><tbody><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">current-change</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">当前页变化的回调函数</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">Function(currentPage)</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">select-change</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">选择行变化的回调函数</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">Function(selectedRows)</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">cell-click</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">单元格点击</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">Function({ row, rowIndex, dataIndex, value })</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">row-click</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">行的点击</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">Function(currentRow)</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">next-click</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">分页器下一页点击的回调函数</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">Function(currentPage)</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">prev-click</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">分页器上一页点击的回调函数</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">Function(currentPage)</td></tr></tbody></table><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/table.html.vue?vue&type=template&id=2a13190f

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/table.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const table_html = (__exports__);

/***/ })

};
;
//# sourceMappingURL=51.app.js.map