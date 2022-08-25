<template><h1 id="prometheus-rate函数" tabindex="-1"><a class="header-anchor" href="#prometheus-rate函数" aria-hidden="true">#</a> Prometheus rate函数</h1>
<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2>
<blockquote>
<p>由于我们监控体系是Prometheus+Grafana来做的，研发在配置Grafana大盘的时候，问到他的一个业务监控指标使用rate之后，Grafana显示No Data</p>
</blockquote>
<ol>
<li>Prometheus抓取周期，我服务端配置的抓取周期是60s也就是1m抓取一次指标</li>
<li>研发使用的rate函数，具体为rate(xxx_xxx{yy=&quot;zz&quot;} [1m])</li>
</ol>
<h2 id="粗糙解释" tabindex="-1"><a class="header-anchor" href="#粗糙解释" aria-hidden="true">#</a> 粗糙解释</h2>
<ol>
<li>由于抓取周期定义的是1分钟抓取一次</li>
<li>由于rate函数的使用方法为：$interval时间窗口下至少有两个指标才能输出</li>
<li>所以$interval至少是大于1分钟的</li>
</ol>
<h2 id="rate" tabindex="-1"><a class="header-anchor" href="#rate" aria-hidden="true">#</a> rate</h2>
<blockquote>
<p>rate的翻译应该为平均每秒增加了多少</p>
</blockquote>
<p><a href="https://github.com/prometheus/prometheus/blob/main/promql/functions.go#L139" target="_blank" rel="noopener noreferrer">源码地址<ExternalLinkIcon/></a></p>
<ol>
<li>可以看出，rate只能在counter的metrics类型上进行计算</li>
<li>样本数量至少是2个，len(samples.Points) &lt; 2</li>
<li>最终值为：结果除以时间的秒数</li>
</ol>
<p>10分钟内的样本</p>
<p><img src="@source/monitor/promql_rate.png" alt=""></p>
<p>rate算法是resultValue = resultValue / ms.Range.Seconds()</p>
<p><img src="@source/monitor/resultValue.png" alt=""></p>
<h2 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档" aria-hidden="true">#</a> 参考文档</h2>
<p><a href="https://mp.weixin.qq.com/s/7z8n3abX9k39YL5kCopJqQ" target="_blank" rel="noopener noreferrer">PromQL 查询之 rate 函数的使用<ExternalLinkIcon/></a>
<a href="https://www.metricfire.com/blog/understanding-the-prometheus-rate-function/" target="_blank" rel="noopener noreferrer">Understanding the Prometheus rate() function<ExternalLinkIcon/></a></p>
</template>
