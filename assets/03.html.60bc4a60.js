import{c as n}from"./app.897a2dcd.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="go-make-\u548C-new-\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#go-make-\u548C-new-\u533A\u522B" aria-hidden="true">#</a> Go make \u548C new \u533A\u522B</h1><p>\u7B80\u5355\u6765\u8BF4\uFF0Cnew \u53EA\u662F\u5206\u914D\u4E86\u5185\u5B58\uFF0Cmake \u662F\u7528\u4E8E slice\uFF0Cmap\uFF0Cchannel \u7684\u521D\u59CB\u5316</p><p>\u4EE3\u7801\u8FC7\u7A0B\u4E2D\u5F88\u5C11\u9700\u8981\u4F7F\u7528 new\uFF0C\u57FA\u672C\u90FD\u662F\u7528\u7684 make</p><p>\u5728\u7528 string\u3001int \u7B49\u7C7B\u578B\uFF0C\u4F7F\u7528\u7684\u65F6\u5019\u90FD\u662F\u76F4\u63A5\u8D4B\u503C\u4F7F\u7528\u7684</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> s1 <span class="token operator">*</span><span class="token builtin">string</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span>
	s1 <span class="token operator">=</span> <span class="token function">new</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token comment">// \u5206\u914D\u5185\u5B58</span>
	<span class="token operator">*</span>s1 <span class="token operator">=</span> <span class="token string">&quot;s1&quot;</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">*</span>s1<span class="token punctuation">)</span>

	m1 <span class="token operator">:=</span> <span class="token function">new</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token comment">// \u5206\u914D\u5185\u5B58</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>m1<span class="token punctuation">)</span>

	m1 <span class="token operator">=</span> <span class="token operator">&amp;</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;m1&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;m1&quot;</span><span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>m1<span class="token punctuation">)</span>

	m2 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span>
	m2<span class="token punctuation">[</span><span class="token string">&quot;m1&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;m1&quot;</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>m2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>new(T) \u8FD4\u56DE\u7684\u662F T \u7684\u6307\u9488</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// The new built-in function allocates memory. The first argument is a type,</span>
<span class="token comment">// not a value, and the value returned is a pointer to a newly</span>
<span class="token comment">// allocated zero value of that type.</span>
<span class="token keyword">func</span> <span class="token function">new</span><span class="token punctuation">(</span>Type<span class="token punctuation">)</span> <span class="token operator">*</span>Type
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>make \u53EA\u80FD\u7528\u4E8E slice\uFF0Cmap\uFF0Cchannel</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// The make built-in function allocates and initializes an object of type</span>
<span class="token comment">// slice, map, or chan (only). Like new, the first argument is a type, not a</span>
<span class="token comment">// value. Unlike new, make&#39;s return type is the same as the type of its</span>
<span class="token comment">// argument, not a pointer to it. The specification of the result depends on</span>
<span class="token comment">// the type:</span>
<span class="token comment">//</span>
<span class="token comment">//	Slice: The size specifies the length. The capacity of the slice is</span>
<span class="token comment">//	equal to its length. A second integer argument may be provided to</span>
<span class="token comment">//	specify a different capacity; it must be no smaller than the</span>
<span class="token comment">//	length. For example, make([]int, 0, 10) allocates an underlying array</span>
<span class="token comment">//	of size 10 and returns a slice of length 0 and capacity 10 that is</span>
<span class="token comment">//	backed by this underlying array.</span>
<span class="token comment">//	Map: An empty map is allocated with enough space to hold the</span>
<span class="token comment">//	specified number of elements. The size may be omitted, in which case</span>
<span class="token comment">//	a small starting size is allocated.</span>
<span class="token comment">//	Channel: The channel&#39;s buffer is initialized with the specified</span>
<span class="token comment">//	buffer capacity. If zero, or the size is omitted, the channel is</span>
<span class="token comment">//	unbuffered.</span>
<span class="token keyword">func</span> <span class="token function">make</span><span class="token punctuation">(</span>t Type<span class="token punctuation">,</span> size <span class="token operator">...</span>IntegerType<span class="token punctuation">)</span> Type
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div>`,9);function p(t,o){return e}var i=s(a,[["render",p]]);export{i as default};
