<template><h1 id="prometheus监控配置kubernetes-sd-config" tabindex="-1"><a class="header-anchor" href="#prometheus监控配置kubernetes-sd-config" aria-hidden="true">#</a> Prometheus监控配置kubernetes_sd_config</h1>
<blockquote>
<p>研发说在pod里已经配置了如下的annotation, 但是在Prometheus中查询不到metrics指标</p>
</blockquote>
<ul>
<li>prometheus.io/path: /metrics</li>
<li>prometheus.io/port: 1234</li>
<li>prometheus.io/scrape: true</li>
</ul>
<h2 id="更新配置" tabindex="-1"><a class="header-anchor" href="#更新配置" aria-hidden="true">#</a> 更新配置</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 1. 解压文件</span>
kubectl get secret prometheus-k8s -n monitoring -o json <span class="token operator">|</span> jq -r <span class="token string">'.data. "prometheus.yaml.gz"'</span><span class="token operator">|</span> base64 -d <span class="token operator">|</span> <span class="token function">gzip</span> -d <span class="token operator">></span> old.yaml
<span class="token comment"># 2. 发现Job: kubernetes-pods中 没有配置 **__meta_kubernetes_pod_annotation_prometheus_io_scrape** 相关配置</span>
<span class="token comment"># 3. 修改old.yaml中关于kubernetes-pods的监控任务(Job)</span>
<span class="token comment"># 4. 编辑更新secret</span>
kubectl -n monitoring edit secrets prometheus-k8s
<span class="token comment"># 4. 最后发现不生效</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><blockquote>
<p>说明Prometheus的配置是自动生成的手动修改无效</p>
</blockquote>
<h2 id="查询prometheus的配置" tabindex="-1"><a class="header-anchor" href="#查询prometheus的配置" aria-hidden="true">#</a> 查询Prometheus的配置</h2>
<blockquote>
<p>kubectl -n monitoring get prometheus k8s -o yaml</p>
<p>发现Prometheus的配置如下</p>
<p>没有关于<a href="https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/additional-scrape-config.md" target="_blank" rel="noopener noreferrer">Additional Scrape Configuration<ExternalLinkIcon/></a>的配置</p>
</blockquote>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> monitoring.coreos.com/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Prometheus
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">creationTimestamp</span><span class="token punctuation">:</span> <span class="token string">"2022-01-06T09:09:00Z"</span>
  <span class="token key atrule">generation</span><span class="token punctuation">:</span> <span class="token number">4</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app.kubernetes.io/component</span><span class="token punctuation">:</span> prometheus
    <span class="token key atrule">app.kubernetes.io/instance</span><span class="token punctuation">:</span> k8s
    <span class="token key atrule">app.kubernetes.io/name</span><span class="token punctuation">:</span> prometheus
    <span class="token key atrule">app.kubernetes.io/part-of</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>prometheus
    <span class="token key atrule">app.kubernetes.io/version</span><span class="token punctuation">:</span> 2.31.1
  <span class="token key atrule">name</span><span class="token punctuation">:</span> k8s
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> monitoring
  <span class="token key atrule">resourceVersion</span><span class="token punctuation">:</span> <span class="token string">"5029359543"</span>
  <span class="token key atrule">selfLink</span><span class="token punctuation">:</span> /apis/monitoring.coreos.com/v1/namespaces/monitoring/prometheuses/k8s
  <span class="token key atrule">uid</span><span class="token punctuation">:</span> c1ce3321<span class="token punctuation">-</span>1ad2<span class="token punctuation">-</span>4d2c<span class="token punctuation">-</span>a796<span class="token punctuation">-</span>b027318ef6e8
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">alerting</span><span class="token punctuation">:</span>
    <span class="token key atrule">alertmanagers</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v2
      <span class="token key atrule">name</span><span class="token punctuation">:</span> alertmanager<span class="token punctuation">-</span>main
      <span class="token key atrule">namespace</span><span class="token punctuation">:</span> monitoring
      <span class="token key atrule">port</span><span class="token punctuation">:</span> web
  <span class="token key atrule">enableFeatures</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token key atrule">externalLabels</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> quay.io/prometheus/prometheus<span class="token punctuation">:</span>v2.31.1
  <span class="token key atrule">nodeSelector</span><span class="token punctuation">:</span>
    <span class="token key atrule">kubernetes.io/os</span><span class="token punctuation">:</span> linux
  <span class="token key atrule">podMetadata</span><span class="token punctuation">:</span>
    <span class="token key atrule">labels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app.kubernetes.io/component</span><span class="token punctuation">:</span> prometheus
      <span class="token key atrule">app.kubernetes.io/instance</span><span class="token punctuation">:</span> k8s
      <span class="token key atrule">app.kubernetes.io/name</span><span class="token punctuation">:</span> prometheus
      <span class="token key atrule">app.kubernetes.io/part-of</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>prometheus
      <span class="token key atrule">app.kubernetes.io/version</span><span class="token punctuation">:</span> 2.31.1
  <span class="token key atrule">podMonitorNamespaceSelector</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token key atrule">podMonitorSelector</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token key atrule">probeNamespaceSelector</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token key atrule">probeSelector</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">2</span>
  <span class="token key atrule">resources</span><span class="token punctuation">:</span>
    <span class="token key atrule">requests</span><span class="token punctuation">:</span>
      <span class="token key atrule">memory</span><span class="token punctuation">:</span> 400Mi
  <span class="token key atrule">ruleNamespaceSelector</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token key atrule">ruleSelector</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token key atrule">securityContext</span><span class="token punctuation">:</span>
    <span class="token key atrule">fsGroup</span><span class="token punctuation">:</span> <span class="token number">2000</span>
    <span class="token key atrule">runAsNonRoot</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">runAsUser</span><span class="token punctuation">:</span> <span class="token number">1000</span>
  <span class="token key atrule">serviceAccountName</span><span class="token punctuation">:</span> prometheus<span class="token punctuation">-</span>k8s
  <span class="token key atrule">serviceMonitorNamespaceSelector</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token key atrule">serviceMonitorSelector</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token key atrule">version</span><span class="token punctuation">:</span> 2.31.1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div><ul>
<li>新增一个secret: additional-scrape-configs, 名称: prometheus-additional.yaml, 值为:</li>
</ul>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">job_name</span><span class="token punctuation">:</span> <span class="token string">'kubernetes-pods'</span>
  <span class="token key atrule">kubernetes_sd_configs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">role</span><span class="token punctuation">:</span> pod
  <span class="token key atrule">relabel_configs</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">source_labels</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>__meta_kubernetes_namespace<span class="token punctuation">]</span>
      <span class="token key atrule">action</span><span class="token punctuation">:</span> replace
      <span class="token key atrule">target_label</span><span class="token punctuation">:</span> kubernetes_namespace
    <span class="token punctuation">-</span> <span class="token key atrule">source_labels</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>__meta_kubernetes_pod_name<span class="token punctuation">]</span>
      <span class="token key atrule">action</span><span class="token punctuation">:</span> replace
      <span class="token key atrule">target_label</span><span class="token punctuation">:</span> kubernetes_pod_name
    <span class="token punctuation">-</span> <span class="token key atrule">action</span><span class="token punctuation">:</span> labelmap
      <span class="token key atrule">regex</span><span class="token punctuation">:</span> __meta_kubernetes_pod_label_(.+)
    <span class="token punctuation">-</span> <span class="token key atrule">source_labels</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>__meta_kubernetes_pod_annotation_prometheus_io_scrape<span class="token punctuation">]</span>
      <span class="token key atrule">action</span><span class="token punctuation">:</span> keep
      <span class="token key atrule">regex</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token punctuation">-</span> <span class="token key atrule">source_labels</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>__meta_kubernetes_pod_annotation_prometheus_io_path<span class="token punctuation">]</span>
      <span class="token key atrule">action</span><span class="token punctuation">:</span> replace
      <span class="token key atrule">target_label</span><span class="token punctuation">:</span> __metrics_path__
      <span class="token key atrule">regex</span><span class="token punctuation">:</span> (.+)
    <span class="token punctuation">-</span> <span class="token key atrule">source_labels</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>__address__<span class="token punctuation">,</span> __meta_kubernetes_pod_annotation_prometheus_io_port<span class="token punctuation">]</span>
      <span class="token key atrule">action</span><span class="token punctuation">:</span> replace
      <span class="token key atrule">regex</span><span class="token punctuation">:</span> (<span class="token punctuation">[</span>^<span class="token punctuation">:</span><span class="token punctuation">]</span>+)(<span class="token punctuation">?</span><span class="token punctuation">:</span><span class="token punctuation">:</span>\d+)<span class="token punctuation">?</span>;(\d+)
      <span class="token key atrule">replacement</span><span class="token punctuation">:</span> $1<span class="token punctuation">:</span>$2
      <span class="token key atrule">target_label</span><span class="token punctuation">:</span> __address__
    <span class="token punctuation">-</span> <span class="token key atrule">source_labels</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>__address__<span class="token punctuation">]</span>
      <span class="token key atrule">separator</span><span class="token punctuation">:</span> ;
      <span class="token key atrule">regex</span><span class="token punctuation">:</span> <span class="token string">'.*:(.*)'</span>
      <span class="token key atrule">target_label</span><span class="token punctuation">:</span> __pod_port__
      <span class="token key atrule">replacement</span><span class="token punctuation">:</span> $1
      <span class="token key atrule">action</span><span class="token punctuation">:</span> replace
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><ul>
<li>再次修改Prometheus资源</li>
</ul>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> monitoring.coreos.com/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Prometheus
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">creationTimestamp</span><span class="token punctuation">:</span> <span class="token string">"2022-01-06T09:09:00Z"</span>
  <span class="token key atrule">generation</span><span class="token punctuation">:</span> <span class="token number">4</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app.kubernetes.io/component</span><span class="token punctuation">:</span> prometheus
    <span class="token key atrule">app.kubernetes.io/instance</span><span class="token punctuation">:</span> k8s
    <span class="token key atrule">app.kubernetes.io/name</span><span class="token punctuation">:</span> prometheus
    <span class="token key atrule">app.kubernetes.io/part-of</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>prometheus
    <span class="token key atrule">app.kubernetes.io/version</span><span class="token punctuation">:</span> 2.31.1
  <span class="token key atrule">name</span><span class="token punctuation">:</span> k8s
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> monitoring
  <span class="token key atrule">resourceVersion</span><span class="token punctuation">:</span> <span class="token string">"5029359543"</span>
  <span class="token key atrule">selfLink</span><span class="token punctuation">:</span> /apis/monitoring.coreos.com/v1/namespaces/monitoring/prometheuses/k8s
  <span class="token key atrule">uid</span><span class="token punctuation">:</span> c1ce3321<span class="token punctuation">-</span>1ad2<span class="token punctuation">-</span>4d2c<span class="token punctuation">-</span>a796<span class="token punctuation">-</span>b027318ef6e8
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">additionalScrapeConfigs</span><span class="token punctuation">:</span>
    <span class="token key atrule">key</span><span class="token punctuation">:</span> prometheus<span class="token punctuation">-</span>additional.yaml
    <span class="token key atrule">name</span><span class="token punctuation">:</span> additional<span class="token punctuation">-</span>scrape<span class="token punctuation">-</span>configs
  <span class="token key atrule">alerting</span><span class="token punctuation">:</span>
    <span class="token key atrule">alertmanagers</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v2
      <span class="token key atrule">name</span><span class="token punctuation">:</span> alertmanager<span class="token punctuation">-</span>main
      <span class="token key atrule">namespace</span><span class="token punctuation">:</span> monitoring
      <span class="token key atrule">port</span><span class="token punctuation">:</span> web
  <span class="token key atrule">enableFeatures</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token key atrule">externalLabels</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> quay.io/prometheus/prometheus<span class="token punctuation">:</span>v2.31.1
  <span class="token key atrule">nodeSelector</span><span class="token punctuation">:</span>
    <span class="token key atrule">kubernetes.io/os</span><span class="token punctuation">:</span> linux
  <span class="token key atrule">podMetadata</span><span class="token punctuation">:</span>
    <span class="token key atrule">labels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app.kubernetes.io/component</span><span class="token punctuation">:</span> prometheus
      <span class="token key atrule">app.kubernetes.io/instance</span><span class="token punctuation">:</span> k8s
      <span class="token key atrule">app.kubernetes.io/name</span><span class="token punctuation">:</span> prometheus
      <span class="token key atrule">app.kubernetes.io/part-of</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>prometheus
      <span class="token key atrule">app.kubernetes.io/version</span><span class="token punctuation">:</span> 2.31.1
  <span class="token key atrule">podMonitorNamespaceSelector</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token key atrule">podMonitorSelector</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token key atrule">probeNamespaceSelector</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token key atrule">probeSelector</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">2</span>
  <span class="token key atrule">resources</span><span class="token punctuation">:</span>
    <span class="token key atrule">requests</span><span class="token punctuation">:</span>
      <span class="token key atrule">memory</span><span class="token punctuation">:</span> 400Mi
  <span class="token key atrule">ruleNamespaceSelector</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token key atrule">ruleSelector</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token key atrule">securityContext</span><span class="token punctuation">:</span>
    <span class="token key atrule">fsGroup</span><span class="token punctuation">:</span> <span class="token number">2000</span>
    <span class="token key atrule">runAsNonRoot</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">runAsUser</span><span class="token punctuation">:</span> <span class="token number">1000</span>
  <span class="token key atrule">serviceAccountName</span><span class="token punctuation">:</span> prometheus<span class="token punctuation">-</span>k8s
  <span class="token key atrule">serviceMonitorNamespaceSelector</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token key atrule">serviceMonitorSelector</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token key atrule">version</span><span class="token punctuation">:</span> 2.31.1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br></div></div><ul>
<li>重启下Prometheus就会在targets中发现有kubernetes-pods的监控任务</li>
</ul>
<p><a href="https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/additional-scrape-config.md" target="_blank" rel="noopener noreferrer">参考文档<ExternalLinkIcon/></a></p>
</template>
