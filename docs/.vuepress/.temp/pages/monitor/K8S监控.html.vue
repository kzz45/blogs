<template><h1 id="kubernetes监控" tabindex="-1"><a class="header-anchor" href="#kubernetes监控" aria-hidden="true">#</a> kubernetes监控</h1>
<blockquote>
<p>在<RouterLink to="/monitor/%E7%9B%91%E6%8E%A7%E6%A6%82%E8%BF%B0.html">游戏运维监控</RouterLink>中我们说到了需要监控的对象，那么在游戏运行环境中，肯定会有平台类的业务，这些业务目前大都运行在K8S集群里边，所以针对K8S的监控就显得必不可少</p>
</blockquote>
<h2 id="k8s要监控什么" tabindex="-1"><a class="header-anchor" href="#k8s要监控什么" aria-hidden="true">#</a> K8S要监控什么</h2>
<ul>
<li>集群的监控</li>
</ul>
<blockquote>
<p>集群资源的使用情况，使用的够充分吗？还剩多少资源可用？</p>
</blockquote>
<blockquote>
<p>是否有足够的节点资源可以用于应用程度？多久会耗尽？</p>
</blockquote>
<ul>
<li>deployment，pod的监控</li>
</ul>
<blockquote>
<p>pod是否正常创建并运行？pod的请求和限制资源情况？</p>
</blockquote>
<ul>
<li>应用程序的监控</li>
</ul>
<blockquote>
<p>应用程序是否正常运行并响应？应用程序自身的监控指标？</p>
</blockquote>
<h2 id="部署" tabindex="-1"><a class="header-anchor" href="#部署" aria-hidden="true">#</a> 部署</h2>
<blockquote>
<p>这里我们选择kube-prometheus，默认安装之后，所有的组件都会安装上，但是里边的alertmanger和grafana我们其实是不需要的，这个可以根据情况不安装或者安装之后卸载删除掉。</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/prometheus-operator/kube-prometheus.git
<span class="token builtin class-name">cd</span> kube-prometheus/manifests
kubectl apply -f <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span> ~<span class="token punctuation">]</span><span class="token comment"># kubectl -n monitoring get statefulset</span>
NAME                READY   AGE
alertmanager-main   <span class="token number">3</span>/3     13d <span class="token comment"># 这个可以自行删除掉</span>
prometheus-k8s      <span class="token number">2</span>/2     13d
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="kube-prometheus的四种资源" tabindex="-1"><a class="header-anchor" href="#kube-prometheus的四种资源" aria-hidden="true">#</a> kube-prometheus的四种资源</h2>
<blockquote>
<p>在正式环境中，其实我们只需要Prometheus和ServiceMonitor资源，然后通过联邦的方式将数据读取到统一的prometheus源中</p>
</blockquote>
<ul>
<li>Prometheus</li>
</ul>
<blockquote>
<p>这个资源类型，用来管理Prometheus Server的StatefulSets资源</p>
</blockquote>
<ul>
<li>ServiceMonitor</li>
</ul>
<blockquote>
<p>就是我们需要监控的动态服务，通过获取到service的label标签绑定到指定的service，然后获取对应的endpoint资源的metrics路由，进而可以获取pod中的监控数据。Operator会实时的watch servicemonitor资源的变化，自动更新/etc/prometheus/config_out/prometheus.env.yaml配置文件，并对prometheus-server进行reload操作。</p>
</blockquote>
<ul>
<li>Alertmanager</li>
</ul>
<blockquote>
<p>该 CRD 定义了在 Kubernetes 集群中运行的 Alertmanager 的配置，同样提供了多种配置，包括持久化存储。对于每个 Alertmanager 资源，Operator 都会在相同的命名空间中部署一个对应配置的 StatefulSet，Alertmanager Pods 被配置为包含一个名为  的 Secret，该 Secret 以 alertmanager.yaml 为 key 的方式保存使用的配置文件</p>
</blockquote>
<ul>
<li>PrometheusRule</li>
</ul>
<blockquote>
<p>该CRD定义了我们需要监控告警的规则，有非常重要的一个属性 ruleSelector，用来匹配 rule 规则的过滤器，要求匹配具有 prometheus=k8s 和 role=alert-rules 标签的 PrometheusRule 资源对象。（其实就是把创建的prometheusrule资源聚合到prometheus-k8s-rulefiles-0这个configmap里面，然后挂载到prometheus-server的/etc/prometheus/rules/prometheus-k8s-rulefiles-0/这个路径下面）</p>
</blockquote>
<h2 id="联邦配置" tabindex="-1"><a class="header-anchor" href="#联邦配置" aria-hidden="true">#</a> 联邦配置</h2>
<blockquote>
<p>由于我们的K8S集群是在阿里云上的，配置联邦直接在阿里云K8S集群里，新建svc资源即可，如图</p>
</blockquote>
<p><img src="@source/monitor/aliyun-prometheus-federate.png" alt=""></p>
<p>配置结果如下图，这样我们就可以通过新建的IP去访问K8S集群内部监控了</p>
<p><img src="@source/monitor/aliyun-prometheus-slb.png" alt=""></p>
<h2 id="prometheus配置" tabindex="-1"><a class="header-anchor" href="#prometheus配置" aria-hidden="true">#</a> Prometheus配置</h2>
<blockquote>
<p>接下来我们就可以在我们自己的Prometheus中联邦上面新建的Prometheus</p>
</blockquote>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">global</span><span class="token punctuation">:</span>
  <span class="token key atrule">scrape_interval</span><span class="token punctuation">:</span> 1m
  <span class="token key atrule">scrape_timeout</span><span class="token punctuation">:</span> 50s
  <span class="token key atrule">evaluation_interval</span><span class="token punctuation">:</span> 1m
<span class="token key atrule">alerting</span><span class="token punctuation">:</span>
  <span class="token key atrule">alertmanagers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">follow_redirects</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">scheme</span><span class="token punctuation">:</span> http
    <span class="token key atrule">timeout</span><span class="token punctuation">:</span> 10s
    <span class="token key atrule">api_version</span><span class="token punctuation">:</span> v2
    <span class="token key atrule">static_configs</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">targets</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> alertmanager<span class="token punctuation">:</span><span class="token number">9093</span>
<span class="token key atrule">rule_files</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> alert_rules.yml
<span class="token key atrule">scrape_configs</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">job_name</span><span class="token punctuation">:</span> K8S集群任务
  <span class="token key atrule">honor_timestamps</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">params</span><span class="token punctuation">:</span>
    match<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token string">'{job=~".*"}'</span>
  <span class="token key atrule">scrape_interval</span><span class="token punctuation">:</span> 1m
  <span class="token key atrule">scrape_timeout</span><span class="token punctuation">:</span> 50s
  <span class="token key atrule">metrics_path</span><span class="token punctuation">:</span> /federate
  <span class="token key atrule">scheme</span><span class="token punctuation">:</span> http
  <span class="token key atrule">static_configs</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">targets</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">'新建的svc地址'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>至此，我们的K8S集群基础监控就已经接入完成了，效果如图</p>
<p><img src="@source/monitor/k8s-dashboard.png" alt=""></p>
<h2 id="业务的监控" tabindex="-1"><a class="header-anchor" href="#业务的监控" aria-hidden="true">#</a> 业务的监控</h2>
<blockquote>
<p>上面的监控接入部分只是集群的基础监控信息，我们当然还有业务需要监控。业务具体的业务监控信息由业务方开发，只需要对外可以访问metrics信息就行。运维需要做的就是新建一个svc指向业务方的pod，再新建一个servicemonitor指向新建的svc。这样，Prometheus就能自动发现新建的servicemonitor(对应于Prometheus中的服务发现)。</p>
</blockquote>
<h3 id="servicemonitor模板" tabindex="-1"><a class="header-anchor" href="#servicemonitor模板" aria-hidden="true">#</a> ServiceMonitor模板</h3>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> monitoring.coreos.com/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ServiceMonitor
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> project<span class="token punctuation">-</span><span class="token number">001</span> <span class="token comment"># 唯一名称，这个名称会出现在prometheus server中的targets中(服务发现)</span>
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> monitoring <span class="token comment"># 命名空间，也就是你的servicemonitor所在的命名空间</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">pooject</span><span class="token punctuation">:</span> <span class="token number">001</span> <span class="token comment"># 这里的标签是你怎么找到service的标签</span>
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">endpoints</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">interval</span><span class="token punctuation">:</span> 60s
    <span class="token key atrule">scrapeTimeout</span><span class="token punctuation">:</span> 50s
    <span class="token key atrule">port</span><span class="token punctuation">:</span> project<span class="token punctuation">-</span><span class="token number">001</span> <span class="token comment"># service中对应的port的name字段的值</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> /metrics  <span class="token comment"># metrics信息的读取path地址，当然可以其他的path</span>
  <span class="token key atrule">namespaceSelector</span><span class="token punctuation">:</span>
    <span class="token key atrule">any</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token comment">#  project-0001的命名空间，这里其实偷懒的方式，是去所有的命名空间下找</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">project</span><span class="token punctuation">:</span> project<span class="token punctuation">-</span><span class="token number">001</span> <span class="token comment"># 定位目标service</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><ul>
<li>可能出现的问题1(就是没有权限)</li>
</ul>
<blockquote>
<p>在配置完servicemonitor之后，可能会发现Prometheus的targets中看不到刚刚创建的servicemonitor，这个时候可以查看下日志，基本就是没有权限的错误信息。</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>kubectl logs prometheus-k8s-1 -n monitoring
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="@source/monitor/prometheus-monitor-log.png" alt=""></p>
<p>修改ClusterRole</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>kubectl edit clusterrole prometheus-k8s -n monitoring
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="@source/monitor/prometheus-monitor-change.png" alt=""></p>
<p>至此，我们的自定义业务的监控信息也就能够读取到了</p>
<ul>
<li><a href="https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/troubleshooting.md#troubleshooting-servicemonitor-changes" target="_blank" rel="noopener noreferrer">prometheus servicemonitor not working<ExternalLinkIcon/></a></li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>kubectl create clusterrolebinding kube-state-metrics-admin-binding <span class="token punctuation">\</span>
--clusterrole<span class="token operator">=</span>cluster-admin  <span class="token punctuation">\</span>
--user<span class="token operator">=</span>system:serviceaccount:monitoring:kube-state-metrics
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></template>
