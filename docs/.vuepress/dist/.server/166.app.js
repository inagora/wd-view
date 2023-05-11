"use strict";
exports.id = 166;
exports.ids = [166];
exports.modules = {

/***/ 5647:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-b03b5154",
  "path": "/layout.html",
  "title": "",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Layout 布局",
      "slug": "layout-布局",
      "children": [
        {
          "level": 3,
          "title": "用法",
          "slug": "用法",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "layout.md"
}


/***/ }),

/***/ 1893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ layout_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(4498);
;// CONCATENATED MODULE: ./node_modules/@vuepress/bundler-webpack/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/layout.html.vue?vue&type=template&id=f43388d4



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ClientOnly = (0,external_vue_.resolveComponent)("ClientOnly")
  const _component_wd_layout = (0,external_vue_.resolveComponent)("wd-layout")
  const _component_wd_layout_sider = (0,external_vue_.resolveComponent)("wd-layout-sider")
  const _component_wd_menu = (0,external_vue_.resolveComponent)("wd-menu")
  const _component_wd_layout_content = (0,external_vue_.resolveComponent)("wd-layout-content")

  _push(`<!--[--><h2 id="layout-布局" tabindex="-1"><a class="header-anchor" href="#layout-布局" aria-hidden="true">#</a> Layout 布局</h2><p>需要通过slot的方式使用组件，不同的页面部分对应的组件为：</p><ul><li>LayoutHeader：页面顶部区域</li><li>LayoutSider：页面侧边栏，通常会放菜单；</li></ul><blockquote><p>如果使用了LayoutSider需要设置has-sider为true</p></blockquote><ul><li>LayoutContent：页面内容区域</li><li>LayoutFooter：页面底部区域</li></ul><h3 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h3><h4 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h4><div class="component-box"><div class="component-box-top">`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ClientOnly, null, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_wd_layout, { "has-sider": "true" }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push((0,server_renderer.ssrRenderComponent)(_component_wd_layout_sider, null, {
                default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
                  if (_push) {
                    _push((0,server_renderer.ssrRenderComponent)(_component_wd_menu, {
                      "menu-list": [{text: '表单组件', submenu: [{text: 'Button'}]}, {text: '表单组件', submenu: [{text: 'Button'}]},{text: '表单组件', submenu: [{text: 'Button'}]}],
                      theme: "dark"
                    }, null, _parent, _scopeId))
                  } else {
                    return [
                      (0,external_vue_.createVNode)(_component_wd_menu, {
                        "menu-list": [{text: '表单组件', submenu: [{text: 'Button'}]}, {text: '表单组件', submenu: [{text: 'Button'}]},{text: '表单组件', submenu: [{text: 'Button'}]}],
                        theme: "dark",
                        onClick: _ctx.menuClickHandler
                      }, null, 8, ["onClick"])
                    ]
                  }
                }),
                _: 1
              }, _parent, _scopeId))
              _push((0,server_renderer.ssrRenderComponent)(_component_wd_layout_content, null, {
                default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
                  if (_push) {
                    _push(` content `)
                  } else {
                    return [
                      (0,external_vue_.createTextVNode)(" content ")
                    ]
                  }
                }),
                _: 1
              }, _parent, _scopeId))
            } else {
              return [
                (0,external_vue_.createVNode)(_component_wd_layout_sider, null, {
                  default: (0,external_vue_.withCtx)(() => [
                    (0,external_vue_.createVNode)(_component_wd_menu, {
                      "menu-list": [{text: '表单组件', submenu: [{text: 'Button'}]}, {text: '表单组件', submenu: [{text: 'Button'}]},{text: '表单组件', submenu: [{text: 'Button'}]}],
                      theme: "dark",
                      onClick: _ctx.menuClickHandler
                    }, null, 8, ["onClick"])
                  ]),
                  _: 1
                }),
                (0,external_vue_.createVNode)(_component_wd_layout_content, null, {
                  default: (0,external_vue_.withCtx)(() => [
                    (0,external_vue_.createTextVNode)(" content ")
                  ]),
                  _: 1
                })
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)(_component_wd_layout, { "has-sider": "true" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)(_component_wd_layout_sider, null, {
                default: (0,external_vue_.withCtx)(() => [
                  (0,external_vue_.createVNode)(_component_wd_menu, {
                    "menu-list": [{text: '表单组件', submenu: [{text: 'Button'}]}, {text: '表单组件', submenu: [{text: 'Button'}]},{text: '表单组件', submenu: [{text: 'Button'}]}],
                    theme: "dark",
                    onClick: _ctx.menuClickHandler
                  }, null, 8, ["onClick"])
                ]),
                _: 1
              }),
              (0,external_vue_.createVNode)(_component_wd_layout_content, null, {
                default: (0,external_vue_.withCtx)(() => [
                  (0,external_vue_.createTextVNode)(" content ")
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</div><div class="component-box-bottom"><div class="component-title">布局组件</div><div class="component-desc"> 使用layout组件可以很方便的搭建一个页面架构，包括页面顶部区域，侧边菜单栏，内容区域，底部区域。 </div></div></div><details class="custom-container details"><summary>点击查看代码</summary><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-layout</span> <span class="token attr-name">has-sider</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-layout-sider</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-menu</span>
      <span class="token attr-name">:menu-list</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[{text: <span class="token punctuation">&#39;</span>表单组件<span class="token punctuation">&#39;</span>, submenu: [{text: <span class="token punctuation">&#39;</span>Button<span class="token punctuation">&#39;</span>}]}, {text: <span class="token punctuation">&#39;</span>表单组件<span class="token punctuation">&#39;</span>, submenu: [{text: <span class="token punctuation">&#39;</span>Button<span class="token punctuation">&#39;</span>}]},{text: <span class="token punctuation">&#39;</span>表单组件<span class="token punctuation">&#39;</span>, submenu: [{text: <span class="token punctuation">&#39;</span>Button<span class="token punctuation">&#39;</span>}]}]<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dark<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>menuClickHandler<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wd-layout-sider</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-layout-content</span><span class="token punctuation">&gt;</span></span>
    content
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wd-layout-content</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wd-layout</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></details><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/layout.html.vue?vue&type=template&id=f43388d4

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/layout.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const layout_html = (__exports__);

/***/ })

};
;
//# sourceMappingURL=166.app.js.map