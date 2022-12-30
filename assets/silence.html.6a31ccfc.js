import{c as n}from"./app.897a2dcd.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";var a="/blogs/assets/alertmanager_ui_silence.552da0d2.png",e="/blogs/assets/omg_silence_ui.c9c886be.png";const p={},t=n('<h1 id="\u544A\u8B66\u7EF4\u62A4" tabindex="-1"><a class="header-anchor" href="#\u544A\u8B66\u7EF4\u62A4" aria-hidden="true">#</a> \u544A\u8B66\u7EF4\u62A4</h1><p>\u6E38\u620F\u4E1A\u52A1\u7ECF\u5E38\u4F1A\u6709\u7248\u672C\u66F4\u65B0\u4E4B\u7C7B\u7684\u64CD\u4F5C\uFF0C\u90A3\u4E48\u5F53\u4E1A\u52A1\u6B63\u5728\u7EF4\u62A4\u4E2D\uFF0C\u5B83\u6240\u6709\u7684\u544A\u8B66\u5E94\u8BE5\u6682\u505C\uFF0C\u5F53\u7EF4\u62A4\u671F\u7ED3\u675F\u4E4B\u540E\uFF0C\u518D\u6FC0\u6D3B\u544A\u8B66</p><p>\u8FD9\u79CD\u65F6\u5019Alertmanager\u7684silence\u7684\u89D2\u8272\u5C31\u8D77\u4F5C\u7528\u4E86</p><p>Alertmanager\u7684\u7EF4\u62A4\u6709\u4E24\u79CD\u65B9\u5F0F</p><h2 id="alertmanager\u7684ui\u9875\u9762\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#alertmanager\u7684ui\u9875\u9762\u64CD\u4F5C" aria-hidden="true">#</a> Alertmanager\u7684UI\u9875\u9762\u64CD\u4F5C</h2><p><img src="'+a+`" alt="UI\u64CD\u4F5C"></p><h2 id="\u901A\u8FC7alertmanager\u7684api\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7alertmanager\u7684api\u64CD\u4F5C" aria-hidden="true">#</a> \u901A\u8FC7Alertmanager\u7684API\u64CD\u4F5C</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> -X POST http://127.0.0.1:9093/api/v2/silences
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;matchers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">// \u7EF4\u62A4\u7B56\u7565\u6807\u7B7E\u5BF9</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;alertname&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;InstanceDown&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;isRegex&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u662F\u5426\u6B63\u5219</span>
            <span class="token property">&quot;isEqual&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// \u662F\u5426\u76F8\u7B49</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;startsAt&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022-09-21T06:33:05.064Z&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;endsAt&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022-09-21T08:33:05.064Z&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;createdBy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;kongzz&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;comment&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6D4B\u8BD5\u7EF4\u62A4&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="\u66F4\u65B0alertmanager\u7684silence" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0alertmanager\u7684silence" aria-hidden="true">#</a> \u66F4\u65B0Alertmanager\u7684Silence</h2><p>\u5F53\u4E1A\u52A1\u9884\u5B9A\u8BF4\u662F\u7EF4\u62A4\u4E24\u4E2A\u5C0F\u65F6(\u6BD4\u5982)\uFF0C\u603B\u5F52\u662F\u6709\u610F\u5916\u7684\u60C5\u51B5\u51FA\u73B0\u7684\uFF0C\u9700\u8981\u5EF6\u957F\u7EF4\u62A4</p><p>\u8FD9\u79CD\u65F6\u5019\uFF0C\u8981\u4E48\u662F\u89E3\u9664\u4E4B\u524D\u7684\u7EF4\u62A4\u7B56\u7565\uFF0C\u8981\u4E48\u662F\u66F4\u65B0\u4E4B\u524D\u7684\u7EF4\u62A4\u7B56\u7565</p><p>\u4E5F\u5C31\u662F\u8981\u4E48expire\u4E4B\u524D\u7684\u7EF4\u62A4\u7B56\u7565\uFF0C\u8981\u4E48\u662Fupdate\u4E4B\u524D\u7684\u7EF4\u62A4\u7B56\u7565</p><blockquote><p>\u901A\u8FC7Alertmanager\u7684UI\u9875\u9762\u64CD\u4F5C\u66F4\u65B0\u5F88\u7B80\u5355\uFF0C\u76F4\u63A5\u4FEE\u6539duration\u5C31\u597D\u4E86</p></blockquote><p>\u4E0B\u9762\u6211\u4EEC\u8981\u8BF4\u7684\u662F\u901A\u8FC7API\u65B9\u5F0F\u6765\u66F4\u65B0\uFF0C\u8FD9\u91CC\u9762\u6709\u4E2A\u5C0F\u5751</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> -X POST http://127.0.0.1:9093/api/v2/silences/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;matchers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;alertname&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u76EE\u6807\u5931\u8054&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;isRegex&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token property">&quot;isEqual&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;startsAt&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022-09-21T06:45:23.147Z&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u8FD9\u4E2A\u5F00\u59CB\u65F6\u95F4\u662F\u4E0D\u80FD\u4FEE\u6539\u7684\uFF0C\u5982\u679C\u4FEE\u6539\uFF0C\u5C06\u4F1A\u751F\u6210\u4E00\u4E2A\u65B0\u7684SilenceID</span>
    <span class="token property">&quot;endsAt&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022-09-21T08:33:05.064Z&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u9700\u8981\u66F4\u65B0\u7684\u662F\u8FD9\u4E2A\u7ED3\u675F\u65F6\u95F4</span>
    <span class="token property">&quot;createdBy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;kongzz&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;comment&quot;</span><span class="token operator">:</span> <span class="token string">&quot;asdddd&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;d150e5a0-1753-49ec-b16d-ed9707e9e132&quot;</span> <span class="token comment">// \u5F53\u524D\u9700\u8981\u4FEE\u6539\u7684\u7EF4\u62A4\u7B56\u7565\u7684SilenceID</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="\u89E3\u9664\u7EF4\u62A4" tabindex="-1"><a class="header-anchor" href="#\u89E3\u9664\u7EF4\u62A4" aria-hidden="true">#</a> \u89E3\u9664\u7EF4\u62A4</h2><p>\u89E3\u9664\u7EF4\u62A4\u6709\u4E24\u79CD\u65B9\u5F0F\uFF0C\u8981\u4E48\u662F\u901A\u8FC7API\u6765\u64CD\u4F5C\uFF0C\u8981\u4E48\u662F\u901A\u8FC7Alertmanager\u7684UI\u6765expire\u64CD\u4F5C</p><p>\u5F53\u7136\uFF0C\u7EF4\u62A4\u65F6\u95F4\u5230\u671F\u4E5F\u4F1A\u81EA\u52A8\u89E3\u9664</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> -X DELETE http://127.0.0.1:9093/api/v2/silence/d150e5a0-1753-49ec-b16d-ed9707e9e132
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u6211\u4EEC\u81EA\u7814\u7684ui\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u6211\u4EEC\u81EA\u7814\u7684ui\u64CD\u4F5C" aria-hidden="true">#</a> \u6211\u4EEC\u81EA\u7814\u7684UI\u64CD\u4F5C</h2><p><img src="`+e+'" alt="\u81EA\u7814\u7EF4\u62A4"></p>',23);function o(r,l){return t}var i=s(p,[["render",o]]);export{i as default};
