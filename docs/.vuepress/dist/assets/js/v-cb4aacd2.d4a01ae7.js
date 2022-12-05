"use strict";(self.webpackChunk_inagora_wd_view=self.webpackChunk_inagora_wd_view||[]).push([[605],{9018:(n,a,s)=>{s.r(a),s.d(a,{data:()=>t});const t={key:"v-cb4aacd2",path:"/install.html",title:"",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"安装",slug:"安装",children:[{level:3,title:"更新日志",slug:"更新日志",children:[]},{level:3,title:"浏览器",slug:"浏览器",children:[]},{level:3,title:"NPM",slug:"npm",children:[]}]}],filePathRelative:"install.md"}},9414:(n,a,s)=>{s.r(a),s.d(a,{default:()=>h});var t=s(6252);const p=(0,t._)("h2",{id:"安装",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),(0,t.Uk)(" 安装")],-1),e=(0,t._)("h3",{id:"更新日志",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#更新日志","aria-hidden":"true"},"#"),(0,t.Uk)(" 更新日志")],-1),c=(0,t.Uk)("当前最新beta版本："),l={href:"https://github.com/inagora/wd-view/releases/tag/v1.0.5",target:"_blank",rel:"noopener noreferrer"},o=(0,t.Uk)("v1.0.5"),u=(0,t.uE)('<h3 id="浏览器" tabindex="-1"><a class="header-anchor" href="#浏览器" aria-hidden="true">#</a> 浏览器</h3><p>1、页面中引入js</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/vue@next<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/gh/inagora/wd-view@v1.0.5/dist/index.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>2、引入css</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/gh/inagora/wd-view@v1.0.5/dist/index.css<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',5),i=(0,t.Uk)("注意：如果要使用日期组件，需要在页面中引入"),r={href:"http://momentjs.cn/",target:"_blank",rel:"noopener noreferrer"},k=(0,t.Uk)("moment.js"),d=(0,t.Uk)(" 3、使用组件"),g=(0,t.uE)('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>WdView<span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="npm" tabindex="-1"><a class="header-anchor" href="#npm" aria-hidden="true">#</a> NPM</h3><p>1、通过npm安装</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npm install @inagora<span class="token operator">/</span>wd<span class="token operator">-</span>view\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>2、使用组件</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>WdView<span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',6),m={},h=(0,s(3744).Z)(m,[["render",function(n,a){const s=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[p,e,(0,t._)("p",null,[c,(0,t._)("a",l,[o,(0,t.Wm)(s)])]),u,(0,t._)("blockquote",null,[(0,t._)("p",null,[i,(0,t._)("a",r,[k,(0,t.Wm)(s)]),d])]),g],64)}]])}}]);