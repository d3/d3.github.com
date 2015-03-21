> [Wiki](Home) ▸ [[API Reference]] ▸ [[Behaviors]] ▸ **Zoom Behavior**

[![Pan+Zoom](http://bl.ocks.org/mbostock/raw/3892919/thumbnail.png)](http://bl.ocks.org/mbostock/3892919)
[![Zoomable Area](http://bl.ocks.org/mbostock/raw/4015254/thumbnail.png)](http://bl.ocks.org/mbostock/4015254)
[![Geometric Zooming](http://bl.ocks.org/mbostock/raw/3680999/thumbnail.png)](http://bl.ocks.org/mbostock/3680999)
[![d3.geo.tile](http://bl.ocks.org/mbostock/raw/4132797/thumbnail.png)](http://bl.ocks.org/mbostock/4132797)
[![Raster & Vector Zoom](http://bl.ocks.org/mbostock/raw/5914438/thumbnail.png)](http://bl.ocks.org/mbostock/5914438)
[![Zoomable Geography](http://bl.ocks.org/mbostock/raw/2374239/thumbnail.png)](http://bl.ocks.org/mbostock/2374239)

This behavior automatically creates event listeners to handle zooming and panning gestures on a container element. Both mouse and touch events are supported.

<a name="zoom" href="#zoom">#</a> d3.behavior.<b>zoom</b>()

Constructs a new zoom behavior.

<a name="_zoom" href="#_zoom">#</a> <b>zoom</b>(<i>selection</i>)

Applies the zoom behavior to the specified *selection*, registering the necessary event listeners to support panning and zooming.

<a name="translate" href="#translate">#</a> zoom.<b>translate</b>([<i>translate</i>])

Specifies the current zoom translation vector. If not specified, returns the current translation vector, which defaults to [0, 0].

<a name="scale" href="#scale">#</a> zoom.<b>scale</b>([<i>scale</i>])

Specifies the current zoom scale. If not specified, returns the current zoom scale, which defaults to 1.

<a name="scaleExtent" href="#scaleExtent">#</a> zoom.<b>scaleExtent</b>([<i>extent</i>])

Specifies the zoom scale's allowed range as a two-element array, [<i>minimum</i>, <i>maximum</i>]. If not specified, returns the current scale extent, which defaults to [0, Infinity].

<a name="center" href="#center">#</a> zoom.<b>center</b>([<i>center</i>])

If *center* is specified, sets the [focal point](http://bl.ocks.org/mbostock/6226534) [<i>x</i>, <i>y</i>] for mousewheel zooming and returns this zoom behavior. If *center* is not specified, returns the current focal point, which defaults to null. A null center indicates that mousewheel zooming should zoom in and out around the current mouse location.

<a name="size" href="#size">#</a> zoom.<b>size</b>([<i>size</i>])

If *size* is specified, sets the viewport size to the specified dimensions [<i>width</i>, <i>height</i>] and returns this zoom behavior. If *size* is not specified, returns the current viewport size which defaults to [960, 500]. A *size* is needed to support [smooth zooming](Transitions#d3_interpolateZoom) during transitions.

<a name="x" href="#x">#</a> zoom.<b>x</b>([<i>x</i>])

Specifies an _x_-scale whose domain should be automatically adjusted when zooming. If not specified, returns the current _x_-scale, which defaults to null. If the scale's domain or range is modified programmatically, this function should be called again. Setting the _x_-scale also resets the scale to 1 and the translate to [0, 0].

<a name="y" href="#y">#</a> zoom.<b>y</b>([<i>y</i>])

Specifies an _y_-scale whose domain should be automatically adjusted when zooming. If not specified, returns the current _y_-scale, which defaults to null. If the scale's domain or range is modified programmatically, this function should be called again. Setting the _y_-scale also resets the scale to 1 and the translate to [0, 0].

<a name="on" href="Zoom-Behavior#on">#</a> zoom.<b>on</b>(<i>type</i>, <i>listener</i>)

Registers the specified *listener* to receive events of the specified *type* from the zoom behavior. The following types are supported:

* _zoomstart_ - at the start of a zoom gesture (e.g., touchstart).
* _zoom_ - when the view changes (e.g., touchmove).
* _zoomend_ - at the end of the current zoom gesture (e.g., touchend).

If an event listener was already registered for the same type, the existing listener is removed before the new listener is added. To register multiple listeners for the same event type, the type may be followed by an optional namespace, such as "zoom.foo" and "zoom.bar". To remove a listener, pass null as the listener.

For mousewheel events, which happen discretely with no explicit start and end reported by the browser, events that occur within 50 milliseconds of each other are grouped into a single zoom gesture. If you want more robust interpretation of these gestures, please petition your browser vendor of choice for better touch event support.

When fired, the d3.event object will contain the following properties:

* _scale_ - a number; the current scale.
* _translate_ - a two-element array representing the current translation vector.

<a name="event" href="#event">#</a> zoom.<b>event</b>(<i>selection</i>)

If *selection* is a selection, immediately dispatches a zoom gesture to registered listeners, as the three event sequence _zoomstart_, _zoom_ and _zoomend_. This can be useful in triggering listeners after setting the [translate](#translate) or [scale](#scale) programatically. If *selection* is a transition, registers the appropriate tweens so that the zoom behavior dispatches events over the course of the transition: a _zoomstart_ event when the transition starts from the previously-set view, _zoom_ events for each tick of the transition, and finally a _zoomend_ event when the transition ends. Note that the transition will be [interrupted](Selections#interrupt) if the user starts zooming before the transition ends.