"use strict";
exports.id = 606;
exports.ids = [606];
exports.modules = {

/***/ 2373:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-75310a96",
  "path": "/loading.html",
  "title": "",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Loading 加载",
      "slug": "loading-加载",
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
        }
      ]
    }
  ],
  "filePathRelative": "loading.md"
}


/***/ }),

/***/ 4534:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ loading_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(4498);
;// CONCATENATED MODULE: ./node_modules/@vuepress/bundler-webpack/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/loading.html.vue?vue&type=template&id=834827fc



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ClientOnly = (0,external_vue_.resolveComponent)("ClientOnly")
  const _component_wd_loading = (0,external_vue_.resolveComponent)("wd-loading")
  const _component_wd_button = (0,external_vue_.resolveComponent)("wd-button")

  _push(`<!--[--><h2 id="loading-加载" tabindex="-1"><a class="header-anchor" href="#loading-加载" aria-hidden="true">#</a> Loading 加载</h2><h3 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h3><h4 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h4><div class="component-box"><div class="component-box-top">`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ClientOnly, null, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_wd_loading, null, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push((0,server_renderer.ssrRenderComponent)(_component_wd_button, null, {
                default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
                  if (_push) {
                    _push(`加载中...`)
                  } else {
                    return [
                      (0,external_vue_.createTextVNode)("加载中...")
                    ]
                  }
                }),
                _: 1
              }, _parent, _scopeId))
            } else {
              return [
                (0,external_vue_.createVNode)(_component_wd_button, null, {
                  default: (0,external_vue_.withCtx)(() => [
                    (0,external_vue_.createTextVNode)("加载中...")
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
          (0,external_vue_.createVNode)(_component_wd_loading, null, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)(_component_wd_button, null, {
                default: (0,external_vue_.withCtx)(() => [
                  (0,external_vue_.createTextVNode)("加载中...")
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
  _push(`</div><div class="component-box-bottom"><div class="component-title">加载组件</div><div class="component-desc"> 如果一个组件需要请求远程数据，并且需要一个加载中的状态，则可以使用Loading组件作为父组件 </div></div></div><details class="custom-container details"><summary>点击查看代码</summary><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-loading</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-button</span><span class="token punctuation">&gt;</span></span>加载中...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wd-button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wd-loading</span><span class="token punctuation">&gt;</span></span> 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></details><h3 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h3><table><thead><tr><th style="${
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
  }">loading</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">是否加载中</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">boolean</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">true / false</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">false</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">text</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">加载中的文案</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">string</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">-</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">&#39;&#39;</td></tr></tbody></table><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/loading.html.vue?vue&type=template&id=834827fc

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/loading.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const loading_html = (__exports__);

/***/ })

};
;
//# sourceMappingURL=606.app.js.map