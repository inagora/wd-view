"use strict";
exports.id = 675;
exports.ids = [675];
exports.modules = {

/***/ 3327:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-573d1aaa",
  "path": "/message.html",
  "title": "",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Message 消息提示",
      "slug": "message-消息提示",
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
  "filePathRelative": "message.md"
}


/***/ }),

/***/ 9532:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ message_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(4498);
;// CONCATENATED MODULE: ./node_modules/@vuepress/bundler-webpack/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/message.html.vue?vue&type=template&id=0149e2bc



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ClientOnly = (0,external_vue_.resolveComponent)("ClientOnly")
  const _component_wd_button = (0,external_vue_.resolveComponent)("wd-button")

  _push(`<!--[--><h2 id="message-消息提示" tabindex="-1"><a class="header-anchor" href="#message-消息提示" aria-hidden="true">#</a> Message 消息提示</h2><h3 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h3><h4 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h4><div class="component-box"><div class="component-box-top">`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ClientOnly, null, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_wd_button, null, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`show Message`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("show Message")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)(_component_wd_button, {
            onClick: $event => {_ctx.WdMessage({
        message: 'hhh',
        duration: 5000
      });}
          }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createTextVNode)("show Message")
            ]),
            _: 1
          }, 8, ["onClick"])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</div><div class="component-box-bottom"><div class="component-title">消息提示组件</div><div class="component-desc"> 常用于主动操作后的反馈提示 </div></div></div><details class="custom-container details"><summary>点击查看代码</summary><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>showMessage<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>show Message<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wd-button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span>WdMessage<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@inagora/wd-view&#39;</span>
  cosnt <span class="token function-variable function">showMessage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">WdMessage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;提示消息&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;info&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></details><h3 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h3><table><thead><tr><th style="${
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
  }">duration</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">消息提示显示时长</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">number</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">-</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">3</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">message</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">提示内容</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">string</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">-</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">&#39;&#39;</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">offset</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">提示框距离顶部的位置</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">number</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">-</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">-</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">type</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">消息类型</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">string</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">info\\success\\warning\\error</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">info</td></tr></tbody></table><h3 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h3><table><thead><tr><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">事件名称</th><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">说明</th><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">回调参数</th></tr></thead><tbody><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">destroy</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">Message组件销毁</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">Function()</td></tr></tbody></table><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/message.html.vue?vue&type=template&id=0149e2bc

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/message.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const message_html = (__exports__);

/***/ })

};
;
//# sourceMappingURL=675.app.js.map