"use strict";
exports.id = 325;
exports.ids = [325];
exports.modules = {

/***/ 3968:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-291b5968",
  "path": "/space.html",
  "title": "",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Space 间距",
      "slug": "space-间距",
      "children": []
    },
    {
      "level": 2,
      "title": "何时使用",
      "slug": "何时使用",
      "children": []
    },
    {
      "level": 2,
      "title": "用法",
      "slug": "用法",
      "children": []
    }
  ],
  "filePathRelative": "space.md"
}


/***/ }),

/***/ 161:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ space_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(4498);
;// CONCATENATED MODULE: ./node_modules/@vuepress/bundler-webpack/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/space.html.vue?vue&type=template&id=64166e3b



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_wd_space = (0,external_vue_.resolveComponent)("wd-space")
  const _component_wd_button = (0,external_vue_.resolveComponent)("wd-button")

  _push(`<!--[--><h2 id="space-间距" tabindex="-1"><a class="header-anchor" href="#space-间距" aria-hidden="true">#</a> Space 间距</h2><p>设置组件之间的间距</p><h2 id="何时使用" tabindex="-1"><a class="header-anchor" href="#何时使用" aria-hidden="true">#</a> 何时使用</h2><p>避免组件紧贴在一起，拉开统一的空间。</p><ul><li>适合行内元素的水平间距。</li><li>可以设置各种水平对齐方式。</li></ul><h2 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2><p>基本用法</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_wd_space, null, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<!--[-->`)
        ;(0,server_renderer.ssrRenderList)(4, (o) => {
          _push(`<div class="text item"${
            _scopeId
          }>${
            (0,server_renderer.ssrInterpolate)('List item ' + o)
          }</div>`)
        })
        _push(`<!--]-->`)
      } else {
        return [
          ((0,external_vue_.openBlock)(), (0,external_vue_.createBlock)(external_vue_.Fragment, null, (0,external_vue_.renderList)(4, (o) => {
            return (0,external_vue_.createVNode)("div", {
              key: o,
              class: "text item"
            }, (0,external_vue_.toDisplayString)('List item ' + o), 1)
          }), 64))
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(` ::: details 点击查看代码 `)
  _push((0,server_renderer.ssrRenderComponent)(_component_wd_space, {
    wrap: "",
    size: [10,20],
    align: "center",
    style: {"width":"100%"},
    spacer: "|"
  }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<!--[-->`)
        ;(0,server_renderer.ssrRenderList)(20, (item, index) => {
          _push(`<div${_scopeId}>`)
          _push((0,server_renderer.ssrRenderComponent)(_component_wd_button, null, {
            default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
              if (_push) {
                _push(`${(0,server_renderer.ssrInterpolate)(item)}`)
              } else {
                return [
                  (0,external_vue_.createTextVNode)((0,external_vue_.toDisplayString)(item), 1)
                ]
              }
            }),
            _: 2
          }, _parent, _scopeId))
          _push(`</div>`)
        })
        _push(`<!--]-->`)
      } else {
        return [
          ((0,external_vue_.openBlock)(), (0,external_vue_.createBlock)(external_vue_.Fragment, null, (0,external_vue_.renderList)(20, (item, index) => {
            return (0,external_vue_.createVNode)("div", null, [
              (0,external_vue_.createVNode)(_component_wd_button, null, {
                default: (0,external_vue_.withCtx)(() => [
                  (0,external_vue_.createTextVNode)((0,external_vue_.toDisplayString)(item), 1)
                ]),
                _: 2
              }, 1024)
            ])
          }), 64))
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(` ::: 属性 参数 说明 类型 可选值 默认值 align 对齐的方式 string start / end / center / baseline center style 额外样式 string/object - - spacer 间隔符 string / number / VNode - - size 间隔大小 number / array - small <!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/space.html.vue?vue&type=template&id=64166e3b

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/space.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const space_html = (__exports__);

/***/ })

};
;
//# sourceMappingURL=325.app.js.map