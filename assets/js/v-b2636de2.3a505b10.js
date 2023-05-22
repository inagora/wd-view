"use strict";(self.webpackChunk_inagora_wd_view=self.webpackChunk_inagora_wd_view||[]).push([[243],{869:(n,a,s)=>{s.r(a),s.d(a,{data:()=>t});const t={key:"v-b2636de2",path:"/dropdown.html",title:"",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Dropdown 下拉列表",slug:"dropdown-下拉列表",children:[{level:3,title:"用法",slug:"用法",children:[]},{level:3,title:"属性",slug:"属性",children:[]},{level:3,title:"事件",slug:"事件",children:[]}]}],filePathRelative:"dropdown.md"}},2646:(n,a,s)=>{s.r(a),s.d(a,{default:()=>b});var t=s(6252);const e=(0,t.uE)('<h2 id="dropdown-下拉列表" tabindex="-1"><a class="header-anchor" href="#dropdown-下拉列表" aria-hidden="true">#</a> Dropdown 下拉列表</h2><h3 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h3><h4 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h4>',3),p={class:"component-box"},l={class:"component-box-top"},o={class:"wd-dropdown-link"},c=(0,t.Uk)(" 下拉菜单 "),u=(0,t._)("a",{href:"https://www.baidu.com"},"百度",-1),i=(0,t._)("a",{href:"https://www.baidu.com"},"百度",-1),r=(0,t._)("a",{href:"javascript:;"},"1st menu item",-1),d=(0,t._)("div",{class:"component-box-bottom"},[(0,t._)("div",{class:"component-title"},"下拉组件"),(0,t._)("div",{class:"component-desc"}," 点击或者鼠标移到组件上可以出现下拉的选项，每个选项可以自定义样式； ")],-1),k=(0,t.uE)('<details class="custom-container details"><summary>点击查看代码</summary><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-dropdown</span>\n    <span class="token attr-name">:visible</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">trigger</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hover<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">@visibleChange</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>visibleChangeHandler<span class="token punctuation">&quot;</span></span>\n<span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wd-dropdown-link<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    下拉菜单\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>down-outlined</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>down-outlined</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#dropdown</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-dropdown-menu</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-dropdown-menu-item</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://www.baidu.com<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>百度<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wd-dropdown-menu-item</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-dropdown-menu-item</span> <span class="token attr-name">disabled</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://www.baidu.com<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>百度<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wd-dropdown-menu-item</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wd-dropdown-menu-item</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>javascript:;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>1st menu item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wd-dropdown-menu-item</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wd-dropdown-menu</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wd-dropdown</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div></details><h3 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h3><table><thead><tr><th style="text-align:center;">参数</th><th style="text-align:center;">说明</th><th style="text-align:center;">类型</th><th style="text-align:center;">可选值</th><th style="text-align:center;">默认值</th></tr></thead><tbody><tr><td style="text-align:center;">visible</td><td style="text-align:center;">是否显示下拉选项</td><td style="text-align:center;">boolean</td><td style="text-align:center;">true / false</td><td style="text-align:center;">false</td></tr><tr><td style="text-align:center;">trigger</td><td style="text-align:center;">触发选项弹出的事件</td><td style="text-align:center;">string</td><td style="text-align:center;">hover / click</td><td style="text-align:center;">hover</td></tr><tr><td style="text-align:center;">disabled</td><td style="text-align:center;">是否可用</td><td style="text-align:center;">boolean</td><td style="text-align:center;">true / false</td><td style="text-align:center;">false</td></tr></tbody></table><h3 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h3><table><thead><tr><th style="text-align:center;">事件名称</th><th style="text-align:center;">说明</th><th style="text-align:center;">回调参数</th></tr></thead><tbody><tr><td style="text-align:center;">visible-change</td><td style="text-align:center;">下拉项显示与隐藏的回调</td><td style="text-align:center;">Function(visibleValue)</td></tr></tbody></table>',5),g={},b=(0,s(3744).Z)(g,[["render",function(n,a){const s=(0,t.up)("down-outlined"),g=(0,t.up)("wd-dropdown-menu-item"),b=(0,t.up)("wd-dropdown-menu"),m=(0,t.up)("wd-dropdown"),h=(0,t.up)("ClientOnly");return(0,t.wg)(),(0,t.iD)(t.HY,null,[e,(0,t._)("div",p,[(0,t._)("div",l,[(0,t.Wm)(h,null,{default:(0,t.w5)((()=>[(0,t.Wm)(m,{visible:!1,trigger:"hover",onVisibleChange:n.visibleChangeHandler},{dropdown:(0,t.w5)((()=>[(0,t.Wm)(b,null,{default:(0,t.w5)((()=>[(0,t.Wm)(g,null,{default:(0,t.w5)((()=>[u])),_:1}),(0,t.Wm)(g,{disabled:""},{default:(0,t.w5)((()=>[i])),_:1}),(0,t.Wm)(g,null,{default:(0,t.w5)((()=>[r])),_:1})])),_:1})])),default:(0,t.w5)((()=>[(0,t._)("a",o,[c,(0,t.Wm)(s)])])),_:1},8,["onVisibleChange"])])),_:1})]),d]),k],64)}]])}}]);