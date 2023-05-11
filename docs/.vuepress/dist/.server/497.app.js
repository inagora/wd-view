"use strict";
exports.id = 497;
exports.ids = [497];
exports.modules = {

/***/ 8559:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-3165f7f8",
  "path": "/dialog.html",
  "title": "",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Dialog 弹窗",
      "slug": "dialog-弹窗",
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
  "filePathRelative": "dialog.md"
}


/***/ }),

/***/ 1400:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ dialog_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(4498);
;// CONCATENATED MODULE: ./node_modules/@vuepress/bundler-webpack/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/dialog.html.vue?vue&type=template&id=32ff7c88



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ClientOnly = (0,external_vue_.resolveComponent)("ClientOnly")
  const _component_wd_button = (0,external_vue_.resolveComponent)("wd-button")
  const _component_wd_dialog = (0,external_vue_.resolveComponent)("wd-dialog")

  _push(`<!--[--><h2 id="dialog-弹窗" tabindex="-1"><a class="header-anchor" href="#dialog-弹窗" aria-hidden="true">#</a> Dialog 弹窗</h2><h3 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h3><h4 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h4><div class="component-box"><div class="component-box-top">`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ClientOnly, null, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_wd_button, null, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`show dialog`)
            } else {
              return [
                (0,external_vue_.createTextVNode)("show dialog")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_wd_dialog, {
          modelValue: _ctx.centerDialogVisible,
          "onUpdate:modelValue": $event => ((_ctx.centerDialogVisible) = $event),
          title: "Notice",
          width: "40%",
          "show-close": true,
          "append-to-body": false,
          closeOnClickModal: false,
          "destroy-on-close": true
        }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<span${_scopeId}>Notice: before dialog gets opened for the first time this node and the one bellow will not be rendered</span>`)
            } else {
              return [
                (0,external_vue_.createVNode)("span", null, "Notice: before dialog gets opened for the first time this node and the one bellow will not be rendered")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)(_component_wd_button, {
            onClick: $event => (_ctx.centerDialogVisible = true)
          }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createTextVNode)("show dialog")
            ]),
            _: 1
          }, 8, ["onClick"]),
          (0,external_vue_.createVNode)(_component_wd_dialog, {
            modelValue: _ctx.centerDialogVisible,
            "onUpdate:modelValue": $event => ((_ctx.centerDialogVisible) = $event),
            title: "Notice",
            width: "40%",
            "show-close": true,
            onOpen: _ctx.openHandler,
            onBeforeOpen: _ctx.beforeOpen,
            onBeforeClose: _ctx.beforeClose,
            "append-to-body": false,
            closeOnClickModal: false,
            "destroy-on-close": true
          }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("span", null, "Notice: before dialog gets opened for the first time this node and the one bellow will not be rendered")
            ]),
            _: 1
          }, 8, ["modelValue", "onUpdate:modelValue", "onOpen", "onBeforeOpen", "onBeforeClose"])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</div><div class="component-box-bottom"><div class="component-title">对话框组件</div><div class="component-desc"> 弹出一个对话框，提示用户确认信息 </div></div></div><details class="custom-container details"><summary>点击查看代码</summary><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>centerDialogVisible = true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>show dialog<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wd-button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-dialog</span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>centerDialogVisible<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Notice<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>40%<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:show-close</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">@open</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>openHandler<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">@before-open</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>beforeOpen<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">@before-close</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>beforeClose<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:append-to-body</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:closeOnClickModal</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:destroy-on-close</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span>
    <span class="token punctuation">&gt;</span></span>Notice: before dialog gets opened for the first time this node and the
    one bellow will not be rendered<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span>
  <span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#footer</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>确定<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wd-button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wd-dialog</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div></details><h4 id="自定义底部" tabindex="-1"><a class="header-anchor" href="#自定义底部" aria-hidden="true">#</a> 自定义底部</h4><p>可以通过slot的方式自定义底部按钮</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-dialog</span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>centerDialogVisible<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Notice<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>40%<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:show-close</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">@open</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>openHandler<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">@before-open</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>beforeOpen<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">@before-close</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>beforeClose<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:append-to-body</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:closeOnClickModal</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:destroy-on-close</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span>
    <span class="token punctuation">&gt;</span></span>Notice: before dialog gets opened for the first time this node and the
    one bellow will not be rendered<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span>
  <span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#footer</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>确定<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wd-button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wd-dialog</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h3 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h3><table><thead><tr><th style="${
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
  }">appendToBody</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Dialog 的父元素上</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">boolean</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">true / false</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">false</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">customClass</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">自定义类名</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">string</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">&#39;&#39;</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">&#39;&#39;</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">closeOnClickModal</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">点击遮罩是否关闭Dialog</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">boolean</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">true / false</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">true</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">destroyOnClose</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">关闭Dialog时是否移除元素</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">boolean</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">true / false</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">false</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">showClose</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">是否显示关闭按钮</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">boolean</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">true / false</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">true</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">title</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">Dialog标题</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">string</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">&#39;&#39;</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">&#39;&#39;</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">openDelay</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">延迟打开Dialog</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">number</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">-</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">0</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">closeDelay</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">延迟关闭Dialog</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">number</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">-</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">0</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">top</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">顶部margin</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">string</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">-</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">15vh</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">width</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">Dialog宽度</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">string</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">-</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">50%</td></tr></tbody></table><h3 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h3><table><thead><tr><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">事件名称</th><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">说明</th><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">回调参数</th></tr></thead><tbody><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">close</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">Dialog关闭时触发</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">Function()</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">before-close</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">Dialog关闭之前触发</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">Function()</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">open</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">Dialog弹出时触发</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">Function()</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">before-open</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">Dialog弹出之前触发</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">Function()</td></tr></tbody></table><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/dialog.html.vue?vue&type=template&id=32ff7c88

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/dialog.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const dialog_html = (__exports__);

/***/ })

};
;
//# sourceMappingURL=497.app.js.map