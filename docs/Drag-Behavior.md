> [Wiki](Home) ▸ [[API Reference]] ▸ [[Behaviors]] ▸ **Drag Behavior**

This behavior automatically creates event listeners to handle drag gestures on an element. Both mouse events and touch events are supported.

<a name="drag" href="Drag-Behavior#drag">#</a> d3.behavior.<b>drag</b>()

Constructs a new drag behavior.

<a name="on" href="Drag-Behavior#on">#</a> drag.<b>on</b>(<i>type</i>[, <i>listener</i>])

Registers the specified *listener* to receive events of the specified *type* from the drag behavior. If no *listener* is specified, returns the currently-registered listener for the specified event *type*. (The *type* may include a namespace; see [dispatch.on](Internals#dispatch_on) for additional details.) The following events are supported:

* _dragstart_ - when a drag gesture starts.
* _drag_ - when the drag gesture moves.
* _dragend_ - when the drag gesture finishes.

Drag events (but not dragstart and dragend events) expose "x" and "y" properties representing the current position of the drag gesture in local coordinates. By default, this position is simply the [mouse](Selections#d3_mouse) (or [touch](Selections#d3_touches)) position; however, the position can be modified by specifying an [origin](#origin). The drag event also exposes "dx" and "dy" properties representing the element’s coordinates relative to its position at the beginning of the gesture, which is occasionally more convenient than specifying an explicit origin.

During a drag gesture, some browser default behaviors (such as text selection) are prevented. To allow the dragging of links, the default behavior for a click event that immediately follows a non-empty drag gesture is prevented. When registering your own click listener on draggable elements, you can check whether the click event was suppressed as follows:

```js
selection.on("click", function() {
  if (d3.event.defaultPrevented) return; // click suppressed
  console.log("clicked!");
});
```

When combining drag behaviors with other event listeners for interaction events (such as having [drag take precedence over zoom](http://bl.ocks.org/mbostock/6123708)), you may also consider stopping propagation on the source event to prevent multiple actions:

```js
drag.on("dragstart", function() {
  d3.event.sourceEvent.stopPropagation(); // silence other listeners
});
```

<a name="origin" href="Drag-Behavior#origin">#</a> drag.<b>origin</b>([<i>origin</i>])

If *origin* is specified, sets the origin accessor to the specified function. If *origin* is not specified, returns the current origin accessor which defaults to null.

The _origin_ accessor function is used to determine the starting position (the “origin”) of the element being dragged; this allows the drag behavior to preserve the offset between the mouse position and the starting element position during drag. If the origin accessor is null, then the element position is set to the mouse position on drag; this can cause a noticeable jump on large elements. If an origin accessor is specified, the function is called on mousedown. The function is invoked in the same manner as other operator functions, being passed the current datum `d` and index `i`, with the `this` context as the clicked-on DOM element. To access the current event, use the global [d3.event](Selections#d3_event). The origin accessor must return an object with `x` and `y` properties representing the starting coordinates of the element being dragged.

Frequently the origin accessor is specified as the identity function: `function(d) { return d; }`. This is suitable when the datum bound to the dragged element is already an object with `x` and `y` attributes representing its current position. For example: <http://bl.ocks.org/1557377>