> [Wiki主页](CN-Home) ▸ **API 参考**

此文档翻译自 [API Reference](API-Reference) （英语），版本为 2013-9-9 。不能保证文档的同步更新，因此，需要了解最新的开发特性，请移步英文版 [API 参考](API-Reference) 。

d3 库所提供的所有 API 都在 d3 命名空间下。d3 库使用[[语义版本命名法（semantic versioning）|http://semver.org]]。 你可以用 `d3.version` 查看当前的版本信息。

## [d3 (核心部分)](Core)

### [[选择集]]

* [[d3.select|选择集#d3_select]] - 从当前文档中选择一系列元素。
* [[d3.selectAll|选择集#d3_selectAll]] - 从当前文档中选择多项元素。
* [[selection.attr|选择集#attr]] - 设置或获取指定属性。
* [[selection.classed|选择集#classed]] - 添加或删除选定元素的 CSS 类（CSS class）。
* [[selection.style|选择集#style]] - 设置或删除 CSS 属性。style优先级高于attr。
* [[selection.property|选择集#property]] - 设置或获原生的属性值（raw property）。
* [[selection.text|选择集#text]] - 设置或获取选定元素的标签体文本内容。
* [[selection.html|选择集#html]] - 设置或获取选定元素的 HTML 内容（类似 innerHTML ）
* [[selection.append|选择集#append]] - 创建并添加新元素到选定元素后。
* [[selection.insert|选择集#insert]] - 创建并添加新元素到选定元素前。
* [[selection.remove|选择集#remove]] - 从当前文档对象中删除选定的元素。
* [[selection.data|选择集#data]] - 设置或获取一组元素的绑定数据（get or set data for a group of elements, while computing a relational join.）
* [[selection.enter|选择集#enter]] - 返回缺失元素的占位对象（placeholder），指向绑定的数据中比选定元素集多出的一部分元素。
* [[selection.exit|选择集#exit]] - 返回多余元素的元素集，即选择元素中比绑定数据多出的一部分。(关于data, enter, exit原理的[示例1](http://bost.ocks.org/mike/join/), [示例2](http://bl.ocks.org/mbostock/3808218), [示例3](http://bl.ocks.org/mbostock/5779690))
* [[selection.datum|选择集#datum]] - 设置或获取单独元素的数据，不进行关联。（get or set data for individual elements, without computing a join.）
* [[selection.filter|选择集#filter]] - 根据绑定的数据过滤选择集。
* [[selection.sort|选择集#sort]] - 根据绑定的数据对选择的元素进行排序。
* [[selection.order|选择集#order]] - 对文档中的元素重排序以匹配选择集。
* [[selection.on|选择集#on]] - 添加或删除事件监听器。
* [[selection.transition|选择集#transition]] - 启动一个过渡效果（返回 Transition 对象），可以理解为动画。
* [selection.interrupt](选择集#interrupt) - 立即停止所有正在进行的动画动作。
* [[selection.each|选择集#each]] - 为每个选择的元素集调用指定的函数。
* [[selection.call|选择集#call]] - 为当前选择的元素集调用指定的函数。
* [[selection.empty|选择集#empty]] - 测试选择集是否为空。
* [[selection.node|选择集#node]] - 返回选择集中的第一个元素。
* [selection.size](选择集#size) - 返回选择集中的元素个数。
* [[selection.select|选择集#select]] - 选择所选的元素中的第一个子元素组成新的选择集。
* [[selection.selectAll|选择集#selectAll]] - 选择所选的元素中的多个子元素组成新的选择集。
* [[d3.selection|选择集#d3_selection]] - 选择集对象原型（可通过 `d3.selection.prototype` 为选择集增强功能）。
* [[d3.event|选择集#d3_event]] - 获取当前交互的用户事件。
* [[d3.mouse|选择集#d3_mouse]] - 获取鼠标的相对某元素的坐标。
* [[d3.touches|选择集#d3_touches]] - 获取相对某元素的触控点坐标。

### [过渡效果](Transitions)

* [d3.transition](Transitions#d3_transition) - 开始一个动画过渡。[简单教程](http://bost.ocks.org/mike/transition/)
* [transition.delay](Transitions#delay) - 指定每个元素过渡的延迟时间（单位：毫秒ms）。
* [transition.duration](Transitions#duration) - 指定每个元素过渡的持续时间（单位：毫秒ms）。
* [transition.ease](Transitions#ease) - 指定过渡的缓冲函数。
* [transition.attr](Transitions#attr) - 平滑过渡到新的attr属性值（起始属性值为当前属性）。
* [transition.attrTween](Transitions#attrTween) - 在不同attr属性值之间平滑过渡（起始属性值可在过渡函数中设置,甚至整个过渡函数都可以自定义）。
* [transition.style](Transitions#style) - 平滑过渡到新的style属性值。
* [transition.styleTween](Transitions#styleTween) - 在不同style属性值之间平滑过渡。
* [transition.text](Transitions#text) - 在过渡开始时设置文本内容。
* [transition.tween](Transitions#tween) - 使某个属性过渡到一个新的属性值，该属性可以是非attr或非style属性，比如text。
* [transition.select](Transitions#select) - 选择每个当前元素的某个子元素进行过渡。
* [transition.selectAll](Transitions#selectAll) - 选择每个当前元素的多个子元素进行过渡。
* [transition.filter](Transitions#filter) - 通过数据筛选出当前元素中的部分元素进行过渡。
* [transition.transition](Transitions#transition) - 当前过渡结束后开始新的过渡。
* [transition.remove](Transitions#remove) - 过渡结束后移除当前元素。
* [transition.empty](Transitions#empty) - 如果过渡为空就返回true。如果当前元素中没有非null元素，则此过渡为空。
* [transition.node](Transitions#node) - 返回过渡中的第一个元素。
* [transition.size](Transitions#size) - 返回过渡中当前元素的数量。
* [transition.each](Transitions#each) - 遍历每个元素执行操作。不指定触发类型时，立即执行操作。当指定触发类型为'start'或'end'时,会在过渡开始或结束时执行操作。
* [transition.call](Transitions#call) - 以当前过渡为this执行某个函数。
* [d3.ease](Transitions#d3_ease) - 定制过渡的缓冲函数。
* [ease](Transitions#_ease) - 缓冲函数。缓冲函数可让动画效果更自然，比如elastic缓冲函数可用以模拟弹性物体的运动。是一种插值函数的特例。
* [d3.timer](Transitions#d3_timer) - 开始一个定制的动画计时。功能类似于setTimeout，但内部用requestAnimationFrame实现，更高效。 
* [d3.timer.flush](Transitions#d3_timer_flush) - 立刻执行当前没有延迟的计时。可用于处理闪屏问题。
* [d3.interpolate](Transitions#d3_interpolate) - 生成一个插值函数，在两个参数间插值。差值函数的类型会根据输入参数的类型（数字、字符串、颜色等）而自动选择。
* [interpolate](Transitions#_interpolate) - 插值函数。输入参数在[0, 1]之间。
* [d3.interpolateNumber](Transitions#d3_interpolateNumber) - 在两个数字间插值。
* [d3.interpolateRound](Transitions#d3_interpolateRound) - 在两个数字间插值，返回值会四舍五入取整。
* [d3.interpolateString](Transitions#d3_interpolateString) - 在两个字符串间插值。解析字符串中的数字，对应的数字会插值。
* [d3.interpolateRgb](Transitions#d3_interpolateRgb) - 在两个RGB颜色间插值。
* [d3.interpolateHsl](Transitions#d3_interpolateHsl) - 在两个HSL颜色间插值。
* [d3.interpolateLab](Transitions#d3_interpolateLab) - 在两个L\*a\*b\*颜色间插值。
* [d3.interpolateHcl](Transitions#d3_interpolateHcl) - 在两个HCL颜色间插值。
* [d3.interpolateArray](Transitions#d3_interpolateArray) - 在两个数列间插值。d3.interpolateArray( [0, 1],  [1, 10, 100] )(0.5);  // returns [0.5, 5.5, 100]
* [d3.interpolateObject](Transitions#d3_interpolateObject) - 在两个object间插值。d3.interpolateArray( {x: 0, y: 1}, {x: 1, y: 10, z: 100} )(0.5);  // returns {x: 0.5, y: 5.5, z: 100}
* [d3.interpolateTransform](Transitions#d3_interpolateTransform) - 在两个2D仿射变换间插值。
* [d3.interpolateZoom](Transitions#d3_interpolateZoom) - 在两个点之间平滑地缩放平移。[示例](http://bl.ocks.org/mbostock/3828981)
* [d3.interpolators](Transitions#d3_interpolators) - 添加一个自定义的插值函数.

### [[数据操作(Working with Arrays)|Arrays]]

* [[d3.ascending|Arrays#d3_ascending]] - 升序排序函数.
* [[d3.descending|Arrays#d3_descending]] - 降序排序函数.
* [[d3.min|Arrays#d3_min]] - 获取数组中的最小值.
* [[d3.max|Arrays#d3_max]] - 获取数组中的最大值.
* [[d3.extent|Arrays#d3_extent]] - 获取数组的范围(最小值和最大值).
* [[d3.sum|Arrays#d3_sum]] - 获取数组中数字之和.
* [[d3.mean|Arrays#d3_mean]] -获取数组中数字的算术平均值.
* [[d3.median|Arrays#d3_median]] - 获取数组中数字的中位数 (相当于 0.5-quantile的值).
* [[d3.quantile|Arrays#d3_quantile]] - 获取排好序的数组的一个分位数(quantile).
* [[d3.bisect|Arrays#d3_bisect]] - 通过二分法获取某个数在排好序的数组中的插入位置(同d3.bisectRight).
* [[d3.bisectRight|Arrays#d3_bisectRight]] - 获取某个数在排好序的数组中的插入位置(相等的值归入右边).
* [[d3.bisectLeft|Arrays#d3_bisectLeft]] - 获取某个数在排好序的数组中的插入位置(相等的值归入左边).
* [[d3.bisector|Arrays#d3_bisector]] - 自定义一个二分函数.
* [d3.shuffle](Arrays#d3_shuffle) - 洗牌，随机排列数组中的元素.
* [[d3.permute|Arrays#d3_permute]] - 以指定顺序排列数组中的元素.
* [[d3.zip|Arrays#d3_zip]] - 将多个数组合并成一个数组的数组，新数组的的第i个元素是原来各个数组中第i个元素组成的数组.
* [[d3.transpose|Arrays#d3_transpose]] - 矩阵转置，通过d3.zip实现.
* [[d3.pairs|Arrays#d3_pairs]] - 返回临近元素对的数组，d3.pairs([1, 2, 3, 4]); // returns [ [1, 2], [2, 3], [3, 4] ].
* [[d3.keys|Arrays#d3_keys]] - 返回关联数组(哈希表、json、object对象)的key组成的数组.
* [[d3.values|Arrays#d3_values]] - 返回关联数组的value组成的数组.
* [[d3.entries|Arrays#d3_entries]] - 返回关联数组的key-value实体组成的数组, d3.entries({ foo: 42 }); // returns [{key: "foo", value: 42}].
* [[d3.merge|Arrays#d3_merge]] - 将多个数组连成一个，类似于原生方法concat. d3.merge([ [1], [2, 3] ]); // returns [1, 2, 3].
* [[d3.range|Arrays#d3_range]] - 获得一个数列. d3.range([start, ]stop[, step])
* [[d3.nest|Arrays#d3_nest]] - 获得一个nest对象，将数组组织成层级结构. 示例： [http://bl.ocks.org/phoebebright/raw/3176159/](http://bl.ocks.org/phoebebright/raw/3176159/)
* [[nest.key|Arrays#nest_key]] - 为nest层级结构增加一个层级.
* [[nest.sortKeys|Arrays#nest_sortKeys]] - 将当前的nest层级结构按key排序.
* [[nest.sortValues|Arrays#nest_sortValues]] - 将叶nest层级按value排序.
* [[nest.rollup|Arrays#nest_rollup]] - 设置修改叶节点值的函数.
* [[nest.map|Arrays#nest_map]] - 执行nest操作, 返回一个关联数组(json).
* [[nest.entries|Arrays#nest_entries]] - 执行nest操作, 返回一个key-value数组. 如果nest.map返回的结果类似于{ foo: 42 }, 则nest.entries返回的结果类似于[{key: "foo", value: 42}].
* [d3.map](Arrays#d3_map) - 将javascript的object转化为hash,屏蔽了object的原型链功能导致的与hash不一致的问题。
* [map.has](Arrays#map_has) - map有某个key就返回true.
* [map.get](Arrays#map_get) - 返回map中某个key对应的value.
* [map.set](Arrays#map_set) - 设置map中某个key对应的value.
* [map.remove](Arrays#map_remove) - 删除map中的某个key. 
* [map.keys](Arrays#map_keys) - 返回map中所有key组成的数组.
* [map.values](Arrays#map_values) - 返回map中所有value组成的数组.
* [map.entries](Arrays#map_entries) - 返回map中所有entry（key-value键值对）组成的数组.类似于{ foo: 42 }转化成[{key: "foo", value: 42}]
* [map.forEach](Arrays#map_forEach) - 对map中每一个entry执行某个函数.
* [d3.set](Arrays#d3_set) - 将javascript的array转化为set,屏蔽了array的object原型链功能导致的与set不一致的问题。set中的value是array中每个值转换成字符串的结果。set中的value是去重过的。
* [set.has](Arrays#set_has) - 返回set中是否含有某个value.
* [set.add](Arrays#set_add) - 添加某个value.
* [set.remove](Arrays#set_remove) - 删除某个value.
* [set.values](Arrays#set_values) - 返回set中的值组成的数组.set中的value是去重过的.
* [set.forEach](Arrays#set_forEach) - 对set中每一个value执行某个函数.

### [[Math]]

* [[d3.random.normal|Math#random_normal]] - 利用正态分布产生一个随机数.
* [[d3.random.logNormal|Math#random_logNormal]] - 利用对数正态分布产生一个随机数.
* [[d3.random.irwinHall|Math#random_irwinHall]] - 利用Irwin–Hall分布（简单可行并且容易编程的正态分布实现方法）产生一个随机数.
* [[d3.transform|Math#transform]] - 将svg的tranform格式转化为标准的2D转换矩阵字符串格式.

### [[载入外部资源(Loading External Resources)|Requests]]

* [[d3.xhr|Requests#d3_xhr]] - 发起XMLHttpRequest请求获取资源。
* [xhr.header](Requests#header) - 设置 request header。
* [xhr.mimeType](Requests#mimeType) - 设置 Accept request header，并重写 response MIME type。
* [xhr.response](Requests#response) - 设置response返回值转化函数。如 function(request) { return JSON.parse(request.responseText); }
* [xhr.get](Requests#get) - 发起GET请求。
* [xhr.post](Requests#post) - 发起POST请求。
* [xhr.send](Requests#send) - 以指定的方法和数据发起请求。
* [xhr.abort](Requests#abort) - 终止当前请求。
* [xhr.on](Requests#on) - 为请求添加"beforesend", "progress", "load" 或 "error" 等事件监听器。
* [[d3.text|Requests#d3_text]] - 请求一个text文件。
* [[d3.json|Requests#d3_json]] - 请求一个JSON。
* [[d3.html|Requests#d3_html]] - 请求一个html文本片段。
* [[d3.xml|Requests#d3_xml]] - 请求一个XML文本片段。
* [[d3.csv|CSV]] - 请求一个CSV(comma-separated values, 逗号分隔值)文件。
* [[d3.tsv|CSV#tsv]] - 请求一个TSV(tab-separated values, tab分隔值)文件。

### [[字符串格式化(String Formatting)|Formatting]]

* [[d3.format|Formatting#d3_format]] - 将数字转化成指定格式的字符串。转化的格式非常丰富，且非常智能。
* [d3.formatPrefix](Formatting#d3_formatPrefix) - 以指定的值和精度获得一个[SI prefix]对象。这个函数可用来自动判断数据的量级， 如K(千)，M(百万)等等。示例:  var prefix = d3.formatPrefix(1.21e9); console.log(prefix.symbol); // "G"; console.log(prefix.scale(1.21e9)); // 1.21
* [[d3.requote|Formatting#d3_requote]] - 将字符串转义成可在正则表达式中使用的格式。如 d3.requote('$'); // return "\$"
* [[d3.round|Formatting#d3_round]] - 设置某个数按小数点后多少位取整。与toFixed()类似，但返回格式为number。 如 d3.round(1.23); // return 1; d3.round(1.23, 1); // return 1.2; d3.round(1.25, 1); // return 1.3

### [[CSV 格式化 (d3.csv)|CSV]]

* [[d3.csv|CSV#csv]] - 获取一个CSV (comma-separated values, 冒号分隔值)文件。
* [[d3.csv.parse|CSV#parse]] - 将CSV文件字符串转化成object的数组，object的key由第一行决定。如： [{"Year": "1997", "Length": "2.34"}, {"Year": "2000", "Length": "2.38"}]
* [[d3.csv.parseRows|CSV#parseRows]] - 将CSV文件字符串转化成数组的数组。如： [ ["Year", "Length"],["1997", "2.34"],["2000", "2.38"] ]
* [[d3.csv.format|CSV#format]] - 将object的数组转化成CSV文件字符串，是d3.csv.parse的逆操作。
* [[d3.csv.formatRows|CSV#formatRows]] - 将数组的数组转化成CSV文件字符串，是d3.csv.parseRows的逆操作。
* [[d3.tsv|CSV#tsv]] - 获取一个TSV (tab-separated values, tab分隔值)文件。
* [[d3.tsv.parse|CSV#tsv_parse]] - 类似于d3.csv.parse。
* [[d3.tsv.parseRows|CSV#tsv_parseRows]] - 类似于d3.csv.parseRows。
* [[d3.tsv.format|CSV#tsv_format]] - 类似于d3.csv.format。
* [[d3.tsv.formatRows|CSV#tsv_formatRows]] - 类似于d3.csv.formatRows。
* [d3.dsv](CSV#dsv) - 创建一个类似于d3.csv的文件处理对象，可以自定义分隔符和mime type。如：var dsv = d3.dsv("|", "text/plain");

### [[颜色]]

* [[d3.rgb|Colors#d3_rgb]] - 指定一种颜色，创建一个RGB颜色对象。支持多种颜色格式的输入。
* [[rgb.brighter|Colors#rgb_brighter]] - 增强颜色的亮度，变化幅度由参数决定。
* [[rgb.darker|Colors#rgb_darker]] - 减弱颜色的亮度，变化幅度由参数决定。
* [[rgb.hsl|Colors#rgb_hsl]] - 将RGB颜色对象转化成HSL颜色对象。
* [[rgb.toString|Colors#rgb_toString]] - RGB颜色转化为字符串格式。
* [[d3.hsl|Colors#d3_hsl]] - 创建一个HSL颜色对象。支持多种颜色格式的输入。
* [[hsl.brighter|Colors#hsl_brighter]] - 增强颜色的亮度，变化幅度由参数决定。
* [[hsl.darker|Colors#hsl_darker]] - 减弱颜色的亮度，变化幅度由参数决定。
* [[hsl.rgb|Colors#hsl_rgb]] - 将HSL颜色对象转化成RGB颜色对象。
* [[hsl.toString|Colors#hsl_toString]] - HSL颜色转化为字符串格式。
* [[d3.lab|Colors#d3_lab]] - 创建一个Lab颜色对象。支持多种颜色格式的输入。
* [[lab.brighter|Colors#lab_brighter]] - 增强颜色的亮度，变化幅度由参数决定。
* [[lab.darker|Colors#lab_darker]] - 减弱颜色的亮度，变化幅度由参数决定。
* [[lab.rgb|Colors#lab_rgb]] - 将Lab颜色对象转化成RGB颜色对象。
* [[lab.toString|Colors#lab_toString]] - Lab颜色转化为字符串格式。
* [[d3.hcl|Colors#d3_hcl]] - 创建一个HCL颜色对象。支持多种颜色格式的输入。
* [[hcl.brighter|Colors#hcl_brighter]] - 增强颜色的亮度，变化幅度由参数决定。
* [[hcl.darker|Colors#hcl_darker]] - 减弱颜色的亮度，变化幅度由参数决定。
* [[hcl.rgb|Colors#hcl_rgb]] - 将HCL颜色对象转化成RGB颜色对象。
* [[hcl.toString|Colors#hcl_toString]] - HCL颜色转化为字符串格式。

### [[命名空间|Namespaces]]

* [[d3.ns.prefix|Namespaces#prefix]] - 获取或扩展已知的XML命名空间。
* [[d3.ns.qualify|Namespaces#qualify]] - 验证命名空间前缀是否存在, 如"xlink:href"中xlink是已知的命名空间。

### [[内部方法（Internals）|Internals]]

* [[d3.functor|Internals#functor]] - 函数化。将非函数变量转化为只返回该变量值的函数。输入函数，则返回原函数；输入值，则返回一个函数，该函数只返回原值。
* [[d3.rebind|Internals#rebind]] - 将一个对象的方法绑定到另一个对象上。
* [[d3.dispatch|Internals#d3_dispatch]] - 创建一个定制的事件。
* [[dispatch.on|Internals#dispatch_on]] - 添加或移除一个事件监听器。对一个事件可添加多个监听器。
* [[dispatch.type|Internals#_dispatch]] - 触发事件。其中‘type’为要触发的事件的名称。

## [d3.scale(Scales)](Scales)

### [[定量变换(Quantitative)|Quantitative-Scales#quantitative]]

* [[d3.scale.linear|Quantitative-Scales#linear]] - 创建一个线性定量变换。（建议参考源码以深入理解各种变换。）
* [[linear|Quantitative-Scales#_linear]] - 输入一个定义域的值，返回一个值域的值。
* [[linear.invert|Quantitative-Scales#linear_invert]] - 反变换，输入值域值返回定义域值。
* [[linear.domain|Quantitative-Scales#linear_domain]] - get或set定义域。
* [[linear.range|Quantitative-Scales#linear_range]] - get或set值域。
* [[linear.rangeRound|Quantitative-Scales#linear_rangeRound]] - 设置值域，并对结果取整。
* [[linear.interpolate|Quantitative-Scales#linear_interpolate]] - get或set变换的插值函数，如将默认的线性插值函数替换成取整的线性插值函数d3_interpolateRound。
* [[linear.clamp|Quantitative-Scales#linear_clamp]] - 设置值域是否闭合，默认不闭合。当值域闭合时，如果插值结果在值域之外，会取值域的边界值。如值域为[1, 2],插值函数的计算结果为3，如果不闭合，最终结果为3；如果闭合，最终结果为2。
* [[linear.nice|Quantitative-Scales#linear_nice]] - 扩展定义域范围使定义域更规整。如[0.20147987687960267, 0.996679553296417] 变成 [0.2, 1]。
* [[linear.ticks|Quantitative-Scales#linear_ticks]] - 从定义域中取出有代表性的值。通常用于坐标轴刻度的选取。
* [[linear.tickFormat|Quantitative-Scales#linear_tickFormat]] - 获取格式转化函数，通常用于坐标轴刻度的格式转化。如：var x = d3.scale.linear().domain([-1, 1]);   console.log(x.ticks(5).map(x.tickFormat(5, "+%"))); // ["-100%", "-50%", "+0%", "+50%", "+100%"]
* [[linear.copy|Quantitative-Scales#linear_copy]] - 从已有的变换中复制出一个变换。
* [[d3.scale.sqrt|Quantitative-Scales#sqrt]] - 创建一个求平方根的定量转换。
* [[d3.scale.pow|Quantitative-Scales#pow]] - 创建一个指数变换。（可参考linear对应函数的注释）
* [[pow|Quantitative-Scales#_pow]] - 输入一个定义域的值，返回一个值域的值。
* [[pow.invert|Quantitative-Scales#pow_invert]] - 反变换，输入值域值返回定义域值。
* [[pow.domain|Quantitative-Scales#pow_domain]] - get或set定义域。
* [[pow.range|Quantitative-Scales#pow_range]] - get或set值域。
* [[pow.rangeRound|Quantitative-Scales#pow_rangeRound]] - 设置值域，并对结果取整。
* [[pow.interpolate|Quantitative-Scales#pow_interpolate]] - get或set变换的插值函数。
* [[pow.clamp|Quantitative-Scales#pow_clamp]] -  设置值域是否闭合，默认不闭合。
* [[pow.nice|Quantitative-Scales#pow_nice]] - 扩展定义域范围使定义域更规整。
* [[pow.ticks|Quantitative-Scales#pow_ticks]] - 从定义域中取出有代表性的值。通常用于坐标轴刻度的选取。
* [[pow.tickFormat|Quantitative-Scales#pow_tickFormat]] - 获取格式转化函数，通常用于坐标轴刻度的格式转化。
* [[pow.exponent|Quantitative-Scales#pow_exponent]] - get或set指数的幂次。默认为1次幂。
* [[pow.copy|Quantitative-Scales#pow_copy]] - 从已有的变换中复制出一个变换。
* [[d3.scale.log|Quantitative-Scales#log]] - 创建一个对数变换。（可参考linear对应函数的注释）
* [[log|Quantitative-Scales#_log]] - 输入一个定义域的值，返回一个值域的值。
* [[log.invert|Quantitative-Scales#log_invert]] - 反变换，输入值域值返回定义域值。
* [[log.domain|Quantitative-Scales#log_domain]] - get或set定义域。
* [[log.range|Quantitative-Scales#log_range]] - get或set值域。
* [[log.rangeRound|Quantitative-Scales#log_rangeRound]] - 设置值域，并对结果取整。
* [[log.interpolate|Quantitative-Scales#log_interpolate]] - get或set变换的插值函数。
* [[log.clamp|Quantitative-Scales#log_clamp]] - 设置值域是否闭合，默认不闭合。
* [[log.nice|Quantitative-Scales#log_nice]] - 扩展定义域范围使定义域更规整。
* [[log.ticks|Quantitative-Scales#log_ticks]] - 从定义域中取出有代表性的值。通常用于坐标轴刻度的选取。
* [[log.tickFormat|Quantitative-Scales#log_tickFormat]] - 获取格式转化函数，通常用于坐标轴刻度的格式转化。
* [[log.copy|Quantitative-Scales#log_copy]] - 从已有的变换中复制出一个变换。
* [[d3.scale.quantize|Quantitative-Scales#quantize]] - 创建一个quantize线性变换,定义域为一个数值区间，值域为几个离散值。
* [[quantize|Quantitative-Scales#_quantize]] - 输入数值，返回离散值。如： var q = d3.scale.quantize().domain([0, 1]).range(['a', 'b', 'c']); //q(0.3) === 'a', q(0.4) === 'b', q(0.6) === 'b', q(0.7) ==='c;
* [quantize.invertExtent](Quantitative-Scales#quantize_invertExtent) - 返回得到某个离散值的值域范围。 // q.invertExtent('a') 的结果为 [0, 0.3333333333333333]
* [[quantize.domain|Quantitative-Scales#quantize_domain]] - get或set变换的定义域。
* [[quantize.range|Quantitative-Scales#quantize_range]] - get或set变换的值域。
* [[quantize.copy|Quantitative-Scales#quantize_copy]] - 从已有的变换中复制出一个变换。
* [[d3.scale.threshold|Quantitative-Scales#threshold]] - 构建一个threshold(阈值)线性变换。定义域为分隔值数值序列，值域为离散值。它与quantize的区别是quantize指定的值域为一个区间，然后均分这个区间为多个小区间，以对应各离散值。threshold则指定各小区间的边界分隔值。示例: var t = d3.scale.threshold().domain([0, 1]).range(['a', 'b', 'c']);  t(-1) === 'a';  t(0) === 'b';  t(0.5) === 'b';  t(1) === 'c';  t(1000) === 'c'; t.invertExtent('a'); //returns [undefined, 0]  t.invertExtent('b'); //returns [0, 1]   t.invertExtent('c'); //returns [1, undefined]
* [[threshold|Quantitative-Scales#_threshold]] - 输入数值，返回离散值。
* [threshold.invertExtent](Quantitative-Scales#threshold_invertExtent) - 输入离散值，返回数值。
* [[threshold.domain|Quantitative-Scales#threshold_domain]] - get或set变换的定义域。
* [[threshold.range|Quantitative-Scales#threshold_range]] - get或set变换的值域。
* [[threshold.copy|Quantitative-Scales#threshold_copy]] - 从已有的变换中复制出一个变换。
* [[d3.scale.quantile|Quantitative-Scales#quantile]] - 构建一个quantile线性变换。使用方法与quantize完全类似，区别是quantile根据中位数来分隔区间，quantize根据算数平均值来分隔区间。[example](http://stackoverflow.com/questions/19258996/what-is-the-difference-between-d3-scale-quantize-and-d3-scale-quantile)
* [[quantile|Quantitative-Scales#_quantile]] - 输入数值，返回离散值。
* [quantile.invertExtent](Quantitative-Scales#quantile_invertExtent) - 输入离散值，返回数值。
* [[quantile.domain|Quantitative-Scales#quantile_domain]] - get或set变换的定义域。
* [[quantile.range|Quantitative-Scales#quantile_range]] - get或set变换的值域。
* [[quantile.quantiles|Quantitative-Scales#quantile_quantiles]] - 获得quantile变换的分隔值。示例： var q = d3.scale.quantile().domain([0, 1]).range(['a', 'b', 'c']); q.quantiles() returns [0.33333333333333326, 0.6666666666666665]
* [[quantile.copy|Quantitative-Scales#quantile_copy]] - 从已有的变换中复制出一个变换。
* [[d3.scale.identity|Quantitative-Scales#identity]] - 构建一个identity线性变换。特殊的linear线性变换，此变换定义域和值域相同，只在一些d3内部的axis或brush模块中用到。
* [[identity|Quantitative-Scales#_identity]] - identity线性变换函数。返回输入值。
* [[identity.invert|Quantitative-Scales#_identity]] - 和identity函数相同，返回输入值。
* [[identity.domain|Quantitative-Scales#identity_domain]] - get或set变换的定义域。
* [[identity.range|Quantitative-Scales#identity_domain]] - get或set变换的值域。
* [[identity.ticks|Quantitative-Scales#identity_ticks]] - 从定义域中取出有代表性的值。通常用于坐标轴刻度的选取。
* [[identity.tickFormat|Quantitative-Scales#identity_tickFormat]] - 获取格式转化函数，通常用于坐标轴刻度的格式转化。
* [[identity.copy|Quantitative-Scales#identity_copy]] - 从已有的变换中复制出一个变换。

### [[序数变换（Ordinal）|Ordinal-Scales#ordinal]]

* [[d3.scale.ordinal|Ordinal-Scales#ordinal]] - 构建一个ordinal变换对象。ordinal变换的输入定义域和输出值域都是离散的。而quantitative变换的输入定义域是连续的，这是两者最大的不同。
* [[ordinal|Ordinal-Scales#_ordinal]] - 输入一个离散值，返回一个离散值。不在当前定义域中的输入值会自动加入定义域。
* [[ordinal.domain|Ordinal-Scales#ordinal_domain]] - get或set变换的定义域。
* [[ordinal.range|Ordinal-Scales#ordinal_range]] - get或set变换的值域。
* [[ordinal.rangePoints|Ordinal-Scales#ordinal_rangePoints]] - 用几个离散点来分割一个连续的区间。详情请看链接中的图例。
* [[ordinal.rangeBands|Ordinal-Scales#ordinal_rangeBands]] - 用几个离散区间来分割一个连续的区间。详情请看链接中的图例。
* [[ordinal.rangeRoundBands|Ordinal-Scales#ordinal_rangeRoundBands]] - 用几个离散区间来分割一个连续的区间，区间边界和宽度会取整。详情请看链接中的图例。
* [[ordinal.rangeBand|Ordinal-Scales#ordinal_rangeBand]] - 获取离散区间的宽度。
* [[ordinal.rangeExtent|Ordinal-Scales#ordinal_rangeExtent]] - 获取输出域的最小最大值。
* [[ordinal.copy|Ordinal-Scales#ordinal_copy]] - 从已有的变换中复制出一个变换。
* [[d3.scale.category10|Ordinal-Scales#category10]] - 用10种颜色构建一个ordinal变换。
* [[d3.scale.category20|Ordinal-Scales#category20]] - 用20种颜色构建一个ordinal变换。
* [[d3.scale.category20b|Ordinal-Scales#category20b]] - 用另外20种颜色构建一个ordinal变换。
* [[d3.scale.category20c|Ordinal-Scales#category20c]] - 用另外20种颜色构建一个ordinal变换。

## [d3.svg (SVG)](SVG)

### [[Shapes|SVG-Shapes]]

* [[d3.svg.line|SVG-Shapes#line]] - 创建一个线段生成器.
* [[line|SVG-Shapes#_line]] - 在折线图里生成一段折线.
* [[line.x|SVG-Shapes#line_x]] - 设置或获取*x*轴访问器.
* [[line.y|SVG-Shapes#line_y]] - 设置或获取*y*轴访问器
* [[line.interpolate|SVG-Shapes#line_interpolate]] - 设置或获取插值模式.
* [[line.tension|SVG-Shapes#line_tension]] - 获取或设置曲线张力访问器(cardinal spline tension). 
* [line.defined](SVG-Shapes#line_defined) - 定义线条在某一点是否存在.
* [[d3.svg.line.radial|SVG-Shapes#line_radial]] - 创建辐射线生成器.
* [[line|SVG-Shapes#_line_radial]] - 生成分段的线性曲线，用于纬度线／雷达线图表.
* [[line.radius|SVG-Shapes#line_radial_radius]] - 获取或设置*radius*访问器.
* [[line.angle|SVG-Shapes#line_radial_angle]] - 获取或设置*angle*访问器.
* [line.defined](SVG-Shapes#line_radial_defined) - 设置或获取线条定义存取器.
* [[d3.svg.area|SVG-Shapes#area]] - 创建一个新的区域生成器.
* [[area|SVG-Shapes#_area]] - 生成一个线性的区域,用于区域图表.
* [[area.x|SVG-Shapes#area_x]] - 获取或设置*x*坐标的访问器.
* [[area.x0|SVG-Shapes#area_x0]] - 获取或设置*x0*坐标(基线)的访问器.
* [[area.x1|SVG-Shapes#area_x1]] - 获取或设置*x1*坐标(背线)的访问器.
* [[area.y|SVG-Shapes#area_y]] - 获取或设置*y*坐标的访问器.
* [[area.y0|SVG-Shapes#area_y0]] - 获取或设置*y0*坐标(基线)的访问器.
* [[area.y1|SVG-Shapes#area_y1]] - 获取或设置*y1*坐标(背线)的访问器.
* [[area.interpolate|SVG-Shapes#area_interpolate]] - 获取或设置插值模式.
* [[area.tension|SVG-Shapes#area_tension]] - 获取或设置张力访问器(the cardinal spline tension).
* [area.defined](SVG-Shapes#area_defined) - 判断获取或定义区域定义存取器.
* [[d3.svg.area.radial|SVG-Shapes#area_radial]] - 创建新的区域生成器.
* [[area|SVG-Shapes#_area_radial]] - 生成分段的线性区域,用于纬度/雷达图表.
* [[area.radius|SVG-Shapes#area_radial_radius]] - 获取或设置*radius*访问器.
* [[area.innerRadius|SVG-Shapes#area_radial_innerRadius]] - 获取或设置内部的*radius*(基线)访问器.
* [[area.outerRadius|SVG-Shapes#area_radial_outerRadius]] - 获取或设置外部的*radius*(背线)访问器.
* [[area.angle|SVG-Shapes#area_radial_angle]] - 获取或设置*angle*访问器.
* [[area.startAngle|SVG-Shapes#area_radial_startAngle]] - 获取或设置内部的*angle*(基线)访问器.
* [[area.endAngle|SVG-Shapes#area_radial_endAngle]] -  获取或设置外部的*angle*(背线)访问器.
* [area.defined](SVG-Shapes#area_radial_defined) - 判断获取或定义区域定义存取器.
* [[d3.svg.arc|SVG-Shapes#arc]] - 创建弧度生成器.
* [[arc|SVG-Shapes#_arc]] - 生成一个线性弧度,用于饼图或甜甜圈图.
* [[arc.innerRadius|SVG-Shapes#arc_innerRadius]] - 获取或设置内部的半径访问器.
* [[arc.outerRadius|SVG-Shapes#arc_outerRadius]] -  获取或设置外部的半径访问器.
* [[arc.startAngle|SVG-Shapes#arc_startAngle]] -  获取或设置起始角度访问器.
* [[arc.endAngle|SVG-Shapes#arc_endAngle]] - 获取或设置结束角度访问器.
* [[arc.centroid|SVG-Shapes#arc_centroid]] - 计算弧的重心点.
* [[d3.svg.symbol|SVG-Shapes#symbol]] - 创建符号生成器.
* [[symbol|SVG-Shapes#_symbol]] - 生成指定的符号,用于散列图.
* [[symbol.type|SVG-Shapes#symbol_type]] - 获取或设置符号类型访问器.
* [[symbol.size|SVG-Shapes#symbol_size]] - 获取或设置符号尺寸(in square pixels) 访问器.
* [d3.svg.symbolTypes](SVG-Shapes#symbolTypes) - 被支持的符号类型数组.
* [[d3.svg.chord|SVG-Shapes#chord]] - 创建新的弦生成器.
* [[chord|SVG-Shapes#_chord]] - 生成一个二次贝塞尔曲线连接两个弧, 用于弦图.
* [[chord.radius|SVG-Shapes#chord_radius]] - 获取或设置弧半径访问器.
* [[chord.startAngle|SVG-Shapes#chord_startAngle]] - 获取或设置弧起始角度访问器.
* [[chord.endAngle|SVG-Shapes#chord_endAngle]] - 获取或设置弧结束角度访问器.
* [[chord.source|SVG-Shapes#chord_source]] - 获取或设置源弧度访问器.
* [[chord.target|SVG-Shapes#chord_target]] - 获取或设置目标弧度访问器.
* [[d3.svg.diagonal|SVG-Shapes#diagonal]] - 创建新的斜线生成器.
* [[diagonal|SVG-Shapes#_diagonal]] - 生成一个二维贝塞尔连接器, 用于节点连接图.
* [[diagonal.source|SVG-Shapes#diagonal_source]] - 获取或设置源点访问器.
* [[diagonal.target|SVG-Shapes#diagonal_target]] - 获取或设置目标点访问器.
* [[diagonal.projection|SVG-Shapes#diagonal_projection]] - 获取或设置一个可选的点变换器.
* [[d3.svg.diagonal.radial|SVG-Shapes#diagonal_radial]] - 创建一个新的斜线生成器.
* [[diagonal|SVG-Shapes#_diagonal_radial]] - 创建一个二维贝塞尔连接器,用于节点连接图.

### [[坐标轴(Axes)|SVG-Axes]]

* [[d3.svg.axis|SVG-Axes#axis]] - 创建一个axis生成器。
* [[axis|SVG-Axes#_axis]] - 正式在页面中生成axis。
* [[axis.scale|SVG-Axes#scale]] - get或set坐标轴的scale尺度变换，该尺度变换设定了数值和像素位置的转换规则。
* [[axis.orient|SVG-Axes#orient]] - get或set坐标轴刻度方向。
* [[axis.ticks|SVG-Axes#ticks]] - 控制坐标轴刻度的产生方式。
* [[axis.tickValues|SVG-Axes#tickValues]] - 设置特定的坐标轴的值。
* [[axis.tickSize|SVG-Axes#tickSize]] - 指定坐标轴上刻度线的像素长度。
* [[axis.innerTickSize|SVG-Axes#innerTickSize]] - get或set坐标轴小刻度线的像素长度。
* [[axis.outerTickSize|SVG-Axes#outerTickSize]] - get或set坐标轴大刻度线的像素长度。
* [[axis.tickPadding|SVG-Axes#tickPadding]] - 指定坐标轴刻度和刻度文字之间的像素距离。
* [[axis.tickFormat|SVG-Axes#tickFormat]] - 设置刻度文字的格式。

### [Controls](SVG-Controls)

* [d3.svg.brush](SVG-Controls#brush) - 点击拖拽选择一个二维区域。
* [brush](SVG-Controls#_brush) - 在页面中某个区域中正式绑定一个brush。
* [brush.x](SVG-Controls#brush_x) - get或set brush的x变换,用于水平方向的拖拽。
* [brush.y](SVG-Controls#brush_y) - get或set brush的y变换,用于垂直方向的拖拽。
* [brush.extent](SVG-Controls#brush_extent) - get或set brush的选取范围（extent）。
* [brush.clear](SVG-Controls#brush_clear) - 设置brush的选取范围（extent）为空。
* [brush.empty](SVG-Controls#brush_empty) - 判断brush的选取范围（extent）是否为空。
* [brush.on](SVG-Controls#brush_on) - get或set brush的事件监听器。可监听3种事件：brushstart, brush, brushend。
* [brush.event](SVG-Controls#brush_event) - 通过程序触发监听事件，在通过程序设置extent后使用。

## [d3.time (Time)](Time)

### [[时间格式转换(Time Formatting) | Time Formatting]]

* [[d3.time.format|Time-Formatting#format]] - 创建基于某种时间格式的本地时间格式转换器。
* [[format|Time-Formatting#_format]] - 将一个date对象转换成特定时间格式的字符串。
* [[format.parse|Time-Formatting#parse]] - 将特定时间格式的字符串转换成date对象。
* [[d3.time.format.utc|Time-Formatting#format_utc]] - 创建基于某种时间格式的世界标准时间（UTC）格式转换器。
* [[d3.time.format.iso|Time-Formatting#format_iso]] - 创建基于某种时间格式的ISO世界标准时间（ISO 8601 UTC）格式转换器。

### [时间变换(Time Scales)](Time Scales)

* [[d3.time.scale|Time-Scales#scale]] - 创建一个线性时间变换，定义域为数值区间，值域为时间区间。常用于时间坐标轴的创建。详情可参考d3.scale.linear。
* [[scale|Time-Scales#_scale]] - 输入为一个数值，返回为一个时间。
* [[scale.invert|Time-Scales#invert]] - 反变换，输入时间返回数值。
* [[scale.domain|Time-Scales#domain]] - get或set变换的定义域。
* [[scale.nice|Time-Scales#nice]] - 扩展定义域范围使定义域更规整。
* [[scale.range|Time-Scales#range]] - get或set变换的值域。
* [[scale.rangeRound|Time-Scales#rangeRound]] - 设置值域，并对结果取整。
* [[scale.interpolate|Time-Scales#interpolate]] - get或set变换的插值函数，如将默认的线性插值函数替换成指数插值函数。
* [[scale.clamp|Time-Scales#clamp]] - 设置值域是否闭合，默认不闭合。当值域闭合时，如果插值结果在值域之外，会取值域的边界值。详情参考linear.clamp。
* [[scale.ticks|Time-Scales#ticks]] - 从定义域中取出有代表性的值。通常用于坐标轴刻度的选取。
* [[scale.tickFormat|Time-Scales#tickFormat]] - 获取格式转化函数，通常用于坐标轴刻度的格式转化。
* [[scale.copy|Time-Scales#copy]] - 从已有的时间变换中复制出一个变换。

### [[Time Intervals]]

* [[d3.time.interval|Time-Intervals#interval]] - 返回一个对于本地时间时间间隔器.
* [[interval|Time-Intervals#_interval]] - 效果同interval.floor方法.
* [[interval.range|Time-Intervals#interval_range]] - 返回指定区间内日期.
* [[interval.floor|Time-Intervals#interval_floor]] - 下舍入到最近的间隔值.
* [[interval.round|Time-Intervals#interval_round]] - 上舍入或下舍入到最近的间隔值.
* [[interval.ceil|Time-Intervals#interval_ceil]] - 上舍入到最近的间隔值.
* [[interval.offset|Time-Intervals#interval_offset]] - 返回指定时间间隔的日期偏移量.
* [[interval.utc|Time-Intervals#interval_utc]] - 返回对应的UTC时间间隔.
* [[d3.time.day|Time-Intervals#day]] - 返回指定时间基于天起始的时间(默认起始是12:00am).
* [[d3.time.days|Time-Intervals#day]] - 返回指定时间区间和间隔条件的基于天的所有时间,效果同day.range.
* [d3.time.dayOfYear](Time-Intervals#dayOfYear) - 计算指定时间在年中的天数.
* [[d3.time.hour|Time-Intervals#hour]] - 返回指定时间基于小时起始的时间(e.g., 1:00 AM).
* [[d3.time.hours|Time-Intervals#hours]] - 返回指定时间区间和间隔条件的基于小时的所有时间, 效果同hour.range.
* [[d3.time.minute|Time-Intervals#minute]] - 返回指定时间基于分钟起始的时间 (e.g., 1:02 AM).
* [[d3.time.minutes|Time-Intervals#minutes]] - 返回指定时间区间和间隔条件的基于分钟的所有时间,效果同minute.range.
* [[d3.time.month|Time-Intervals#month]] - 返回指定时间基于月起始的时间(e.g., February 1, 12:00 AM).
* [[d3.time.months|Time-Intervals#months]] - 返回指定时间区间和间隔条件的基于月的所有时间,效果同month.range.
* [[d3.time.second|Time-Intervals#second]] - 返回指定时间基于秒起始的时间(e.g., 1:02:03 AM).
* [[d3.time.seconds|Time-Intervals#seconds]] - 返回指定时间区间和间隔条件的基于秒的所有时间,效果同second.range.
* [[d3.time.sunday|Time-Intervals#sunday]] - 返回指定时间基于Sunday起始的时间(e.g., February 5, 12:00 AM).
* [[d3.time.sundays|Time-Intervals#sundays]] - 返回指定时间区间和间隔条件的基于sunday的所有时间, 效果同sunday.range.
* [d3.time.sundayOfYear](Time-Intervals#sundayOfYear) - 计算以sunday为基点的指定时间在一年中的周数.
* [[d3.time.monday|Time-Intervals#monday]] - every Monday (e.g., February 5, 12:00 AM).
* [[d3.time.mondays|Time-Intervals#mondays]] - alias for monday.range.
* [d3.time.mondayOfYear](Time-Intervals#mondayOfYear) - computes the monday-based week number.
* [[d3.time.tuesday|Time-Intervals#tuesday]] - every Tuesday (e.g., February 5, 12:00 AM).
* [[d3.time.tuesdays|Time-Intervals#tuesdays]] - alias for tuesday.range.
* [d3.time.tuesdayOfYear](Time-Intervals#tuesdayOfYear) - computes the tuesday-based week number.
* [[d3.time.wednesday|Time-Intervals#wednesday]] - every Wednesday (e.g., February 5, 12:00 AM).
* [[d3.time.wednesdays|Time-Intervals#wednesdays]] - alias for wednesday.range.
* [d3.time.wednesdayOfYear](Time-Intervals#tuesdayOfYear) - computes the wednesday-based week number.
* [[d3.time.thursday|Time-Intervals#thursday]] - every Thursday (e.g., February 5, 12:00 AM).
* [[d3.time.thursdays|Time-Intervals#thursdays]] - alias for thursday.range.
* [d3.time.thursdayOfYear](Time-Intervals#thursdayOfYear) - computes the thursday-based week number.
* [[d3.time.friday|Time-Intervals#friday]] - every Friday (e.g., February 5, 12:00 AM).
* [[d3.time.fridays|Time-Intervals#fridays]] - alias for friday.range.
* [d3.time.fridayOfYear](Time-Intervals#fridayOfYear) - computes the friday-based week number.
* [[d3.time.saturday|Time-Intervals#saturday]] - every Saturday (e.g., February 5, 12:00 AM).
* [[d3.time.saturdays|Time-Intervals#saturdays]] - alias for saturday.range.
* [d3.time.saturdayOfYear](Time-Intervals#saturdayOfYear) - computes the saturday-based week number.
* [[d3.time.week|Time-Intervals#week]] - alias for sunday.
* [[d3.time.weeks|Time-Intervals#weeks]] - alias for sunday.range.
* [d3.time.weekOfYear](Time-Intervals#weekOfYear) - alias for sundayOfYear.
* [[d3.time.year|Time-Intervals#year]] - 返回指定时间基于年起始的时间(e.g., January 1, 12:00 AM).
* [[d3.time.years|Time-Intervals#years]] - 返回指定时间区间和间隔条件的所有时间,效果同year.range.

## [构图(d3.layout)](Layouts)

### [[Bundle|Bundle-Layout]]

* [[d3.layout.bundle|Bundle-Layout#bundle]] - construct a new default bundle layout.
* [[bundle|Bundle-Layout#_bundle]] - apply Holten's *hierarchical bundling* algorithm to edges.

### [[弦图(Chord)|Chord-Layout]]

* [[d3.layout.chord|Chord-Layout#chord]] - 初始化一个弦图对象, 返回一个 Chord 实例
* [[chord.matrix|Chord-Layout#matrix]] - 设置或者获取弦图实例对应的矩阵数据
* [[chord.padding|Chord-Layout#padding]] - 设置或获取弦图各段圆弧之间的间隔角度
* [[chord.sortGroups|Chord-Layout#sortGroups]] - 设置或获取矩阵分组的排序函数
* [[chord.sortSubgroups|Chord-Layout#sortSubgroups]] - 设置或获取矩阵二级分组的排序函数
* [[chord.sortChords|Chord-Layout#sortChords]] - 设置或获取弦图在z序上的排序函数(决定哪一组显示在最上层)
* [[chord.chords|Chord-Layout#chords]] - 该函数会将参数处理成对 chord 更友好的格式并返回, 若没有提供参数, 会调用matrix()来获取数据
* [[chord.groups|Chord-Layout#groups]] - 该函数参数处理成更易于理解的分组信息, 若没有提供参数, 会调用matrix()来获取数据

### [[集群(Cluster)|Cluster-Layout]]

* [[d3.layout.cluster|Cluster-Layout#cluster]] - 用默认设置生成一个集群布局对象.
* [[cluster.sort|Cluster-Layout#sort]] - 获取或设置一个函数, 用来给兄弟节点(同一父结点的子结点)的排序.
* [[cluster.children|Cluster-Layout#children]] - 获取或设置子结点的访问器.
* [[cluster.nodes|Cluster-Layout#nodes]] - 计算并返回指定结点的子结点在集群中的信息(坐标,深度等).
* [[cluster.links|Cluster-Layout#links]] - 指定一个子结点数组(通常是**nodes**函数返回值), 计算它们与父结点的连接信息.
* [[cluster.separation|Cluster-Layout#separation]] - 获取或设置相邻结点间的间隔(不仅限于兄弟结点).
* [[cluster.size|Cluster-Layout#size]] - 获取或设置布局的 *宽* 和 *高* 的大小.
* [[cluster.nodeSize|Cluster-Layout#nodeSize]] - 为结点指定大小.


### [[力学(Force)|Force-Layout]]

* [[d3.layout.force|Force-Layout#force]] -节点（node）基于物理模拟的位置连接。
* [[force.on|Force-Layout#on]] - 监听布局位置的变化。(仅支持"start","step","end"三种事件)
* [[force.nodes|Force-Layout#nodes]] - 获得或设置布局中的节点（node）阵列组。
* [[force.links|Force-Layout#links]] - 获得或设置布局中节点间的连接（Link）阵列组。.
* [[force.size|Force-Layout#size]] - 获取或设置布局的 *宽* 和 *高* 的大小.
* [[force.linkDistance|Force-Layout#linkDistance]] - 获取或设置节点间的连接线距离.
* [[force.linkStrength|Force-Layout#linkStrength]] - 获取或设置节点间的连接强度.
* [[force.friction|Force-Layout#friction]] - 获取或设置摩擦系数.
* [[force.charge|Force-Layout#charge]] - 获取或设置节点的电荷数.(电荷数决定结点是互相排斥还是吸引)
* [[force.gravity|Force-Layout#gravity]] - 获取或设置节点的引力强度.
* [[force.theta|Force-Layout#theta]] - 获取或设置电荷间互相作用的强度.
* [[force.start|Force-Layout#start]] - 开启或恢复结点间的位置影响.
* [[force.resume|Force-Layout#resume]] - 设置冷却系数为0.1,并重新调用start()函数.
* [[force.stop|Force-Layout#stop]] - 立刻终止结点间的位置影响.(等同于将*冷却系数*设置为0)
* [[force.alpha|Force-Layout#alpha]] - 获取或设置布局的冷却系数.(冷却系数为0时,节点间不再互相影响)
* [[force.tick|Force-Layout#tick]] - 让布局运行到下一步.
* [[force.drag|Force-Layout#drag]] - 获取当前布局的拖拽对象实例以便进一步绑定处理函数.

### [[层级布局(Hierarchy)|Hierarchy-Layout]]

* [[d3.layout.hierarchy|Hierarchy-Layout#hierarchy]] - 获得一个自定义的层级布局的实现.
* [[hierarchy.sort|Hierarchy-Layout#sort]] - 获取或设置一个函数, 用来给兄弟节点(同一父结点的子结点)的排序.
* [[hierarchy.children|Hierarchy-Layout#children]] - 获取或设置子结点的访问器.
* [[hierarchy.nodes|Hierarchy-Layout#nodes]] - 计算并返回指定结点的子结点信息.
* [[hierarchy.links|Hierarchy-Layout#links]] - 指定一个子结点数组(通常是**nodes**函数返回值), 计算它们与父结点的连接信息.
* [[hierarchy.value|Hierarchy-Layout#value]] - 获取或设置结点的**值**访问器.
* [[hierarchy.revalue|Hierarchy-Layout#revalue]] - 重新计算层级布局.

### [[直方图(Histogram)|Histogram-Layout]]

* [[d3.layout.histogram|Histogram-Layout#histogram]] - 构建一个默认直方图(用来表示一组离散数字的分布,横轴表示区间,纵轴表示区间内样本数量或样本百分比).
* [[histogram.value|Histogram-Layout#value]] - 获取或设置值访问器.
* [[histogram.range|Histogram-Layout#range]] - 获取或设置合法值范围.
* [[histogram.bins|Histogram-Layout#bins]] - 指定如何将数据分组到不同的区间(bin)里, 返回一个[[构造函数|Histogram-Layout#_histogram]] .
* [[histogram|Histogram-Layout#_histogram]] - 根据已设置的区间将数据分组,返回已分组的二维数组(compute the distribution of data using quantized bins).
* [[histogram.frequency|Histogram-Layout#frequency]] - 设置直方图Y轴值是区间内数据的总量还是百分比(compute the distribution as counts or probabilities).

### [层包(Pack)](Pack-Layout)

* [d3.layout.pack](Pack-Layout#pack) - 用递归的圆环表现一个多层级布局.
* [pack.sort](Pack-Layout#sort) - 获取或设置一个函数, 用来给兄弟节点(同一父结点的子结点)排序.
* [pack.children](Pack-Layout#children) - 获取或设置子结点的访问器.
* [pack.nodes](Pack-Layout#nodes) - 计算并返回指定结点的子结点信息.
* [pack.links](Pack-Layout#links) - 指定一个子结点数组(通常是**nodes**函数返回值), 计算它们与父结点的连接信息.
* [pack.value](Pack-Layout#value) - 获取或设置一个函数, 用来计算圆环的大小(近似值).
* [pack.size](Pack-Layout#size) - 设置整个布局画布的 *宽* and *高*.
* [pack.radius](Pack-Layout#radius) - 如果不想结点半径与结点的值相同, 可以传入一个函数用来计算结点半径.
* [pack.padding](Pack-Layout#padding) - 指定相邻结点之点的间距(近似值).

### [分区(Partition)](Partition-Layout)

* [d3.layout.partition](Partition-Layout#partition) - 将一棵树递归的分区.
* [partition.sort](Partition-Layout#sort) - 获取或设置一个函数, 用来给兄弟节点(同一父结点的子结点)排序.
* [partition.children](Partition-Layout#children) - 获取或设置子结点的访问器.
* [partition.nodes](Partition-Layout#nodes) - 计算并返回指定结点的子结点信息.
* [partition.links](Partition-Layout#links) - 指定一个子结点数组(通常是**nodes**函数返回值), 计算它们与父结点的连接信息.
* [partition.value](Partition-Layout#value) - 设置一个函数来来计算分区的值.
* [partition.size](Partition-Layout#size) - 设置整个布局画布的 *宽* and *高*.

### [饼图(Pie)](Pie-Layout)

* [d3.layout.pie](Pie-Layout#pie) - 构建一个默认的饼图.
* [pie](Pie-Layout#_pie) - 该函数将传入的原始参数转换成可用于饼图或者环形图的数据结构.
* [pie.value](Pie-Layout#value) - 获取或设置值访问器.
* [pie.sort](Pie-Layout#sort) - 设置饼图顺时针方向的排序方法.
* [pie.startAngle](Pie-Layout#startAngle) - 设置或获取整个饼图的起始角度.
* [pie.endAngle](Pie-Layout#endAngle) - 设置或获取整个饼图的终止角度.

### [堆叠图(Stack)](Stack-Layout)

* [d3.layout.stack](Stack-Layout#stack) - 构建一个默认的堆叠图(用来展示一系列x轴相同的面积图或者立方图).
* [stack](Stack-Layout#_stack) - 计算每一层的基线.
* [stack.values](Stack-Layout#values) - 设置或者获取每层的值访问器.
* [stack.order](Stack-Layout#order) - 设置每层的排序.
* [stack.offset](Stack-Layout#offset) - 指定总的基线算法.
* [stack.x](Stack-Layout#x) - 设置或获取每层的x轴访问器.
* [stack.y](Stack-Layout#y) - 设置或获取每层的y轴访问器.
* [stack.out](Stack-Layout#out) - 设置或获取用来储存基线的输出函数.

### [树(Tree)](Tree-Layout)

* [d3.layout.tree](Tree-Layout#tree) - position a tree of nodes tidily.
* [tree.sort](Tree-Layout#sort) - 设置或获取一个函数, 用来给兄弟节点(同一父结点的子结点)排序.
* [tree.children](Tree-Layout#children) - 设置或获取子结点的访问器.
* [tree.nodes](Tree-Layout#nodes) - 计算并返回指定结点的子结点信息.
* [tree.links](Tree-Layout#links) - 指定一个子结点数组(通常是**nodes**函数返回值), 计算它们与父结点的连接信息.
* [tree.separation](Tree-Layout#separation) - 设置或获取相隔结点之间的间隔计算函数.
* [tree.size](Tree-Layout#size) - 指定整个布局的宽和高.
* [tree.nodeSize](Tree-Layout#nodeSize) - 给全部结点指定一个固定的大小(会导致[tree.size](Tree-Layout#size)失效).

### [矩阵树(Treemap)](Treemap-Layout)

* [d3.layout.treemap](Treemap-Layout#treemap) - 返回一个矩阵树对象(用矩阵来展示一颗树).
* [treemap.sort](Treemap-Layout#sort) - 设置或获取一个函数, 用来给兄弟节点(同一父结点的子结点)排序.
* [treemap.children](Treemap-Layout#children) - 设置或获取子结点的访问器.
* [treemap.nodes](Treemap-Layout#nodes) - 计算并返回指定结点的子结点信息.
* [treemap.links](Treemap-Layout#links) - 指定一个子结点数组(通常是**nodes**函数返回值), 计算它们与父结点的连接信息.
* [treemap.value](Treemap-Layout#value) - 设置或获取一个用来计算单元格大小的值访问器.
* [treemap.size](Treemap-Layout#size) - 指定整个布局的宽和高.
* [treemap.padding](Treemap-Layout#padding) - 指定父结点和子结点的间距.
* [treemap.round](Treemap-Layout#round) - 禁用或启用边界补偿.
* [treemap.sticky](Treemap-Layout#sticky) - 让布局更"粘"以保证在更新数据时有平滑的动画效果.
* [treemap.mode](Treemap-Layout#mode) - 更改矩阵树的布局算法.


## [d3.geo (Geography)](Geo)

### [Paths](Geo-Paths)

* [d3.geo.path](Geo-Paths#path) - 创建一个新的地理路径生成器.
* [path](Geo-Paths#_path) - 投射指定的特性并且渲染到上下文.
* [path.projection](Geo-Paths#path_projection) - 获取活设置地理投影.
* [path.context](Geo-Paths#path_context) - 获取活设置渲染上下文.
* [path.pointRadius](Geo-Paths#path_pointRadius) -获取或设置半径去现实点的特性.
* [path.area](Geo-Paths#path_area) - 计算指定特性的投射区域.
* [path.centroid](Geo-Paths#path_centroid) - 计算指定特性的投射重心点.
* [path.bounds](Geo-Paths#path_bounds) - 计算指定特性的投射边界.
* [d3.geo.graticule](Geo-Paths#graticule) - 创建地理坐标网生成器.
* [graticule](Geo-Paths#_graticule) - 生产一个子午线或平行线的MultiLineStrings.
* [graticule.lines](Geo-Paths#graticule_lines) - 生成一个子午线和平行线的LineString的数组.
* [graticule.outline](Geo-Paths#graticule_outline) - 生成一个表示该坐标网的外框多边形.
* [graticule.extent](Geo-Paths#graticule_extent) - 获取或设置主要的和次要的范围.
* [graticule.majorExtent](Geo-Paths#graticule_majorExtent) - 获取或设置主要范围.
* [graticule.minorExtent](Geo-Paths#graticule_minorExtent) - 获取或设置次要范围.
* [graticule.step](Geo-Paths#graticule_step) - 获取或设置主要和次要的步间隔.
* [graticule.majorStep](Geo-Paths#graticule_majorStep) - 获取或设置主要的步间隔.
* [graticule.minorStep](Geo-Paths#graticule_minorStep) - 获取或设置次要的步间隔.
* [graticule.precision](Geo-Paths#graticule_precision) - 设置或者获取横向精度.
* [d3.geo.circle](Geo-Paths#circle) - 创建一个圆形的生成器.
* [circle](Geo-Paths#_circle) - 使用多边形来生成一个分段的圆形. 
* [circle.origin](Geo-Paths#circle_origin) - 通过横向和纵向坐标来指定原点.
* [circle.angle](Geo-Paths#circle_angle) - 指定以度为单位的角半径.
* [circle.precision](Geo-Paths#circle_precision) - 指定分段圆的精度.
* [d3.geo.area](Geo-Paths#area) - 根据给定特征计算球面面积.
* [d3.geo.bounds](Geo-Paths#bounds) - compute the latitude-longitude bounding box for a given feature.
* [d3.geo.centroid](Geo-Paths#centroid) - compute the spherical centroid of a given feature.
* [d3.geo.distance](Geo-Paths#distance) - compute the great-arc distance between two points.
* [d3.geo.interpolate](Geo-Paths#interpolate) - interpolate between two points along a great arc.
* [d3.geo.length](Geo-Paths#length) - compute the length of a line string or the circumference of a polygon.
* [d3.geo.rotation](Geo-Paths#rotation) - create a rotation function for the specified angles [λ, φ, γ].
* [rotation](Geo-Paths#_rotation) - rotate the given location around the sphere.
* [rotation.invert](Geo-Paths#rotation_invert) - inverse-rotate the given location around the sphere.

### [[Projections|Geo-Projections]]

* [d3.geo.projection](Geo-Projections#projection) - create a standard projection from a raw projection.
* [projection](Geo-Projections#_projection) - project the specified location.
* [projection.invert](Geo-Projections#invert) - invert the projection for the specified point.
* [projection.rotate](Geo-Projections#rotate) - get or set the projection’s three-axis rotation.
* [projection.center](Geo-Projections#center) - get or set the projection’s center location.
* [projection.translate](Geo-Projections#translate) - get or set the projection’s translation position.
* [projection.scale](Geo-Projections#scale) - get or set the projection’s scale factor.
* [projection.clipAngle](Geo-Projections#clipAngle) - get or set the radius of the projection’s clip circle.
* [projection.clipExtent](Geo-Projections#clipExtent) - get or set the projection’s viewport clip extent, in pixels.
* [projection.precision](Geo-Projections#precision) - get or set the precision threshold for adaptive resampling.
* [projection.stream](Geo-Projections#stream) - wrap the specified stream listener, projecting input geometry.
* [d3.geo.projectionMutator](Geo-Projections#projectionMutator) - create a standard projection from a mutable raw projection.
* [d3.geo.albers](Geo-Projections#albers) - the Albers equal-area conic projection.
* [albers.parallels](Geo-Projections#albers_parallels) - get or set the projection's two standard parallels.
* [d3.geo.albersUsa](Geo-Projections#albersUsa) - a composite Albers projection for the United States.
* [d3.geo.azimuthalEqualArea](Geo-Projections#azimuthalEqualArea) - the azimuthal equal-area projection.
* [d3.geo.azimuthalEquidistant](Geo-Projections#azimuthalEquidistant) - the azimuthal equidistant projection.
* [d3.geo.conicConformal](Geo-Projections#conicConformal) - the conic conformal projection.
* [d3.geo.conicEquidistant](Geo-Projections#conicEquidistant) - the conic equidistant projection.
* [d3.geo.conicEqualArea](Geo-Projections#conicEqualArea) the conic equal-area (a.k.a. Albers) projection.
* [d3.geo.equirectangular](Geo-Projections#equirectangular) - the equirectangular (plate carreé) projection.
* [d3.geo.gnomonic](Geo-Projections#gnomonic) - the gnomonic projection.
* [d3.geo.mercator](Geo-Projections#mercator) - the spherical Mercator projection.
* [d3.geo.orthographic](Geo-Projections#orthographic) - the azimuthal orthographic projection.
* [d3.geo.stereographic](Geo-Projections#stereographic) - the azimuthal stereographic projection.
* [d3.geo.azimuthalEqualArea.raw](Geo-Projections#azimuthalEqualArea_raw) - the raw azimuthal equal-area projection.
* [d3.geo.azimuthalEquidistant.raw](Geo-Projections#azimuthalEquidistant_raw) - the azimuthal equidistant projection.
* [d3.geo.conicConformal.raw](Geo-Projections#conicConformal_raw) - the raw conic conformal projection.
* [d3.geo.conicEquidistant.raw](Geo-Projections#conicEquidistant_raw) - the raw conic equidistant projection.
* [d3.geo.conicEqualArea.raw](Geo-Projections#conicEqualArea_raw) the raw conic equal-area (a.k.a. Albers) projection.
* [d3.geo.equirectangular.raw](Geo-Projections#equirectangular_raw) - the raw equirectangular (plate carrée) projection.
* [d3.geo.gnomonic.raw](Geo-Projections#gnomonic_raw) - the raw gnomonic projection.
* [d3.geo.mercator.raw](Geo-Projections#mercator_raw) - the raw Mercator projection.
* [d3.geo.orthographic.raw](Geo-Projections#orthographic_raw) - the raw azimuthal orthographic projection.
* [d3.geo.stereographic.raw](Geo-Projections#stereographic_raw) - the raw azimuthal stereographic projection.
* [d3.geo.transverseMercator.raw](Geo-Projections#transverseMercator_raw) - the raw transverse Mercator projection.

### [Streams](Geo-Streams)

* [d3.geo.stream](Geo-Streams#stream) - convert a GeoJSON object to a geometry stream.
* [stream.point](Geo-Streams#stream_point) - indicate an *x*, *y* (and optionally *z*) coordinate.
* [stream.lineStart](Geo-Streams#stream_lineStart) - indicate the start of a line or ring.
* [stream.lineEnd](Geo-Streams#stream_lineEnd) - indicate the end of a line or ring.
* [stream.polygonStart](Geo-Streams#stream_polygonStart) - indicate the start of a polygon.
* [stream.polygonEnd](Geo-Streams#stream_polygonEnd) - indicate the end of a polygon.
* [stream.sphere](Geo-Streams#stream_sphere) - indicate a sphere.
* [d3.geo.transform](Geo-Streams#transform) - transform streaming geometries.
* [transform.stream](Geo-Streams#transform_stream) - wraps a given stream.
* [d3.geo.clipExtent](Geo-Streams#clipExtent) - a stream transform that clips geometries to a given axis-aligned rectangle.
* [clipExtent.extent](Geo-Streams#clipExtent_extent) - sets the clip extent.

## [d3.geom (Geometry)](Geometry)

### [[Voronoi|Voronoi-Geom]]

* [d3.geom.voronoi](Voronoi-Geom#voronoi) - create a Voronoi layout with default accessors.
* [voronoi](Voronoi-Geom#_voronoi) - compute the Voronoi tessellation for the specified points.
* [voronoi.x](Voronoi-Geom#x) - get or set the x-coordinate accessor for each point.
* [voronoi.y](Voronoi-Geom#y) - get or set the y-coordinate accessor for each point.
* [voronoi.clipExent](Voronoi-Geom#clipExtent) - get or set the clip extent for the tesselation.
* [voronoi.links](Voronoi-Geom#links) - compute the Delaunay mesh as a network of links.
* [voronoi.triangles](Voronoi-Geom#triangles) - compute the Delaunay mesh as a triangular tessellation.

### [[Quadtree|Quadtree-Geom]]

* [[d3.geom.quadtree|Quadtree-Geom#quadtree]] - constructs a quadtree for an array of points.
* [[quadtree.add|Quadtree-Geom#add]] - add a point to the quadtree.
* [[quadtree.visit|Quadtree-Geom#visit]] - recursively visit nodes in the quadtree.

### [[Polygon|Polygon-Geom]]

* [[d3.geom.polygon|Polygon-Geom#polygon]] - create a polygon from the specified array of points.
* [[polygon.area|Polygon-Geom#area]] - compute the counterclockwise area of this polygon.
* [[polygon.centroid|Polygon-Geom#centroid]] - compute the area centroid of this polygon.
* [[polygon.clip|Polygon-Geom#clip]] - clip the specified polygon to this polygon.

### [[Hull|Hull-Geom]]

* [d3.geom.hull](Hull-Geom#hull) - create a convex hull layout with default accessors.
* [hull](Hull-Geom#_hull) - compute the convex hull for the given array of points.
* [hull.x](Hull-Geom#x) - get or set the *x*-coordinate accessor.
* [hull.y](Hull-Geom#y) - get or set the *y*-coordinate accessor.

## [[d3.behavior (Behaviors)|Behaviors]]

### [[Drag|Drag-Behavior]]

* [[d3.behavior.drag|Drag-Behavior#drag]]
* [[drag.origin|Drag-Behavior#origin]]
* [[drag.on|Drag-Behavior#on]]

### [缩放 Zoom](Zoom-Behavior)

* [d3.behavior.zoom](Zoom-Behavior#zoom) - 创建一个缩放行为.
* [zoom](Zoom-Behavior#_zoom) - 对指定元素应用缩放.
* [zoom.scale](Zoom-Behavior#scale) - the current scale factor.
* [zoom.translate](Zoom-Behavior#translate) - the current translate offset.
* [zoom.scaleExtent](Zoom-Behavior#scaleExtent) - optional limits on the scale factor.
* [zoom.center](Zoom-Behavior#center) - an optional focal point for mousewheel zooming.
* [zoom.size](Zoom-Behavior#size) - the dimensions of the viewport.
* [zoom.x](Zoom-Behavior#x) - an optional scale whose domain is bound to the _x_ extent of the viewport.
* [zoom.y](Zoom-Behavior#y) - an optional scale whose domain is bound to the _y_ extent of the viewport.
* [zoom.on](Zoom-Behavior#on) - listeners for when the scale or translate changes.
* [zoom.event](Zoom-Behavior#event) - dispatch zoom events after setting the scale or translate.