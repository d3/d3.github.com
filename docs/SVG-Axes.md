> [Wiki](Home) ▸ [[API Reference]] ▸ [[SVG]] ▸ **SVG Axes**

D3’s [axis component](http://bl.ocks.org/mbostock/1166403) displays reference lines for scales automatically. This lets you focus on displaying the data, while the axis component takes care of the tedious task of drawing axes and labeled ticks.

[![Axis Component](http://bl.ocks.org/mbostock/raw/1166403/thumbnail.png)](http://bl.ocks.org/mbostock/1166403)
[![6186172](http://bl.ocks.org/mbostock/raw/6186172/thumbnail.png)](http://bl.ocks.org/mbostock/6186172)
[![5537697](http://bl.ocks.org/mbostock/raw/5537697/thumbnail.png)](http://bl.ocks.org/mbostock/5537697)
[![4573883](http://bl.ocks.org/mbostock/raw/4573883/thumbnail.png)](http://bl.ocks.org/mbostock/4573883)
[![4403522](http://bl.ocks.org/mbostock/raw/4403522/thumbnail.png)](http://bl.ocks.org/mbostock/4403522)
[![4349486](http://bl.ocks.org/mbostock/raw/4349486/thumbnail.png)](http://bl.ocks.org/mbostock/4349486)
[![3892919](http://bl.ocks.org/mbostock/raw/3892919/thumbnail.png)](http://bl.ocks.org/mbostock/3892919)
[![3371592](http://bl.ocks.org/mbostock/raw/3371592/thumbnail.png)](http://bl.ocks.org/mbostock/3371592)
[![3259783](http://bl.ocks.org/mbostock/raw/3259783/thumbnail.png)](http://bl.ocks.org/mbostock/3259783)
[![3212294](http://bl.ocks.org/mbostock/raw/3212294/thumbnail.png)](http://bl.ocks.org/mbostock/3212294)
[![2983699](http://bl.ocks.org/mbostock/raw/2983699/thumbnail.png)](http://bl.ocks.org/mbostock/2983699)
[![2996766](http://bl.ocks.org/mbostock/raw/2996766/thumbnail.png)](http://bl.ocks.org/mbostock/2996766)
[![2996785](http://bl.ocks.org/mbostock/raw/2996785/thumbnail.png)](http://bl.ocks.org/mbostock/2996785)
[![1849162](http://bl.ocks.org/mbostock/raw/1849162/thumbnail.png)](http://bl.ocks.org/mbostock/1849162)
[![4323929](http://bl.ocks.org/mbostock/raw/4323929/thumbnail.png)](http://bl.ocks.org/mbostock/4323929)

## Axis

The axis component is designed to work with D3’s [quantitative](Quantitative-Scales), [time](Time-Scales) and [ordinal](Ordinal-Scales) scales.

<a name="axis" href="SVG-Axes#axis">#</a> d3.svg.<b>axis</b>()

Create a new default axis.

<a name="_axis" href="SVG-Axes#_axis">#</a> <b>axis</b>(<i>selection</i>)

Apply the axis to a [selection](Selections) or [transition](Transitions). The selection must contain an `svg` or `g` element. For example:

```js
d3.select("body").append("svg")
    .attr("class", "axis")
    .attr("width", 1440)
    .attr("height", 30)
  .append("g")
    .attr("transform", "translate(0,30)")
    .call(axis);
```

<a name="scale" href="#scale">#</a> axis.<b>scale</b>([<i>scale</i>])

If *scale* is specified, sets the scale and returns the axis. If *scale* is not specified, returns the current scale which defaults to a linear scale.

<a name="orient" href="#orient">#</a> axis.<b>orient</b>([<i>orientation</i>])

If *orientation* is specified, sets the orientation and returns the axis. If *orientation* is not specified, returns the current orientation which defaults to `"bottom"`. The following orientations are supported:

* `"top"` - horizontal axis with ticks above the domain path
* `"bottom"` - horizontal axis with ticks below the domain path
* `"left"` - vertical axis with ticks to the left of the domain path
* `"right"` - vertical axis with ticks to the right of the domain path

If the specified *orientation* is not one of the supported values, the axis reverts to the default orientation. Changing the orientation affects the position of the ticks and their labels in relation to the axis path, but does not change the position of the axis itself; to change the position of the axis with respect to the plot, specify a [[transform|http://www.w3.org/TR/SVG/coords.html#TransformAttribute]] attribute on the containing `g` element.

<a name="ticks" href="#ticks">#</a> axis.<b>ticks</b>([<i>arguments…</i>])

If *arguments* are specified, stores the specified arguments for subsequent use in generating ticks and returns the axis. The arguments will later be passed to [scale.ticks](Quantitative-Scales#linear_ticks) to generate tick values (unless tick values are specified explicitly via [axis.tickValues](#tickValues)). The arguments are also passed to the scale’s tickFormat method to generate the default tick format. If no arguments are specified, returns the current tick arguments, which default to [10].

Suitable arguments depends on the associated scale: for a [linear scale](Quantitative-Scales), you might specify a tick count such as `axis.ticks(20)`; for a [log scale](Quantitative-Scales#log_tickFormat), you might specify both a count and a tick format; for a [time scale](Time-Scales#ticks), a [time interval](Time-Intervals) such as `axis.ticks(d3.time.minutes, 15)` might be appropriate.

<a name="tickValues" href="#tickValues">#</a> axis.<b>tickValues</b>([<i>values</i>])

If a *values* array is specified, the specified values are used for ticks, rather than using the scale's automatic tick generator. If *values* is null, clears any previously-set explicit tick values, reverting back to the scale's tick generator. If *values* is not specified, returns the currently-set tick values, which defaults to null. For example, to generate ticks at specific values:

```js
var xAxis = d3.svg.axis()
    .scale(x)
    .tickValues([1, 2, 3, 5, 8, 13, 21]);
```

The explicit tick values take precedent over the tick arguments set by [axis.ticks](#ticks). However, any  tick arguments will still be passed to the scale's [tickFormat](#tickFormat) function if a tick format is not also set; thus, it may be valid to set both axis.ticks and axis.tickValues.

<a name="tickSize" href="#tickSize">#</a> axis.<b>tickSize</b>([<i>inner, outer</i>])

If *inner, outer* are specified, sets the [inner](#innerTickSize) and [outer](#outerTickSize) tick sizes to the specified value and returns the axis. If *inner, outer* are not specified, returns the current inner tick size, which defaults to 6.

<a name="innerTickSize" href="#innerTickSize">#</a> axis.<b>innerTickSize</b>([<i>size</i>])

If *size* is specified, sets the inner tick size to the specified value and returns the axis. If *size* is not specified, returns the current inner tick size, which defaults to 6. The inner tick size controls the length of the tick lines, offset from the native position of the axis.

<a name="outerTickSize" href="#outerTickSize">#</a> axis.<b>outerTickSize</b>([<i>size</i>])

If *size* is specified, sets the outer tick size to the specified value and returns the axis. If *size* is not specified, returns the current outer tick size, which defaults to 6. The outer tick size controls the length of the square ends of the domain path, offset from the native position of the axis. Thus, the “outer ticks” are not actually ticks but part of the domain path, and their position is determined by the associated scale's domain extent. Thus, outer ticks may overlap with the first or last inner tick. An outer tick size of 0 suppresses the square ends of the domain path, instead producing a straight line.

<a name="tickPadding" href="#tickPadding">#</a> axis.<b>tickPadding</b>([<i>padding</i>])

If *padding* is specified, sets the padding to the specified value in pixels and returns the axis. If *padding* is not specified, returns the current padding which defaults to 3 pixels.

<a name="tickFormat" href="#tickFormat">#</a> axis.<b>tickFormat</b>([<i>format</i>])

If *format* is specified, sets the format to the specified function and returns the axis. If *format* is not specified, returns the current format function, which defaults to null. A null format indicates that the scale's default formatter should be used, which is generated by calling [scale.tickFormat](Quantitative-Scales#linear_tickFormat). In this case, the arguments specified by [ticks](#ticks) are likewise passed to scale.tickFormat.

See [d3.format](Formatting#d3_format) for help creating formatters. For example, `axis.tickFormat(d3.format(",.0f"))` will display integers with comma-grouping for thousands. Defining the formatter first: `var commasFormatter = d3.format(",.0f")` lets you to call it as a function of your data, for example, to add currency units in front of the comma-grouped integers: `.tickFormat(function(d) { return "$" + commasFormatter(d); })`.

Note: for log scales, the number of ticks cannot be customized; however, the number of tick labels *can* be customized via [ticks](#ticks). Likewise, the tick formatter for log scales is typically specified via ticks rather than tickFormat, so as to preserve the default label-hiding behavior.