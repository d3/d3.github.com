> [Wiki](Home) ▸ [[API Reference]] ▸ [[SVG]] ▸ **SVG Controls**

## Brush

[![6452972](http://bl.ocks.org/mbostock/raw/6452972/thumbnail.png)](http://bl.ocks.org/mbostock/6452972)
[![4063663](http://bl.ocks.org/mbostock/raw/4063663/thumbnail.png)](http://bl.ocks.org/mbostock/4063663)
[![6232620](http://bl.ocks.org/mbostock/raw/6232620/thumbnail.png)](http://bl.ocks.org/mbostock/6232620)
[![6232537](http://bl.ocks.org/mbostock/raw/6232537/thumbnail.png)](http://bl.ocks.org/mbostock/6232537)
[![6216724](http://bl.ocks.org/mbostock/raw/6216724/thumbnail.png)](http://bl.ocks.org/mbostock/6216724)
[![4560481](http://bl.ocks.org/mbostock/raw/4560481/thumbnail.png)](http://bl.ocks.org/mbostock/4560481)
[![4565798](http://bl.ocks.org/mbostock/raw/4565798/thumbnail.png)](http://bl.ocks.org/mbostock/4565798)
[![4349545](http://bl.ocks.org/mbostock/raw/4349545/thumbnail.png)](http://bl.ocks.org/mbostock/4349545)
[![4349509](http://bl.ocks.org/mbostock/raw/4349509/thumbnail.png)](http://bl.ocks.org/mbostock/4349509)
[![4343214](http://bl.ocks.org/mbostock/raw/4343214/thumbnail.png)](http://bl.ocks.org/mbostock/4343214)
[![1667367](http://bl.ocks.org/mbostock/raw/1667367/thumbnail.png)](http://bl.ocks.org/mbostock/1667367)

<a name="brush" href="#brush">#</a> d3.svg.<b>brush</b>()

Constructs a new brush with no default *x*- and *y*-scale, and an empty extent.

<a name="_brush" href="#_brush">#</a> <b>brush</b>(<i>selection</i>)

Draws or redraws this brush into the specified *selection* of elements. The brush may be drawn into multiple elements simultaneously, but note that these brushes would share the same backing extent; typically, a brush is drawn into only one element at a time. The *selection* can also be a [transition](Transitions), in which case the brush will perform an [automatic transition](http://bl.ocks.org/mbostock/6216724). Use [brush.event](#brush_event) to dispatch brush events during the transition for animated brushing.

<a name="brush_x" href="#brush_x">#</a> brush.<b>x</b>([<i>scale</i>])

Gets or sets the *x*-scale associated with the brush. If *scale* is specified, sets the *x*-scale to the specified scale and returns the brush; if *scale* is not specified, returns the current *x*-scale, which defaults to null. The scale is typically defined as a [quantitative scale](Quantitative-Scales), in which case the [extent](#extent) is in data space from the scale's [domain](Quantitative-Scales#linear_domain); however, it may instead be defined as an [ordinal scale](Ordinal-Scales), where the extent is in pixel space from the scale's [range extent](Ordinal-Scales#ordinal_rangeExtent).

<a name="brush_y" href="#brush_y">#</a> brush.<b>y</b>([<i>scale</i>])

Gets or sets the *y*-scale associated with the brush. If *scale* is specified, sets the *y*-scale to the specified scale and returns the brush; if *scale* is not specified, returns the current *y*-scale, which defaults to null. The scale is typically defined as a [quantitative scale](Quantitative-Scales), in which case the [extent](#extent) is in data space from the scale's [domain](Quantitative-Scales#linear_domain); however, it may instead be defined as an [ordinal scale](Ordinal-Scales), where the extent is in pixel space from the scale's [range extent](Ordinal-Scales#ordinal_rangeExtent).

<a name="brush_extent" href="#brush_extent">#</a> brush.<b>extent</b>([<i>values</i>])

Gets or sets the current brush extent. If *values* is specified, sets the extent to the specified values and returns the brush; if *values* is not specified, returns the current extent. The definition of the extent depends on the associated scales. If both an *x*- and *y*-scale are available, then the extent is the two-dimensional array [‍​[<i>x0</i>, <i>y0</i>], [<i>x1</i>, <i>y1</i>]​], where *x0* and *y0* are the lower bounds of the extent, and *x1* and *y1* are the upper bounds of the extent. If only the *x*-scale is available, then the extent is defined as the one-dimensional array [<i>x0</i>, <i>x1</i>]; likewise, if only the *y*-scale is available, then the extent is [<i>y0</i>, <i>y1</i>]. If neither scale is available, then the extent is null.

When the extent is set to *values*, the resulting extent is preserved exactly. However, as soon as the brush is moved by the user (on mousemove following a mousedown), then the extent will be recomputed by calling [scale.invert](Quantitative-Scales#linear_invert). Note that, in this case, the values may be slightly imprecise due to the limited precision of pixels.

Note that this does not automatically redraw the brush or dispatch any events to listeners. To redraw the brush, call [brush](#_brush) on a selection or transition; to dispatch events, use [brush.event](#brush_event).

<a name="brush_clamp" href="#brush_clamp">#</a> brush.<b>clamp</b>([<i>clamp</i>])

Gets or sets the current clamping behavior. If *clamp* is specified, sets the clamping behavior and returns the brush; if *clamp* is not specified, returns the current clamping behavior. The clamping behavior definition depends on the associated scales. If both an *x*- and *y*-scale are available, then the clamping behavior is an array [ *x*, *y* ], where *x* and *y* are booleans that determine whether the each dimension of the two-dimensional extent should be clamped to its respective *x*- and *y*-scale. If only one of the *x*-scale and *y*-scale are available, then the clamping behavior is a boolean referring to whether the one-dimensional extent should be clamped to that scale. If neither scale is available, then the clamping behavior is null.

<a name="brush_clear" href="#brush_clear">#</a> brush.<b>clear</b>()

Clears the extent, making the brush extent [empty](#brush_empty).

<a name="brush_empty" href="#brush_empty">#</a> brush.<b>empty</b>()

Returns true if and only if the brush extent is empty. When a brush is created, it is initially empty; the brush may also become empty with a single click on the background without moving, or if the extent is [cleared](#brush_clear). A brush is considered empty if it has zero-width or zero-height. When the brush is empty, its extent is not strictly defined.

<a name="brush_on" href="#brush_on">#</a> brush.<b>on</b>(<i>type</i>[, <i>listener</i>])

Gets or sets the *listener* for the specified event *type*. Brushes support three types of events:

* _brushstart_ - on mousedown
* _brush_ - on mousemove, if the brush extent has changed
* _brushend_ - on mouseup

Note that when clicking on the background, a mousedown also triggers a "brush" event, since the brush extent is immediately cleared to start a new extent.

<a name="brush_event" href="#brush_event">#</a> brush.<b>event</b>(<i>selection</i>)

If *selection* is a selection, it dispatches a brush gesture to registered listeners as a three event sequence: _brushstart_, _brush_ and _brushend_. This can be useful in triggering listeners after setting the [brush extent](#brush_extent) programatically. If *selection* is a transition, registers the appropriate tweens so that the brush dispatches events over the course of the transition: a _brushstart_ event when the transition starts from the previously-set extent, _brush_ events for each tick of the transition, and finally a _brushend_ event when the transition ends. Note that the transition will be [interrupted](Selections#interrupt) if the user starts brushing before the transition ends.