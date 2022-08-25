<template><h1 id="监控平台" tabindex="-1"><a class="header-anchor" href="#监控平台" aria-hidden="true">#</a> 监控平台</h1>
<h2 id="bug" tabindex="-1"><a class="header-anchor" href="#bug" aria-hidden="true">#</a> BUG</h2>
<ul>
<li>客户端需要支持类似pushgateway的功能</li>
<li>告警信息的聚合 同一个告警项 超过5条类似的就合并成一条</li>
<li>告警维护silence 不唯一 导致Alertmanager里只有一条silence生效 严重bug</li>
</ul>
<p><img src="@source/daily/assets/alert_many.png" alt="告警合并"></p>
<h2 id="alertmanager过期的silence删除问题" tabindex="-1"><a class="header-anchor" href="#alertmanager过期的silence删除问题" aria-hidden="true">#</a> Alertmanager过期的silence删除问题</h2>
<ul>
<li>默认情况下过期的silence超过5天(--data.retention=120h)就会自动gc回收掉</li>
<li>所以在我们的配置中保留默认的值</li>
<li>后续考虑在配置文件中设置成变量</li>
<li>之所以这样的默认配置是为了在事后分析确定的告警信息为啥没发送, 是否是重新建了一个silence导致的</li>
</ul>
</template>
