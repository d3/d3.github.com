> [Wiki](Home) ▸ **API リファレンス**

D3の全てはD3のネームスコープの下に[スコープ](//ja.wikipedia.org/wiki/%E3%82%B9%E3%82%B3%E3%83%BC%E3%83%97)されています。D3は[セマンティックバージョニング](//semver.org/)を使用しています。d3.バージョンで、D3の現在のバージョンをわかります。

## [d3 (core)](Core)

### [[Selections]]

* [[d3.select|Selections#d3_select]] - 現在のドキュメントから1つの要素を選択する
* [[d3.selectAll|Selections#d3_selectAll]] - 現在のドキュメントから複数の要素を選択する
* [[selection.attr|Selections#attr]] - 属性の値を取得、または設定する
* [[selection.classed|Selections#classed]] - CSSクラスを追加、または削除する
* [[selection.style|Selections#style]] - スタイルプロパティを取得、または設定する
* [[selection.property|Selections#property]] - get or set raw properties.
* [[selection.text|Selections#text]] - 要素内のテキストを取得、または設定する
* [[selection.html|Selections#html]] - 要素内のHTMLを取得、または設定する
* [[selection.append|Selections#append]] - 新しい要素を末尾に追加する
* [[selection.insert|Selections#insert]] - 新しい要素を指定した要素の前に挿入する
* [[selection.remove|Selections#remove]] - 要素を削除する
* [[selection.data|Selections#data]] - 要素集合のためのデータを取得、または設定する（未訳　while computing a relational join.）
* [[selection.enter|Selections#enter]] - 要素が足りない場合、プレースホルダを返す
* [[selection.exit|Selections#exit]] - 不要になった要素を返す
* [[selection.filter|Selections#filter]] - データに基づいてSelectionを絞り込む
* [[selection.datum|Selections#datum]] - 個々の要素のためのデータを取得、または設定する（未訳　without computing a join.）
* [[selection.sort|Selections#sort]] - sort elements in the document based on data.
* [[selection.order|Selections#order]] - reorders elements in the document to match the selection.
* [[selection.on|Selections#on]] - add or remove event listeners for interaction.
* [[selection.transition|Selections#transition]] - start a transition on the selected elements.
* [selection.interrupt](Selections#interrupt) - immediately interrupt the current transition, if any.
* [[selection.each|Selections#each]] - call a function for each selected element.
* [[selection.call|Selections#call]] - call a function passing in the current selection.
* [[selection.empty|Selections#empty]] - returns true if the selection is empty.
* [[selection.node|Selections#node]] - returns the first node in the selection.
* [selection.size](Selections#size) - Selectionの中の要素の数を返す
* [[selection.select|Selections#select]] - subselect a descendant element for each selected element.
* [[selection.selectAll|Selections#selectAll]] - subselect multiple descendants for each selected element.
* [[d3.selection|Selections#d3_selection]] - augment the selection prototype, or test instance types.
* [[d3.event|Selections#d3_event]] - access the current user event for interaction.
* [[d3.mouse|Selections#d3_mouse]] - gets the mouse position relative to a specified container.
* [[d3.touches|Selections#d3_touches]] - gets the touch positions relative to a specified container.

### [Transitions](Transitions)

* [d3.transition](Transitions#d3_transition) - start an animated transition.
* [transition.delay](Transitions#delay) - specify per-element delay in milliseconds.
* [transition.duration](Transitions#duration) - specify per-element duration in milliseconds.
* [transition.ease](Transitions#ease) - specify transition easing function.
* [transition.attr](Transitions#attr) - smoothly transition to the new attribute value.
* [transition.attrTween](Transitions#attrTween) - smoothly transition between two attribute values.
* [transition.style](Transitions#style) - smoothly transition to the new style property value.
* [transition.styleTween](Transitions#styleTween) - smoothly transition between two style property values.
* [transition.text](Transitions#text) - set the text content when the transition starts.
* [transition.tween](Transitions#tween) - specify a custom tween operator to run as part of the transition.
* [transition.select](Transitions#select) - start a transition on a descendant element for each selected element.
* [transition.selectAll](Transitions#selectAll) - start a transition on multiple descendants for each selected element.
* [transition.filter](Transitions#filter) - filter a transition based on data.
* [transition.transition](Transitions#transition) - when this transition ends, start another one on the same elements.
* [transition.remove](Transitions#remove) - remove selected elements at the end of a transition.
* [transition.empty](Transitions#empty) - returns true if the transition is empty.
* [transition.node](Transitions#node) - returns the first node in the transition.
* [transition.size](Transitions#size) - returns the number of elements in the selection.
* [transition.each](Transitions#each) - add a listener for transition end events.
* [transition.call](Transitions#call) - call a function passing in the current transition.
* [d3.ease](Transitions#d3_ease) - customize transition timing.
* [ease](Transitions#_ease) - a parametric easing function.
* [d3.timer](Transitions#d3_timer) - start a custom animation timer.
* [d3.timer.flush](Transitions#d3_timer_flush) - immediately execute any zero-delay timers.
* [d3.interpolate](Transitions#d3_interpolate) - interpolate two values.
* [interpolate](Transitions#_interpolate) - a parametric interpolation function.
* [d3.interpolateNumber](Transitions#d3_interpolateNumber) - interpolate two numbers.
* [d3.interpolateRound](Transitions#d3_interpolateRound) - interpolate two integers.
* [d3.interpolateString](Transitions#d3_interpolateString) - interpolate two strings.
* [d3.interpolateRgb](Transitions#d3_interpolateRgb) - interpolate two RGB colors.
* [d3.interpolateHsl](Transitions#d3_interpolateHsl) - interpolate two HSL colors.
* [d3.interpolateLab](Transitions#d3_interpolateLab) - interpolate two L\*a\*b\* colors.
* [d3.interpolateHcl](Transitions#d3_interpolateHcl) - interpolate two HCL colors.
* [d3.interpolateArray](Transitions#d3_interpolateArray) - interpolate two arrays of values.
* [d3.interpolateObject](Transitions#d3_interpolateObject) - interpolate two arbitrary objects.
* [d3.interpolateTransform](Transitions#d3_interpolateTransform) - interpolate two 2D matrix transforms.
* [d3.interpolateZoom](Transitions#d3_interpolateZoom) - zoom and pan between two points smoothly.
* [d3.interpolators](Transitions#d3_interpolators) - register a custom interpolator.

### [[Working with Arrays|Arrays]]

* [[d3.ascending|Arrays#d3_ascending]] - compare two values for sorting.
* [[d3.descending|Arrays#d3_descending]] - compare two values for sorting.
* [[d3.min|Arrays#d3_min]] - find the minimum value in an array.
* [[d3.max|Arrays#d3_max]] - find the maximum value in an array.
* [[d3.extent|Arrays#d3_extent]] - find the minimum and maximum value in an array.
* [[d3.sum|Arrays#d3_sum]] - compute the sum of an array of numbers.
* [[d3.mean|Arrays#d3_mean]] - compute the arithmetic mean of an array of numbers.
* [[d3.median|Arrays#d3_median]] - compute the median of an array of numbers (the 0.5-quantile).
* [[d3.quantile|Arrays#d3_quantile]] - compute a quantile for a sorted array of numbers.
* [[d3.bisect|Arrays#d3_bisect]] - search for a value in a sorted array.
* [[d3.bisectRight|Arrays#d3_bisectRight]] - search for a value in a sorted array.
* [[d3.bisectLeft|Arrays#d3_bisectLeft]] - search for a value in a sorted array.
* [[d3.bisector|Arrays#d3_bisector]] - bisect using an accessor.
* [d3.shuffle](Arrays#d3_shuffle) - randomize the order of an array.
* [[d3.permute|Arrays#d3_permute]] - reorder an array of elements according to an array of indexes.
* [[d3.zip|Arrays#d3_zip]] - transpose a variable number of arrays.
* [[d3.transpose|Arrays#d3_transpose]] - transpose an array of arrays.
* [[d3.pairs|Arrays#d3_pairs]] - returns an array of adjacent pairs of elements.
* [[d3.keys|Arrays#d3_keys]] - list the keys of an associative array.
* [[d3.values|Arrays#d3_values]] - list the values of an associated array.
* [[d3.entries|Arrays#d3_entries]] - list the key-value entries of an associative array.
* [[d3.merge|Arrays#d3_merge]] - merge multiple arrays into one array.
* [[d3.range|Arrays#d3_range]] - generate a range of numeric values.
* [[d3.nest|Arrays#d3_nest]] - group array elements hierarchically.
* [[nest.key|Arrays#nest_key]] - add a level to the nest hierarchy.
* [[nest.sortKeys|Arrays#nest_sortKeys]] - sort the current nest level by key.
* [[nest.sortValues|Arrays#nest_sortValues]] - sort the leaf nest level by value.
* [[nest.rollup|Arrays#nest_rollup]] - specify a rollup function for leaf values.
* [[nest.map|Arrays#nest_map]] - evaluate the nest operator, returning an associative array.
* [[nest.entries|Arrays#nest_entries]] - evaluate the nest operator, returning an array of key-values tuples.
* [d3.map](Arrays#d3_map) - a shim for ES6 maps, since objects are not hashes!
* [map.has](Arrays#map_has) - returns true if the map contains the specified key.
* [map.get](Arrays#map_get) - returns the value for the specified key.
* [map.set](Arrays#map_set) - sets the value for the specified key.
* [map.remove](Arrays#map_remove) - removes the entry for specified key.
* [map.keys](Arrays#map_keys) - returns the map’s array of keys.
* [map.values](Arrays#map_values) - returns the map’s array of values.
* [map.entries](Arrays#map_entries) - returns the map’s array of entries (key-values objects).
* [map.forEach](Arrays#map_forEach) - calls the specified function for each entry in the map.
* [d3.set](Arrays#d3_set) - a shim for ES6 sets, since objects are not hashes!
* [set.has](Arrays#set_has) - returns true if the set contains the specified value.
* [set.add](Arrays#set_add) - adds the specified value.
* [set.remove](Arrays#set_remove) - removes the specified value.
* [set.values](Arrays#set_values) - returns the set’s array of values.
* [set.forEach](Arrays#set_forEach) - calls the specified function for each value in the set.

### [[Math]]

* [[d3.random.normal|Math#random_normal]] - generate a random number with a normal distribution.
* [[d3.random.logNormal|Math#random_logNormal]] - generate a random number with a log-normal distribution.
* [[d3.random.bates|Math#random_bates]] - generate a random number with a Bates distribution.
* [[d3.random.irwinHall|Math#random_irwinHall]] - generate a random number with an Irwin–Hall distribution.
* [[d3.transform|Math#transform]] - compute the standard form of a 2D matrix transform.

### [[Loading External Resources|Requests]]

* [[d3.xhr|Requests#d3_xhr]] - request a resource using XMLHttpRequest.
* [xhr.header](Requests#header) - set a request header.
* [xhr.mimeType](Requests#mimeType) - set the Accept request header and override the response MIME type.
* [xhr.response](Requests#response) - set a response mapping function.
* [xhr.get](Requests#get) - issue a GET request.
* [xhr.post](Requests#post) - issue a POST request.
* [xhr.send](Requests#send) - issue a request with the specified method and data.
* [xhr.abort](Requests#abort) - abort an outstanding request.
* [xhr.on](Requests#on) - add an event listener for "progress", "load" or "error" events.
* [[d3.text|Requests#d3_text]] - request a text file.
* [[d3.json|Requests#d3_json]] - request a JSON blob.
* [[d3.html|Requests#d3_html]] - request an HTML document fragment.
* [[d3.xml|Requests#d3_xml]] - request an XML document fragment.
* [[d3.csv|CSV]] - request a comma-separated values (CSV) file.
* [[d3.tsv|CSV#tsv]] - request a tab-separated values (TSV) file.

### [[String Formatting|Formatting]]

* [[d3.format|Formatting#d3_format]] - format a number as a string.
* [d3.formatPrefix](Formatting#d3_formatPrefix) - returns the [SI prefix] for the specified value and precision.
* [[d3.requote|Formatting#d3_requote]] - quote a string for use in a regular expression.
* [[d3.round|Formatting#d3_round]] - rounds a value to some digits after the decimal point.

### [[CSV Formatting (d3.csv)|CSV]]

* [[d3.csv|CSV#csv]] - request a comma-separated values (CSV) file.
* [[d3.csv.parse|CSV#parse]] - parse a CSV string into objects using the header row.
* [[d3.csv.parseRows|CSV#parseRows]] - parse a CSV string into tuples, ignoring the header row.
* [[d3.csv.format|CSV#format]] - format an array of objects into a CSV string.
* [[d3.csv.formatRows|CSV#formatRows]] - format an array of tuples into a CSV string.
* [[d3.tsv|CSV#tsv]] - request a tab-separated values (TSV) file.
* [[d3.tsv.parse|CSV#tsv_parse]] - parse a TSV string into objects using the header row.
* [[d3.tsv.parseRows|CSV#tsv_parseRows]] - parse a TSV string into tuples, ignoring the header row.
* [[d3.tsv.format|CSV#tsv_format]] - format an array of objects into a TSV string.
* [[d3.tsv.formatRows|CSV#tsv_formatRows]] - format an array of tuples into a TSV string.
* [d3.dsv](CSV#dsv) - create a parser/formatter for the specified delimiter and mime type.

### [[Colors]]

* [[d3.rgb|Colors#d3_rgb]] - specify a color in RGB space.
* [[rgb.brighter|Colors#rgb_brighter]] - increase RGB channels by some exponential factor (gamma).
* [[rgb.darker|Colors#rgb_darker]] - decrease RGB channels by some exponential factor (gamma).
* [[rgb.hsl|Colors#rgb_hsl]] - convert from RGB to HSL.
* [[rgb.toString|Colors#rgb_toString]] - convert an RGB color to a string.
* [[d3.hsl|Colors#d3_hsl]] - specify a color in HSL space.
* [[hsl.brighter|Colors#hsl_brighter]] - increase lightness by some exponential factor (gamma).
* [[hsl.darker|Colors#hsl_darker]] - decrease lightness by some exponential factor (gamma).
* [[hsl.rgb|Colors#hsl_rgb]] - convert from HSL to RGB.
* [[hsl.toString|Colors#hsl_toString]] - convert an HSL color to a string.
* [[d3.lab|Colors#d3_lab]] - specify a color in L\*a\*b\* space.
* [[lab.brighter|Colors#lab_brighter]] - increase lightness by some exponential factor (gamma).
* [[lab.darker|Colors#lab_darker]] - decrease lightness by some exponential factor (gamma).
* [[lab.rgb|Colors#lab_rgb]] - convert from L\*a\*b\* to RGB.
* [[lab.toString|Colors#lab_toString]] - convert a L\*a\*b\* color to a string.
* [[d3.hcl|Colors#d3_hcl]] - specify a color in HCL space.
* [[hcl.brighter|Colors#hcl_brighter]] - increase lightness by some exponential factor (gamma).
* [[hcl.darker|Colors#hcl_darker]] - decrease lightness by some exponential factor (gamma).
* [[hcl.rgb|Colors#hcl_rgb]] - convert from HCL to RGB.
* [[hcl.toString|Colors#hcl_toString]] - convert an HCL color to a string.

### [[Namespaces]]

* [[d3.ns.prefix|Namespaces#prefix]] - access or extend known XML namespaces.
* [[d3.ns.qualify|Namespaces#qualify]] - qualify a prefixed name, such as "xlink:href".

### [[Internals]]

* [[d3.functor|Internals#functor]] - create a function that returns a constant.
* [[d3.rebind|Internals#rebind]] - rebind an inherited getter/setter method to a subclass.
* [[d3.dispatch|Internals#d3_dispatch]] - create a custom event dispatcher.
* [[dispatch.on|Internals#dispatch_on]] - register or unregister an event listener.
* [[dispatch.type|Internals#_dispatch]] - dispatch an event to registered listeners.

## [d3.scale (Scales)](Scales)

### [[Quantitative|Quantitative-Scales#quantitative]]

* [[d3.scale.linear|Quantitative-Scales#linear]] - construct a linear quantitative scale.
* [[linear|Quantitative-Scales#_linear]] - get the range value corresponding to a given domain value.
* [[linear.invert|Quantitative-Scales#linear_invert]] - get the domain value corresponding to a given range value.
* [[linear.domain|Quantitative-Scales#linear_domain]] - get or set the scale's input domain.
* [[linear.range|Quantitative-Scales#linear_range]] - get or set the scale's output range.
* [[linear.rangeRound|Quantitative-Scales#linear_rangeRound]] - set the scale's output range, and enable rounding.
* [[linear.interpolate|Quantitative-Scales#linear_interpolate]] - get or set the scale's output interpolator.
* [[linear.clamp|Quantitative-Scales#linear_clamp]] - enable or disable clamping of the output range.
* [[linear.nice|Quantitative-Scales#linear_nice]] - extend the scale domain to nice round numbers.
* [[linear.ticks|Quantitative-Scales#linear_ticks]] - get representative values from the input domain.
* [[linear.tickFormat|Quantitative-Scales#linear_tickFormat]] - get a formatter for displaying tick values.
* [[linear.copy|Quantitative-Scales#linear_copy]] - create a new scale from an existing scale.
* [[d3.scale.sqrt|Quantitative-Scales#sqrt]] - construct a quantitative scale with a square root transform.
* [[d3.scale.pow|Quantitative-Scales#pow]] - construct a quantitative scale with an exponential transform.
* [[pow|Quantitative-Scales#_pow]] - get the range value corresponding to a given domain value.
* [[pow.invert|Quantitative-Scales#pow_invert]] - get the domain value corresponding to a given range value.
* [[pow.domain|Quantitative-Scales#pow_domain]] - get or set the scale's input domain.
* [[pow.range|Quantitative-Scales#pow_range]] - get or set the scale's output range.
* [[pow.rangeRound|Quantitative-Scales#pow_rangeRound]] - set the scale's output range, and enable rounding.
* [[pow.interpolate|Quantitative-Scales#pow_interpolate]] - get or set the scale's output interpolator.
* [[pow.clamp|Quantitative-Scales#pow_clamp]] - enable or disable clamping of the output range.
* [[pow.nice|Quantitative-Scales#pow_nice]] - extend the scale domain to nice round numbers.
* [[pow.ticks|Quantitative-Scales#pow_ticks]] - get representative values from the input domain.
* [[pow.tickFormat|Quantitative-Scales#pow_tickFormat]] - get a formatter for displaying tick values.
* [[pow.exponent|Quantitative-Scales#pow_exponent]] - get or set the exponent power.
* [[pow.copy|Quantitative-Scales#pow_copy]] - create a new scale from an existing scale.
* [[d3.scale.log|Quantitative-Scales#log]] - construct a quantitative scale with an logarithmic transform.
* [[log|Quantitative-Scales#_log]] - get the range value corresponding to a given domain value.
* [[log.invert|Quantitative-Scales#log_invert]] - get the domain value corresponding to a given range value.
* [[log.domain|Quantitative-Scales#log_domain]] - get or set the scale's input domain.
* [[log.range|Quantitative-Scales#log_range]] - get or set the scale's output range.
* [[log.rangeRound|Quantitative-Scales#log_rangeRound]] - set the scale's output range, and enable rounding.
* [[log.interpolate|Quantitative-Scales#log_interpolate]] - get or set the scale's output interpolator.
* [[log.clamp|Quantitative-Scales#log_clamp]] - enable or disable clamping of the output range.
* [[log.nice|Quantitative-Scales#log_nice]] - extend the scale domain to nice powers of ten.
* [[log.ticks|Quantitative-Scales#log_ticks]] - get representative values from the input domain.
* [[log.tickFormat|Quantitative-Scales#log_tickFormat]] - get a formatter for displaying tick values.
* [[log.copy|Quantitative-Scales#log_copy]] - create a new scale from an existing scale.
* [[d3.scale.quantize|Quantitative-Scales#quantize]] - construct a linear quantitative scale with a discrete output range.
* [[quantize|Quantitative-Scales#_quantize]] - get the range value corresponding to a given domain value.
* [quantize.invertExtent](Quantitative-Scales#quantize_invertExtent) - get the domain values for the specified range value.
* [[quantize.domain|Quantitative-Scales#quantize_domain]] - get or set the scale's input domain.
* [[quantize.range|Quantitative-Scales#quantize_range]] - get or set the scale's output range (as discrete values).
* [[quantize.copy|Quantitative-Scales#quantize_copy]] - create a new scale from an existing scale.
* [[d3.scale.threshold|Quantitative-Scales#threshold]] - construct a threshold scale with a discrete output range.
* [[threshold|Quantitative-Scales#_threshold]] - get the range value corresponding to a given domain value.
* [threshold.invertExtent](Quantitative-Scales#threshold_invertExtent) - get the domain values for the specified range value.
* [[threshold.domain|Quantitative-Scales#threshold_domain]] - get or set the scale's input domain.
* [[threshold.range|Quantitative-Scales#threshold_range]] - get or set the scale's output range (as discrete values).
* [[threshold.copy|Quantitative-Scales#threshold_copy]] - create a new scale from an existing scale.
* [[d3.scale.quantile|Quantitative-Scales#quantile]] - construct a quantitative scale mapping to quantiles.
* [[quantile|Quantitative-Scales#_quantile]] - get the range value corresponding to a given domain value.
* [quantile.invertExtent](Quantitative-Scales#quantile_invertExtent) - get the domain values for the specified range value.
* [[quantile.domain|Quantitative-Scales#quantile_domain]] - get or set the scale's input domain (as discrete values).
* [[quantile.range|Quantitative-Scales#quantile_range]] - get or set the scale's output range (as discrete values).
* [[quantile.quantiles|Quantitative-Scales#quantile_quantiles]] - get the scale's quantile bin thresholds.
* [[quantile.copy|Quantitative-Scales#quantile_copy]] - create a new scale from an existing scale.
* [[d3.scale.identity|Quantitative-Scales#identity]] - construct a linear identity scale.
* [[identity|Quantitative-Scales#_identity]] - the identity function.
* [[identity.invert|Quantitative-Scales#_identity]] - equivalent to identity; the identity function.
* [[identity.domain|Quantitative-Scales#identity_domain]] - get or set the scale's domain and range.
* [[identity.range|Quantitative-Scales#identity_domain]] - equivalent to identity.domain.
* [[identity.ticks|Quantitative-Scales#identity_ticks]] - get representative values from the domain.
* [[identity.tickFormat|Quantitative-Scales#identity_tickFormat]] - get a formatter for displaying tick values.
* [[identity.copy|Quantitative-Scales#identity_copy]] - create a new scale from an existing scale.

### [[Ordinal|Ordinal-Scales#ordinal]]

* [[d3.scale.ordinal|Ordinal-Scales#ordinal]] - construct an ordinal scale.
* [[ordinal|Ordinal-Scales#_ordinal]] - get the range value corresponding to a given domain value.
* [[ordinal.domain|Ordinal-Scales#ordinal_domain]] - get or set the scale's input domain.
* [[ordinal.range|Ordinal-Scales#ordinal_range]] - get or set the scale's output range.
* [[ordinal.rangePoints|Ordinal-Scales#ordinal_rangePoints]] - divide a continuous output range for discrete points.
* [[ordinal.rangeBands|Ordinal-Scales#ordinal_rangeBands]] - divide a continuous output range for discrete bands.
* [[ordinal.rangeRoundBands|Ordinal-Scales#ordinal_rangeRoundBands]] - divide a continuous output range for discrete bands.
* [[ordinal.rangeBand|Ordinal-Scales#ordinal_rangeBand]] - get the discrete range band width.
* [[ordinal.rangeExtent|Ordinal-Scales#ordinal_rangeExtent]] - get the minimum and maximum values of the output range.
* [[ordinal.copy|Ordinal-Scales#ordinal_copy]] - create a new scale from an existing scale.
* [[d3.scale.category10|Ordinal-Scales#category10]] - construct an ordinal scale with ten categorical colors.
* [[d3.scale.category20|Ordinal-Scales#category20]] - construct an ordinal scale with twenty categorical colors.
* [[d3.scale.category20b|Ordinal-Scales#category20b]] - construct an ordinal scale with twenty categorical colors.
* [[d3.scale.category20c|Ordinal-Scales#category20c]] - construct an ordinal scale with twenty categorical colors.

## [d3.svg (SVG)](SVG)

### [[Shapes|SVG-Shapes]]

* [[d3.svg.line|SVG-Shapes#line]] - create a new line generator.
* [[line|SVG-Shapes#_line]] - generate a piecewise linear curve, as in a line chart.
* [[line.x|SVG-Shapes#line_x]] - get or set the *x*-coordinate accessor.
* [[line.y|SVG-Shapes#line_y]] - get or set the *y*-coordinate accessor.
* [[line.interpolate|SVG-Shapes#line_interpolate]] - get or set the interpolation mode.
* [[line.tension|SVG-Shapes#line_tension]] - get or set the cardinal spline tension.
* [line.defined](SVG-Shapes#line_defined) - control whether the line is defined at a given point.
* [[d3.svg.line.radial|SVG-Shapes#line_radial]] - create a new radial line generator.
* [[line|SVG-Shapes#_line_radial]] - generate a piecewise linear curve, as in a polar line chart.
* [[line.radius|SVG-Shapes#line_radial_radius]] - get or set the *radius* accessor.
* [[line.angle|SVG-Shapes#line_radial_angle]] - get or set the *angle* accessor.
* [line.defined](SVG-Shapes#line_radial_defined) - control whether the line is defined at a given point.
* [[d3.svg.area|SVG-Shapes#area]] - create a new area generator.
* [[area|SVG-Shapes#_area]] - generate a piecewise linear area, as in an area chart.
* [[area.x|SVG-Shapes#area_x]] - get or set the *x*-coordinate accessors.
* [[area.x0|SVG-Shapes#area_x0]] - get or set the *x0*-coordinate (baseline) accessor.
* [[area.x1|SVG-Shapes#area_x1]] - get or set the *x1*-coordinate (topline) accessor.
* [[area.y|SVG-Shapes#area_y]] - get or set the *y*-coordinate accessors.
* [[area.y0|SVG-Shapes#area_y0]] - get or set the *y0*-coordinate (baseline) accessor.
* [[area.y1|SVG-Shapes#area_y1]] - get or set the *y1*-coordinate (topline) accessor.
* [[area.interpolate|SVG-Shapes#area_interpolate]] - get or set the interpolation mode.
* [[area.tension|SVG-Shapes#area_tension]] - get or set the cardinal spline tension.
* [area.defined](SVG-Shapes#area_defined) - control whether the area is defined at a given point.
* [[d3.svg.area.radial|SVG-Shapes#area_radial]] - create a new area generator.
* [[area|SVG-Shapes#_area_radial]] - generate a piecewise linear area, as in a polar area chart.
* [[area.radius|SVG-Shapes#area_radial_radius]] - get or set the *radius* accessors.
* [[area.innerRadius|SVG-Shapes#area_radial_innerRadius]] - get or set the inner *radius* (baseline) accessor.
* [[area.outerRadius|SVG-Shapes#area_radial_outerRadius]] - get or set the outer *radius* (topline) accessor.
* [[area.angle|SVG-Shapes#area_radial_angle]] - get or set the *angle* accessors.
* [[area.startAngle|SVG-Shapes#area_radial_startAngle]] - get or set the *angle* (baseline) accessor.
* [[area.endAngle|SVG-Shapes#area_radial_endAngle]] - get or set the *angle* (topline) accessor.
* [area.defined](SVG-Shapes#area_radial_defined) - control whether the area is defined at a given point.
* [[d3.svg.arc|SVG-Shapes#arc]] - create a new arc generator.
* [[arc|SVG-Shapes#_arc]] - generate a solid arc, as in a pie or donut chart.
* [[arc.innerRadius|SVG-Shapes#arc_innerRadius]] - get or set the inner radius accessor.
* [[arc.outerRadius|SVG-Shapes#arc_outerRadius]] - get or set the outer radius accessor.
* [[arc.startAngle|SVG-Shapes#arc_startAngle]] - get or set the start angle accessor.
* [[arc.endAngle|SVG-Shapes#arc_endAngle]] - get or set the end angle accessor.
* [[arc.centroid|SVG-Shapes#arc_centroid]] - compute the arc centroid.
* [[d3.svg.symbol|SVG-Shapes#symbol]] - create a new symbol generator.
* [[symbol|SVG-Shapes#_symbol]] - generate categorical symbols, as in a scatterplot.
* [[symbol.type|SVG-Shapes#symbol_type]] - get or set the symbol type accessor.
* [[symbol.size|SVG-Shapes#symbol_size]] - get or set the symbol size (in square pixels) accessor.
* [d3.svg.symbolTypes](SVG-Shapes#symbolTypes) - the array of supported symbol types.
* [[d3.svg.chord|SVG-Shapes#chord]] - create a new chord generator.
* [[chord|SVG-Shapes#_chord]] - generate a quadratic Bézier connecting two arcs, as in a chord diagram.
* [[chord.radius|SVG-Shapes#chord_radius]] - get or set the arc radius accessor.
* [[chord.startAngle|SVG-Shapes#chord_startAngle]] - get or set the arc start angle accessor.
* [[chord.endAngle|SVG-Shapes#chord_endAngle]] - get or set the arc end angle accessor.
* [[chord.source|SVG-Shapes#chord_source]] - get or set the source arc accessor.
* [[chord.target|SVG-Shapes#chord_target]] - get or set the target arc accessor.
* [[d3.svg.diagonal|SVG-Shapes#diagonal]] - create a new diagonal generator.
* [[diagonal|SVG-Shapes#_diagonal]] - generate a two-dimensional Bézier connector, as in a node-link diagram.
* [[diagonal.source|SVG-Shapes#diagonal_source]] - get or set the source point accessor.
* [[diagonal.target|SVG-Shapes#diagonal_target]] - get or set the target point accessor.
* [[diagonal.projection|SVG-Shapes#diagonal_projection]] - get or set an optional point transform.
* [[d3.svg.diagonal.radial|SVG-Shapes#diagonal_radial]] - create a new diagonal generator.
* [[diagonal|SVG-Shapes#_diagonal_radial]] - generate a two-dimensional Bézier connector, as in a node-link diagram.

### [[Axes|SVG-Axes]]

* [[d3.svg.axis|SVG-Axes#axis]] - create a new axis generator.
* [[axis|SVG-Axes#_axis]] - creates or updates an axis for the given selection or transition.
* [[axis.scale|SVG-Axes#scale]] - get or set the axis scale.
* [[axis.orient|SVG-Axes#orient]] - get or set the axis orientation.
* [[axis.ticks|SVG-Axes#ticks]] - control how ticks are generated for the axis.
* [[axis.tickValues|SVG-Axes#tickValues]] - specify tick values explicitly.
* [[axis.tickSize|SVG-Axes#tickSize]] - specify the size of major, minor and end ticks.
* [[axis.innerTickSize|SVG-Axes#innerTickSize]] - specify the size of inner ticks.
* [[axis.outerTickSize|SVG-Axes#outerTickSize]] - specify the size of outer ticks.
* [[axis.tickPadding|SVG-Axes#tickPadding]] - specify padding between ticks and tick labels.
* [[axis.tickFormat|SVG-Axes#tickFormat]] - override the tick formatting for labels.

### [Controls](SVG-Controls)

* [d3.svg.brush](SVG-Controls#brush) - click and drag to select one- or two-dimensional regions.
* [brush](SVG-Controls#_brush) - apply a brush to the given selection or transition.
* [brush.x](SVG-Controls#brush_x) - the brush’s <i>x</i>-scale, for horizontal brushing.
* [brush.y](SVG-Controls#brush_y) - the brush’s <i>y</i>-scale, for vertical brushing.
* [brush.extent](SVG-Controls#brush_extent) - the brush’s extent in zero, one or two dimensions.
* [brush.clear](SVG-Controls#brush_clear) - reset the brush extent.
* [brush.empty](SVG-Controls#brush_empty) - whether or not the brush extent is empty.
* [brush.on](SVG-Controls#brush_on) - listeners for when the brush is moved.
* [brush.event](SVG-Controls#brush_event) - dispatch brush events after setting the extent.

## [d3.time (Time)](Time)

### [[Time Formatting]]

* [[d3.time.format|Time-Formatting#format]] - create a new local time formatter for a given specifier.
* [[format|Time-Formatting#_format]] - format a date into a string.
* [[format.parse|Time-Formatting#parse]] - parse a string into a date.
* [[d3.time.format.utc|Time-Formatting#format_utc]] - create a new UTC time formatter for a given specifier.
* [[d3.time.format.iso|Time-Formatting#format_iso]] - the ISO 8601 UTC time formatter.

### [[Time Scales]]

* [[d3.time.scale|Time-Scales#scale]] - construct a linear time scale.
* [[scale|Time-Scales#_scale]] - get the range value corresponding to a given domain value.
* [[scale.invert|Time-Scales#invert]] - get the domain value corresponding to a given range value.
* [[scale.domain|Time-Scales#domain]] - get or set the scale's input domain.
* [[scale.nice|Time-Scales#nice]] - extend the scale domain to nice round numbers.
* [[scale.range|Time-Scales#range]] - get or set the scale's output range.
* [[scale.rangeRound|Time-Scales#rangeRound]] - set the scale's output range, and enable rounding.
* [[scale.interpolate|Time-Scales#interpolate]] - get or set the scale's output interpolator.
* [[scale.clamp|Time-Scales#clamp]] - enable or disable clamping of the output range.
* [[scale.ticks|Time-Scales#ticks]] - get representative values from the input domain.
* [[scale.tickFormat|Time-Scales#tickFormat]] - get a formatter for displaying tick values.
* [[scale.copy|Time-Scales#copy]] - create a new scale from an existing scale.

### [[Time Intervals]]

* [[d3.time.interval|Time-Intervals#interval]] - a time interval in local time.
* [[interval|Time-Intervals#_interval]] - alias for interval.floor.
* [[interval.range|Time-Intervals#interval_range]] - returns dates within the specified range.
* [[interval.floor|Time-Intervals#interval_floor]] - rounds down to the nearest interval.
* [[interval.round|Time-Intervals#interval_round]] - rounds up or down to the nearest interval.
* [[interval.ceil|Time-Intervals#interval_ceil]] - rounds up to the nearest interval.
* [[interval.offset|Time-Intervals#interval_offset]] - returns a date offset by some interval.
* [[interval.utc|Time-Intervals#interval_utc]] - returns the UTC-equivalent time interval.
* [[d3.time.day|Time-Intervals#day]] - every day (12:00 AM).
* [[d3.time.days|Time-Intervals#day]] - alias for day.range.
* [d3.time.dayOfYear](Time-Intervals#dayOfYear) - computes the day number.
* [[d3.time.hour|Time-Intervals#hour]] - every hour (e.g., 1:00 AM).
* [[d3.time.hours|Time-Intervals#hours]] - alias for hour.range.
* [[d3.time.minute|Time-Intervals#minute]] - every minute (e.g., 1:02 AM).
* [[d3.time.minutes|Time-Intervals#minutes]] - alias for minute.range.
* [[d3.time.month|Time-Intervals#month]] - every month (e.g., February 1, 12:00 AM).
* [[d3.time.months|Time-Intervals#months]] - alias for month.range.
* [[d3.time.second|Time-Intervals#second]] - every second (e.g., 1:02:03 AM).
* [[d3.time.seconds|Time-Intervals#seconds]] - alias for second.range.
* [[d3.time.sunday|Time-Intervals#sunday]] - every Sunday (e.g., February 5, 12:00 AM).
* [[d3.time.sundays|Time-Intervals#sundays]] - alias for sunday.range.
* [d3.time.sundayOfYear](Time-Intervals#sundayOfYear) - computes the sunday-based week number.
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
* [[d3.time.year|Time-Intervals#year]] - every year (e.g., January 1, 12:00 AM).
* [[d3.time.years|Time-Intervals#years]] - alias for year.range.

## [d3.layout (Layouts)](Layouts)

### [[Bundle|Bundle-Layout]]

* [[d3.layout.bundle|Bundle-Layout#bundle]] - construct a new default bundle layout.
* [[bundle|Bundle-Layout#_bundle]] - apply Holten's *hierarchical bundling* algorithm to edges.

### [[Chord|Chord-Layout]]

* [[d3.layout.chord|Chord-Layout#chord]] - produce a chord diagram from a matrix of relationships.
* [[chord.matrix|Chord-Layout#matrix]] - get or set the matrix data backing the layout.
* [[chord.padding|Chord-Layout#padding]] - get or set the angular padding between chord segments.
* [[chord.sortGroups|Chord-Layout#sortGroups]] - get or set the comparator function for groups.
* [[chord.sortSubgroups|Chord-Layout#sortSubgroups]] - get or set the comparator function for subgroups.
* [[chord.sortChords|Chord-Layout#sortChords]] - get or set the comparator function for chords (z-order).
* [[chord.chords|Chord-Layout#chords]] - retrieve the computed chord angles.
* [[chord.groups|Chord-Layout#groups]] - retrieve the computed group angles.

### [Cluster](Cluster-Layout)

* [d3.layout.cluster](Cluster-Layout#cluster) - cluster entities into a dendrogram.
* [cluster](Cluster-Layout#_cluster) - alias for cluster.nodes.
* [cluster.nodes](Cluster-Layout#nodes) - compute the cluster layout and return the array of nodes.
* [cluster.links](Cluster-Layout#links) - compute the parent-child links between tree nodes.
* [cluster.children](Cluster-Layout#children) - get or set the accessor function for child nodes.
* [cluster.sort](Cluster-Layout#sort) - get or set the comparator function for sibling nodes.
* [cluster.separation](Cluster-Layout#separation) - get or set the spacing function between neighboring nodes.
* [cluster.size](Cluster-Layout#size) - get or set the layout size in *x* and *y*.
* [cluster.nodeSize](Cluster-Layout#nodeSize) - specify a fixed size for each node.

### [[Force|Force-Layout]]

* [[d3.layout.force|Force-Layout#force]] - position linked nodes using physical simulation.
* [[force.on|Force-Layout#on]] - listen to updates in the computed layout positions.
* [[force.nodes|Force-Layout#nodes]] - get or set the array of nodes to layout.
* [[force.links|Force-Layout#links]] - get or set the array of links between nodes.
* [[force.size|Force-Layout#size]] - get or set the layout size in *x* and *y*.
* [[force.linkDistance|Force-Layout#linkDistance]] - get or set the link distance.
* [[force.linkStrength|Force-Layout#linkStrength]] - get or set the link strength.
* [[force.friction|Force-Layout#friction]] - get or set the friction coefficient.
* [[force.charge|Force-Layout#charge]] - get or set the charge strength.
* [[force.gravity|Force-Layout#gravity]] - get or set the gravity strength.
* [[force.theta|Force-Layout#theta]] - get or set the accuracy of the charge interaction.
* [[force.start|Force-Layout#start]] - start or restart the simulation when the nodes change.
* [[force.resume|Force-Layout#resume]] - reheat the cooling parameter and restart simulation.
* [[force.stop|Force-Layout#stop]] - immediately terminate the simulation.
* [[force.alpha|Force-Layout#alpha]] - get or set the layout's cooling parameter.
* [[force.tick|Force-Layout#tick]] - run the layout simulation one step.
* [[force.drag|Force-Layout#drag]] - bind a behavior to nodes to allow interactive dragging.

### [Hierarchy](Hierarchy-Layout)

* [d3.layout.hierarchy](Hierarchy-Layout#hierarchy) - derive a custom hierarchical layout implementation.
* [hierarchy](Hierarchy-Layout#_hierarchy) - alias for hierarchy.nodes.
* [hierarchy.nodes](Hierarchy-Layout#nodes) - compute the layout and return the array of nodes.
* [hierarchy.links](Hierarchy-Layout#links) - compute the parent-child links between tree nodes.
* [hierarchy.children](Hierarchy-Layout#children) - get or set the accessor function for child nodes.
* [hierarchy.sort](Hierarchy-Layout#sort) - get or set the comparator function for sibling nodes.
* [hierarchy.value](Hierarchy-Layout#value) - get or set the value accessor function.
* [hierarchy.revalue](Hierarchy-Layout#revalue) - recompute the hierarchy values.

### [[Histogram|Histogram-Layout]]

* [[d3.layout.histogram|Histogram-Layout#histogram]] - construct a new default histogram layout.
* [[histogram|Histogram-Layout#_histogram]] - compute the distribution of data using quantized bins.
* [[histogram.value|Histogram-Layout#value]] - get or set the value accessor function.
* [[histogram.range|Histogram-Layout#range]] - get or set the considered value range.
* [[histogram.bins|Histogram-Layout#bins]] - specify how values are organized into bins.
* [[histogram.frequency|Histogram-Layout#frequency]] - compute the distribution as counts or probabilities.

### [Pack](Pack-Layout)

* [d3.layout.pack](Pack-Layout#pack) - produce a hierarchical layout using recursive circle-packing.
* [pack](Pack-Layout#_pack) - alias for pack.nodes.
* [pack.nodes](Pack-Layout#nodes) - compute the pack layout and return the array of nodes.
* [pack.links](Pack-Layout#links) - compute the parent-child links between tree nodes.
* [pack.children](Pack-Layout#children) - get or set the children accessor function.
* [pack.sort](Pack-Layout#sort) - control the order in which sibling nodes are traversed.
* [pack.value](Pack-Layout#value) - get or set the value accessor used to size circles.
* [pack.size](Pack-Layout#size) - specify the layout size in *x* and *y*.
* [pack.radius](Pack-Layout#radius) - specify the node radius, rather than deriving it from value.
* [pack.padding](Pack-Layout#padding) - specify the layout padding in (approximate) pixels.

### [Partition](Partition-Layout)

* [d3.layout.partition](Partition-Layout#partition) - recursively partition a node tree into a sunburst or icicle.
* [partition](Partition-Layout#_partition) - alias for partition.nodes.
* [partition.nodes](Partition-Layout#nodes) - compute the partition layout and return the array of nodes.
* [partition.links](Partition-Layout#links) - compute the parent-child links between tree nodes.
* [partition.children](Partition-Layout#children) - get or set the children accessor function.
* [partition.sort](Partition-Layout#sort) - control the order in which sibling nodes are traversed.
* [partition.value](Partition-Layout#value) - get or set the value accessor used to size circles.
* [partition.size](Partition-Layout#size) - specify the layout size in *x* and *y*.

### [[Pie|Pie-Layout]]

* [[d3.layout.pie|Pie-Layout#pie]] - construct a new default pie layout.
* [[pie|Pie-Layout#_pie]] - compute the start and end angles for arcs in a pie or donut chart.
* [[pie.value|Pie-Layout#value]] - get or set the value accessor function.
* [[pie.sort|Pie-Layout#sort]] - control the clockwise order of pie slices.
* [[pie.startAngle|Pie-Layout#startAngle]] - get or set the overall start angle of the pie.
* [[pie.endAngle|Pie-Layout#endAngle]] - get or set the overall end angle of the pie.

### [[Stack|Stack-Layout]]

* [[d3.layout.stack|Stack-Layout#stack]] - construct a new default stack layout.
* [[stack|Stack-Layout#_stack]] - compute the baseline for each series in a stacked bar or area chart.
* [[stack.values|Stack-Layout#values]] - get or set the values accessor function per series.
* [[stack.order|Stack-Layout#order]] - control the order in which series are stacked.
* [[stack.offset|Stack-Layout#offset]] - specify the overall baseline algorithm.
* [[stack.x|Stack-Layout#x]] - get or set the *x*-dimension accessor function.
* [[stack.y|Stack-Layout#y]] - get or set the *y*-dimension accessor function.
* [[stack.out|Stack-Layout#out]] - get or set the output function for storing the baseline.

### [Tree](Tree-Layout)

* [d3.layout.tree](Tree-Layout#tree) - position a tree of nodes tidily.
* [tree](Tree-Layout#_tree) - alias for tree.nodes.
* [tree.nodes](Tree-Layout#nodes) - compute the tree layout and return the array of nodes.
* [tree.links](Tree-Layout#links) - compute the parent-child links between tree nodes.
* [tree.children](Tree-Layout#children) - get or set the children accessor function.
* [tree.sort](Tree-Layout#sort) - control the order in which sibling nodes are traversed.
* [tree.separation](Tree-Layout#separation) - get or set the spacing function between neighboring nodes.
* [tree.size](Tree-Layout#size) - specify the layout size in *x* and *y*.
* [tree.nodeSize](Tree-Layout#nodeSize) - specify a fixed size for each node.

### [Treemap](Treemap-Layout)

* [d3.layout.treemap](Treemap-Layout#treemap) - use recursive spatial subdivision to display a tree of nodes.
* [treemap](Treemap-Layout#_treemap) - alias for treemap.nodes.
* [treemap.nodes](Treemap-Layout#nodes) - compute the treemap layout and return the array of nodes.
* [treemap.links](Treemap-Layout#links) - compute the parent-child links between tree nodes.
* [treemap.children](Treemap-Layout#children) - get or set the children accessor function.
* [treemap.sort](Treemap-Layout#sort) - control the order in which sibling nodes are traversed.
* [treemap.value](Treemap-Layout#value) - get or set the value accessor used to size treemap cells.
* [treemap.size](Treemap-Layout#size) - specify the layout size in *x* and *y*.
* [treemap.padding](Treemap-Layout#padding) - specify the padding between a parent and its children.
* [treemap.round](Treemap-Layout#round) - enable or disable rounding to exact pixels.
* [treemap.sticky](Treemap-Layout#sticky) - make the layout sticky for stable updates.
* [treemap.mode](Treemap-Layout#mode) - change the treemap layout algorithm.

## [d3.geo (Geography)](Geo)

### [Paths](Geo-Paths)

* [d3.geo.path](Geo-Paths#path) - create a new geographic path generator.
* [path](Geo-Paths#_path) - project the specified feature and render it to the context.
* [path.projection](Geo-Paths#path_projection) - get or set the geographic projection.
* [path.context](Geo-Paths#path_context) - get or set the render context.
* [path.pointRadius](Geo-Paths#path_pointRadius) - get or set the radius to display point features.
* [path.area](Geo-Paths#path_area) - compute the projected area of a given feature.
* [path.centroid](Geo-Paths#path_centroid) - compute the projected centroid of a given feature.
* [path.bounds](Geo-Paths#path_bounds) - compute the projected bounds of a given feature.
* [d3.geo.graticule](Geo-Paths#graticule) - create a graticule generator.
* [graticule](Geo-Paths#_graticule) - generate a MultiLineString of meridians and parallels.
* [graticule.lines](Geo-Paths#graticule_lines) - generate an array of LineStrings of meridians and parallels.
* [graticule.outline](Geo-Paths#graticule_outline) - generate a Polygon of the graticule’s extent.
* [graticule.extent](Geo-Paths#graticule_extent) - get or set the major & minor extents.
* [graticule.majorExtent](Geo-Paths#graticule_majorExtent) - get or set the major extent.
* [graticule.minorExtent](Geo-Paths#graticule_minorExtent) - get or set the minor extent.
* [graticule.step](Geo-Paths#graticule_step) - get or set the major & minor step intervals.
* [graticule.majorStep](Geo-Paths#graticule_majorStep) - get or set the major step intervals.
* [graticule.minorStep](Geo-Paths#graticule_minorStep) - get or set the minor step intervals.
* [graticule.precision](Geo-Paths#graticule_precision) - get or set the latitudinal precision.
* [d3.geo.circle](Geo-Paths#circle) - create a circle generator.
* [circle](Geo-Paths#_circle) - generate a piecewise circle as a Polygon. 
* [circle.origin](Geo-Paths#circle_origin) - specify the origin in latitude and longitude.
* [circle.angle](Geo-Paths#circle_angle) - specify the angular radius in degrees.
* [circle.precision](Geo-Paths#circle_precision) - specify the precision of the piecewise circle.
* [d3.geo.area](Geo-Paths#area) - compute the spherical area of a given feature.
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

### [Zoom](Zoom-Behavior)

* [d3.behavior.zoom](Zoom-Behavior#zoom) - create a zoom behavior.
* [zoom](Zoom-Behavior#_zoom) - apply the zoom behavior to the selected elements.
* [zoom.scale](Zoom-Behavior#scale) - the current scale factor.
* [zoom.translate](Zoom-Behavior#translate) - the current translate offset.
* [zoom.scaleExtent](Zoom-Behavior#scaleExtent) - optional limits on the scale factor.
* [zoom.center](Zoom-Behavior#center) - an optional focal point for mousewheel zooming.
* [zoom.size](Zoom-Behavior#size) - the dimensions of the viewport.
* [zoom.x](Zoom-Behavior#x) - an optional scale whose domain is bound to the _x_ extent of the viewport.
* [zoom.y](Zoom-Behavior#y) - an optional scale whose domain is bound to the _y_ extent of the viewport.
* [zoom.on](Zoom-Behavior#on) - listeners for when the scale or translate changes.
* [zoom.event](Zoom-Behavior#event) - dispatch zoom events after setting the scale or translate.