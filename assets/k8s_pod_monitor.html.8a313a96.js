import{r as t,o,a as l,b as n,d as e,F as c,c as p,e as s}from"./app.897a2dcd.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const r={},i=p(`<h1 id="prometheus\u76D1\u63A7\u914D\u7F6Ekubernetes-sd-config" tabindex="-1"><a class="header-anchor" href="#prometheus\u76D1\u63A7\u914D\u7F6Ekubernetes-sd-config" aria-hidden="true">#</a> Prometheus\u76D1\u63A7\u914D\u7F6Ekubernetes_sd_config</h1><blockquote><p>\u7814\u53D1\u8BF4\u5728pod\u91CC\u5DF2\u7ECF\u914D\u7F6E\u4E86\u5982\u4E0B\u7684annotation, \u4F46\u662F\u5728Prometheus\u4E2D\u67E5\u8BE2\u4E0D\u5230metrics\u6307\u6807</p></blockquote><ul><li>prometheus.io/path: /metrics</li><li>prometheus.io/port: 1234</li><li>prometheus.io/scrape: true</li></ul><h2 id="\u66F4\u65B0\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0\u914D\u7F6E" aria-hidden="true">#</a> \u66F4\u65B0\u914D\u7F6E</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 1. \u89E3\u538B\u6587\u4EF6</span>
kubectl get secret prometheus-k8s -n monitoring -o json <span class="token operator">|</span> jq -r <span class="token string">&#39;.data. &quot;prometheus.yaml.gz&quot;&#39;</span><span class="token operator">|</span> base64 -d <span class="token operator">|</span> <span class="token function">gzip</span> -d <span class="token operator">&gt;</span> old.yaml
<span class="token comment"># 2. \u53D1\u73B0Job: kubernetes-pods\u4E2D \u6CA1\u6709\u914D\u7F6E **__meta_kubernetes_pod_annotation_prometheus_io_scrape** \u76F8\u5173\u914D\u7F6E</span>
<span class="token comment"># 3. \u4FEE\u6539old.yaml\u4E2D\u5173\u4E8Ekubernetes-pods\u7684\u76D1\u63A7\u4EFB\u52A1(Job)</span>
<span class="token comment"># 4. \u7F16\u8F91\u66F4\u65B0secret</span>
kubectl -n monitoring edit secrets prometheus-k8s
<span class="token comment"># 4. \u6700\u540E\u53D1\u73B0\u4E0D\u751F\u6548</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><blockquote><p>\u8BF4\u660EPrometheus\u7684\u914D\u7F6E\u662F\u81EA\u52A8\u751F\u6210\u7684\u624B\u52A8\u4FEE\u6539\u65E0\u6548</p></blockquote><h2 id="\u67E5\u8BE2prometheus\u7684\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2prometheus\u7684\u914D\u7F6E" aria-hidden="true">#</a> \u67E5\u8BE2Prometheus\u7684\u914D\u7F6E</h2>`,7),k=n("p",null,"kubectl -n monitoring get prometheus k8s -o yaml",-1),b=n("p",null,"\u53D1\u73B0Prometheus\u7684\u914D\u7F6E\u5982\u4E0B",-1),m=s("\u6CA1\u6709\u5173\u4E8E"),d={href:"https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/additional-scrape-config.md",target:"_blank",rel:"noopener noreferrer"},y=s("Additional Scrape Configuration"),_=s("\u7684\u914D\u7F6E"),h=p(`<div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> monitoring.coreos.com/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Prometheus
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">creationTimestamp</span><span class="token punctuation">:</span> <span class="token string">&quot;2022-01-06T09:09:00Z&quot;</span>
  <span class="token key atrule">generation</span><span class="token punctuation">:</span> <span class="token number">4</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app.kubernetes.io/component</span><span class="token punctuation">:</span> prometheus
    <span class="token key atrule">app.kubernetes.io/instance</span><span class="token punctuation">:</span> k8s
    <span class="token key atrule">app.kubernetes.io/name</span><span class="token punctuation">:</span> prometheus
    <span class="token key atrule">app.kubernetes.io/part-of</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>prometheus
    <span class="token key atrule">app.kubernetes.io/version</span><span class="token punctuation">:</span> 2.31.1
  <span class="token key atrule">name</span><span class="token punctuation">:</span> k8s
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> monitoring
  <span class="token key atrule">resourceVersion</span><span class="token punctuation">:</span> <span class="token string">&quot;5029359543&quot;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div><h2 id="\u65B0\u589E-secret" tabindex="-1"><a class="header-anchor" href="#\u65B0\u589E-secret" aria-hidden="true">#</a> \u65B0\u589E secret</h2><p>additional-scrape-configs, \u540D\u79F0: prometheus-additional.yaml, \u503C\u4E3A:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>kubectl -n monitoring create secret generic  additional-configs --from-file<span class="token operator">=</span>prometheus-additional.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">job_name</span><span class="token punctuation">:</span> <span class="token string">&#39;kubernetes-pods&#39;</span>
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
      <span class="token key atrule">regex</span><span class="token punctuation">:</span> (<span class="token punctuation">[</span>^<span class="token punctuation">:</span><span class="token punctuation">]</span>+)(<span class="token punctuation">?</span><span class="token punctuation">:</span><span class="token punctuation">:</span>\\d+)<span class="token punctuation">?</span>;(\\d+)
      <span class="token key atrule">replacement</span><span class="token punctuation">:</span> $1<span class="token punctuation">:</span>$2
      <span class="token key atrule">target_label</span><span class="token punctuation">:</span> __address__
    <span class="token punctuation">-</span> <span class="token key atrule">source_labels</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>__address__<span class="token punctuation">]</span>
      <span class="token key atrule">separator</span><span class="token punctuation">:</span> ;
      <span class="token key atrule">regex</span><span class="token punctuation">:</span> <span class="token string">&#39;.*:(.*)&#39;</span>
      <span class="token key atrule">target_label</span><span class="token punctuation">:</span> __pod_port__
      <span class="token key atrule">replacement</span><span class="token punctuation">:</span> $1
      <span class="token key atrule">action</span><span class="token punctuation">:</span> replace
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h2 id="\u4FEE\u6539prometheus" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539prometheus" aria-hidden="true">#</a> \u4FEE\u6539Prometheus</h2><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> monitoring.coreos.com/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Prometheus
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">creationTimestamp</span><span class="token punctuation">:</span> <span class="token string">&quot;2022-01-06T09:09:00Z&quot;</span>
  <span class="token key atrule">generation</span><span class="token punctuation">:</span> <span class="token number">4</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app.kubernetes.io/component</span><span class="token punctuation">:</span> prometheus
    <span class="token key atrule">app.kubernetes.io/instance</span><span class="token punctuation">:</span> k8s
    <span class="token key atrule">app.kubernetes.io/name</span><span class="token punctuation">:</span> prometheus
    <span class="token key atrule">app.kubernetes.io/part-of</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>prometheus
    <span class="token key atrule">app.kubernetes.io/version</span><span class="token punctuation">:</span> 2.31.1
  <span class="token key atrule">name</span><span class="token punctuation">:</span> k8s
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> monitoring
  <span class="token key atrule">resourceVersion</span><span class="token punctuation">:</span> <span class="token string">&quot;5029359543&quot;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br></div></div><ul><li>\u91CD\u542F\u4E0BPrometheus\u5C31\u4F1A\u5728targets\u4E2D\u53D1\u73B0\u6709kubernetes-pods\u7684\u76D1\u63A7\u4EFB\u52A1</li></ul>`,8),g={href:"https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/additional-scrape-config.md",target:"_blank",rel:"noopener noreferrer"},v=s("\u53C2\u8003\u6587\u6863");function f(x,S){const a=t("ExternalLinkIcon");return o(),l(c,null,[i,n("blockquote",null,[k,b,n("p",null,[m,n("a",d,[y,e(a)]),_])]),h,n("p",null,[n("a",g,[v,e(a)])])],64)}var M=u(r,[["render",f]]);export{M as default};
