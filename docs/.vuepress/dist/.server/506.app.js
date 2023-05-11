"use strict";
exports.id = 506;
exports.ids = [506];
exports.modules = {

/***/ 797:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-be87f7fe",
  "path": "/menu.html",
  "title": "",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Menu 菜单",
      "slug": "menu-菜单",
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
          "title": "MenuList",
          "slug": "menulist",
          "children": []
        },
        {
          "level": 3,
          "title": "MenuItem",
          "slug": "menuitem",
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
  "filePathRelative": "menu.md"
}


/***/ }),

/***/ 4912:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ menu_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(4498);
;// CONCATENATED MODULE: ./node_modules/@vuepress/bundler-webpack/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/menu.html.vue?vue&type=template&id=670aac2e



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ClientOnly = (0,external_vue_.resolveComponent)("ClientOnly")
  const _component_wd_menu = (0,external_vue_.resolveComponent)("wd-menu")

  _push(`<!--[--><h2 id="menu-菜单" tabindex="-1"><a class="header-anchor" href="#menu-菜单" aria-hidden="true">#</a> Menu 菜单</h2><h3 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h3><h4 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h4><div class="component-box"><div class="component-box-top">`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ClientOnly, null, {
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
  }, _parent))
  _push(`</div><div class="component-box-bottom"><div class="component-title">菜单组件</div><div class="component-desc"> 该组件需要传入一个数据数组，描述菜单项 </div></div></div><details class="custom-container details"><summary>点击查看代码</summary><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-menu</span>
  <span class="token attr-name">:menu-list</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[{text: <span class="token punctuation">&#39;</span>表单组件<span class="token punctuation">&#39;</span>, submenu: [{text: <span class="token punctuation">&#39;</span>Button<span class="token punctuation">&#39;</span>}]}, {text: <span class="token punctuation">&#39;</span>表单组件<span class="token punctuation">&#39;</span>, submenu: [{text: <span class="token punctuation">&#39;</span>Button<span class="token punctuation">&#39;</span>}]},{text: <span class="token punctuation">&#39;</span>表单组件<span class="token punctuation">&#39;</span>, submenu: [{text: <span class="token punctuation">&#39;</span>Button<span class="token punctuation">&#39;</span>}]}]<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dark<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>menuClickHandler<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
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
  }">menu-list</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">菜单列表</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">Array</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">-</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">-</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">theme</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">主题</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">string</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">dark / light</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">light</td></tr></tbody></table><h3 id="menulist" tabindex="-1"><a class="header-anchor" href="#menulist" aria-hidden="true">#</a> MenuList</h3><h3 id="menuitem" tabindex="-1"><a class="header-anchor" href="#menuitem" aria-hidden="true">#</a> MenuItem</h3><h3 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h3><table><thead><tr><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">事件名称</th><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">说明</th><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">回调参数</th></tr></thead><tbody><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">click</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">菜单项点击</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">Function(MenuItem)</td></tr></tbody></table><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/menu.html.vue?vue&type=template&id=670aac2e

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/menu.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const menu_html = (__exports__);

/***/ })

};
;
//# sourceMappingURL=506.app.js.map