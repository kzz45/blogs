<template><h1 id="alertmanager告警系统" tabindex="-1"><a class="header-anchor" href="#alertmanager告警系统" aria-hidden="true">#</a> Alertmanager告警系统</h1>
<blockquote>
<p>在监控体系中，告警系统是比不可少的一块，也是复杂难搞的部分。比如你可能会有如下对话</p>
</blockquote>
<ul>
<li>这个又不是我负责的业务，为啥这个告警信息要发给我啊</li>
<li>这个告警信息能不能发给多个业务组的人员，他们也需要</li>
<li>你们这个监控系统，我收到的告警也太多了吧，没法儿看</li>
<li>这个告警的阈值可不可以让我来配置，现在的是统一的吗</li>
<li>我想收到同样的告警3次之后，才让客服给我打电话处理</li>
<li>我想在告警信息里点击一下，快速给这个告警进行短时维护</li>
<li>等等其他的声音</li>
</ul>
<blockquote>
<p>由此，我们需要的告警系统至少要满足以下条件</p>
</blockquote>
<ul>
<li>不同的告警要发给不同的人或者人员分组</li>
<li>同样的告警可能需要发给不同的人或者人员分组</li>
<li>告警收到的频次可能需要业务方自定义调整</li>
<li>不能让用户一下子收到成百上千条告警信息</li>
<li>收到告警信息的渠道可能会多个，如微信、钉钉、飞书、手机短信等</li>
<li>不同等级的告警信息可能需要通知到不同的渠道</li>
<li>等我想一下其他的条件</li>
</ul>
<blockquote>
<p>由此，我们引来了我们自建监控系统中的告警组件-Alertmanager。</p>
</blockquote>
<h2 id="一条正常的告警规则" tabindex="-1"><a class="header-anchor" href="#一条正常的告警规则" aria-hidden="true">#</a> 一条正常的告警规则</h2>
<blockquote>
<p>这条告警规则的意思是：如果目标失联持续时间是2分钟，就产生告警。这里最重要的是for，这个参数就是用来降噪的，比如网络有波动，那么你的目标就会有瞬间的失联存在。</p>
</blockquote>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">groups</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> GlobalAlertRules <span class="token comment"># 告警规则组的名称</span>
    <span class="token key atrule">rules</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">alert</span><span class="token punctuation">:</span> 目标失联 <span class="token comment"># 告警规则名称</span>
        <span class="token key atrule">expr</span><span class="token punctuation">:</span> up<span class="token punctuation">{</span><span class="token punctuation">}</span> == 0 <span class="token comment"># PromQL的表达式，计算是否满足触发条件</span>
        <span class="token key atrule">for</span><span class="token punctuation">:</span> 2m <span class="token comment"># 满足触发条件，持续时间</span>
        <span class="token key atrule">labels</span><span class="token punctuation">:</span> <span class="token comment"># 自定义标签</span>
          <span class="token key atrule">level</span><span class="token punctuation">:</span> crit
        <span class="token key atrule">annotations</span><span class="token punctuation">:</span> <span class="token comment"># 告警的描述信息</span>
          <span class="token key atrule">description</span><span class="token punctuation">:</span> 目标失联
          <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> $value <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">summary</span><span class="token punctuation">:</span> 目标 <span class="token punctuation">{</span><span class="token punctuation">{</span> $labels.job <span class="token punctuation">}</span><span class="token punctuation">}</span> 失联
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="检查告警规则格式是否正确" tabindex="-1"><a class="header-anchor" href="#检查告警规则格式是否正确" aria-hidden="true">#</a> 检查告警规则格式是否正确</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>./bin/promtool check rules conf/global_rules.yml

Checking conf/global_rules.yml
  SUCCESS: <span class="token number">1</span> rules found
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="一条告警走的路" tabindex="-1"><a class="header-anchor" href="#一条告警走的路" aria-hidden="true">#</a> 一条告警走的路</h2>
<p><img src="@source/monitor/alertmanager_notification.png" alt="告警走的路"></p>
<h2 id="告警的三种状态" tabindex="-1"><a class="header-anchor" href="#告警的三种状态" aria-hidden="true">#</a> 告警的三种状态</h2>
<blockquote>
<p>一条告警的触发，首先的状态是Pending，然后再转换为Firing，这里会有For周期才会触发告警条件。如果没有配置for时间条件，则会直接从Inactive转到Firing状态。</p>
</blockquote>
<table>
<thead>
<tr>
<th>状态</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>Inactive</td>
<td>正常状态，未触发告警</td>
</tr>
<tr>
<td>Pending</td>
<td>即将触发告警，但还未满足发送时间条件，就是规则中for的时间条件</td>
</tr>
<tr>
<td>Firing</td>
<td>触发告警，已经满足发送时间条件，就是规则中for的时间条件</td>
</tr>
</tbody>
</table>
<h2 id="关于告警时间的参数" tabindex="-1"><a class="header-anchor" href="#关于告警时间的参数" aria-hidden="true">#</a> 关于告警时间的参数</h2>
<blockquote>
<p>关于告警时间的参数官方有个<a href="https://github.com/prometheus/alertmanager/issues/2647" target="_blank" rel="noopener noreferrer">issue<ExternalLinkIcon/></a>可以参考。</p>
</blockquote>
<table>
<thead>
<tr>
<th>参数</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>group_wait</td>
<td>Alertmanager在收到一条新的告警时，在将这条告警发送给receiver之前需要等待的时间</td>
</tr>
<tr>
<td>group_interval</td>
<td>对于一条已经出现过的告警，Alertmanager会每个多久再检查一次</td>
</tr>
<tr>
<td>repeat_interval</td>
<td>对于一条已经出现过的告警，Alertmanager会多久重新发送给receiver</td>
</tr>
</tbody>
</table>
<h2 id="告警的路由" tabindex="-1"><a class="header-anchor" href="#告警的路由" aria-hidden="true">#</a> 告警的路由</h2>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">route</span><span class="token punctuation">:</span>
  <span class="token key atrule">group_by</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"alertname"</span><span class="token punctuation">,</span> <span class="token string">"level"</span><span class="token punctuation">,</span> <span class="token string">"_product_id"</span><span class="token punctuation">]</span>
  <span class="token key atrule">receiver</span><span class="token punctuation">:</span> <span class="token number">-1</span> <span class="token comment"># 没有匹配到的都发送给默认路由</span>
  <span class="token key atrule">routes</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">receiver</span><span class="token punctuation">:</span> <span class="token number">4</span>
      <span class="token key atrule">continue</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">group_wait</span><span class="token punctuation">:</span> 60s
      <span class="token key atrule">group_interval</span><span class="token punctuation">:</span> 60s
      <span class="token key atrule">repeat_interval</span><span class="token punctuation">:</span> 600s
      <span class="token key atrule">match_re</span><span class="token punctuation">:</span>
        <span class="token key atrule">_product_id</span><span class="token punctuation">:</span> <span class="token number">1</span> <span class="token comment"># 所有_product_id=1的告警都发送给 receiver=4这个接收组</span>
    <span class="token punctuation">-</span> <span class="token key atrule">receiver</span><span class="token punctuation">:</span> <span class="token number">7</span>
      <span class="token key atrule">continue</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">group_wait</span><span class="token punctuation">:</span> 60s
      <span class="token key atrule">group_interval</span><span class="token punctuation">:</span> 60s
      <span class="token key atrule">repeat_interval</span><span class="token punctuation">:</span> 600s
      <span class="token key atrule">match_re</span><span class="token punctuation">:</span>
        <span class="token key atrule">_product_id</span><span class="token punctuation">:</span> <span class="token number">2</span> <span class="token comment"># 所有_product_id=2的告警都发送给 receiver=7这个接收组</span>
        
<span class="token key atrule">receivers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token number">-1</span>
    <span class="token key atrule">webhook_configs</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">url</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//127.0.0.1<span class="token punctuation">:</span>5454/api/v1/notice/
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token number">7</span>
    <span class="token key atrule">webhook_configs</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">url</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//127.0.0.1<span class="token punctuation">:</span>5454/api/v1/notice/
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token number">4</span>
    <span class="token key atrule">webhook_configs</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">url</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//127.0.0.1<span class="token punctuation">:</span>5454/api/v1/notice/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div></template>
