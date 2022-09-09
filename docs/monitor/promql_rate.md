# Prometheus rate函数

## 背景

> 由于我们监控体系是Prometheus+Grafana来做的，研发在配置Grafana大盘的时候，问到他的一个业务监控指标使用rate之后，Grafana显示No Data

1. Prometheus抓取周期，我服务端配置的抓取周期是60s也就是1m抓取一次指标
2. 研发使用的rate函数，具体为rate(xxx_xxx{yy="zz"} [1m])

## 粗糙解释

1. 由于抓取周期定义的是1分钟抓取一次
2. 由于rate函数的使用方法为：$interval时间窗口下至少有两个指标才能输出
3. 所以$interval至少是大于1分钟的

## rate

> rate的翻译应该为平均每秒增加了多少

[源码地址](https://github.com/prometheus/prometheus/blob/main/promql/functions.go#L139)

1. 可以看出，rate只能在counter的metrics类型上进行计算
2. 样本数量至少是2个，len(samples.Points) < 2
3. 最终值为：结果除以时间的秒数

10分钟内的样本

![](./asset/promql_rate.png)

rate算法是resultValue = resultValue / ms.Range.Seconds()

![](./asset/resultValue.png)

## 参考文档

[PromQL 查询之 rate 函数的使用](https://mp.weixin.qq.com/s/7z8n3abX9k39YL5kCopJqQ)
[Understanding the Prometheus rate() function](https://www.metricfire.com/blog/understanding-the-prometheus-rate-function/)