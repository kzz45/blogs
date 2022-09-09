# Prometheus监控配置kubernetes_sd_config

> 研发说在pod里已经配置了如下的annotation, 但是在Prometheus中查询不到metrics指标

- prometheus.io/path: /metrics
- prometheus.io/port: 1234
- prometheus.io/scrape: true


## 更新配置

```sh
# 1. 解压文件
kubectl get secret prometheus-k8s -n monitoring -o json | jq -r '.data. "prometheus.yaml.gz"'| base64 -d | gzip -d > old.yaml
# 2. 发现Job: kubernetes-pods中 没有配置 **__meta_kubernetes_pod_annotation_prometheus_io_scrape** 相关配置
# 3. 修改old.yaml中关于kubernetes-pods的监控任务(Job)
# 4. 编辑更新secret
kubectl -n monitoring edit secrets prometheus-k8s
# 4. 最后发现不生效
```

> 说明Prometheus的配置是自动生成的手动修改无效

## 查询Prometheus的配置

> kubectl -n monitoring get prometheus k8s -o yaml
> 
> 发现Prometheus的配置如下
> 
> 没有关于[Additional Scrape Configuration](https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/additional-scrape-config.md)的配置


```yaml
apiVersion: monitoring.coreos.com/v1
kind: Prometheus
metadata:
  creationTimestamp: "2022-01-06T09:09:00Z"
  generation: 4
  labels:
    app.kubernetes.io/component: prometheus
    app.kubernetes.io/instance: k8s
    app.kubernetes.io/name: prometheus
    app.kubernetes.io/part-of: kube-prometheus
    app.kubernetes.io/version: 2.31.1
  name: k8s
  namespace: monitoring
  resourceVersion: "5029359543"
  selfLink: /apis/monitoring.coreos.com/v1/namespaces/monitoring/prometheuses/k8s
  uid: c1ce3321-1ad2-4d2c-a796-b027318ef6e8
spec:
  alerting:
    alertmanagers:
    - apiVersion: v2
      name: alertmanager-main
      namespace: monitoring
      port: web
  enableFeatures: []
  externalLabels: {}
  image: quay.io/prometheus/prometheus:v2.31.1
  nodeSelector:
    kubernetes.io/os: linux
  podMetadata:
    labels:
      app.kubernetes.io/component: prometheus
      app.kubernetes.io/instance: k8s
      app.kubernetes.io/name: prometheus
      app.kubernetes.io/part-of: kube-prometheus
      app.kubernetes.io/version: 2.31.1
  podMonitorNamespaceSelector: {}
  podMonitorSelector: {}
  probeNamespaceSelector: {}
  probeSelector: {}
  replicas: 2
  resources:
    requests:
      memory: 400Mi
  ruleNamespaceSelector: {}
  ruleSelector: {}
  securityContext:
    fsGroup: 2000
    runAsNonRoot: true
    runAsUser: 1000
  serviceAccountName: prometheus-k8s
  serviceMonitorNamespaceSelector: {}
  serviceMonitorSelector: {}
  version: 2.31.1
```

- 新增一个secret: additional-scrape-configs, 名称: prometheus-additional.yaml, 值为:

```yaml
- job_name: 'kubernetes-pods'
  kubernetes_sd_configs:
  - role: pod
  relabel_configs:
    - source_labels: [__meta_kubernetes_namespace]
      action: replace
      target_label: kubernetes_namespace
    - source_labels: [__meta_kubernetes_pod_name]
      action: replace
      target_label: kubernetes_pod_name
    - action: labelmap
      regex: __meta_kubernetes_pod_label_(.+)
    - source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_scrape]
      action: keep
      regex: true
    - source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_path]
      action: replace
      target_label: __metrics_path__
      regex: (.+)
    - source_labels: [__address__, __meta_kubernetes_pod_annotation_prometheus_io_port]
      action: replace
      regex: ([^:]+)(?::\d+)?;(\d+)
      replacement: $1:$2
      target_label: __address__
    - source_labels: [__address__]
      separator: ;
      regex: '.*:(.*)'
      target_label: __pod_port__
      replacement: $1
      action: replace
```

- 再次修改Prometheus资源

```yaml
apiVersion: monitoring.coreos.com/v1
kind: Prometheus
metadata:
  creationTimestamp: "2022-01-06T09:09:00Z"
  generation: 4
  labels:
    app.kubernetes.io/component: prometheus
    app.kubernetes.io/instance: k8s
    app.kubernetes.io/name: prometheus
    app.kubernetes.io/part-of: kube-prometheus
    app.kubernetes.io/version: 2.31.1
  name: k8s
  namespace: monitoring
  resourceVersion: "5029359543"
  selfLink: /apis/monitoring.coreos.com/v1/namespaces/monitoring/prometheuses/k8s
  uid: c1ce3321-1ad2-4d2c-a796-b027318ef6e8
spec:
  additionalScrapeConfigs:
    key: prometheus-additional.yaml
    name: additional-scrape-configs
  alerting:
    alertmanagers:
    - apiVersion: v2
      name: alertmanager-main
      namespace: monitoring
      port: web
  enableFeatures: []
  externalLabels: {}
  image: quay.io/prometheus/prometheus:v2.31.1
  nodeSelector:
    kubernetes.io/os: linux
  podMetadata:
    labels:
      app.kubernetes.io/component: prometheus
      app.kubernetes.io/instance: k8s
      app.kubernetes.io/name: prometheus
      app.kubernetes.io/part-of: kube-prometheus
      app.kubernetes.io/version: 2.31.1
  podMonitorNamespaceSelector: {}
  podMonitorSelector: {}
  probeNamespaceSelector: {}
  probeSelector: {}
  replicas: 2
  resources:
    requests:
      memory: 400Mi
  ruleNamespaceSelector: {}
  ruleSelector: {}
  securityContext:
    fsGroup: 2000
    runAsNonRoot: true
    runAsUser: 1000
  serviceAccountName: prometheus-k8s
  serviceMonitorNamespaceSelector: {}
  serviceMonitorSelector: {}
  version: 2.31.1
```

- 重启下Prometheus就会在targets中发现有kubernetes-pods的监控任务

[参考文档](https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/additional-scrape-config.md)