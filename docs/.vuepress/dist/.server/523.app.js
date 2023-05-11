"use strict";
exports.id = 523;
exports.ids = [523];
exports.modules = {

/***/ 9178:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-679ae3bc",
  "path": "/form.html",
  "title": "",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Form 表单",
      "slug": "form-表单",
      "children": [
        {
          "level": 3,
          "title": "用法",
          "slug": "用法",
          "children": []
        },
        {
          "level": 3,
          "title": "Form 属性",
          "slug": "form-属性",
          "children": []
        },
        {
          "level": 3,
          "title": "FormItem 属性",
          "slug": "formitem-属性",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "form.md"
}


/***/ }),

/***/ 4720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ form_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(4498);
;// CONCATENATED MODULE: ./node_modules/@vuepress/bundler-webpack/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/form.html.vue?vue&type=template&id=12826cf4



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ClientOnly = (0,external_vue_.resolveComponent)("ClientOnly")
  const _component_wd_form = (0,external_vue_.resolveComponent)("wd-form")
  const _component_wd_form_item = (0,external_vue_.resolveComponent)("wd-form-item")
  const _component_wd_input = (0,external_vue_.resolveComponent)("wd-input")
  const _component_wd_radio = (0,external_vue_.resolveComponent)("wd-radio")
  const _component_wd_checkbox = (0,external_vue_.resolveComponent)("wd-checkbox")
  const _component_wd_input_number = (0,external_vue_.resolveComponent)("wd-input-number")
  const _component_wd_select = (0,external_vue_.resolveComponent)("wd-select")
  const _component_wd_option = (0,external_vue_.resolveComponent)("wd-option")

  _push(`<!--[--><h2 id="form-表单" tabindex="-1"><a class="header-anchor" href="#form-表单" aria-hidden="true">#</a> Form 表单</h2><p>表单组件包含数据录入，表单验证，样式</p><p>有两种排列模式： 1、垂直排列 2、行内排列</p><h3 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h3><h4 id="行内排列" tabindex="-1"><a class="header-anchor" href="#行内排列" aria-hidden="true">#</a> 行内排列</h4><div class="component-box"><div class="component-box-top">`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ClientOnly, null, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_wd_form, {
          ref: "userInfoForm",
          "label-width": "100px",
          "label-align": "right",
          size: "small",
          inline: "",
          model: _ctx.userInfo,
          "validate-on-rule-change": true,
          rules: _ctx.formRules,
          "show-message": true,
          "label-position": "left"
        }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push((0,server_renderer.ssrRenderComponent)(_component_wd_form_item, {
                label: "姓名",
                prop: "name"
              }, {
                default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
                  if (_push) {
                    _push((0,server_renderer.ssrRenderComponent)(_component_wd_input, {
                      type: "text",
                      placeholder: "请输入姓名"
                    }, null, _parent, _scopeId))
                  } else {
                    return [
                      (0,external_vue_.createVNode)(_component_wd_input, {
                        type: "text",
                        placeholder: "请输入姓名"
                      })
                    ]
                  }
                }),
                _: 1
              }, _parent, _scopeId))
              _push((0,server_renderer.ssrRenderComponent)(_component_wd_form_item, {
                label: "性别",
                prop: "gender"
              }, {
                default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
                  if (_push) {
                    _push((0,server_renderer.ssrRenderComponent)(_component_wd_radio, {
                      checked: _ctx.isMale,
                      name: "color"
                    }, {
                      default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
                        if (_push) {
                          _push(` 男 `)
                        } else {
                          return [
                            (0,external_vue_.createTextVNode)(" 男 ")
                          ]
                        }
                      }),
                      _: 1
                    }, _parent, _scopeId))
                    _push((0,server_renderer.ssrRenderComponent)(_component_wd_radio, {
                      checked: _ctx.isFemale,
                      name: "color"
                    }, {
                      default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
                        if (_push) {
                          _push(` 女 `)
                        } else {
                          return [
                            (0,external_vue_.createTextVNode)(" 女 ")
                          ]
                        }
                      }),
                      _: 1
                    }, _parent, _scopeId))
                  } else {
                    return [
                      (0,external_vue_.createVNode)(_component_wd_radio, {
                        checked: _ctx.isMale,
                        name: "color",
                        onChange: _ctx.handleRadioChange
                      }, {
                        default: (0,external_vue_.withCtx)(() => [
                          (0,external_vue_.createTextVNode)(" 男 ")
                        ]),
                        _: 1
                      }, 8, ["checked", "onChange"]),
                      (0,external_vue_.createVNode)(_component_wd_radio, {
                        checked: _ctx.isFemale,
                        name: "color",
                        onChange: _ctx.handleRadioChange
                      }, {
                        default: (0,external_vue_.withCtx)(() => [
                          (0,external_vue_.createTextVNode)(" 女 ")
                        ]),
                        _: 1
                      }, 8, ["checked", "onChange"])
                    ]
                  }
                }),
                _: 1
              }, _parent, _scopeId))
              _push((0,server_renderer.ssrRenderComponent)(_component_wd_form_item, {
                label: "婚姻状况",
                prop: "isMerried"
              }, {
                default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
                  if (_push) {
                    _push((0,server_renderer.ssrRenderComponent)(_component_wd_checkbox, { checked: true }, {
                      default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
                        if (_push) {
                          _push(` 已婚 `)
                        } else {
                          return [
                            (0,external_vue_.createTextVNode)(" 已婚 ")
                          ]
                        }
                      }),
                      _: 1
                    }, _parent, _scopeId))
                  } else {
                    return [
                      (0,external_vue_.createVNode)(_component_wd_checkbox, {
                        checked: true,
                        onChange: _ctx.handleCheckboxChange
                      }, {
                        default: (0,external_vue_.withCtx)(() => [
                          (0,external_vue_.createTextVNode)(" 已婚 ")
                        ]),
                        _: 1
                      }, 8, ["onChange"])
                    ]
                  }
                }),
                _: 1
              }, _parent, _scopeId))
              _push((0,server_renderer.ssrRenderComponent)(_component_wd_form_item, {
                label: "年龄",
                prop: "age"
              }, {
                default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
                  if (_push) {
                    _push((0,server_renderer.ssrRenderComponent)(_component_wd_input_number, {
                      max: "20",
                      min: "0",
                      type: "text"
                    }, null, _parent, _scopeId))
                  } else {
                    return [
                      (0,external_vue_.createVNode)(_component_wd_input_number, {
                        max: "20",
                        min: "0",
                        onInput: _ctx.handleInputNumber,
                        onChange: _ctx.handleChangeNumber,
                        type: "text"
                      }, null, 8, ["onInput", "onChange"])
                    ]
                  }
                }),
                _: 1
              }, _parent, _scopeId))
              _push((0,server_renderer.ssrRenderComponent)(_component_wd_form_item, { label: "学历" }, {
                default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
                  if (_push) {
                    _push((0,server_renderer.ssrRenderComponent)(_component_wd_select, {
                      modelValue: _ctx.selectedValue,
                      "onUpdate:modelValue": $event => ((_ctx.selectedValue) = $event),
                      placeholder: "请选择学历"
                    }, {
                      default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
                        if (_push) {
                          _push((0,server_renderer.ssrRenderComponent)(_component_wd_option, {
                            label: "研究生",
                            value: "baidu"
                          }, null, _parent, _scopeId))
                          _push((0,server_renderer.ssrRenderComponent)(_component_wd_option, {
                            label: "本科",
                            value: "google"
                          }, null, _parent, _scopeId))
                          _push((0,server_renderer.ssrRenderComponent)(_component_wd_option, {
                            label: "专科",
                            value: "bing"
                          }, null, _parent, _scopeId))
                        } else {
                          return [
                            (0,external_vue_.createVNode)(_component_wd_option, {
                              label: "研究生",
                              value: "baidu"
                            }),
                            (0,external_vue_.createVNode)(_component_wd_option, {
                              label: "本科",
                              value: "google"
                            }),
                            (0,external_vue_.createVNode)(_component_wd_option, {
                              label: "专科",
                              value: "bing"
                            })
                          ]
                        }
                      }),
                      _: 1
                    }, _parent, _scopeId))
                  } else {
                    return [
                      (0,external_vue_.createVNode)(_component_wd_select, {
                        modelValue: _ctx.selectedValue,
                        "onUpdate:modelValue": $event => ((_ctx.selectedValue) = $event),
                        onChange: _ctx.selectedChangeHandler,
                        placeholder: "请选择学历"
                      }, {
                        default: (0,external_vue_.withCtx)(() => [
                          (0,external_vue_.createVNode)(_component_wd_option, {
                            label: "研究生",
                            value: "baidu"
                          }),
                          (0,external_vue_.createVNode)(_component_wd_option, {
                            label: "本科",
                            value: "google"
                          }),
                          (0,external_vue_.createVNode)(_component_wd_option, {
                            label: "专科",
                            value: "bing"
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                    ]
                  }
                }),
                _: 1
              }, _parent, _scopeId))
            } else {
              return [
                (0,external_vue_.createVNode)(_component_wd_form_item, {
                  label: "姓名",
                  prop: "name"
                }, {
                  default: (0,external_vue_.withCtx)(() => [
                    (0,external_vue_.createVNode)(_component_wd_input, {
                      type: "text",
                      placeholder: "请输入姓名"
                    })
                  ]),
                  _: 1
                }),
                (0,external_vue_.createVNode)(_component_wd_form_item, {
                  label: "性别",
                  prop: "gender"
                }, {
                  default: (0,external_vue_.withCtx)(() => [
                    (0,external_vue_.createVNode)(_component_wd_radio, {
                      checked: _ctx.isMale,
                      name: "color",
                      onChange: _ctx.handleRadioChange
                    }, {
                      default: (0,external_vue_.withCtx)(() => [
                        (0,external_vue_.createTextVNode)(" 男 ")
                      ]),
                      _: 1
                    }, 8, ["checked", "onChange"]),
                    (0,external_vue_.createVNode)(_component_wd_radio, {
                      checked: _ctx.isFemale,
                      name: "color",
                      onChange: _ctx.handleRadioChange
                    }, {
                      default: (0,external_vue_.withCtx)(() => [
                        (0,external_vue_.createTextVNode)(" 女 ")
                      ]),
                      _: 1
                    }, 8, ["checked", "onChange"])
                  ]),
                  _: 1
                }),
                (0,external_vue_.createVNode)(_component_wd_form_item, {
                  label: "婚姻状况",
                  prop: "isMerried"
                }, {
                  default: (0,external_vue_.withCtx)(() => [
                    (0,external_vue_.createVNode)(_component_wd_checkbox, {
                      checked: true,
                      onChange: _ctx.handleCheckboxChange
                    }, {
                      default: (0,external_vue_.withCtx)(() => [
                        (0,external_vue_.createTextVNode)(" 已婚 ")
                      ]),
                      _: 1
                    }, 8, ["onChange"])
                  ]),
                  _: 1
                }),
                (0,external_vue_.createVNode)(_component_wd_form_item, {
                  label: "年龄",
                  prop: "age"
                }, {
                  default: (0,external_vue_.withCtx)(() => [
                    (0,external_vue_.createVNode)(_component_wd_input_number, {
                      max: "20",
                      min: "0",
                      onInput: _ctx.handleInputNumber,
                      onChange: _ctx.handleChangeNumber,
                      type: "text"
                    }, null, 8, ["onInput", "onChange"])
                  ]),
                  _: 1
                }),
                (0,external_vue_.createVNode)(_component_wd_form_item, { label: "学历" }, {
                  default: (0,external_vue_.withCtx)(() => [
                    (0,external_vue_.createVNode)(_component_wd_select, {
                      modelValue: _ctx.selectedValue,
                      "onUpdate:modelValue": $event => ((_ctx.selectedValue) = $event),
                      onChange: _ctx.selectedChangeHandler,
                      placeholder: "请选择学历"
                    }, {
                      default: (0,external_vue_.withCtx)(() => [
                        (0,external_vue_.createVNode)(_component_wd_option, {
                          label: "研究生",
                          value: "baidu"
                        }),
                        (0,external_vue_.createVNode)(_component_wd_option, {
                          label: "本科",
                          value: "google"
                        }),
                        (0,external_vue_.createVNode)(_component_wd_option, {
                          label: "专科",
                          value: "bing"
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
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
          (0,external_vue_.createVNode)(_component_wd_form, {
            ref: "userInfoForm",
            "label-width": "100px",
            "label-align": "right",
            size: "small",
            inline: "",
            model: _ctx.userInfo,
            "validate-on-rule-change": true,
            rules: _ctx.formRules,
            "show-message": true,
            "label-position": "left"
          }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)(_component_wd_form_item, {
                label: "姓名",
                prop: "name"
              }, {
                default: (0,external_vue_.withCtx)(() => [
                  (0,external_vue_.createVNode)(_component_wd_input, {
                    type: "text",
                    placeholder: "请输入姓名"
                  })
                ]),
                _: 1
              }),
              (0,external_vue_.createVNode)(_component_wd_form_item, {
                label: "性别",
                prop: "gender"
              }, {
                default: (0,external_vue_.withCtx)(() => [
                  (0,external_vue_.createVNode)(_component_wd_radio, {
                    checked: _ctx.isMale,
                    name: "color",
                    onChange: _ctx.handleRadioChange
                  }, {
                    default: (0,external_vue_.withCtx)(() => [
                      (0,external_vue_.createTextVNode)(" 男 ")
                    ]),
                    _: 1
                  }, 8, ["checked", "onChange"]),
                  (0,external_vue_.createVNode)(_component_wd_radio, {
                    checked: _ctx.isFemale,
                    name: "color",
                    onChange: _ctx.handleRadioChange
                  }, {
                    default: (0,external_vue_.withCtx)(() => [
                      (0,external_vue_.createTextVNode)(" 女 ")
                    ]),
                    _: 1
                  }, 8, ["checked", "onChange"])
                ]),
                _: 1
              }),
              (0,external_vue_.createVNode)(_component_wd_form_item, {
                label: "婚姻状况",
                prop: "isMerried"
              }, {
                default: (0,external_vue_.withCtx)(() => [
                  (0,external_vue_.createVNode)(_component_wd_checkbox, {
                    checked: true,
                    onChange: _ctx.handleCheckboxChange
                  }, {
                    default: (0,external_vue_.withCtx)(() => [
                      (0,external_vue_.createTextVNode)(" 已婚 ")
                    ]),
                    _: 1
                  }, 8, ["onChange"])
                ]),
                _: 1
              }),
              (0,external_vue_.createVNode)(_component_wd_form_item, {
                label: "年龄",
                prop: "age"
              }, {
                default: (0,external_vue_.withCtx)(() => [
                  (0,external_vue_.createVNode)(_component_wd_input_number, {
                    max: "20",
                    min: "0",
                    onInput: _ctx.handleInputNumber,
                    onChange: _ctx.handleChangeNumber,
                    type: "text"
                  }, null, 8, ["onInput", "onChange"])
                ]),
                _: 1
              }),
              (0,external_vue_.createVNode)(_component_wd_form_item, { label: "学历" }, {
                default: (0,external_vue_.withCtx)(() => [
                  (0,external_vue_.createVNode)(_component_wd_select, {
                    modelValue: _ctx.selectedValue,
                    "onUpdate:modelValue": $event => ((_ctx.selectedValue) = $event),
                    onChange: _ctx.selectedChangeHandler,
                    placeholder: "请选择学历"
                  }, {
                    default: (0,external_vue_.withCtx)(() => [
                      (0,external_vue_.createVNode)(_component_wd_option, {
                        label: "研究生",
                        value: "baidu"
                      }),
                      (0,external_vue_.createVNode)(_component_wd_option, {
                        label: "本科",
                        value: "google"
                      }),
                      (0,external_vue_.createVNode)(_component_wd_option, {
                        label: "专科",
                        value: "bing"
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["model", "rules"])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</div><div class="component-box-bottom"><div class="component-title">表单</div><div class="component-desc"> 设置inline属性可以让表单项以行内样式排列 </div></div></div><details class="custom-container details"><summary>点击查看代码</summary><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-form</span>
  <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userInfoForm<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">label-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100px<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">label-align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>small<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">inline</span>
  <span class="token attr-name">:model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userInfo<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:validate-on-rule-change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:rules</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>formRules<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:show-message</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">label-position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>left<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>姓名<span class="token punctuation">&quot;</span></span> <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-input</span>
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>请输入姓名<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wd-input</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wd-form-item</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>性别<span class="token punctuation">&quot;</span></span> <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>gender<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-radio</span>
      <span class="token attr-name">:checked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isMale<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>color<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleRadioChange<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
      男
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wd-radio</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-radio</span>
      <span class="token attr-name">:checked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isFemale<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>color<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleRadioChange<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
      女
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wd-radio</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wd-form-item</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>婚姻状况<span class="token punctuation">&quot;</span></span> <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isMerried<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-checkbox</span>
      <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleCheckboxChange<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
      已婚
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wd-checkbox</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wd-form-item</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>年龄<span class="token punctuation">&quot;</span></span> <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>age<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-input-number</span>
      <span class="token attr-name">max</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>20<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">min</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@input</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleInputNumber<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleChangeNumber<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wd-input-number</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wd-form-item</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>学历<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-select</span>
      <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>selectedValue<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>selectedChangeHandler<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>请选择学历<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-option</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>研究生<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>baidu<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wd-option</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-option</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>本科<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>google<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wd-option</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-option</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>专科<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bing<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wd-option</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wd-select</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wd-form-item</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-form-item</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>small<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>danger<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>重置<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wd-button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>small<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>success<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>regHandler<span class="token punctuation">&quot;</span></span>
      <span class="token punctuation">&gt;</span></span>提交<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wd-button</span>
    <span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wd-form-item</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wd-form</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br></div></div></details><h4 id="垂直排列" tabindex="-1"><a class="header-anchor" href="#垂直排列" aria-hidden="true">#</a> 垂直排列</h4><div class="component-box"><div class="component-box-top">`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ClientOnly, null, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_wd_form, {
          ref: "userInfoForm",
          "label-width": "100px",
          "label-align": "right",
          size: "small",
          model: _ctx.userInfo,
          "validate-on-rule-change": true,
          rules: _ctx.formRules,
          "show-message": true,
          "label-position": "left"
        }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push((0,server_renderer.ssrRenderComponent)(_component_wd_form_item, {
                label: "姓名",
                prop: "name"
              }, {
                default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
                  if (_push) {
                    _push((0,server_renderer.ssrRenderComponent)(_component_wd_input, {
                      type: "text",
                      placeholder: "请输入姓名"
                    }, null, _parent, _scopeId))
                  } else {
                    return [
                      (0,external_vue_.createVNode)(_component_wd_input, {
                        type: "text",
                        placeholder: "请输入姓名"
                      })
                    ]
                  }
                }),
                _: 1
              }, _parent, _scopeId))
              _push((0,server_renderer.ssrRenderComponent)(_component_wd_form_item, {
                label: "性别",
                prop: "gender"
              }, {
                default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
                  if (_push) {
                    _push((0,server_renderer.ssrRenderComponent)(_component_wd_radio, {
                      checked: _ctx.isMale,
                      name: "color"
                    }, {
                      default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
                        if (_push) {
                          _push(` 男 `)
                        } else {
                          return [
                            (0,external_vue_.createTextVNode)(" 男 ")
                          ]
                        }
                      }),
                      _: 1
                    }, _parent, _scopeId))
                    _push((0,server_renderer.ssrRenderComponent)(_component_wd_radio, {
                      checked: _ctx.isFemale,
                      name: "color"
                    }, {
                      default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
                        if (_push) {
                          _push(` 女 `)
                        } else {
                          return [
                            (0,external_vue_.createTextVNode)(" 女 ")
                          ]
                        }
                      }),
                      _: 1
                    }, _parent, _scopeId))
                  } else {
                    return [
                      (0,external_vue_.createVNode)(_component_wd_radio, {
                        checked: _ctx.isMale,
                        name: "color",
                        onChange: _ctx.handleRadioChange
                      }, {
                        default: (0,external_vue_.withCtx)(() => [
                          (0,external_vue_.createTextVNode)(" 男 ")
                        ]),
                        _: 1
                      }, 8, ["checked", "onChange"]),
                      (0,external_vue_.createVNode)(_component_wd_radio, {
                        checked: _ctx.isFemale,
                        name: "color",
                        onChange: _ctx.handleRadioChange
                      }, {
                        default: (0,external_vue_.withCtx)(() => [
                          (0,external_vue_.createTextVNode)(" 女 ")
                        ]),
                        _: 1
                      }, 8, ["checked", "onChange"])
                    ]
                  }
                }),
                _: 1
              }, _parent, _scopeId))
              _push((0,server_renderer.ssrRenderComponent)(_component_wd_form_item, {
                label: "婚姻状况",
                prop: "isMerried"
              }, {
                default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
                  if (_push) {
                    _push((0,server_renderer.ssrRenderComponent)(_component_wd_checkbox, { checked: true }, {
                      default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
                        if (_push) {
                          _push(` 已婚 `)
                        } else {
                          return [
                            (0,external_vue_.createTextVNode)(" 已婚 ")
                          ]
                        }
                      }),
                      _: 1
                    }, _parent, _scopeId))
                  } else {
                    return [
                      (0,external_vue_.createVNode)(_component_wd_checkbox, {
                        checked: true,
                        onChange: _ctx.handleCheckboxChange
                      }, {
                        default: (0,external_vue_.withCtx)(() => [
                          (0,external_vue_.createTextVNode)(" 已婚 ")
                        ]),
                        _: 1
                      }, 8, ["onChange"])
                    ]
                  }
                }),
                _: 1
              }, _parent, _scopeId))
            } else {
              return [
                (0,external_vue_.createVNode)(_component_wd_form_item, {
                  label: "姓名",
                  prop: "name"
                }, {
                  default: (0,external_vue_.withCtx)(() => [
                    (0,external_vue_.createVNode)(_component_wd_input, {
                      type: "text",
                      placeholder: "请输入姓名"
                    })
                  ]),
                  _: 1
                }),
                (0,external_vue_.createVNode)(_component_wd_form_item, {
                  label: "性别",
                  prop: "gender"
                }, {
                  default: (0,external_vue_.withCtx)(() => [
                    (0,external_vue_.createVNode)(_component_wd_radio, {
                      checked: _ctx.isMale,
                      name: "color",
                      onChange: _ctx.handleRadioChange
                    }, {
                      default: (0,external_vue_.withCtx)(() => [
                        (0,external_vue_.createTextVNode)(" 男 ")
                      ]),
                      _: 1
                    }, 8, ["checked", "onChange"]),
                    (0,external_vue_.createVNode)(_component_wd_radio, {
                      checked: _ctx.isFemale,
                      name: "color",
                      onChange: _ctx.handleRadioChange
                    }, {
                      default: (0,external_vue_.withCtx)(() => [
                        (0,external_vue_.createTextVNode)(" 女 ")
                      ]),
                      _: 1
                    }, 8, ["checked", "onChange"])
                  ]),
                  _: 1
                }),
                (0,external_vue_.createVNode)(_component_wd_form_item, {
                  label: "婚姻状况",
                  prop: "isMerried"
                }, {
                  default: (0,external_vue_.withCtx)(() => [
                    (0,external_vue_.createVNode)(_component_wd_checkbox, {
                      checked: true,
                      onChange: _ctx.handleCheckboxChange
                    }, {
                      default: (0,external_vue_.withCtx)(() => [
                        (0,external_vue_.createTextVNode)(" 已婚 ")
                      ]),
                      _: 1
                    }, 8, ["onChange"])
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
          (0,external_vue_.createVNode)(_component_wd_form, {
            ref: "userInfoForm",
            "label-width": "100px",
            "label-align": "right",
            size: "small",
            model: _ctx.userInfo,
            "validate-on-rule-change": true,
            rules: _ctx.formRules,
            "show-message": true,
            "label-position": "left"
          }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)(_component_wd_form_item, {
                label: "姓名",
                prop: "name"
              }, {
                default: (0,external_vue_.withCtx)(() => [
                  (0,external_vue_.createVNode)(_component_wd_input, {
                    type: "text",
                    placeholder: "请输入姓名"
                  })
                ]),
                _: 1
              }),
              (0,external_vue_.createVNode)(_component_wd_form_item, {
                label: "性别",
                prop: "gender"
              }, {
                default: (0,external_vue_.withCtx)(() => [
                  (0,external_vue_.createVNode)(_component_wd_radio, {
                    checked: _ctx.isMale,
                    name: "color",
                    onChange: _ctx.handleRadioChange
                  }, {
                    default: (0,external_vue_.withCtx)(() => [
                      (0,external_vue_.createTextVNode)(" 男 ")
                    ]),
                    _: 1
                  }, 8, ["checked", "onChange"]),
                  (0,external_vue_.createVNode)(_component_wd_radio, {
                    checked: _ctx.isFemale,
                    name: "color",
                    onChange: _ctx.handleRadioChange
                  }, {
                    default: (0,external_vue_.withCtx)(() => [
                      (0,external_vue_.createTextVNode)(" 女 ")
                    ]),
                    _: 1
                  }, 8, ["checked", "onChange"])
                ]),
                _: 1
              }),
              (0,external_vue_.createVNode)(_component_wd_form_item, {
                label: "婚姻状况",
                prop: "isMerried"
              }, {
                default: (0,external_vue_.withCtx)(() => [
                  (0,external_vue_.createVNode)(_component_wd_checkbox, {
                    checked: true,
                    onChange: _ctx.handleCheckboxChange
                  }, {
                    default: (0,external_vue_.withCtx)(() => [
                      (0,external_vue_.createTextVNode)(" 已婚 ")
                    ]),
                    _: 1
                  }, 8, ["onChange"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["model", "rules"])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</div><div class="component-box-bottom"><div class="component-title">垂直表单</div><div class="component-desc"> 设置inline为false或者不设置inline属性，每一个表单项单独一行排列 </div></div></div><details class="custom-container details"><summary>点击查看代码</summary><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-form</span>
  <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userInfoForm<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">label-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100px<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">label-align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>small<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userInfo<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:validate-on-rule-change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:rules</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>formRules<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:show-message</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">label-position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>left<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>姓名<span class="token punctuation">&quot;</span></span> <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-input</span>
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>请输入姓名<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wd-input</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wd-form-item</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>性别<span class="token punctuation">&quot;</span></span> <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>gender<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-radio</span>
      <span class="token attr-name">:checked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isMale<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>color<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleRadioChange<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
      男
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wd-radio</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-radio</span>
      <span class="token attr-name">:checked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isFemale<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>color<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleRadioChange<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
      女
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wd-radio</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wd-form-item</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>婚姻状况<span class="token punctuation">&quot;</span></span> <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isMerried<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-checkbox</span>
      <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleCheckboxChange<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
      已婚
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wd-checkbox</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wd-form-item</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-form-item</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>small<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>danger<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>重置<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wd-button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>small<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>success<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>regHandler<span class="token punctuation">&quot;</span></span>
      <span class="token punctuation">&gt;</span></span>提交<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wd-button</span>
    <span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wd-form-item</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wd-form</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div></details><h3 id="form-属性" tabindex="-1"><a class="header-anchor" href="#form-属性" aria-hidden="true">#</a> Form 属性</h3><table><thead><tr><th style="${
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
  }">colon</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">标签后面是否显示冒号</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">boolean</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">true / false</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">true</td></tr><tr><td style="${
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
  }">inline</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">是否是行内模式</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">boolean</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">true / false</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">false</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">inline-message</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">验证提示文字</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">string</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">-</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">-</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">label-align</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">标签内文案位置</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">string</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">left / center / right</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">left</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">label-position</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">标签位置</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">string</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">left / top</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">left</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">label-width</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">标签大小</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">string</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">-</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">100px</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">rules</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">表单验证规则</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">object</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">-</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">100px</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">size</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">表单尺寸</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">string</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">small / large</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">small</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">validate-on-rule-change</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">验证规则改变之后是否立即执行一次验证</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">boolean</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">true / false</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">false</td></tr></tbody></table><h3 id="formitem-属性" tabindex="-1"><a class="header-anchor" href="#formitem-属性" aria-hidden="true">#</a> FormItem 属性</h3><table><thead><tr><th style="${
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
  }">label-position</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">标签位置</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">string</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">left / top</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">left</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">label-width</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">标签大小</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">string</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">-</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">100px</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">rules</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">表单验证规则</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">object</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">-</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">100px</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">size</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">表单尺寸</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">string</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">small / large</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">small</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">show-message</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">是否展示验证信息</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">boolean</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">true / false</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">true</td></tr></tbody></table><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/form.html.vue?vue&type=template&id=12826cf4

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/form.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const form_html = (__exports__);

/***/ })

};
;
//# sourceMappingURL=523.app.js.map