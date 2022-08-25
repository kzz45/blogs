<template><h1 id="vuepress搭建个人blog" tabindex="-1"><a class="header-anchor" href="#vuepress搭建个人blog" aria-hidden="true">#</a> VuePress搭建个人Blog</h1>
<h2 id="安装配置" tabindex="-1"><a class="header-anchor" href="#安装配置" aria-hidden="true">#</a> 安装配置</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 创建项目目录</span>
<span class="token function">mkdir</span> blogs<span class="token punctuation">;</span> <span class="token builtin class-name">cd</span> blogs

<span class="token comment"># 初始化项目</span>
<span class="token function">npm</span> init -y

<span class="token comment"># 本地安装VuePress</span>
<span class="token function">npm</span> <span class="token function">install</span> vuepress -D

<span class="token comment"># 新建一个docs文件夹</span>
<span class="token function">mkdir</span> docs

<span class="token comment"># 新建一个Markdown文件</span>
<span class="token builtin class-name">echo</span> <span class="token string">'# Hello VuePress!'</span> <span class="token operator">></span> README.md
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>在package.json中添加</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"docs:dev"</span><span class="token operator">:</span> <span class="token string">"vuepress dev docs"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"docs:build"</span><span class="token operator">:</span> <span class="token string">"vuepress build docs"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>运行如下命令，启动一个服务器</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm run docs:dev
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="部署" tabindex="-1"><a class="header-anchor" href="#部署" aria-hidden="true">#</a> 部署</h2>
<ul>
<li>在github上新建项目blogs</li>
<li>在本地项目blogs根目录下创建deploy.sh文件</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env sh</span>

<span class="token comment"># 确保脚本抛出遇到的错误</span>
<span class="token builtin class-name">set</span> -e

<span class="token comment"># 生成静态文件</span>
<span class="token function">npm</span> run docs:build

<span class="token comment"># 进入静态文件的文件夹</span>
<span class="token builtin class-name">cd</span> docs/.vuepress/dist

<span class="token function">git</span> init
<span class="token function">git</span> <span class="token function">add</span> -A
<span class="token function">git</span> commit -m <span class="token string">'deploy'</span>

<span class="token function">git</span> push -f https://github.com/username/blogs.git master:gh-pages

<span class="token builtin class-name">cd</span> -
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div></template>
