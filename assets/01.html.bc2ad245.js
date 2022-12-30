import{c as s}from"./app.897a2dcd.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=s(`<h1 id="vuepress\u642D\u5EFA\u4E2A\u4EBAblog" tabindex="-1"><a class="header-anchor" href="#vuepress\u642D\u5EFA\u4E2A\u4EBAblog" aria-hidden="true">#</a> VuePress\u642D\u5EFA\u4E2A\u4EBABlog</h1><h2 id="\u5B89\u88C5\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u914D\u7F6E" aria-hidden="true">#</a> \u5B89\u88C5\u914D\u7F6E</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u521B\u5EFA\u9879\u76EE\u76EE\u5F55</span>
<span class="token function">mkdir</span> blogs<span class="token punctuation">;</span> <span class="token builtin class-name">cd</span> blogs

<span class="token comment"># \u521D\u59CB\u5316\u9879\u76EE</span>
<span class="token function">npm</span> init -y

<span class="token comment"># \u672C\u5730\u5B89\u88C5VuePress</span>
<span class="token function">npm</span> <span class="token function">install</span> vuepress -D

<span class="token comment"># \u65B0\u5EFA\u4E00\u4E2Adocs\u6587\u4EF6\u5939</span>
<span class="token function">mkdir</span> docs

<span class="token comment"># \u65B0\u5EFA\u4E00\u4E2AMarkdown\u6587\u4EF6</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;# Hello VuePress!&#39;</span> <span class="token operator">&gt;</span> README.md
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u5728package.json\u4E2D\u6DFB\u52A0</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;docs:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u8FD0\u884C\u5982\u4E0B\u547D\u4EE4\uFF0C\u542F\u52A8\u4E00\u4E2A\u670D\u52A1\u5668</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm run docs:dev
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72" aria-hidden="true">#</a> \u90E8\u7F72</h2><ul><li>\u5728github\u4E0A\u65B0\u5EFA\u9879\u76EEblogs</li><li>\u5728\u672C\u5730\u9879\u76EEblogs\u6839\u76EE\u5F55\u4E0B\u521B\u5EFAdeploy.sh\u6587\u4EF6</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env sh</span>

<span class="token comment"># \u786E\u4FDD\u811A\u672C\u629B\u51FA\u9047\u5230\u7684\u9519\u8BEF</span>
<span class="token builtin class-name">set</span> -e

<span class="token comment"># \u751F\u6210\u9759\u6001\u6587\u4EF6</span>
<span class="token function">npm</span> run docs:build

<span class="token comment"># \u8FDB\u5165\u9759\u6001\u6587\u4EF6\u7684\u6587\u4EF6\u5939</span>
<span class="token builtin class-name">cd</span> docs/.vuepress/dist

<span class="token function">git</span> init
<span class="token function">git</span> <span class="token function">add</span> -A
<span class="token function">git</span> commit -m <span class="token string">&#39;deploy&#39;</span>

<span class="token function">git</span> push -f https://github.com/username/blogs.git master:gh-pages

<span class="token builtin class-name">cd</span> -
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>`,10);function p(l,r){return e}var i=n(a,[["render",p]]);export{i as default};
