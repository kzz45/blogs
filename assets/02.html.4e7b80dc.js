import{c as i}from"./app.897a2dcd.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const e={},l=i(`<h1 id="omg-\u81EA\u5EFA\u5BB9\u5668\u5E73\u53F0" tabindex="-1"><a class="header-anchor" href="#omg-\u81EA\u5EFA\u5BB9\u5668\u5E73\u53F0" aria-hidden="true">#</a> OMG \u81EA\u5EFA\u5BB9\u5668\u5E73\u53F0</h1><ol><li><p>CI \u90E8\u5206\u4FD7\u5957\u7684\u4E0D\u53EF\u907F\u514D\u7684\u9700\u8981\u901A\u8FC7 Gitlab \u6216\u8005 Jenkins \u6765\u505A</p></li><li><p>\u90A3\u4E48\u6211\u4EEC\u91CD\u70B9\u5C31\u662F\u89E3\u51B3\u5728\u65B0\u5EFA\u5E94\u7528\u548C\u66F4\u65B0\u5E94\u7528\u4E0A, \u600E\u4E48\u505A\u5230\u5C3D\u91CF\u5C11\u7684\u64CD\u4F5C\u6B65\u9AA4</p></li><li><p>\u6211\u4EEC\u7684\u505A\u6CD5\u5C31\u662F\u901A\u8FC7 Helm \u6765\u7BA1\u7406\u5E94\u7528, \u4F7F\u5F97\u6BCF\u4E2A\u5E94\u7528\u90FD\u662F\u4E00\u4E2A\u8F6F\u4EF6\u5305, \u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u5305\u88C5\u597D\u9700\u8981\u4E00\u6B65\u6B65\u914D\u7F6E\u7684\u6B65\u9AA4, \u5982\u5E94\u7528\u914D\u7F6E, \u670D\u52A1\u914D\u7F6E, \u8DEF\u7531\u914D\u7F6E\u7B49</p></li><li><p>\u9488\u5BF9\u66F4\u65B0, \u5F53\u7136\u53EF\u4EE5\u505A\u5230\u5728 CI \u7684\u65F6\u5019, \u8C03\u7528\u540E\u7AEF\u7684 API \u76F4\u63A5\u90E8\u7F72\u5230\u7EBF\u4E0A, \u66B4\u529B\u7684\u65B9\u5F0F\u5C31\u662F Jenkins \u6765\u505A</p></li><li><p>\u5982\u679C CI \u5355\u7EAF\u7684\u53EA\u505A CI \u7684\u4E8B\u60C5, \u5C31\u662F\u6784\u5EFA\u955C\u50CF\u548C Helm \u8F6F\u4EF6\u5305, \u90A3\u4E48 CD \u90E8\u5206\u5C31\u662F\u5728\u5E73\u53F0\u9875\u9762\u4E0A\u64CD\u4F5C</p></li></ol><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u9700\u8981\u7BA1\u7406 Jenkins \u548C Gitlab</p></div><h2 id="\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u4F9D\u8D56" aria-hidden="true">#</a> \u4F9D\u8D56</h2><ul><li>helm</li><li>Gitlab</li><li>Harbor(\u6216\u8005\u963F\u91CC\u4E91\u955C\u50CF\u4ED3\u5E93)</li><li>Jenkins</li></ul><h2 id="\u7EA6\u5B9A" tabindex="-1"><a class="header-anchor" href="#\u7EA6\u5B9A" aria-hidden="true">#</a> \u7EA6\u5B9A</h2><ul><li>\u96C6\u7FA4\u4E2D\u7684 namespace \u7684\u540D\u79F0\u4E3A: <strong>\u9879\u76EE\u540D\u79F0</strong></li><li>\u7528\u6237\u4EE3\u7801\u4ED3\u5E93\u4E2D\u5305\u542B\u914D\u7F6E\u597D\u7684<strong>Jenkinsfile</strong></li><li>\u6216\u8005\u4EE3\u7801\u4ED3\u5E93\u4E2D\u5305\u542B\u914D\u7F6E\u597D\u7684<strong>gitlab-ci.yml</strong></li><li>\u7528\u6237\u9879\u76EE\u6240\u5728 Jenkins \u7684\u76EE\u5F55: <strong>\u4EA7\u54C1\u540D\u79F0/\u9879\u76EE\u540D\u79F0/\u73AF\u5883\u540D\u79F0/item_name</strong></li></ul><h2 id="\u4F7F\u7528\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u6B65\u9AA4" aria-hidden="true">#</a> \u4F7F\u7528\u6B65\u9AA4</h2><h3 id="\u7CFB\u7EDF\u7BA1\u7406\u540E\u53F0" tabindex="-1"><a class="header-anchor" href="#\u7CFB\u7EDF\u7BA1\u7406\u540E\u53F0" aria-hidden="true">#</a> \u7CFB\u7EDF\u7BA1\u7406\u540E\u53F0</h3><ol><li>\u65B0\u589E\u7528\u6237\u7EC4 \u65B0\u589E\u4EA7\u54C1 \u65B0\u589E Jenkins \u65B0\u589E\u9879\u76EE \u65B0\u589E Gitlab \u9879\u76EE</li><li>Gitlab \u9879\u76EE\u4E2D\u65B0\u589E\u5F00\u53D1\u8005\u7528\u6237</li><li>Jenkins \u65B0\u589E\u51ED\u8BC1(\u5F00\u53D1\u8005\u7528\u6237)\u4F7F\u5F97\u80FD\u591F\u8BBF\u95EE Gitlab \u9879\u76EE</li></ol><h3 id="\u5BB9\u5668\u7BA1\u7406\u540E\u53F0" tabindex="-1"><a class="header-anchor" href="#\u5BB9\u5668\u7BA1\u7406\u540E\u53F0" aria-hidden="true">#</a> \u5BB9\u5668\u7BA1\u7406\u540E\u53F0</h3><ol><li>\u65B0\u589E\u96C6\u7FA4 \u65B0\u589E\u5E94\u7528\u73AF\u5883 \u65B0\u589E\u4ED3\u5E93</li></ol><h2 id="\u540E\u7AEF\u8FD0\u884C" tabindex="-1"><a class="header-anchor" href="#\u540E\u7AEF\u8FD0\u884C" aria-hidden="true">#</a> \u540E\u7AEF\u8FD0\u884C</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>python3 manage.py runserver <span class="token number">0.0</span>.0.0:8000
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,14);function n(r,s){return l}var h=a(e,[["render",n]]);export{h as default};
