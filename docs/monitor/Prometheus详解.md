# Prometheus详解

## [官方文档](https://prometheus.io/docs/prometheus/latest/getting_started/)

## 三大块功能

- 采集指标
  - scrape_configs
- 匹配告警规则并计算
  - rule_files
  - evaluation_interval
- 发送告警给Alertmanager
  - alertmanagers

## 我们的配置文件

> 这是我们目前线上Prometheus部分配置文件, 可以大概看下主要的配置以及使用的方式, 部分说明也在下面注释体现

```yml
# global的全局配置
global:
  scrape_interval: 60s # 任务抓取周期, 每隔60秒去各个被监控端点拉取一次指标数据
  evaluation_interval: 60s # 计算周期, 主要针对下面的告警规则, 每隔60秒执行一次表达式判断告警规则
  scrape_timeout: 50s # 任务抓取超时时间
  external_labels:
    monitor: "shanghai_1" # 此Prometheus的标识, 会在记录里添加这对标签, 多个Prometheus的标识都不同

# 告警alertmanager配置, 如果触发告警规则，则会向AlertManager的接口发送原始告警数据
alerting:
  alertmanagers:
    - static_configs:
        - targets:
            - 127.0.0.1:9093 # Alertmanager的服务端, 不过我们线上是域名形式

rule_files:
# 全局的告警规则文件
  - global_alert_rule.yml

# 抓取任务
scrape_configs:
  - file_sd_configs: # 文件发现模式
      - files:
          - instance.yml
        refresh_interval: 50s # 刷新周期, 如果文件内容有变化, 刷新周期之后会在targe任务中体现
    job_name: 基础监控 # target任务名称
    scheme: http
    metrics_path: /exporter/
    params:
      name: ["base"]
    # 这个任务具体的URL体现为: http://{instance}:{instance_port}/exporter/?name=base
```

## 我们用到的服务发现

> 我们主要用到的服务发现模式有以下几种

- file_sd_config 主要用来对机器实例的管理发现

instance.yml

```yml
# 实例列表(标签)
- labels:
    _ip: 10.136.220.34
    _name: tsh-hdp-qa-clouderamanager-0001
    _endpoint: i-uf6cc7u1shr8dcebf9g3
    _product_id: 2
    _product_name: 数据组
    _type: machine
  targets:
    - 10.136.220.34:2021
- labels:
    _ip: 10.137.27.205
    _name: tsh-plat2public-qa-oma-0001
    _endpoint: i-uf667x1en5gz5a1korq8
    _product_id: 1
    _product_name: 平台中心
    _type: machine
  targets:
    - 10.137.27.205:2021
```

- dockerswarm_sd_config 也是用来对机器实例的管理发现, 只不是是通过dockerswam来管理的
  - dockerswam有三种角色: services, tasks, nodes, 我们目前只用到了nodes

```yml
- job_name: global_gray_rc
    dockerswarm_sd_configs:
      - host: tcp://10.152.41.190:2375
        role: nodes
    relabel_configs:
      - source_labels: [__meta_dockerswarm_node_address]
        target_label: __address__
        replacement: $1:9100
      - source_labels: [__meta_dockerswarm_node_hostname]
        target_label: instance
```

- kubernetes_sd_config 主要用来抓取K8S集群内的服务、Pod等监控指标

```sh
kubectl get secret prometheus-k8s -n monitoring -o json | jq -r '.data. "prometheus.yaml.gz"'| base64 -d | gzip -d
```

## 启动Prometheus

```sh
./prometheus --config.file="prometheus.yml" \
--web.listen-address="0.0.0.0:9090" \
--web.enable-lifecycle \
--storage.tsdb.retention.time=30d \
--storage.tsdb.retention.size=512MB
```

## Prometheus集群

### Federation

> 联邦模式是基于Prometheus本身来做的，主要用来做高可用，也可以用作集群，但是没有样本降准等能力

### Thanos

> 主要使用样本降准，以及用来做Prometheus集群