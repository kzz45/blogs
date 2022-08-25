<template><h1 id="二叉树" tabindex="-1"><a class="header-anchor" href="#二叉树" aria-hidden="true">#</a> 二叉树</h1>
<p><a href="https://leetcode-cn.com/leetbook/detail/data-structure-binary-tree/" target="_blank" rel="noopener noreferrer">LeetCode Book<ExternalLinkIcon/></a></p>
<h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h2>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">TreeNode</span><span class="token punctuation">:</span> 
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> value<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> left<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> right<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>value <span class="token operator">=</span> value
        self<span class="token punctuation">.</span>left <span class="token operator">=</span> left
        self<span class="token punctuation">.</span>right <span class="token operator">=</span> right
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="递归遍历" tabindex="-1"><a class="header-anchor" href="#递归遍历" aria-hidden="true">#</a> 递归遍历</h2>
<blockquote>
<p>所谓前中后序只针对于根节点，而左右子节点永远都是先左后右的顺序。所以，前序就是：根左右！中序就是：左根右！后续就是：左右根！</p>
</blockquote>
<ul>
<li>
<p>前序遍历 根左右 <a href="https://leetcode-cn.com/problems/binary-tree-preorder-traversal/" target="_blank" rel="noopener noreferrer">LeetCode题目<ExternalLinkIcon/></a></p>
</li>
<li>
<p>中序遍历 左根右 <a href="https://leetcode-cn.com/problems/binary-tree-inorder-traversal/" target="_blank" rel="noopener noreferrer">LeetCode题目<ExternalLinkIcon/></a></p>
</li>
<li>
<p>后序遍历 左右根 <a href="https://leetcode-cn.com/problems/binary-tree-postorder-traversal/" target="_blank" rel="noopener noreferrer">LeetCode题目<ExternalLinkIcon/></a></p>
</li>
</ul>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">TreeNode</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> val<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> left<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> right<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>val <span class="token operator">=</span> val
        self<span class="token punctuation">.</span>left <span class="token operator">=</span> left
        self<span class="token punctuation">.</span>right <span class="token operator">=</span> right

<span class="token comment"># 递归方式</span>

<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token comment"># 前序</span>
    <span class="token keyword">def</span> <span class="token function">preorderTraversal</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> root<span class="token punctuation">:</span> TreeNode<span class="token punctuation">)</span><span class="token punctuation">:</span>
        result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">def</span> <span class="token function">traversal</span><span class="token punctuation">(</span>root<span class="token punctuation">:</span> TreeNode<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> <span class="token keyword">not</span> root<span class="token punctuation">:</span>
                <span class="token keyword">return</span> result
            result<span class="token punctuation">.</span>append<span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token comment"># 前序</span>
            traversal<span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span>     <span class="token comment"># 左</span>
            traversal<span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span>    <span class="token comment"># 右</span>
        traversal<span class="token punctuation">(</span>root<span class="token punctuation">)</span>
        <span class="token keyword">return</span> result
    <span class="token comment"># 中序</span>
    <span class="token keyword">def</span> <span class="token function">inorderTraversal</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> root<span class="token punctuation">:</span> TreeNode<span class="token punctuation">)</span><span class="token punctuation">:</span>
        result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">def</span> <span class="token function">traversal</span><span class="token punctuation">(</span>root<span class="token punctuation">:</span> TreeNode<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> <span class="token keyword">not</span> root<span class="token punctuation">:</span>
                <span class="token keyword">return</span> result
            traversal<span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span>     <span class="token comment"># 左</span>
            result<span class="token punctuation">.</span>append<span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span>  <span class="token comment"># 中序</span>
            traversal<span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span>    <span class="token comment"># 右</span>
        traversal<span class="token punctuation">(</span>root<span class="token punctuation">)</span>
        <span class="token keyword">return</span> result
    <span class="token comment"># 后序</span>
    <span class="token keyword">def</span> <span class="token function">postorderTraversal</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> root<span class="token punctuation">:</span> TreeNode<span class="token punctuation">)</span><span class="token punctuation">:</span>
        result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">def</span> <span class="token function">traversal</span><span class="token punctuation">(</span>root<span class="token punctuation">:</span> TreeNode<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> <span class="token keyword">not</span> root<span class="token punctuation">:</span>
                <span class="token keyword">return</span> result
            traversal<span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span>     <span class="token comment"># 左</span>
            traversal<span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span>    <span class="token comment"># 右</span>
            result<span class="token punctuation">.</span>append<span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span>  <span class="token comment"># 后序</span>
        traversal<span class="token punctuation">(</span>root<span class="token punctuation">)</span>
        <span class="token keyword">return</span> result
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div><p><a href="https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/" target="_blank" rel="noopener noreferrer">105. 从前序与中序遍历序列构造二叉树<ExternalLinkIcon/></a></p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">from</span> typing <span class="token keyword">import</span> List


<span class="token keyword">class</span> <span class="token class-name">TreeNode</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> val<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> left<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> right<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>val <span class="token operator">=</span> val
        self<span class="token punctuation">.</span>left <span class="token operator">=</span> left
        self<span class="token punctuation">.</span>right <span class="token operator">=</span> right


<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">buildTree</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> preorder<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">,</span> inorder<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> TreeNode<span class="token punctuation">:</span>
        <span class="token keyword">if</span> preorder <span class="token keyword">is</span> <span class="token boolean">None</span> <span class="token keyword">or</span> inorder <span class="token keyword">is</span> <span class="token boolean">None</span> <span class="token keyword">or</span> <span class="token builtin">len</span><span class="token punctuation">(</span>preorder<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>inorder<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token boolean">None</span>
        hmap <span class="token operator">=</span> <span class="token punctuation">{</span>element<span class="token punctuation">:</span> i <span class="token keyword">for</span> i<span class="token punctuation">,</span> element <span class="token keyword">in</span> <span class="token builtin">enumerate</span><span class="token punctuation">(</span>inorder<span class="token punctuation">)</span><span class="token punctuation">}</span>

        <span class="token keyword">return</span> self<span class="token punctuation">.</span>f<span class="token punctuation">(</span>preorder<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>preorder<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> inorder<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>inorder<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> hmap<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">f</span><span class="token punctuation">(</span>
        self<span class="token punctuation">,</span>
        preorder<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        L1<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">,</span>
        R1<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">,</span>
        inorder<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        L2<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">,</span>
        R2<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">,</span>
        hmap<span class="token punctuation">,</span>
    <span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> TreeNode<span class="token punctuation">:</span>
        <span class="token keyword">if</span> L1 <span class="token operator">></span> R1<span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token boolean">None</span>

        head <span class="token operator">=</span> TreeNode<span class="token punctuation">(</span>preorder<span class="token punctuation">[</span>L1<span class="token punctuation">]</span><span class="token punctuation">)</span>

        <span class="token keyword">if</span> L1 <span class="token operator">==</span> R1<span class="token punctuation">:</span>
            <span class="token keyword">return</span> head

        find <span class="token operator">=</span> hmap<span class="token punctuation">[</span>preorder<span class="token punctuation">[</span>L1<span class="token punctuation">]</span><span class="token punctuation">]</span>
        <span class="token comment"># find = L2</span>
        <span class="token comment"># while inorder[find] != preorder[L1]:</span>
        <span class="token comment">#     find+=1</span>

        head<span class="token punctuation">.</span>left <span class="token operator">=</span> self<span class="token punctuation">.</span>f<span class="token punctuation">(</span>preorder<span class="token punctuation">,</span> L1 <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> L1 <span class="token operator">+</span> find <span class="token operator">-</span> L2<span class="token punctuation">,</span> inorder<span class="token punctuation">,</span> L2<span class="token punctuation">,</span> find <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> hmap<span class="token punctuation">)</span>
        head<span class="token punctuation">.</span>right <span class="token operator">=</span> self<span class="token punctuation">.</span>f<span class="token punctuation">(</span>preorder<span class="token punctuation">,</span> L1 <span class="token operator">+</span> find <span class="token operator">-</span> L2 <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> R1<span class="token punctuation">,</span> inorder<span class="token punctuation">,</span> find <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> R2<span class="token punctuation">,</span> hmap<span class="token punctuation">)</span>
        <span class="token keyword">return</span> head
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><h2 id="迭代遍历" tabindex="-1"><a class="header-anchor" href="#迭代遍历" aria-hidden="true">#</a> 迭代遍历</h2>
<blockquote>
<p>本质上是在模拟递归，因为在递归的过程中使用了系统栈，所以在迭代的解法中常用Stack来模拟系统栈。</p>
</blockquote>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">TreeNode</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> val<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> left<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> right<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>val <span class="token operator">=</span> val
        self<span class="token punctuation">.</span>left <span class="token operator">=</span> left
        self<span class="token punctuation">.</span>right <span class="token operator">=</span> right

<span class="token comment"># 迭代方式</span>

<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token comment"># 前序</span>
    <span class="token keyword">def</span> <span class="token function">preorderTraversal</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> root<span class="token punctuation">:</span> TreeNode<span class="token punctuation">)</span><span class="token punctuation">:</span>
        result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> root<span class="token punctuation">:</span>
            <span class="token keyword">return</span> result
        stack <span class="token operator">=</span> <span class="token punctuation">[</span>root<span class="token punctuation">]</span>
        <span class="token keyword">while</span> stack<span class="token punctuation">:</span>
            node <span class="token operator">=</span> stack<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token punctuation">)</span>
            result<span class="token punctuation">.</span>append<span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
            <span class="token comment"># 右先入后出</span>
            <span class="token keyword">if</span> node<span class="token punctuation">.</span>right<span class="token punctuation">:</span>
                stack<span class="token punctuation">.</span>append<span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
            <span class="token comment"># 左后入先出</span>
            <span class="token keyword">if</span> node<span class="token punctuation">.</span>left<span class="token punctuation">:</span>
                stack<span class="token punctuation">.</span>append<span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
        <span class="token keyword">return</span> result
    <span class="token comment"># 中序</span>
    <span class="token keyword">def</span> <span class="token function">inorderTraversal</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> root<span class="token punctuation">:</span> TreeNode<span class="token punctuation">)</span><span class="token punctuation">:</span>
        result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> root<span class="token punctuation">:</span>
            <span class="token keyword">return</span> result
        stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        cur <span class="token operator">=</span> root
        <span class="token keyword">while</span> cur <span class="token keyword">or</span> stack<span class="token punctuation">:</span>
            <span class="token keyword">if</span> cur<span class="token punctuation">:</span>
                stack<span class="token punctuation">.</span>append<span class="token punctuation">(</span>cur<span class="token punctuation">)</span>
                cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>left
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                cur <span class="token operator">=</span> stack<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token punctuation">)</span>
                result<span class="token punctuation">.</span>append<span class="token punctuation">(</span>cur<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
                cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>right
        <span class="token keyword">return</span> result
    <span class="token comment"># 后序</span>
    <span class="token keyword">def</span> <span class="token function">postorderTraversal</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> root<span class="token punctuation">:</span> TreeNode<span class="token punctuation">)</span><span class="token punctuation">:</span>
        result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> root<span class="token punctuation">:</span>
            <span class="token keyword">return</span> result
        stack <span class="token operator">=</span> <span class="token punctuation">[</span>root<span class="token punctuation">]</span>
        <span class="token keyword">while</span> stack<span class="token punctuation">:</span>
            node <span class="token operator">=</span> stack<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token punctuation">)</span>
            result<span class="token punctuation">.</span>append<span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
            <span class="token keyword">if</span> node<span class="token punctuation">.</span>left<span class="token punctuation">:</span>
                stack<span class="token punctuation">.</span>append<span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
            <span class="token keyword">if</span> node<span class="token punctuation">.</span>right<span class="token punctuation">:</span>
                stack<span class="token punctuation">.</span>append<span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
        <span class="token keyword">return</span> result<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br></div></div><h2 id="层序遍历" tabindex="-1"><a class="header-anchor" href="#层序遍历" aria-hidden="true">#</a> 层序遍历</h2>
<ul>
<li><a href="https://leetcode-cn.com/problems/binary-tree-level-order-traversal/" target="_blank" rel="noopener noreferrer">102. 二叉树的层序遍历<ExternalLinkIcon/></a></li>
<li><a href="https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/" target="_blank" rel="noopener noreferrer">107.二叉树的层次遍历II<ExternalLinkIcon/></a></li>
<li><a href="https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal/" target="_blank" rel="noopener noreferrer">429. N 叉树的层序遍历<ExternalLinkIcon/></a></li>
</ul>
</template>
