import{r as t,o as l,a as c,b as n,d as e,F as o,c as s,e as p}from"./app.897a2dcd.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";var r="/blogs/assets/scrape_configs.e40be186.png";const i={},k=s(`<h1 id="\u76D1\u63A7-\u6293\u53D6-\u4EFB\u52A1" tabindex="-1"><a class="header-anchor" href="#\u76D1\u63A7-\u6293\u53D6-\u4EFB\u52A1" aria-hidden="true">#</a> \u76D1\u63A7(\u6293\u53D6)\u4EFB\u52A1</h1><blockquote><p>\u5728 Prometheus \u914D\u7F6E\u6709\u4E09\u5927\u5757\u914D\u7F6E\uFF0C\u5168\u5C40\u914D\u7F6E\u3001\u544A\u8B66\u89C4\u5219\u914D\u7F6E\u3001\u6293\u53D6\u4EFB\u52A1\u914D\u7F6E</p></blockquote><blockquote><p>\u5176\u4E2D\u76D1\u63A7\u6293\u53D6\u914D\u7F6E\u5728 Prometheus \u914D\u7F6E\u4E2D\u4E5F\u5C5E\u4E8E\u91CD\u8981\u7684\u4E00\u5757</p></blockquote><h2 id="\u4EFB\u52A1\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4EFB\u52A1\u914D\u7F6E" aria-hidden="true">#</a> \u4EFB\u52A1\u914D\u7F6E</h2><p>\u5148\u6765\u770B\u4E0B\u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6\u4E2D\u7684\u6293\u53D6\u4EFB\u52A1</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">scrape_configs</span><span class="token punctuation">:</span>
  <span class="token comment"># The job name is added as a label \`job=&lt;job_name&gt;\` to any timeseries scraped from this config.</span>
  <span class="token punctuation">-</span> <span class="token key atrule">job_name</span><span class="token punctuation">:</span> <span class="token string">&quot;prometheus&quot;</span>

    <span class="token comment"># metrics_path defaults to &#39;/metrics&#39;</span>
    <span class="token comment"># scheme defaults to &#39;http&#39;.</span>

    <span class="token key atrule">static_configs</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">targets</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;localhost:9090&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u5728 Prometheus \u4E2D\u4F53\u73B0\u5982\u56FE</p><p><img src="`+r+`" alt=""></p><p>\u518D\u6765\u770B\u4E0B\u5B98\u65B9\u5173\u4E8E\u6293\u53D6\u4EFB\u52A1\u7684\u914D\u7F6E</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">scrape_configs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">job_name</span><span class="token punctuation">:</span> <span class="token comment"># \u6293\u53D6\u4EFB\u52A1\u7684\u4EFB\u52A1\u540D\u79F0</span>
    <span class="token key atrule">scrape_interval</span><span class="token punctuation">:</span> <span class="token number">15</span> <span class="token comment"># \u9ED8\u8BA4\u662F\u5168\u5C40\u914D\u7F6E\u4E2Dscrape_interval\u7684\u503C</span>
    <span class="token key atrule">scrape_timeout</span><span class="token punctuation">:</span> <span class="token number">10</span> <span class="token comment"># \u9ED8\u8BA4\u662F\u5168\u5C40\u914D\u7F6E\u4E2Dscrape_timeout\u7684\u503C</span>
    <span class="token key atrule">metrics_path</span><span class="token punctuation">:</span> /metrics <span class="token comment"># \u76EE\u6807\u66B4\u9732metrics\u4FE1\u606F\u7684HTTP\u8DEF\u5F84</span>
    <span class="token key atrule">scheme</span><span class="token punctuation">:</span> http <span class="token comment"># \u8BF7\u6C42\u534F\u8BAE\uFF0C\u9ED8\u8BA4\u662Fhttp</span>
    <span class="token key atrule">params</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token key atrule">&lt;string&gt;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>&lt;string<span class="token punctuation">&gt;</span><span class="token punctuation">,</span> <span class="token punctuation">...</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token comment"># \u53EF\u9009\u7684HTTP\u4E2DURL\u7684\u53C2\u6570</span>
    <span class="token key atrule">static_configs</span><span class="token punctuation">:</span> <span class="token comment"># \u9759\u6001\u914D\u7F6E</span>
      <span class="token key atrule">targets</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">-</span> <span class="token string">&#39;&lt;host&gt;&#39;</span><span class="token punctuation">]</span> <span class="token comment"># \u6293\u53D6\u76EE\u6807\u5217\u8868</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token key atrule">&lt;labelname&gt;</span><span class="token punctuation">:</span> &lt;labelvalue<span class="token punctuation">&gt;</span> <span class="token punctuation">...</span><span class="token punctuation">]</span> <span class="token comment"># \u6293\u53D6\u76EE\u6807\u5B9E\u4F8B\u914D\u7F6E\u7684\u6807\u7B7E</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="\u670D\u52A1\u53D1\u73B0" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u53D1\u73B0" aria-hidden="true">#</a> \u670D\u52A1\u53D1\u73B0</h2><blockquote><p>\u5217\u4E3E\u5E38\u7528\u7684\u51E0\u4E2A</p></blockquote>`,12),m={href:"https://prometheus.io/docs/prometheus/latest/configuration/configuration/#file_sd_config",target:"_blank",rel:"noopener noreferrer"},b=p("file_sd_config"),_=n("ul",null,[n("li",null,"\u57FA\u4E8E\u6587\u4EF6\u7684\u670D\u52A1\u53D1\u73B0"),n("li",null,"\u6587\u4EF6\u63D0\u4F9B json \u548C yaml \u4E24\u79CD\u683C\u5F0F")],-1),d=s(`<p>\u4F8B\u5B50</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">scrape_configs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">file_sd_configs</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">files</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> instances.yml <span class="token comment"># \u6587\u4EF6\u540D\u79F0</span>
        <span class="token key atrule">refresh_interval</span><span class="token punctuation">:</span> 10s <span class="token comment"># \u81EA\u52A8\u5237\u65B0\u65F6\u95F4</span>
    <span class="token key atrule">job_name</span><span class="token punctuation">:</span> basic_instances <span class="token comment"># \u6293\u53D6\u4EFB\u52A1\u7684\u4EFB\u52A1\u540D\u79F0</span>
    <span class="token key atrule">metrics_path</span><span class="token punctuation">:</span> /metrics
    <span class="token key atrule">scheme</span><span class="token punctuation">:</span> http
    <span class="token key atrule">scrape_interval</span><span class="token punctuation">:</span> 60s <span class="token comment"># \u8FD9\u91CC\u914D\u7F6E\u7684\u662F60s\uFF0C\u53EF\u4EE5\u8986\u76D6\u5168\u5C40\u914D\u7F6E\u4E2D\u7684\u503C</span>
    <span class="token key atrule">scrape_timeout</span><span class="token punctuation">:</span> 50s <span class="token comment"># \u8FD9\u91CC\u914D\u7F6E\u768450s\uFF0C\u53EF\u4EE5\u8986\u76D6\u5168\u5C40\u914D\u7F6E\u4E2D\u7684\u503C</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,2),y={href:"https://prometheus.io/docs/prometheus/latest/configuration/configuration/#dockerswarm_sd_config",target:"_blank",rel:"noopener noreferrer"},g=p("dockerswarm_sd_config"),h=n("ul",null,[n("li",null,"\u57FA\u4E8E Docker Swarm \u5F15\u64CE\u7684\u670D\u52A1\u53D1\u73B0"),n("li",null,"\u670D\u52A1\u53D1\u73B0\u7684\u76EE\u6807\u89D2\u8272\u6709\u4E09\u79CD\uFF1Aservices\u3001tasks\u3001nodes")],-1),f=s(`<p>\u4F8B\u5B50</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">job_name</span><span class="token punctuation">:</span> docker_swarm_nodes
    <span class="token key atrule">dockerswarm_sd_configs</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">host</span><span class="token punctuation">:</span> tcp<span class="token punctuation">:</span>//x.x.x.x<span class="token punctuation">:</span><span class="token number">2375</span>
        <span class="token key atrule">role</span><span class="token punctuation">:</span> nodes
    <span class="token key atrule">relabel_configs</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">source_labels</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>__meta_dockerswarm_node_address<span class="token punctuation">]</span>
        <span class="token key atrule">target_label</span><span class="token punctuation">:</span> __address__
        <span class="token key atrule">replacement</span><span class="token punctuation">:</span> $1<span class="token punctuation">:</span><span class="token number">9100</span>
      <span class="token punctuation">-</span> <span class="token key atrule">source_labels</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>__meta_dockerswarm_node_hostname<span class="token punctuation">]</span>
        <span class="token key atrule">target_label</span><span class="token punctuation">:</span> instance
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,2),v={href:"https://prometheus.io/docs/prometheus/latest/configuration/configuration/#kubernetes_sd_config",target:"_blank",rel:"noopener noreferrer"},x=p("kubernetes_sd_config"),q=n("ul",null,[n("li",null,"\u57FA\u4E8E K8S \u7684\u670D\u52A1\u53D1\u73B0"),n("li",null,"\u53D1\u73B0\u7684\u89D2\u8272\u6709\uFF1Anode\u3001service\u3001pod\u3001endpoints\u3001endpointslice\u3001ingress")],-1),j=s(`<p>\u4F8B\u5B50</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">job_name</span><span class="token punctuation">:</span> <span class="token string">&quot;kubernetes-pods&quot;</span>
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
    <span class="token punctuation">-</span> <span class="token key atrule">source_labels</span><span class="token punctuation">:</span>
        <span class="token punctuation">[</span>__address__<span class="token punctuation">,</span> __meta_kubernetes_pod_annotation_prometheus_io_port<span class="token punctuation">]</span>
      <span class="token key atrule">action</span><span class="token punctuation">:</span> replace
      <span class="token key atrule">regex</span><span class="token punctuation">:</span> (<span class="token punctuation">[</span>^<span class="token punctuation">:</span><span class="token punctuation">]</span>+)(<span class="token punctuation">?</span><span class="token punctuation">:</span><span class="token punctuation">:</span>\\d+)<span class="token punctuation">?</span>;(\\d+)
      <span class="token key atrule">replacement</span><span class="token punctuation">:</span> $1<span class="token punctuation">:</span>$2
      <span class="token key atrule">target_label</span><span class="token punctuation">:</span> __address__
    <span class="token punctuation">-</span> <span class="token key atrule">source_labels</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>__address__<span class="token punctuation">]</span>
      <span class="token key atrule">separator</span><span class="token punctuation">:</span> ;
      <span class="token key atrule">regex</span><span class="token punctuation">:</span> <span class="token string">&quot;.*:(.*)&quot;</span>
      <span class="token key atrule">target_label</span><span class="token punctuation">:</span> __pod_port__
      <span class="token key atrule">replacement</span><span class="token punctuation">:</span> $1
      <span class="token key atrule">action</span><span class="token punctuation">:</span> replace
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div>`,2);function w(T,P){const a=t("ExternalLinkIcon");return l(),c(o,null,[k,n("ul",null,[n("li",null,[n("a",m,[b,e(a)]),_])]),d,n("ul",null,[n("li",null,[n("p",null,[n("a",y,[g,e(a)])]),h])]),f,n("ul",null,[n("li",null,[n("p",null,[n("a",v,[x,e(a)])]),q])]),j],64)}var $=u(i,[["render",w]]);export{$ as default};
