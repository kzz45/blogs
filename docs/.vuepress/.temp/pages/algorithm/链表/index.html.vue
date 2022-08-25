<template><h1 id="链表" tabindex="-1"><a class="header-anchor" href="#链表" aria-hidden="true">#</a> 链表</h1>
<h2 id="设计链表" tabindex="-1"><a class="header-anchor" href="#设计链表" aria-hidden="true">#</a> <a href="https://leetcode.cn/problems/design-linked-list/" target="_blank" rel="noopener noreferrer">设计链表<ExternalLinkIcon/></a></h2>
<h2 id="基础题" tabindex="-1"><a class="header-anchor" href="#基础题" aria-hidden="true">#</a> 基础题</h2>
<h3 id="反转单向链表和双向链表" tabindex="-1"><a class="header-anchor" href="#反转单向链表和双向链表" aria-hidden="true">#</a> 反转单向链表和双向链表</h3>
<ul>
<li><a href="https://leetcode.cn/problems/reverse-linked-list/" target="_blank" rel="noopener noreferrer">206. 反转链表<ExternalLinkIcon/></a></li>
<li><a href="https://leetcode.cn/problems/reverse-linked-list-ii/" target="_blank" rel="noopener noreferrer">92. 反转链表 II<ExternalLinkIcon/></a></li>
<li><a href="https://leetcode.cn/problems/fan-zhuan-lian-biao-lcof/" target="_blank" rel="noopener noreferrer">剑指 Offer 24. 反转链表<ExternalLinkIcon/></a></li>
<li><a href="https://leetcode.cn/problems/UHnkqh/" target="_blank" rel="noopener noreferrer">剑指 Offer II 024. 反转链表<ExternalLinkIcon/></a></li>
</ul>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">ListNode</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> val<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token builtin">next</span><span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>val <span class="token operator">=</span> val
        self<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token operator">=</span> <span class="token builtin">next</span>


<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">reverseList</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> head<span class="token punctuation">:</span> ListNode<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> ListNode<span class="token punctuation">:</span>
        pre <span class="token operator">=</span> <span class="token boolean">None</span>
        cur <span class="token operator">=</span> head
        <span class="token keyword">while</span> cur<span class="token punctuation">:</span>
            <span class="token builtin">next</span> <span class="token operator">=</span> cur<span class="token punctuation">.</span><span class="token builtin">next</span>
            cur<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token operator">=</span> pre
            pre <span class="token operator">=</span> cur
            cur <span class="token operator">=</span> <span class="token builtin">next</span>
        <span class="token keyword">return</span> pre
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="打印两个有序链表的公共部分" tabindex="-1"><a class="header-anchor" href="#打印两个有序链表的公共部分" aria-hidden="true">#</a> 打印两个有序链表的公共部分</h3>
<h3 id="判断一个链表是否是回文结构" tabindex="-1"><a class="header-anchor" href="#判断一个链表是否是回文结构" aria-hidden="true">#</a> 判断一个链表是否是回文结构</h3>
<ul>
<li>
<p><a href="https://leetcode-cn.com/problems/palindrome-linked-list/" target="_blank" rel="noopener noreferrer">234. 回文链表<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://leetcode.cn/problems/aMhZSa/" target="_blank" rel="noopener noreferrer">剑指 Offer II 027. 回文链表<ExternalLinkIcon/></a></p>
</li>
</ul>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">ListNode</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> val<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token builtin">next</span><span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>val <span class="token operator">=</span> val
        self<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token operator">=</span> <span class="token builtin">next</span>


<span class="token comment"># 栈的方式</span>

<span class="token comment"># 1. 循环遍历链表放入栈中</span>
<span class="token comment"># 2. 根据栈的特性先进后出</span>
<span class="token comment"># 3. 弹出的部分再跟当前链表循环对比</span>
<span class="token comment"># 4. 值一致就是回文</span>


<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">isPalindrome</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> head<span class="token punctuation">:</span> ListNode<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">bool</span><span class="token punctuation">:</span>
        stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        cur <span class="token operator">=</span> head
        <span class="token keyword">while</span> cur<span class="token punctuation">:</span>
            stack<span class="token punctuation">.</span>append<span class="token punctuation">(</span>cur<span class="token punctuation">)</span>
            cur <span class="token operator">=</span> cur<span class="token punctuation">.</span><span class="token builtin">next</span>
        <span class="token keyword">while</span> stack<span class="token punctuation">:</span>
            now <span class="token operator">=</span> stack<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> now<span class="token punctuation">.</span>val <span class="token operator">!=</span> head<span class="token punctuation">.</span>val<span class="token punctuation">:</span>
                <span class="token keyword">return</span> <span class="token boolean">False</span>
            head <span class="token operator">=</span> head<span class="token punctuation">.</span><span class="token builtin">next</span>
        <span class="token keyword">return</span> <span class="token boolean">True</span>


<span class="token comment"># 快慢指针方式</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div></template>
