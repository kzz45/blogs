import{c as n}from"./app.897a2dcd.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u544A\u8B66\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u544A\u8B66\u4FE1\u606F" aria-hidden="true">#</a> \u544A\u8B66\u4FE1\u606F</h1><blockquote><p>\u6765\u770B\u4E0B\u544A\u8B66\u6D88\u606F\u4F53\u7ED3\u6784</p></blockquote><h2 id="\u7ED3\u6784\u4F53" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u6784\u4F53" aria-hidden="true">#</a> \u7ED3\u6784\u4F53</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">type</span> AlertMsg <span class="token keyword">struct</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="api-\u8BF7\u6C42\u67E5\u770B\u5F53\u524D\u544A\u8B66" tabindex="-1"><a class="header-anchor" href="#api-\u8BF7\u6C42\u67E5\u770B\u5F53\u524D\u544A\u8B66" aria-hidden="true">#</a> API \u8BF7\u6C42\u67E5\u770B\u5F53\u524D\u544A\u8B66</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> http://127.0.0.1:9093/api/v2/alerts
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;labels&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;alertname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;InstanceDown&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;instance&quot;</span><span class="token operator">:</span> <span class="token string">&quot;localhost:9090&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;job&quot;</span><span class="token operator">:</span> <span class="token string">&quot;prometheus&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;annotations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;localhost:9090 of job prometheus has been down for more than 5 minutes.&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;summary&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Instance localhost:9090 down&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;startsAt&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022-11-14T03:00:10.05Z&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;endsAt&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022-11-14T07:11:40.05Z&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;generatorURL&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost:9090/graph?g0.expr=up+%3D%3D+1&amp;g0.tab=1&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token string">&quot;active&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;silencedBy&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">&quot;inhibitedBy&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;receivers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;web.hook&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;fingerprint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;b263407b9809ae48&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div>`,7);function t(e,o){return p}var c=s(a,[["render",t]]);export{c as default};
