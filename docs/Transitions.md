> [Wiki](Home) ▸ [[API Reference]] ▸ [[Core]] ▸ **Transitions**

A transition is a special type of [[selection|Selections]] where the operators apply smoothly over time rather than instantaneously. You derive a transition from a selection using the [[transition|Selections#transition]] operator. While transitions generally support the same operators as selections (such as [attr](Transitions#attr) and [style](Transitions#style)), not all operators are supported; for example, you must append elements before a transition starts. A [remove](Transitions#remove) operator is provided for convenient removal of elements when the transition ends.

Transitions may have per-element delays and durations, computed using functions of data similar to other operators. This makes it easy to stagger a transition for different elements, either based on data or index. For example, you can sort elements and then stagger the transition for better perception of element reordering during the transition. For more details on these techniques, see [["Animated Transitions in Statistical Data Graphics"|http://vis.berkeley.edu/papers/animated_transitions/]] by Heer & Robertson.

D3 has many built-in interpolators to simplify the transitioning of arbitrary values. For instance, you can transition from the font string "500 12px sans-serif" to "300 42px sans-serif", and D3 will find the numbers embedded within the string, interpolating both font size and weight automatically. You can even interpolate arbitrary nested objects and arrays or SVG path data. D3 allows custom interpolators should you find the built-in ones insufficient, using the [attrTween](Transitions#attrTween) and [styleTween](Transitions#styleTween) operators. D3's interpolators provide the basis for [[scales|Scales]] and can be used outside of transitions; an interpolator is a function that maps a parametric value *t* in the domain [0,1] to a color, number or arbitrary value.

Only one transition may be *active* on a given element at a given time. However, multiple transitions may be *scheduled* on the same element; provided they are staggered in time, each transition will run in sequence. If a newer transition runs on a given element, it implicitly cancels any older transitions, including any that were scheduled but not yet run. This allows new transitions, such as those in response to a new user event, to supersede older transitions even if those older transitions are staged or have staggered delays. Multi-stage transitions (transitions that are created during the "end" event of an earlier transition) are considered the same "age" as the original transition; internally this is tracked by monotonically-increasing unique IDs which are inherited when multi-stage transitions are created. To interrupt an in-progress transition, use [selection.interrupt](Selections#interrupt).

For more on transitions, read the [Working with Transitions](http://bost.ocks.org/mike/transition/) tutorial.

## Starting Transitions

Transitions are created using the [[transition|Selections#transition]] operator on a selection. Transitions start automatically upon creation after a delay which defaults to zero; however, note that a zero-delay transition actually starts after a minimal (~17ms) delay, pending the first timer callback. Transitions have a default duration of 250ms.

<a name="d3_transition" href="#d3_transition">#</a> d3.<b>transition</b>([<i>selection</i>], [<i>name</i>])

Create an animated transition. This is equivalent to `d3.select(document).transition()`. This method is used rarely, as it is typically easier to derive a transition from an existing selection, rather than deriving a selection from an existing transition. If *name* is specified, create a transition with the specified name; otherwise, use the empty name (“”).

When called with an optional *selection*, this method typically returns the specified selection; i.e., it is a no-op. However, within the context of [transition.each](#each), this method will create a new transition for the specified selection that inherits the delay, duration and other properties of the parent transition. This is useful for implementing [reusable components](http://bost.ocks.org/mike/chart/) that can be called either on selections or on transitions, in the latter case supporting deriving concurrent transitions. An example of this is D3’s [axis component](SVG-Axes).

<a name="delay" href="Transitions#delay">#</a> transition.<b>delay</b>([<i>delay</i>])

Specifies the transition *delay* in milliseconds. If *delay* is a constant, then all elements are given the same delay; otherwise, if *delay* is a function, then the function is evaluated for each selected element (in order), being passed the current datum `d` and the current index `i`, with the `this` context as the current DOM element. The function's return value is then used to set each element's delay. The default delay is 0. If *delay* is not specified, returns the delay bound to the first non-null element in the transition.

Setting the delay to be a multiple of the index `i` is a convenient way to stagger transitions for elements. For example, if you used a fixed duration of *duration*, and have *n* elements in the current selection, you can stagger the transition over 2 \* *duration* by saying:

```javascript
.delay(function(d, i) { return i / n * duration; })
```

You may also compute the delay as a function of the data, thereby creating a data-driven animation.

<a name="duration" href="Transitions#duration">#</a> transition.<b>duration</b>([<i>duration</i>])

Specifies per-element *duration* in milliseconds. If *duration* is a constant, then all elements are given the same duration; otherwise, if *duration* is a function, then the function is evaluated for each selected element (in order), being passed the current datum `d` and the current index `i`, with the `this` context as the current DOM element. The function's return value is then used to set each element's duration. The default duration is 250ms. If *duration* is not specified, returns the duration bound to the first non-null element in the transition.

<a name="ease" href="Transitions#ease">#</a> transition.<b>ease</b>([<i>value</i>[, <i>arguments</i>]])

Specifies the transition [[easing function|http://www.robertpenner.com/easing/]]. If *value* is a function, it is used to ease the current parametric timing value *t*, which is typically in the range [0,1]. (At the end of a transition, *t* may be slightly greater than 1.) Otherwise, *value* is assumed to be a string and the arguments are passed to the [d3.ease](Transitions#d3_ease) method to generate an easing function. The default easing function is "cubic-in-out". Note that it is not possible to customize the easing function per-element or per-attribute; however, if you use the "linear" easing function, you can apply custom easing inside your interpolator using [attrTween](Transitions#attrTween) or [styleTween](Transitions#styleTween). If *ease* is not specified, returns the easing function bound to the first non-null element in the transition.

## Operating on Transitions

### Content

<a name="attr" href="Transitions#attr">#</a> transition.<b>attr</b>(<i>name</i>, <i>value</i>)

Transitions the value of the attribute with the specified *name* to the specified *value*. The starting value of the transition is the current attribute value(be sure to set an initial value beforehand if you don't want bad surprises), and the ending value is the specified *value*.  If *value* is a constant, then all elements are transitioned to the same attribute value; otherwise, if *value* is a function, then the function is evaluated for each selected element (in order), being passed the current datum `d` and the current index `i`, with the `this` context as the current DOM element. The function's return value is then used to transition each element's attribute. Null values are not supported because the interpolator would be undefined; if you want to remove the attribute after the transition finishes, use [remove](Transitions#remove).

An interpolator is selected automatically based on the ending value. If the ending value is a number, the starting value is coerced to a number and [interpolateNumber](Transitions#d3_interpolateNumber) is used. If the ending value is a string, a check is performed to see if the string represents a color of the form `/^(#|rgb\(|hsl\()/`, or one of the [[CSS named colors|http://www.w3.org/TR/SVG/types.html#ColorKeywords]]; if so, the starting value is coerced to an RGB color and [interpolateRgb](Transitions#d3_interpolateRgb) is used. Otherwise, [interpolateString](Transitions#d3_interpolateString) is used, which interpolates numbers embedded within strings.

<a name="attrTween" href="Transitions#attrTween">#</a> transition.<b>attrTween</b>(<i>name</i>, <i>tween</i>)

Transitions the value of the attribute with the specified *name* according to the specified *tween* function. The starting and ending value of the transition are determined by *tween*; the *tween* function is invoked when the transition starts on each element, being passed the current datum `d`, the current index `i` and the current attribute value `a`, with the `this` context as the current DOM element. The return value of *tween* must be an interpolator: a function that maps a parametric value *t* in the domain [0,1] to a color, number or arbitrary value.

For example, the attr operator is built on top of the attrTween operator. The tween function used by the attr operator depends on whether the end value is a function or a constant. If the end value is a function:

```javascript
function tween(d, i, a) {
  return d3.interpolate(a, String(value.call(this, d, i)));
}
```

Otherwise, if the end value is a constant:

```javascript
function tween(d, i, a) {
  return d3.interpolate(a, String(value));
}
```

The attrTween operator is used when you need a custom interpolator, such as one that understands the semantics of SVG path data. One common technique is *dataspace interpolation*, where [interpolateObject](Transitions#d3_interpolateObject) is used to interpolate two data values, and the result of this interpolation is then used (say, with a [[shape|SVG-Shapes]]) to compute the new attribute value. Use the attr operator for the simpler common case where an interpolator can be automatically derived from the current attribute value to the desired end value.

<a name="style" href="Transitions#style">#</a> transition.<b>style</b>(<i>name</i>, <i>value</i>[, <i>priority</i>])

Transitions the value of the CSS style property with the specified *name* to the specified *value*. An optional *priority* may also be specified, either as null or the string "important" (without the exclamation point). The starting value of the transition is the current computed style property value, and the ending value is the specified *value*.  If *value* is a constant, then all elements are transitioned to the same style property value; otherwise, if *value* is a function, then the function is evaluated for each selected element (in order), being passed the current datum `d` and the current index `i`, with the `this` context as the current DOM element. The function's return value is then used to transition each element's style property. Null values are not supported because the interpolator would be undefined; if you want to remove the style property after the transition finishes, listen to the [end](Transitions#each) event.

An interpolator is selected automatically based on the ending value. If the ending value is a number, the starting value is coerced to a number and [interpolateNumber](Transitions#d3_interpolateNumber) is used. If the ending value is a string, a check is performed to see if the string represents a color of the form `/^(#|rgb\(|hsl\()/`, or one of the [[CSS named colors|http://www.w3.org/TR/SVG/types.html#ColorKeywords]]; if so, the starting value is coerced to an RGB color and [interpolateRgb](Transitions#d3_interpolateRgb) is used. Otherwise, [interpolateString](Transitions#d3_interpolateString) is used, which interpolates numbers embedded within strings.

Note that the computed starting value may be different than the value that was previously set, particularly if the style property was set using a shorthand property (such as the "font" style, which is shorthand for "font-size", "font-face", etc.).  Moreover, computed dimensions such as "font-size" and "line-height" are always in pixels, so you should specify the ending value in pixels too if appropriate.

<a name="styleTween" href="Transitions#styleTween">#</a> transition.<b>styleTween</b>(<i>name</i>, <i>tween</i>[, <i>priority</i>])

Transitions the value of the CSS style property with the specified *name* according to the specified *tween* function. An optional *priority* may also be specified, either as null or the string "important" (without the exclamation point). The starting and ending value of the transition are determined by *tween*; the *tween* function is invoked when the transition starts on each element, being passed the current datum `d`, the current index `i` and the current attribute value `a`, with the `this` context as the current DOM element. The return value of *tween* must be an interpolator: a function that maps a parametric value *t* in the domain [0,1] to a color, number or arbitrary value.

For example, the style operator is built on top of the styleTween operator. The tween function used by the style operator depends on whether the end value is a function or a constant. If the end value is a function:

```javascript
function tween(d, i, a) {
  return d3.interpolate(a, String(value.call(this, d, i)));
}
```

Otherwise, if the end value is a constant:

```javascript
function tween(d, i, a) {
  return d3.interpolate(a, String(value));
}
```

The styleTween operator is used when you need a custom interpolator, such as one that understands the semantics of CSS3 transforms. Use the style operator for the simpler common case where an interpolator can be automatically derived from the current computed style property value to the desired end value.

<a name="text" href="Transitions#text">#</a> transition.<b>text</b>(<i>value</i>)

The `text` operator is based on the [[textContent|http://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-textContent]] property; setting the text content will replace any existing child elements.

Set the text content to the specified value on all selected elements when the transition starts. If *value* is a constant, then all elements are given the same text content; otherwise, if *value* is a function, then the function is evaluated for each selected element (in order), being passed the current datum `d` and the current index `i`, with the `this` context as the current DOM element. The function's return value is then used to set each element's text content. A null value will clear the content.

<a name="tween" href="Transitions#tween">#</a> transition.<b>tween</b>(<i>name</i>, <i>factory</i>)

Registers a custom tween for the specified *name*. When the transition starts, the specified *factory* function will be invoked for each selected element in the transition, being passed that element's data (*d*) and index (*i*) as arguments, with the element as the context (`this`). The factory should return the tween function to be called over the course of the transition. The tween function is then called repeatedly, being passed the current normalized time *t* in [0, 1]. If the factory returns null, then the tween is not run on the selected element.

The tween method is used internally to implement [attr](#attr) and [style](#style) tweens, and can be used to interpolate other document content. For example, to interpolate text content from 0 to 100:

```javascript
selection.transition().tween("text", function() {
  var i = d3.interpolateRound(0, 100);
  return function(t) {
    this.textContent = i(t);
  };
});
```

Tweens are often written using closures to capture state created when the transition starts. In the example above, the interpolator `i` is initialized when the transition starts, and then used subsequently over the course of the transition. (Though note that in the above example, the starting value of the transition is hard-coded to zero, whereas more commonly the starting value of the transition is based on the current state in the DOM.)

<a name="remove" href="Transitions#remove">#</a> transition.<b>remove</b>()

Remove the selected elements at the end of a transition. If a newer transition is scheduled on any of the selected elements, these elements will not be removed; however, the "end" event will still be dispatched.

### Subtransitions

Transitions may be derived from existing transitions, in a similar manner to subselections. Subtransitions inherit easing, duration and delay from the parent transition.

<a name="select" href="Transitions#select">#</a> transition.<b>select</b>(<i>selector</i>)

For each element in the current transition, selects the first descendant element that matches the specified *selector* string. If no element matches the specified selector for the current element, the element at the current index will be null in the returned selection; operators (with the exception of [data](Transitions#data)) automatically skip null elements, thereby preserving the index of the existing selection. If the current element has associated data, this data is inherited by the returned subselection, and automatically bound to the newly selected elements. If multiple elements match the selector, only the first matching element in document traversal order will be selected.

This method is approximately equivalent to:

```javascript
selection.select(selector).transition()
```

where *selection* is the current transition's underlying selection. In addition, the returned new transition inherits easing, duration and delay from the current transition.

<a name="selectAll" href="Transitions#selectAll">#</a> transition.<b>selectAll</b>(<i>selector</i>)

For each element in the current transition, selects descendant elements that match the specified *selector* string. The returned selection is grouped by the ancestor node in the current selection. If no element matches the specified selector for the current element, the group at the current index will be empty in the returned selection. The subselection does not inherit data from the current selection; however, if data was previously bound to the selected elements, that data will be available to operators.

This method is approximately equivalent to:

```javascript
selection.selectAll(selector).transition()
```

where *selection* is the current transition's underlying selection. In addition, the returned new transition inherits easing, duration and delay from the current transition. The duration and delay for each subelement is inherited from the duration and delay of the parent element in the current transition.

<a name="filter" href="#filter">#</a> transition.<b>filter</b>(<i>selector</i>)

Filters the transition, returning a new transition that contains only the elements for which the specified *selector* is true. The *selector* may be specified either as a function or as a selector string, such as ".foo". As with other operators, the function is passed the current datum `d` and index `i`, with the `this` context as the current DOM element. Like the built-in array [[filter|https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/Filter]] method, the returned selection *does not* preserve the index of the original selection; it returns a copy with elements removed. If you want to preserve the index, use [select](#select) instead. For example, to select every other element:

```javascript
var odds = transition.select(function(d, i) { return i & 1 ? this : null; });
```

Equivalently, using a filter function:

```javascript
var odds = transition.filter(function(d, i) { return i & 1; });
```

Or a filter selector:

```javascript
var odds = transition.filter(":nth-child(odd)");
```

Thus, you can use either select or filter to apply tweens to a subset of elements.

<a name="transition" href="Transitions#transition">#</a> transition.<b>transition</b>()

Creates a new transition on the same selected elements that starts when this transition ends. The new transition inherits this transition’s duration and easing. This can be used to define [chained transitions](http://bl.ocks.org/mbostock/4341417) without needing to listen for "end" events.

### Control

<a name="each" href="Transitions#each">#</a> transition.<b>each</b>([<i>type</i>, ]<i>listener</i>)

If <i>type</i> is specified, adds a listener for transition events, supporting "start", "end" and "interrupt" events. The listener will be invoked for each individual element in the transition.

The *start* event is invoked during the first asynchronous callback (tick) of the transition, before any tweens are invoked. For transitions with zero delay, this is typically about 17ms after the transition is scheduled. State events are useful for triggering instantaneous changes to each element, such as changing attributes that cannot be interpolated.

The *end* event is invoked during the last asynchronous callback (tick) after the transition duration and delay expires, after all tweens are invoked with t=1. Note that if the transition is superseded by a later-scheduled transition on a given element, no end event will be dispatched for that element; interrupted transitions do not trigger end events. For example, [transition.remove](#remove) schedules each element to be removed when the transition ends, but if the transition is interrupted, the element will not be removed. End events can be used as an alternative to [transition.transition](#transition) to create [chained transitions](http://bl.ocks.org/mbostock/1125997) by selecting the current element, `this`, and deriving a new transition; however, this can lead to clock drift over time and thus transition.transition should be preferred.

The *interrupt* event is invoked if an active transition is interrupted by another transition of the same name on the same element. The interrupt event is dispatched on the interrupted transition immediately prior to the start event on the interrupting transition. Note that if a transition is cancelled before it starts (such as when a later-scheduled transition starts before a delayed transition), no interrupt event is dispatched.

If <i>type</i> is not specified, behaves similarly to [selection.each](Selections#each): immediately invokes the specified *function* for each element in the current transition, passing in the current datum `d` and index `i`, with the `this` context of the current DOM element. Any transitions created within the scope of transition.each will inherit transition parameters from the parent transition, including id, delay, duration and easing. Thus, transitions created within a transition.each will not interrupt the parent transition, similar to [subtransitions](#transition).

The transition.each method can be used to chain transitions and apply shared timing across a set of transitions. For example:

```js
d3.transition()
    .duration(750)
    .ease("linear")
    .each(function() {
      d3.selectAll(".foo").transition()
          .style("opacity", 0)
         .remove();
    })
  .transition()
    .each(function() {
      d3.selectAll(".bar").transition()
        .style("opacity", 0)
        .remove();
    });
```

By using `d3.select(this)` within transition.each, you can even inherit staggered delay across a set of selected elements. This technique is used by the [Axis component](SVG-Axes) to support [automatic transitions](http://bl.ocks.org/mbostock/1166403).

See also the [Exit, Update, Enter](http://bl.ocks.org/mbostock/5779690) example.

<a name="call" href="Transitions#call">#</a> transition.<b>call</b>(<i>function</i>[, <i>arguments…</i>])

Invokes the specified *function* once, passing in the current transition along with any optional *arguments*. The call operator always returns the current transition, regardless of the return value of the specified function. The call operator is identical to invoking a function by hand; but it makes it easier to use method chaining. For example, say we want to set a number of attributes the same way in a number of different places. So we take the code and wrap it in a reusable function:

```javascript
function foo(transition) {
  transition
      .attr("name1", "value1")
      .attr("name2", "value2");
}
```

Now, we can say this:

```javascript
foo(d3.selectAll("div").transition())
```

Or equivalently:

```javascript
d3.selectAll("div").transition().call(foo);
```

In many cases, it is possible to call the same function *foo* on both transitions and selections, due to identical methods on both selections and transitions! The `this` context of the called function is also the current transition. This is slightly redundant with the first argument, which we might fix in the future.

<a name="empty" href="Transitions#empty">#</a> transition.<b>empty</b>()

Returns true if the current transition is empty; a transition is empty if it contains no non-null elements.

<a name="node" href="Transitions#node">#</a> transition.<b>node</b>()

Returns the first non-null element in the current transition. If the transition is empty, returns null.

<a name="size" href="Transitions#size">#</a> transition.<b>size</b>()

Returns the total number of elements in the current transition.

## Easing

<a name="d3_ease" href="Transitions#d3_ease">#</a> d3.<b>ease</b>(<i>type</i>[, <i>arguments…</i>])

Returns a built-in easing function of the specified *type*, with any optional *arguments*. An easing function takes the current parameterized time value *t* in the domain [0,1], and maps it to another value in a similar range; it is typically used to set transition [easing](Transitions#ease). The following easing types are supported:

* linear - the identity function, *t*.
* poly(k) - raises *t* to the specified power *k* (e.g., 3).
* quad - equivalent to poly(2).
* cubic - equivalent to poly(3).
* sin - applies the trigonometric function *sin*.
* exp - raises 2 to a power based on *t*.
* circle - the quarter circle.
* elastic(a, p) - simulates an elastic band; may extend slightly beyond 0 and 1.
* back(s) - simulates backing into a parking space.
* bounce - simulates a bouncy collision.

These built-in types may be extended using a variety of modes:

* in - the identity function.
* out - reverses the easing direction to [1,0].
* in-out - copies and mirrors the easing function from [0,.5] and [.5,1].
* out-in - copies and mirrors the easing function from [1,.5] and [.5,0].

The default easing function is "cubic-in-out" which provides suitable [[slow-in slow-out|http://en.wikipedia.org/wiki/12_basic_principles_of_animation#Slow_in_and_slow_out]] animation.

<a name="_ease" href="Transitions#_ease">#</a> <b>ease</b>(<i>t</i>)

Given a parametric time *t*, typically in the range [0,1], returns the eased time. The returned value is typically in the range [0,1] as well, but may extend slightly beyond this range for certain easing functions, such as "elastic".

## Timers

D3 internally maintains an efficient timer queue so that thousands of timers can be processed concurrently with minimal overhead; in addition, this timer queue guarantees consistent timing of animations when concurrent or staged transitions are scheduled. If your browser supports it, the timer queue will use [[requestAnimationFrame|http://paulirish.com/2011/requestanimationframe-for-smart-animating/]] for fluid and efficient animation. The timer queue is also smart about using setTimeout when there is a long delay before the next scheduled event.

<a name="d3_timer" href="Transitions#d3_timer">#</a> d3.<b>timer</b>(<i>function</i>[, <i>delay</i>[, <i>time</i>]])

Start a custom animation timer, invoking the specified *function* repeatedly until it returns true. There is no way to cancel the timer after it starts, so make sure your timer function returns true when done!

An optional numeric *delay* in milliseconds may be specified when the given *function* should only be invoked after a delay. The delay is relative to the specified *time* in milliseconds since UNIX epoch; if *time* is not specified, it defaults to [Date.now](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/now).

You may use *delay* and *time* to specify relative and absolute moments in time when the *function* should start being invoked. For example, a calendar notification might be coded as:

```js
d3.timer(notify, -4 * 1000 * 60 * 60, +new Date(2012, 09, 29)); // four hours before midnight October 29 (months are zero-based)
```

<a name="d3_timer_flush" href="Transitions#d3_timer_flush">#</a> d3.timer.<b>flush</b>()

Immediately execute (invoke once) any active timers. Normally, zero-delay transitions are executed after an instantaneous delay (<10ms). This can cause a brief flicker if the browser renders the page twice: once at the end of the first event loop, then again immediately on the first timer callback. By flushing the timer queue at the end of the first event loop, you can run any zero-delay transitions immediately and avoid the flicker.

## Interpolation

D3 has many built-in interpolators to simplify the transitioning of arbitrary values; an interpolator is a function that maps a parametric value *t* in the domain [0,1] to a color, number or arbitrary value.

<a name="d3_interpolate" href="Transitions#d3_interpolate">#</a> d3.<b>interpolate</b>(<i>a</i>, <i>b</i>)

Returns the default interpolator between the two values *a* and *b*. The type of interpolator is based on the type of the end value *b*, using the following algorithm:

1. If *b* is a color, interpolateRgb is used.
2. If *b* is a string, interpolateString is used.
3. If *b* is an array, interpolateArray is used.
4. If *b* is an object and not coercible to a number, interpolateObject is used.
5. Otherwise, interpolateNumber is used.

Based on the chosen interpolator, *a* is coerced to a suitable corresponding type. The color check applies to both instances of [d3.rgb](Colors#d3_rgb) and other color spaces as well as color strings of the form `/^(#|rgb\(|hsl\()/` or a [[CSS named colors|http://www.w3.org/TR/SVG/types.html#ColorKeywords]].

The behavior of this default interpolator may be extended to support additional types by pushing custom interpolators onto the [d3.interpolators](Transitions#d3_interpolators) array.

<a name="_interpolate" href="Transitions#_interpolate">#</a> <b>interpolate</b>(<i>t</i>)

Given a parameter *t* typically in the range [0,1], returns the associated interpolation value. Interpolators are commonly used in conjunction with scales to map an input domain (such as a quantitative dimension) to an output range (such as a range of colors or pixel positions).

<a name="d3_interpolateNumber" href="Transitions#d3_interpolateNumber">#</a> d3.<b>interpolateNumber</b>(<i>a</i>, <i>b</i>)

Returns a numeric interpolator between the two numbers *a* and *b*. The returned interpolator is equivalent to:

```javascript
function interpolate(t) {
  return a * (1 - t) + b * t;
}
```

Caution: avoid interpolating to or from the number zero when the interpolator is used to generate a string (such as with [attr](Transitions#attr)). Very small values, when stringified, may be converted to scientific notation and cause a temporarily invalid attribute or style property value. For example, the number 0.0000001 is converted to the string "1e-7". This is particularly noticeable when interpolating opacity values. To avoid scientific notation, start or end the transition at 1e-6, which is the smallest value that is not stringified in exponential notation.

<a name="d3_interpolateRound" href="Transitions#d3_interpolateRound">#</a> d3.<b>interpolateRound</b>(<i>a</i>, <i>b</i>)

Returns a numeric interpolator between the two numbers *a* and *b*; the interpolator is similar to [interpolateNumber](Transitions#d3_interpolateNumber), except it will round the resulting value to the nearest integer.

<a name="d3_interpolateString" href="Transitions#d3_interpolateString">#</a> d3.<b>interpolateString</b>(<i>a</i>, <i>b</i>)

Returns a string interpolator between the two strings *a* and *b*. The string interpolator finds numbers embedded in *a* and *b*, where each number is of the form:

```javascript
/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g
```

For each number embedded in *b*, the interpolator will attempt to find a corresponding number in *a*. If a corresponding number is found, a numeric interpolator is created using [interpolateNumber](Transitions#d3_interpolateNumber). The remaining parts of the string *b* are used as a template: the static parts of the string *b* remain constant for the interpolation, with the interpolated numeric values embedded in the template. For example, if *a* is "300 12px sans-serif", and *b* is "500 36px Comic-Sans", two embedded numbers are found. The remaining static parts of the string are a space between the two numbers (" "), and the suffix ("px Comic-Sans"). The result of the interpolator at *t* = .5 is "400 24px Comic-Sans".

<a name="d3_interpolateRgb" href="Transitions#d3_interpolateRgb">#</a> d3.<b>interpolateRgb</b>(<i>a</i>, <i>b</i>)

Returns an RGB color space interpolator between the two colors *a* and *b*. The colors *a* and *b* need not be in RGB, but they will be converted to RGB using [d3.rgb](Colors#d3_rgb). The red, green and blue channels are interpolated linearly in a manner equivalent to [interpolateRound](Transitions#d3_interpolateRound), as fractional channel values are not allowed. The return value of the interpolator is a hexadecimal RGB string.

<a name="d3_interpolateHsl" href="Transitions#d3_interpolateHsl">#</a> d3.<b>interpolateHsl</b>(<i>a</i>, <i>b</i>)

Returns an HSL color space interpolator between the two colors *a* and *b*. The colors *a* and *b* need not be in HSL, but they will be converted to HSL using [[d3.hsl|Colors#d3_hsl]]. The hue, saturation and lightness are interpolated linearly in a manner equivalent to [interpolateNumber](Transitions#d3_interpolateNumber). (The shortest path between the start and end hue is used.) The return value of the interpolator is a hexadecimal RGB string.

<a name="d3_interpolateLab" href="#d3_interpolateLab">#</a> d3.<b>interpolateLab</b>(<i>a</i>, <i>b</i>)

Returns a L\*a\*b\* color space interpolator between the two colors *a* and *b*. The colors *a* and *b* will be converted to L\*a\*\b* if necessary using [[d3.lab|Colors#d3_lab]]. The color channels are then interpolated linearly in a manner equivalent to [interpolateNumber](Transitions#d3_interpolateNumber). The return value of the interpolator is a hexadecimal RGB string.

<a name="d3_interpolateHcl" href="#d3_interpolateHcl">#</a> d3.<b>interpolateHcl</b>(<i>a</i>, <i>b</i>)

Returns an HCL color space interpolator between the two colors *a* and *b*. The colors *a* and *b* will be converted to HCL if necessary using [[d3.hcl|Colors#d3_hcl]]. The color channels are then interpolated linearly in a manner equivalent to [interpolateNumber](Transitions#d3_interpolateNumber). (The shortest path between the start and end hue is used.) The return value of the interpolator is a hexadecimal RGB string.

<a name="d3_interpolateArray" href="Transitions#d3_interpolateArray">#</a> d3.<b>interpolateArray</b>(<i>a</i>, <i>b</i>)

Returns an array interpolator between the two arrays *a* and *b*. Internally, an array template is created that is the same length in *b*. For each element in *b*, if there exists a corresponding element in *a*, a generic interpolator is created for the two elements using [interpolate](Transitions#d3_interpolate). If there is no such element, the static value from *b* is used in the template. Then, for the given parameter *t*, the template's embedded interpolators are evaluated. The updated array template is then returned. For example, if *a* is the array [0, 1] and *b* is the array [1, 10, 100], then the result of the interpolator for *t* = .5 is the array [.5, 5.5, 100].

Note: no defensive copy of the template array is created; modifications of the returned array may adversely affect subsequent evaluation of the interpolator. No copy is made because interpolators should be fast, as they are part of the inner loop of animation.

<a name="d3_interpolateObject" href="Transitions#d3_interpolateObject">#</a> d3.<b>interpolateObject</b>(<i>a</i>, <i>b</i>)

Returns an object interpolator between the two objects *a* and *b*. Internally, an object template is created that has the same properties as *b*. For each property in *b*, if there exists a corresponding property in *a*, a generic interpolator is created for the two elements using [interpolate](Transitions#d3_interpolate). If there is no such property, the static value from *b* is used in the template. Then, for the given parameter *t*, the template's embedded interpolators are evaluated and the updated object template is then returned. For example, if *a* is the object {x: 0, y: 1} and *b* is the object {x: 1, y: 10, z: 100}, the result of the interpolator for *t* = .5 is the object {x: .5, y: 5.5, z: 100}.

Object interpolation is particularly useful for *dataspace interpolation*, where data is interpolated rather than attribute values. For example, you can interpolate an object which describes an arc in a pie chart, and then use [[d3.svg.arc|SVG-Shapes#arc]] to compute the new SVG path data.

Note: no defensive copy of the template object is created; modifications of the returned object may adversely affect subsequent evaluation of the interpolator. No copy is made because interpolators should be fast, as they are part of the inner loop of animation.

<a name="d3_interpolateTransform" href="Transitions#d3_interpolateTransform">#</a> d3.<b>interpolateTransform</b>(<i>a</i>, <i>b</i>)

Returns an interpolator between the two 2D affine [transforms](Math#transform) represented by *a* and *b*. Each transform is decomposed to a standard representation of translate, rotate, *x*-skew and scale; these component transformations are then interpolated. This behavior is standardized by CSS: see [matrix decomposition for animation](http://www.w3.org/TR/css3-2d-transforms/#matrix-decomposition).

<a name="d3_interpolateZoom" href="#d3_interpolateZoom">#</a> d3.<b>interpolateZoom</b>(<i>a</i>, <i>b</i>)

Returns a smooth [interpolator](#_interpolate) between the two views *a* and *b* of a two-dimensional plane, based on [“Smooth and efficient zooming and panning”](https://www.google.com/search?q=Smooth+and+efficient+zooming+and+panning) by Jarke J. van Wijk and Wim A.A. Nuij. Each view is defined as an array of three numbers: *cx*, *cy* and *width*. The first two coordinates *cx*, *cy* represent the center of the viewport; the last coordinate *width* represents the size of the viewport. The returned interpolator also has a *duration* property which encodes the recommended transition duration in milliseconds. This duration is based on the path length of the curved trajectory through *x,y* space. If you want to a slower or faster transition, multiply this by an arbitrary scale factor (<i>V</i> as described in the original paper).

<a href="Geo-Paths#interpolate">#</a> d3.geo.<b>interpolate</b>(<i>a</i>, <i>b</i>)

See [d3.geo.interpolate](Geo-Paths#interpolate).

<a name="d3_interpolators" href="Transitions#d3_interpolators">#</a> d3.<b>interpolators</b>

The array of built-in interpolator factories, as used by [d3.interpolate](Transitions#d3_interpolate). Additional interpolator factories may be pushed onto the end of this array. Each factory may return an interpolator, if it supports interpolating the two specified input values; otherwise, the factory should return a falsey value and other interpolators will be tried.

For example, to register a custom interpolator that formats dollars and cents, you might say:

```javascript
d3.interpolators.push(function(a, b) {
  var re = /^\$([0-9,.]+)$/, ma, mb, f = d3.format(",.02f");
  if ((ma = re.exec(a)) && (mb = re.exec(b))) {
    a = parseFloat(ma[1]);
    b = parseFloat(mb[1]) - a;
    return function(t) {
      return "$" + f(a + b * t);
    };
  }
});
```

Then, `d3.interpolate("$20", "$10")(1/3)` returns `$16.67`.