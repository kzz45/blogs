import{c as n}from"./app.897a2dcd.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="alertmanager\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#alertmanager\u914D\u7F6E" aria-hidden="true">#</a> Alertmanager\u914D\u7F6E</h1><h2 id="alertmanager\u7684\u4E09\u4E2A\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#alertmanager\u7684\u4E09\u4E2A\u6982\u5FF5" aria-hidden="true">#</a> Alertmanager\u7684\u4E09\u4E2A\u6982\u5FF5</h2><h3 id="group\u5206\u7EC4" tabindex="-1"><a class="header-anchor" href="#group\u5206\u7EC4" aria-hidden="true">#</a> Group\u5206\u7EC4</h3><p>Alertmanager\u4F1A\u628A\u540C\u7C7B\u578B\u7684\u544A\u8B66\u8FDB\u884C\u5206\u7EC4\uFF0C\u5408\u5E76\u5230\u4E00\u6761\u544A\u8B66\u4FE1\u606F\u4E2D</p><p>\u5982\uFF1A\u591A\u4E2A\u673A\u5668\u5B9E\u4F8Bdown\u6389\u7684\u8BDD\uFF0C\u6B63\u5E38\u53EF\u80FD\u4F1A\u6709\u5F88\u591A\u4E2A\u540C\u7C7B\u578B\u7684\u544A\u8B66\uFF0C\u4F5C\u4E3A\u8FD0\u7EF4\u6765\u8BB2\uFF0C\u544A\u8B66\u66F4\u5173\u5FC3\u7684\u662F\u4E00\u4E2A\u544A\u8B66\u4FE1\u606F\u4E2D\u7684\u54EA\u4E9B\u5B9E\u4F8B\u4F1A\u53D7\u5230\u5F71\u54CD\uFF0C \u800C\u4E0D\u662F\u4E00\u5768\u544A\u8B66\u6765\u4E86\u4E4B\u540E\uFF0C\u53D1\u73B0\u90FD\u662F\u540C\u4E00\u4E2A\u539F\u56E0\u5BFC\u81F4\u7684\u6545\u969C\u3002</p><h3 id="silence\u9759\u9ED8" tabindex="-1"><a class="header-anchor" href="#silence\u9759\u9ED8" aria-hidden="true">#</a> Silence\u9759\u9ED8</h3><p>\u9759\u9ED8\u5F88\u597D\u7406\u89E3\uFF0C\u7B80\u5355\u6765\u8BF4\u5C31\u662F\u544A\u8B66\u7EF4\u62A4</p><p>\u53EF\u4EE5\u6839\u636E\u6807\u7B7E\u6765\u5339\u914D\u5BF9\u5E94\u7684\u544A\u8B66\u6761\u76EE\uFF0C\u6765\u8FDB\u884C\u6682\u65F6\u7684\u7EF4\u62A4\uFF0C\u5728\u6B64\u671F\u95F4Alertmanager\u4E0D\u4F1A\u53D1\u9001\u544A\u8B66\u4FE1\u606F</p><h3 id="inhibition\u6291\u5236" tabindex="-1"><a class="header-anchor" href="#inhibition\u6291\u5236" aria-hidden="true">#</a> Inhibition\u6291\u5236</h3><p>\u7B80\u5355\u6765\u8BF4\u5C31\u662F\u4E00\u4E2A\u544A\u8B66\u5DF2\u7ECF\u53D1\u9001\u4E86\uFF0C\u90A3\u4E48\u7531\u6B64\u544A\u8B66\u6545\u969C\u5F15\u53D1\u7684\u5176\u4ED6\u7684\u544A\u8B66\u5C31\u4E0D\u8981\u518D\u53D1\u9001\u4E86</p><p>\u5982\uFF1A\u4E00\u4E2A\u673A\u5668\u5B9E\u4F8Bdown\u6389\u4E86\u5E76\u53D1\u9001\u4E86\u544A\u8B66\uFF0C\u90A3\u4E48\u5728\u6B64\u673A\u5668\u4E0A\u7684\u5176\u4ED6\u4E1A\u52A1\u544A\u8B66\u5C31\u4E0D\u8981\u53D1\u9001\u4E86</p><h2 id="alertmanager\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#alertmanager\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> Alertmanager\u914D\u7F6E\u6587\u4EF6</h2><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment">## Alertmanager \u914D\u7F6E\u6587\u4EF6</span>
<span class="token key atrule">global</span><span class="token punctuation">:</span>
  <span class="token key atrule">resolve_timeout</span><span class="token punctuation">:</span> 5m
<span class="token comment"># \u8DEF\u7531\u5206\u7EC4</span>
<span class="token key atrule">route</span><span class="token punctuation">:</span>
  <span class="token key atrule">receiver</span><span class="token punctuation">:</span> <span class="token string">&quot;\u516C\u5171&quot;</span> <span class="token comment"># \u9ED8\u8BA4\u7684\u63A5\u6536\u5668\u540D\u79F0, \u4E5F\u5C31\u662F\u8DEF\u7531\u5339\u914D\u4E0D\u5230\u7684\u60C5\u51B5\u4E0B, \u6700\u7EC8\u53D1\u9001\u7ED9\u8FD9\u4E2A\u63A5\u6536\u5668</span>
  <span class="token key atrule">group_by</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;alertname&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;level&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;_product_id&quot;</span><span class="token punctuation">]</span> <span class="token comment"># \u62A5\u8B66\u5206\u7EC4</span>
  <span class="token key atrule">group_wait</span><span class="token punctuation">:</span> 60s <span class="token comment"># \u5206\u7EC4\u7B49\u5F85\u65F6\u95F4\uFF0C\u5982\u679C\u5728\u6B64\u65F6\u95F4\u5185\uFF0C\u51FA\u73B0\u76F8\u540C\u62A5\u8B66\uFF0C\u5C31\u5728\u540C\u4E00\u4E2A\u7EC4\u5185\u51FA\u73B0</span>
  <span class="token key atrule">group_interval</span><span class="token punctuation">:</span> 60s <span class="token comment"># \u5206\u7EC4\u5185\u6CA1\u6709\u53D8\u5316\uFF0C\u5219\u5728\u6B64\u65F6\u95F4\u4E4B\u540E\uFF0C\u5C06\u5206\u7EC4\u5185\u7684\u544A\u8B66\u5408\u5E76\u4E3A\u4E00\u6761\u544A\u8B66\u4FE1\u606F\u53D1\u9001</span>
  <span class="token key atrule">repeat_interval</span><span class="token punctuation">:</span> 1h <span class="token comment"># \u5982\u679C\u544A\u8B66\u6CA1\u6709\u6062\u590D\uFF0C\u5219\u5728\u6B64\u65F6\u95F4\u540E\u91CD\u65B0\u53D1\u9001</span>
  <span class="token key atrule">routes</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">receiver</span><span class="token punctuation">:</span> <span class="token string">&quot;\u8FD0\u7EF4&quot;</span>
      <span class="token key atrule">group_by</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;alertname&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;level&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;_product_id&quot;</span><span class="token punctuation">]</span>
      <span class="token key atrule">group_wait</span><span class="token punctuation">:</span> 60s
      <span class="token key atrule">group_interval</span><span class="token punctuation">:</span> 60s
      <span class="token key atrule">repeat_interval</span><span class="token punctuation">:</span> 3600s
      <span class="token key atrule">continue</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># \u544A\u8B66\u8FDB\u5165\u8DEF\u7531\u4E4B\u540E\u4F1A\u8FDB\u884C\u5339\u914D\uFF0C\u5982\u679C\u914D\u7F6E\u4E3Atrue\uFF0C\u5219\u4F1A\u7EE7\u7EED\u5339\u914D\uFF0C\u5982\u679C\u4E3Afalse\uFF0C\u5C31\u5339\u914D\u5230\u6B64\u5C31\u505C\u6B62</span>
      <span class="token key atrule">match_re</span><span class="token punctuation">:</span> <span class="token comment"># \u6B63\u5219\u5339\u914D</span>
        <span class="token key atrule">alertname</span><span class="token punctuation">:</span> <span class="token string">&quot;^\u673A\u5668\u5B95\u673A|\u7F51\u7EDC\u6545\u969C&quot;</span>

    <span class="token punctuation">-</span> <span class="token key atrule">receiver</span><span class="token punctuation">:</span> <span class="token string">&quot;\u8FD0\u7EF4\u5F00\u53D1&quot;</span>
      <span class="token key atrule">group_by</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;alertname&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;level&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;_product_id&quot;</span><span class="token punctuation">]</span>
      <span class="token key atrule">group_wait</span><span class="token punctuation">:</span> 60s
      <span class="token key atrule">group_interval</span><span class="token punctuation">:</span> 60s
      <span class="token key atrule">repeat_interval</span><span class="token punctuation">:</span> 3600s
      <span class="token key atrule">continue</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">match</span><span class="token punctuation">:</span> <span class="token comment"># \u7CBE\u786E\u5339\u914D</span>
        <span class="token key atrule">_product_name</span><span class="token punctuation">:</span> <span class="token string">&quot;\u8FD0\u7EF4\u5F00\u53D1&quot;</span> <span class="token comment"># \u6807\u7B7E\u5339\u914D\u5230\u8FD0\u7EF4\u5F00\u53D1\u7684\u544A\u8B66\u53D1\u9001\u7ED9\u3010receiver: &quot;\u8FD0\u7EF4\u5F00\u53D1&quot;\u3011</span>

    <span class="token punctuation">-</span> <span class="token key atrule">receiver</span><span class="token punctuation">:</span> <span class="token string">&quot;\u5E73\u53F0\u4E2D\u5FC3&quot;</span>
      <span class="token key atrule">group_by</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;alertname&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;level&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;_product_id&quot;</span><span class="token punctuation">]</span>
      <span class="token key atrule">group_wait</span><span class="token punctuation">:</span> 60s
      <span class="token key atrule">group_interval</span><span class="token punctuation">:</span> 60s
      <span class="token key atrule">repeat_interval</span><span class="token punctuation">:</span> 3600s
      <span class="token key atrule">continue</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">match</span><span class="token punctuation">:</span> <span class="token comment"># \u7CBE\u786E\u5339\u914D</span>
        <span class="token key atrule">_product_name</span><span class="token punctuation">:</span> <span class="token string">&quot;\u5E73\u53F0\u4E2D\u5FC3&quot;</span> <span class="token comment"># \u6807\u7B7E\u5339\u914D\u5230\u5E73\u53F0\u4E2D\u5FC3\u7684\u544A\u8B66\u53D1\u9001\u7ED9\u3010receiver: &quot;\u5E73\u53F0\u4E2D\u5FC3&quot;\u3011</span>

<span class="token comment"># \u53D1\u9001\u544A\u8B66\u7684\u63A5\u6536\u5668</span>
<span class="token key atrule">receivers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> \u516C\u5171
    <span class="token key atrule">webhook_configs</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">url</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//127.0.0.1/alert <span class="token comment"># \u81EA\u5DF1\u5F00\u53D1\u4E00\u4E2Awebhook</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> \u8FD0\u7EF4
    <span class="token key atrule">webhook_configs</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">url</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//127.0.0.1/alert
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> \u8FD0\u7EF4\u5F00\u53D1
    <span class="token key atrule">webhook_configs</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">url</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//127.0.0.1/alert
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> \u5E73\u53F0\u4E2D\u5FC3
    <span class="token key atrule">webhook_configs</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">url</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//127.0.0.1/alert

<span class="token comment"># \u6291\u5236\u5668</span>
<span class="token key atrule">inhibit_rules</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">source_match</span><span class="token punctuation">:</span>
      <span class="token key atrule">severity</span><span class="token punctuation">:</span> <span class="token string">&quot;crit&quot;</span>
    <span class="token key atrule">target_match</span><span class="token punctuation">:</span>
      <span class="token key atrule">severity</span><span class="token punctuation">:</span> <span class="token string">&quot;warn&quot;</span>
    <span class="token key atrule">equal</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;alertname&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;level&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;_product_id&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br></div></div>`,13);function e(t,l){return p}var u=s(a,[["render",e]]);export{u as default};
