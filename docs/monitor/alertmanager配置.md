---
prev: ./Alertmanager告警系统.md
---
# Alertmanager配置

## Alertmanager的三个概念

### Group分组

Alertmanager会把同类型的告警进行分组，合并到一条告警信息中

如：多个机器实例down掉的话，正常可能会有很多个同类型的告警，作为运维来讲，告警更关心的是一个告警信息中的哪些实例会受到影响，
而不是一坨告警来了之后，发现都是同一个原因导致的故障。

### Silence静默

静默很好理解，简单来说就是告警维护

可以根据标签来匹配对应的告警条目，来进行暂时的维护，在此期间Alertmanager不会发送告警信息

### Inhibition抑制

简单来说就是一个告警已经发送了，那么由此告警故障引发的其他的告警就不要再发送了

如：一个机器实例down掉了并发送了告警，那么在此机器上的其他业务告警就不要发送了

## Alertmanager配置文件

```yaml
## Alertmanager 配置文件
global:
  resolve_timeout: 5m
# 路由分组
route:
  receiver: "公共" # 默认的接收器名称, 也就是路由匹配不到的情况下, 最终发送给这个接收器
  group_by: ["alertname", "level", "_product_id"] # 报警分组
  group_wait: 60s # 分组等待时间，如果在此时间内，出现相同报警，就在同一个组内出现
  group_interval: 60s # 分组内没有变化，则在此时间之后，将分组内的告警合并为一条告警信息发送
  repeat_interval: 1h # 如果告警没有恢复，则在此时间后重新发送
  routes:
    - receiver: "运维"
      group_by: ["alertname", "level", "_product_id"]
      group_wait: 60s
      group_interval: 60s
      repeat_interval: 3600s
      continue: true # 告警进入路由之后会进行匹配，如果配置为true，则会继续匹配，如果为false，就匹配到此就停止
      match_re: # 正则匹配
        alertname: "^机器宕机|网络故障"

    - receiver: "运维开发"
      group_by: ["alertname", "level", "_product_id"]
      group_wait: 60s
      group_interval: 60s
      repeat_interval: 3600s
      continue: true
      match: # 精确匹配
        _product_name: "运维开发" # 标签匹配到运维开发的告警发送给【receiver: "运维开发"】

    - receiver: "平台中心"
      group_by: ["alertname", "level", "_product_id"]
      group_wait: 60s
      group_interval: 60s
      repeat_interval: 3600s
      continue: true
      match: # 精确匹配
        _product_name: "平台中心" # 标签匹配到平台中心的告警发送给【receiver: "平台中心"】

# 发送告警的接收器
receivers:
  - name: 公共
    webhook_configs:
      - url: http://127.0.0.1/alert # 自己开发一个webhook
  - name: 运维
    webhook_configs:
      - url: http://127.0.0.1/alert
  - name: 运维开发
    webhook_configs:
      - url: http://127.0.0.1/alert
  - name: 平台中心
    webhook_configs:
      - url: http://127.0.0.1/alert

# 抑制器
inhibit_rules:
  - source_match:
      severity: "crit"
    target_match:
      severity: "warn"
    equal: ["alertname", "level", "_product_id"]
```
