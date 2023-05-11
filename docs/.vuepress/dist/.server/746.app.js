"use strict";
exports.id = 746;
exports.ids = [746];
exports.modules = {

/***/ 4124:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-ca285b74",
  "path": "/link.html",
  "title": "",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Link 链接",
      "slug": "link-链接",
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
  "filePathRelative": "link.md"
}


/***/ }),

/***/ 9154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ link_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(4498);
;// CONCATENATED MODULE: ./node_modules/@vuepress/bundler-webpack/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/link.html.vue?vue&type=template&id=29d4c7b4



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ClientOnly = (0,external_vue_.resolveComponent)("ClientOnly")
  const _component_wd_link = (0,external_vue_.resolveComponent)("wd-link")

  _push(`<!--[--><h2 id="link-链接" tabindex="-1"><a class="header-anchor" href="#link-链接" aria-hidden="true">#</a> Link 链接</h2><h3 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h3><h4 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h4><div class="component-box"><div class="component-box-top">`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ClientOnly, null, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_wd_link, {
          underline: true,
          href: "https://www.baidu.com",
          type: "primary"
        }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`这是一个主要链接`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("这是一个主要链接")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_wd_link, {
          disabled: true,
          href: "https://www.baidu.com",
          type: "success"
        }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`这是一个成功链接`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("这是一个成功链接")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_wd_link, {
          href: "https://www.baidu.com",
          type: "warning"
        }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`这是一个警告链接`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("这是一个警告链接")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_wd_link, {
          href: "https://www.baidu.com",
          type: "danger"
        }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`这是一个错误链接`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("这是一个错误链接")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_wd_link, {
          href: "https://www.baidu.com",
          type: "info"
        }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`这是一个info链接`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("这是一个info链接")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)(_component_wd_link, {
            underline: true,
            href: "https://www.baidu.com",
            type: "primary"
          }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createTextVNode)("这是一个主要链接")
            ]),
            _: 1
          }),
          (0,external_vue_.createVNode)(_component_wd_link, {
            disabled: true,
            href: "https://www.baidu.com",
            type: "success"
          }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createTextVNode)("这是一个成功链接")
            ]),
            _: 1
          }),
          (0,external_vue_.createVNode)(_component_wd_link, {
            href: "https://www.baidu.com",
            type: "warning"
          }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createTextVNode)("这是一个警告链接")
            ]),
            _: 1
          }),
          (0,external_vue_.createVNode)(_component_wd_link, {
            href: "https://www.baidu.com",
            type: "danger"
          }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createTextVNode)("这是一个错误链接")
            ]),
            _: 1
          }),
          (0,external_vue_.createVNode)(_component_wd_link, {
            href: "https://www.baidu.com",
            type: "info"
          }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createTextVNode)("这是一个info链接")
            ]),
            _: 1
          })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</div><div class="component-box-bottom"><div class="component-title">链接组件</div><div class="component-desc"> 该组件主要是为了提供一个超链接，可以设置不同的超链接的样式（同button组件的type）; 可以设置href属性为链接地址； </div></div></div><details class="custom-container details"><summary>点击查看代码</summary><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-link</span> <span class="token attr-name">:underline</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://www.baidu.com<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>这是一个主要链接<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wd-link</span>
<span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-link</span> <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://www.baidu.com<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>success<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>这是一个成功链接<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wd-link</span>
<span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://www.baidu.com<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>warning<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>这是一个警告链接<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wd-link</span>
<span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://www.baidu.com<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>danger<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>这是一个错误链接<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wd-link</span>
<span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://www.baidu.com<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>这是一个info链接<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wd-link</span>
<span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></details><h3 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h3><table><thead><tr><th style="${
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
  }">type</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">类型</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">string</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">primary / success / warning / danger / info / text / dashed</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">-</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">disabled</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">是否可用</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">boolean</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">true / false</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">true</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">href</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">跳转链接</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">string</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">-</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">-</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">underline</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">是否显示下划线</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">boolean</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">true / false</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">false</td></tr></tbody></table><h3 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h3><table><thead><tr><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">事件名称</th><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">说明</th><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">回调参数</th></tr></thead><tbody><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">click</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">点击事件</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">(event) =&gt; void</td></tr></tbody></table><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/link.html.vue?vue&type=template&id=29d4c7b4

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/link.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const link_html = (__exports__);

/***/ })

};
;
//# sourceMappingURL=746.app.js.map