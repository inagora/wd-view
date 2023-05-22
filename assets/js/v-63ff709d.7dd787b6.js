"use strict";(self.webpackChunk_inagora_wd_view=self.webpackChunk_inagora_wd_view||[]).push([[7],{2866:(t,n,a)=>{a.r(n),a.d(n,{data:()=>s});const s={key:"v-63ff709d",path:"/checkbox.html",title:"",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Checkbox 多选",slug:"checkbox-多选",children:[{level:3,title:"用法",slug:"用法",children:[]},{level:3,title:"属性",slug:"属性",children:[]},{level:3,title:"事件",slug:"事件",children:[]}]}],filePathRelative:"checkbox.md"}},9257:(t,n,a)=>{a.r(n),a.d(n,{default:()=>h});var s=a(6252);const e=(0,s.uE)('<h2 id="checkbox-多选" tabindex="-1"><a class="header-anchor" href="#checkbox-多选" aria-hidden="true">#</a> Checkbox 多选</h2><h3 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h3><h4 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h4>',3),l={class:"component-box"},c={class:"component-box-top"},p=(0,s.Uk)(" 复选框 "),o=(0,s.Uk)(" 复选框默认选中 "),u=(0,s.Uk)(" 复选框不可用 "),r=(0,s._)("div",{class:"component-box-bottom"},[(0,s._)("div",{class:"component-title"},"复选框"),(0,s._)("div",{class:"component-desc"}," 设置checked属性，可以设置checkbox是否默认选中； 设置disabled为true则该checkbox不可更改值； ")],-1),i=(0,s.uE)('<details class="custom-container details"><summary>点击查看代码</summary><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-checkbox</span>\n    <span class="token attr-name">:checked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isCheckboxChecked<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleCheckboxChange<span class="token punctuation">&quot;</span></span>\n<span class="token punctuation">&gt;</span></span>\n    复选框\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wd-checkbox</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-checkbox</span>\n    <span class="token attr-name">:checked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkboxDefaultCheck<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkboxDefaultCheck<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleCheckboxChange<span class="token punctuation">&quot;</span></span>\n<span class="token punctuation">&gt;</span></span>\n    复选框默认选中\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wd-checkbox</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-checkbox</span>\n    <span class="token attr-name">:checked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isCheckboxChecked<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleCheckboxChange<span class="token punctuation">&quot;</span></span>\n<span class="token punctuation">&gt;</span></span>\n    复选框不可用\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wd-checkbox</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div></details><h3 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h3><table><thead><tr><th style="text-align:center;">参数</th><th style="text-align:center;">说明</th><th style="text-align:center;">类型</th><th style="text-align:center;">可选值</th><th style="text-align:center;">默认值</th></tr></thead><tbody><tr><td style="text-align:center;">checked</td><td style="text-align:center;">是否选中</td><td style="text-align:center;">boolean</td><td style="text-align:center;">true / false</td><td style="text-align:center;">false</td></tr><tr><td style="text-align:center;">name</td><td style="text-align:center;">组件名称</td><td style="text-align:center;">string</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">default-value</td><td style="text-align:center;">复选框组才有的属性</td><td style="text-align:center;">Array</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">disabled</td><td style="text-align:center;">是否可用</td><td style="text-align:center;">boolean</td><td style="text-align:center;">true / false</td><td style="text-align:center;">true</td></tr></tbody></table><h3 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h3><table><thead><tr><th style="text-align:center;">事件名称</th><th style="text-align:center;">说明</th><th style="text-align:center;">回调参数</th></tr></thead><tbody><tr><td style="text-align:center;">change</td><td style="text-align:center;">值变化时触发</td><td style="text-align:center;">Function(checkedValue)</td></tr></tbody></table>',5),d={},h=(0,a(3744).Z)(d,[["render",function(t,n){const a=(0,s.up)("wd-checkbox"),d=(0,s.up)("ClientOnly");return(0,s.wg)(),(0,s.iD)(s.HY,null,[e,(0,s._)("div",l,[(0,s._)("div",c,[(0,s.Wm)(d,null,{default:(0,s.w5)((()=>[(0,s.Wm)(a,{checked:!0},{default:(0,s.w5)((()=>[p])),_:1}),(0,s.Wm)(a,{checked:!1},{default:(0,s.w5)((()=>[o])),_:1}),(0,s.Wm)(a,{checked:!0,disabled:!0},{default:(0,s.w5)((()=>[u])),_:1})])),_:1})]),r]),i],64)}]])}}]);