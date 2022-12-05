"use strict";(self.webpackChunk_inagora_wd_view=self.webpackChunk_inagora_wd_view||[]).push([[902],{6835:(t,a,e)=>{e.r(a),e.d(a,{data:()=>n});const n={key:"v-a230dce8",path:"/switch.html",title:"",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Switch 开关",slug:"switch-开关",children:[{level:3,title:"用法",slug:"用法",children:[]},{level:3,title:"属性",slug:"属性",children:[]},{level:3,title:"事件",slug:"事件",children:[]}]}],filePathRelative:"switch.md"}},5451:(t,a,e)=>{e.r(a),e.d(a,{default:()=>p});var n=e(6252);const s=(0,n.uE)('<h2 id="switch-开关" tabindex="-1"><a class="header-anchor" href="#switch-开关" aria-hidden="true">#</a> Switch 开关</h2><h3 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h3><h4 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h4>',3),l={class:"component-box"},c={class:"component-box-top"},i=(0,n._)("div",{class:"component-box-bottom"},[(0,n._)("div",{class:"component-title"},"开关组件"),(0,n._)("div",{class:"component-desc"}," 开关组件可以控制一个状态，当异步切换状态的时候可以显示loading状态； ")],-1),d=(0,n.uE)('<details class="custom-container details"><summary>点击查看代码</summary><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-switch</span>\n  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isSwitchChecked<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">:loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isSwitchLoading<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleSwitchChange<span class="token punctuation">&quot;</span></span>\n<span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-switch</span>\n  <span class="token attr-name">disabled</span>\n  <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>large<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">:loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isSwitchChecked<span class="token punctuation">&quot;</span></span>\n<span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></details><h3 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h3><table><thead><tr><th style="text-align:center;">参数</th><th style="text-align:center;">说明</th><th style="text-align:center;">类型</th><th style="text-align:center;">可选值</th><th style="text-align:center;">默认值</th></tr></thead><tbody><tr><td style="text-align:center;">checked</td><td style="text-align:center;">是否选中</td><td style="text-align:center;">boolean</td><td style="text-align:center;">true / false</td><td style="text-align:center;">false</td></tr><tr><td style="text-align:center;">disabled</td><td style="text-align:center;">是否可用</td><td style="text-align:center;">boolean</td><td style="text-align:center;">true / false</td><td style="text-align:center;">true</td></tr><tr><td style="text-align:center;">loading</td><td style="text-align:center;">是否正在加载</td><td style="text-align:center;">boolean</td><td style="text-align:center;">true / false</td><td style="text-align:center;">false</td></tr><tr><td style="text-align:center;">size</td><td style="text-align:center;">组件大小</td><td style="text-align:center;">string</td><td style="text-align:center;">small / large / default</td><td style="text-align:center;">default</td></tr></tbody></table><h3 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h3><table><thead><tr><th style="text-align:center;">事件名称</th><th style="text-align:center;">说明</th><th style="text-align:center;">回调参数</th></tr></thead><tbody><tr><td style="text-align:center;">change</td><td style="text-align:center;">值变化时触发</td><td style="text-align:center;">Function(checkedValue)</td></tr></tbody></table>',5),r={},p=(0,e(3744).Z)(r,[["render",function(t,a){const e=(0,n.up)("wd-switch"),r=(0,n.up)("ClientOnly");return(0,n.wg)(),(0,n.iD)(n.HY,null,[s,(0,n._)("div",l,[(0,n._)("div",c,[(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n.Wm)(e,{modelValue:t.isSwitchChecked,"onUpdate:modelValue":a[0]||(a[0]=a=>t.isSwitchChecked=a),loading:t.isSwitchLoading,onChange:t.handleSwitchChange},null,8,["modelValue","loading","onChange"]),(0,n.Wm)(e,{disabled:"",size:"large",loading:!0,modelValue:t.isSwitchChecked,"onUpdate:modelValue":a[1]||(a[1]=a=>t.isSwitchChecked=a)},null,8,["modelValue"])])),_:1})]),i]),d],64)}]])}}]);