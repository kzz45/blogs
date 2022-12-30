import{c as n}from"./app.897a2dcd.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="\u544A\u8B66\u901A\u77E5" tabindex="-1"><a class="header-anchor" href="#\u544A\u8B66\u901A\u77E5" aria-hidden="true">#</a> \u544A\u8B66\u901A\u77E5</h1><blockquote><p>\u7B80\u5355\u7684 webhook \u6D4B\u8BD5\uFF0C\u53EF\u4EE5\u770B\u770B\u544A\u8B66\u7684\u6D88\u606F\u957F\u5565\u6837</p></blockquote><h2 id="\u6D4B\u8BD5-webhook" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5-webhook" aria-hidden="true">#</a> \u6D4B\u8BD5 Webhook</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;encoding/json&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;log&quot;</span>
	<span class="token string">&quot;net/http&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> AlertMsg <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Receiver          <span class="token builtin">string</span>
	Status            <span class="token builtin">string</span>
	GroupLabels       <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span>
	CommonLabels      <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span>
	CommonAnnotations <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span>
	ExternalURL       <span class="token builtin">string</span>
	Alerts            <span class="token punctuation">[</span><span class="token punctuation">]</span>Alert
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Alert <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Status       <span class="token builtin">string</span>
	Labels       <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span>
	Annotations  <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span>
	StartsAt     time<span class="token punctuation">.</span>Time
	EndsAt       time<span class="token punctuation">.</span>Time
	GeneratorURL <span class="token builtin">string</span>
	Fingerprint  <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	http<span class="token punctuation">.</span><span class="token function">HandleFunc</span><span class="token punctuation">(</span><span class="token string">&quot;/alerts&quot;</span><span class="token punctuation">,</span> alertHandler<span class="token punctuation">)</span>
	log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span><span class="token string">&quot;0.0.0.0:5001&quot;</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">alertHandler</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	dec <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">NewDecoder</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span>Body<span class="token punctuation">)</span>
	<span class="token keyword">defer</span> r<span class="token punctuation">.</span>Body<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">var</span> m AlertMsg
	<span class="token keyword">if</span> err <span class="token operator">:=</span> dec<span class="token punctuation">.</span><span class="token function">Decode</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;decoding alert message error: %v&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	content<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">MarshalIndent</span><span class="token punctuation">(</span>m<span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;    &quot;</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div>`,4);function p(e,o){return t}var u=s(a,[["render",p]]);export{u as default};
