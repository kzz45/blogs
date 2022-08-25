<template><h1 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础 🎉</h1>
<h2 id="递归" tabindex="-1"><a class="header-anchor" href="#递归" aria-hidden="true">#</a> 递归</h2>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token comment"># 数组最大值</span>


<span class="token keyword">def</span> <span class="token function">process</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> l<span class="token punctuation">,</span> r<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> l <span class="token operator">==</span> r<span class="token punctuation">:</span>
        <span class="token keyword">return</span> arr<span class="token punctuation">[</span>l<span class="token punctuation">]</span>

    mid <span class="token operator">=</span> l <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>r <span class="token operator">-</span> l<span class="token punctuation">)</span> <span class="token operator">>></span> <span class="token number">1</span><span class="token punctuation">)</span>
    left <span class="token operator">=</span> process<span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> mid<span class="token punctuation">)</span>
    right <span class="token operator">=</span> process<span class="token punctuation">(</span>arr<span class="token punctuation">,</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> r<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token builtin">max</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> right<span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">get_max</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> process<span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>


result <span class="token operator">=</span> get_max<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">99</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="迭代" tabindex="-1"><a class="header-anchor" href="#迭代" aria-hidden="true">#</a> 迭代</h2>
<h2 id="位运算" tabindex="-1"><a class="header-anchor" href="#位运算" aria-hidden="true">#</a> 位运算</h2>
<ul>
<li>&amp; 与运算 两个都是1，才是1</li>
<li>| 或运算 两个都是0，才是0</li>
<li>^ 异或运算 两个相同是0，不相同是1</li>
<li>~ 取反</li>
<li>&lt;&lt; 左移</li>
<li>&lt;&lt; 右移</li>
</ul>
<h2 id="对数器" tabindex="-1"><a class="header-anchor" href="#对数器" aria-hidden="true">#</a> 对数器</h2>
<h2 id="比较器" tabindex="-1"><a class="header-anchor" href="#比较器" aria-hidden="true">#</a> 比较器</h2>
<h2 id="前缀和" tabindex="-1"><a class="header-anchor" href="#前缀和" aria-hidden="true">#</a> 前缀和</h2>
</template>
