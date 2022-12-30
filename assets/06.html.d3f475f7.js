import{c as n}from"./app.897a2dcd.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";var a="/blogs/assets/monitor_proxy.95cc95b0.png";const e={},r=n(`<h1 id="prometheus-\u6A21\u7248\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#prometheus-\u6A21\u7248\u793A\u4F8B" aria-hidden="true">#</a> Prometheus \u6A21\u7248\u793A\u4F8B</h1><p>\u542F\u52A8 Prometheus \u4E3B\u8981\u662F\u914D\u7F6E\u6587\u4EF6\u9700\u8981\u914D\u7F6E\u597D\uFF0C\u5305\u62EC\u544A\u8B66\u89C4\u5219\u7684\u914D\u7F6E\uFF0C\u76D1\u63A7\u4EFB\u52A1\u7684\u914D\u7F6E\uFF0C\u76D1\u63A7\u5B9E\u4F8B\u7684\u914D\u7F6E</p><p>\u6240\u4EE5\u6211\u4EEC\u540E\u7AEF\u670D\u52A1\u9700\u8981\u6709\u8FD9\u4E9B\u63A5\u53E3\uFF0C\u901A\u8FC7\u8BF7\u6C42\u540E\u7AEF\u670D\u52A1\u7684\u63A5\u53E3\uFF0C\u8BFB\u53D6\u6570\u636E\u5E76\u6E32\u67D3\u597D Prometheus \u914D\u7F6E\u6587\u4EF6</p><h2 id="\u544A\u8B66\u89C4\u5219\u6A21\u7248" tabindex="-1"><a class="header-anchor" href="#\u544A\u8B66\u89C4\u5219\u6A21\u7248" aria-hidden="true">#</a> \u544A\u8B66\u89C4\u5219\u6A21\u7248</h2><div class="language-tpl ext-tpl line-numbers-mode"><pre class="language-tpl"><code>groups:
  - name: {{ .AlertRuleName }}
    rules:
    {{- range .Rules }}
      - alert: {{ .AlertName }}
        expr: {{ .Expr }}
        for: {{ .For }}
        labels:
          level: {{ .Labels.Level }}
        annotations:
          summary: {{ .Annotations.Summary }}
          description: {{ .Annotations.Description }}
    {{- end }}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="\u76D1\u63A7\u5B9E\u4F8B\u6A21\u7248" tabindex="-1"><a class="header-anchor" href="#\u76D1\u63A7\u5B9E\u4F8B\u6A21\u7248" aria-hidden="true">#</a> \u76D1\u63A7\u5B9E\u4F8B\u6A21\u7248</h2><div class="language-tpl ext-tpl line-numbers-mode"><pre class="language-tpl"><code># \u5B9E\u4F8B\u5217\u8868(\u6807\u7B7E)
{{- range .Instances }}
- labels:
    _ip: {{ .IP }}
    _name: {{ .Name }}
    _endpoint: {{ .Endpoint }}
    {{- range $key, $value := .Labels }}
    {{ $key }}: {{ $value }}
    {{- end }}
  targets:
    - {{ .IP }}:{{ .Port }}
{{- end }}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="prometheus-\u914D\u7F6E\u6587\u4EF6\u6A21\u7248" tabindex="-1"><a class="header-anchor" href="#prometheus-\u914D\u7F6E\u6587\u4EF6\u6A21\u7248" aria-hidden="true">#</a> Prometheus \u914D\u7F6E\u6587\u4EF6\u6A21\u7248</h2><div class="language-tpl ext-tpl line-numbers-mode"><pre class="language-tpl"><code># \u5168\u5C40\u914D\u7F6E
global:
  scrape_interval: {{ .GlobalScrapeInterval }}s
  evaluation_interval: {{ .GlobalEvaluationInterval }}s
  scrape_timeout: {{ .ScrapeTimeout }}s
  external_labels:
    {{- range $key, $value := .Labels }}
    {{ $key }}: {{ $value }}
    {{- end }}

# \u544A\u8B66alertmanager\u914D\u7F6E
alerting:
  alertmanagers:
    - static_configs:
        - targets:
            - {{ .AlertmanagerAddr }}
# \u544A\u8B66\u89C4\u5219\u6587\u4EF6
rule_files:
  - {{ .AlertRuleName }}.yml

# \u6293\u53D6\u4EFB\u52A1\u914D\u7F6E
scrape_configs:
  {{- range .Tasks }}
  - file_sd_configs:
      - files:
          - {{ .TaskID }}.yml
        refresh_interval: 10s
    job_name: {{ .Name }}
    metrics_path: {{ .Metric }}
    params:
    {{- range $key, $value := .Params }}
      {{ $key }}: {{ $value | printf &quot;%q&quot;}}
    {{- end }}
    scheme: {{ .Scheme }}
    scrape_interval: {{ .Interval }}s
    scrape_timeout: {{ .Timeout }}s
    {{ end }}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><h2 id="prometheus-\u7684\u4E8C\u6B21\u5C01\u88C5" tabindex="-1"><a class="header-anchor" href="#prometheus-\u7684\u4E8C\u6B21\u5C01\u88C5" aria-hidden="true">#</a> Prometheus \u7684\u4E8C\u6B21\u5C01\u88C5</h2><ul><li>\u7A0B\u5E8F\u8BFB\u53D6\u540E\u7AEF\u670D\u52A1\u63A5\u53E3\u6570\u636E\uFF0C\u6E32\u67D3\u914D\u7F6E\u6587\u4EF6</li><li>\u7A0B\u5E8F\u542F\u52A8\u672C\u5730 Prometheus \u7684\u4E8C\u8FDB\u5236\u6587\u4EF6\u670D\u52A1(\u52A0\u4E0A\u53C2\u6570)</li><li>\u7A0B\u5E8F\u5B9A\u65F6\u68C0\u67E5\u670D\u52A1\u8FD0\u884C\u60C5\u51B5\uFF0C\u5B9A\u65F6\u8BFB\u53D6\u914D\u7F6E\u6587\u4EF6\u5E76\u6E32\u67D3\uFF0C\u5982\u679C\u6709\u53D8\u5316\u6267\u884C reload \u91CD\u8F7D</li></ul><p><img src="`+a+'" alt=""></p>',12);function l(p,i){return r}var c=s(e,[["render",l]]);export{c as default};
