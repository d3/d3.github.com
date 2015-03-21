> [Wiki](Home) ▸ [[API Reference]] ▸ [[Scales]] ▸ **Quantitative Scales**

**Scales** are functions that map from an input domain to an output range. **Quantitative** scales have a continuous domain, such as the set of real numbers, or dates. There are also [[ordinal scales|Ordinal-Scales]], which have a discrete domain, such as a set of names or categories. Scales are an optional feature in D3; you don't have to use them, if you prefer to do the math yourself. However, using scales can greatly simplify the code needed to map a dimension of data to a visual representation.

A scale object, such as that returned by [d3.scale.linear](Quantitative-Scales#linear), is both an object and a function. That is: you can call the scale like any other function, and the scale has additional methods that change its behavior. Like other classes in D3, scales follow the method chaining pattern where setter methods return the scale itself, allowing multiple setters to be invoked in a concise statement.

## Linear Scales

Linear scales are the most common scale, and a good default choice to map a continuous input domain to a continuous output range. The mapping is *linear* in that the output range value *y* can be expressed as a linear function of the input domain value *x*: *y* = *mx* + *b*. The input domain is typically a dimension of the data that you want to visualize, such as the height of students (measured in meters) in a sample population. The output range is typically a dimension of the desired output visualization, such as the height of bars (measured in pixels) in a histogram.

<a name="linear" href="Quantitative-Scales#linear">#</a> d3.scale.<b>linear</b>()

Constructs a new linear scale with the default domain [0,1] and the default range [0,1]. Thus, the default linear scale is equivalent to the identity function for numbers; for example linear(0.5) returns 0.5.

<a name="_linear" href="Quantitative-Scales#_linear">#</a> <b>linear</b>(<i>x</i>)

Given a value *x* in the input domain, returns the corresponding value in the output range.

Note: some [interpolators](#linear_interpolate) **reuse return values**. For example, if the domain values are arbitrary objects, then [d3.interpolateObject](Transitions#d3_interpolateObject) is automatically applied and the scale reuses the returned object. Often, the return value of a scale is immediately used to set an [attribute](Selections#attr) or [style](Selections#style), and you don’t have to worry about this; however, if you need to store the scale’s return value, use string coercion or create a copy as appropriate.

<a name="linear_invert" href="Quantitative-Scales#linear_invert">#</a> linear.<b>invert</b>(<i>y</i>)

Returns the value in the input domain *x* for the corresponding value in the output range *y*. This represents the inverse mapping from range to domain. For a valid value *y* in the output range, linear(linear.invert(<i>y</i>)) equals *y*; similarly, for a valid value *x* in the input domain, linear.invert(linear(<i>x</i>)) equals *x*. Equivalently, you can construct the invert operator by building a new scale while swapping the domain and range. The invert operator is particularly useful for interaction, say to determine the value in the input domain that corresponds to the pixel location under the mouse.

Note: the invert operator is only supported if the output range is numeric! D3 allows the output range to be any type; under the hood, [[d3.interpolate|Transitions#d3_interpolate]] or a custom interpolator of your choice is used to map the normalized parameter *t* to a value in the output range. Thus, the output range may be colors, strings, or even arbitrary objects. As there is no facility to "uninterpolate" arbitrary types, the invert operator is currently supported only on numeric ranges.

<a name="linear_domain" href="Quantitative-Scales#linear_domain">#</a> linear.<b>domain</b>([<i>numbers</i>])

If *numbers* is specified, sets the scale's input domain to the specified array of numbers. The array must contain two or more numbers. If the elements in the given array are not numbers, they will be coerced to numbers; this coercion happens similarly when the scale is called. Thus, a linear scale can be used to encode types such as [[date objects|https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date]] that can be converted to numbers; however, it is often more convenient to use [d3.time.scale](Time-Scales) for dates. (You can implement your own convertible number objects using [[valueOf|https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/valueOf]].) If *numbers* is not specified, returns the scale's current input domain.

Although linear scales typically have just two numeric values in their domain, you can specify more than two values for a *polylinear* scale. In this case, there must be an equivalent number of values in the output range. A polylinear scale represents multiple piecewise linear scales that divide a continuous domain and range. This is particularly useful for defining diverging quantitative scales. For example, to interpolate between white and red for negative values, and white and green for positive values, say:

```javascript
var color = d3.scale.linear()
    .domain([-1, 0, 1])
    .range(["red", "white", "green"]);
```

The resulting value of color(-.5) is rgb(255, 128, 128), and the value of color(.5) is rgb(128, 192, 128). Internally, polylinear scales perform a binary search for the output interpolator corresponding to the given domain value. By repeating values in both the domain and range, you can also force a chunk of the input domain to map to a constant in the output range.

<a name="linear_range" href="Quantitative-Scales#linear_range">#</a> linear.<b>range</b>([<i>values</i>])

If *values* is specified, sets the scale's output range to the specified array of values. The array must contain two or more values, to match the cardinality of the input domain, otherwise the longer of the two is truncated to match the other. The elements in the given array need not be numbers; any value that is supported by the underlying [interpolator](Quantitative-Scales#linear_interpolate) will work. However, numeric ranges are required for the invert operator. If *values* is not specified, returns the scale's current output range.

<a name="linear_rangeRound" href="Quantitative-Scales#linear_rangeRound">#</a> linear.<b>rangeRound</b>(<i>values</i>)

Sets the scale's output range to the specified array of values, while also setting the scale's interpolator to [[d3.interpolateRound|Transitions#d3_interpolateRound]]. This is a convenience routine for when the values output by the scale should be exact integers, such as to avoid antialiasing artifacts. It is also possible to round the output values manually after the scale is applied.

<a name="linear_interpolate" href="Quantitative-Scales#linear_interpolate">#</a> linear.<b>interpolate</b>([<i>factory</i>])

If *factory* is specified, sets the scale's output interpolator using the specified *factory*. The interpolator factory defaults to [[d3.interpolate|Transitions#d3_interpolate]], and is used to map the normalized domain parameter *t* in [0,1] to the corresponding value in the output range. The interpolator factory will be used to construct interpolators for each adjacent pair of values from the output range. If *factory* is not specified, returns the scale's interpolator factory.

<a name="linear_clamp" href="Quantitative-Scales#linear_clamp">#</a> linear.<b>clamp</b>([<i>boolean</i>])

If *boolean* is specified, enables or disables clamping accordingly. By default, clamping is disabled, such that if a value outside the input domain is passed to the scale, the scale may return a value outside the output range through linear extrapolation. For example, with the default domain and range of [0,1], an input value of 2 will return an output value of 2. If clamping is enabled, the normalized domain parameter *t* is clamped to the range [0,1], such that the return value of the scale is always within the scale's output range. If *boolean* is not specified, returns whether or not the scale currently clamps values to within the output range.

<a name="linear_nice" href="Quantitative-Scales#linear_nice">#</a> linear.<b>nice</b>([<i>count</i>])

Extends the domain so that it starts and ends on nice round values. This method typically modifies the scale's domain, and may only extend the bounds to the nearest round value. The precision of the round value is dependent on the extent of the domain *dx* according to the following formula: exp(round(log(<i>dx</i>)) - 1). Nicing is useful if the domain is computed from data and may be irregular. For example, for a domain of [0.20147987687960267, 0.996679553296417], the nice domain is [0.2, 1]. If the domain has more than two values, nicing the domain only affects the first and last value.

The optional tick *count* argument allows greater control over the step size used to extend the bounds, guaranteeing that the returned [ticks](#linear_ticks) will exactly cover the domain.

<a name="linear_ticks" href="Quantitative-Scales#linear_ticks">#</a> linear.<b>ticks</b>([<i>count</i>])

Returns approximately *count* representative values from the scale's input domain. If *count* is not specified, it defaults to 10. The returned tick values are uniformly spaced, have human-readable values (such as multiples of powers of 10), and are guaranteed to be within the extent of the input domain. Ticks are often used to display reference lines, or tick marks, in conjunction with the visualized data. The specified *count* is only a hint; the scale may return more or fewer values depending on the input domain.

<a name="linear_tickFormat" href="Quantitative-Scales#linear_tickFormat">#</a> linear.<b>tickFormat</b>(<i>count</i>, [<i>format</i>])

Returns a [[number format|Formatting#d3_format]] function suitable for displaying a tick value. The specified *count* should have the same value as the count that is used to generate the tick values. You don't have to use the scale's built-in tick format, but it automatically computes the appropriate precision based on the fixed interval between tick values.

The optional *format* argument allows a [[format specifier|Formatting#d3_format]] to be specified, where the precision of the format is automatically substituted by the scale to be appropriate for the tick interval. For example, to format percentage change, you might say:

```js
var x = d3.scale.linear().domain([-1, 1]);
console.log(x.ticks(5).map(x.tickFormat(5, "+%"))); // ["-100%", "-50%", "+0%", "+50%", "+100%"]
```

Likewise, if *format* uses the format type `s`, the scale will compute a SI-prefix based on the largest value in the domain, and use that SI-prefix for [all tick values](http://bl.ocks.org/mbostock/9764126). If the *format* already specifies a precision, this method is equivalent to [d3.format](Formatting#d3_format).

Note that when using a log scale in conjunction with an axis, you typically want to use [axis.ticks](SVG-Axes#ticks) rather than [axis.tickFormat](SVG-Axes#tickFormat) to take advantage of the log scale’s custom tick format, as in [bl.ocks.org/5537697](http://bl.ocks.org/mbostock/5537697).

<a name="linear_copy" href="#linear_copy">#</a> linear.<b>copy</b>()

Returns an exact copy of this linear scale. Changes to this scale will not affect the returned scale, and vice versa.

### Identity Scales

Identity scales are a special case of linear scales where the domain and range are identical; the scale and its invert method are both the identity function. These scales are occasionally useful when working with pixel coordinates, say in conjunction with the [axis](SVG-Axes) and [brush](SVG-Controls#brush) components.

<a name="identity" href="#identity">#</a> d3.scale.<b>identity</b>()

Constructs a new identity scale with the default domain [0, 1] and the default range [0, 1]. An identity scale is always equivalent to the identity function.

<a name="_identity" href="#_identity">#</a> <b>identity</b>(<i>x</i>)<br>
<a href="#_identity">#</a> identity.<b>invert</b>(<i>x</i>)

Returns the given value *x*.

<a name="identity_domain" href="#identity_domain">#</a> identity.<b>domain</b>([<i>numbers</i>])<br>
<a href="#identity_domain">#</a> identity.<b>range</b>([<i>numbers</i>])

If *numbers* is specified, sets the scale's input domain and output range to the specified array of numbers. The array must contain two or more numbers. If the elements in the given array are not numbers, they will be coerced to numbers; this coercion happens similarly when the scale is called. If numbers is not specified, returns the scale's current input domain (or equivalently, output range).

<a name="identity_ticks" href="#identity_ticks">#</a> identity.<b>ticks</b>([<i>count</i>])

Returns approximately *count* representative values from the scale's input domain (or equivalently, output range). If *count* is not specified, it defaults to 10. The returned tick values are uniformly spaced, have human-readable values (such as multiples of powers of 10), and are guaranteed to be within the extent of the input domain. Ticks are often used to display reference lines, or tick marks, in conjunction with the visualized data. The specified *count* is only a hint; the scale may return more or fewer values depending on the input domain.

<a name="identity_tickFormat" href="#identity_tickFormat">#</a> identity.<b>tickFormat</b>(<i>count</i>, [<i>format</i>])

Returns a [number format](Formatting#d3_format) function suitable for displaying a tick value. The specified *count* should have the same value as the count that is used to generate the tick values. You don't have to use the scale's built-in tick format, but it automatically computes the appropriate precision based on the fixed interval between tick values.

The optional *format* argument allows a [[format specifier|Formatting#d3_format]] to be specified. If the format specifier doesn’t have a defined precision, the precision will be set automatically by the scale, returning the appropriate format. This provides a convenient, declarative way of specifying a format whose
precision will be automatically set by the scale.

<a name="identity_copy" href="#identity_copy">#</a> identity.<b>copy</b>()

Returns an exact copy of this scale. Changes to this scale will not affect the returned scale, and vice versa.

## Power Scales

Power scales are similar to linear scales, except there's an exponential transform that is applied to the input domain value before the output range value is computed. The mapping to the output range value *y* can be expressed as a function of the input domain value *x*: *y* = *mx^k* + *b*, where *k* is the exponent value. Power scales also support negative values, in which case the input value is multiplied by -1, and the resulting output value is also multiplied by -1.

<a name="sqrt" href="Quantitative-Scales#sqrt">#</a> d3.scale.<b>sqrt</b>()

Constructs a new power scale with the default domain [0,1], the default range [0,1], and the exponent .5. This method is shorthand for:

```javascript
d3.scale.pow().exponent(.5)
```

The returned scale is a function that takes a single argument *x* representing a value in the input domain; the return value is the corresponding value in the output range. Thus, the returned scale is equivalent to the [[sqrt|https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Math/sqrt]] function for numbers; for example sqrt(0.25) returns 0.5.

<a name="pow" href="Quantitative-Scales#pow">#</a> d3.scale.<b>pow</b>()

Constructs a new power scale with the default domain [0,1], the default range [0,1], and the default exponent 1. Thus, the default power scale is equivalent to the identity function for numbers; for example pow(0.5) returns 0.5.

<a name="_pow" href="Quantitative-Scales#_pow">#</a> <b>pow</b>(<i>x</i>)

Given a value *x* in the input domain, returns the corresponding value in the output range.

Note: some [interpolators](#pow_interpolate) **reuse return values**. For example, if the domain values are arbitrary objects, then [d3.interpolateObject](Transitions#d3_interpolateObject) is automatically applied and the scale reuses the returned object. Often, the return value of a scale is immediately used to set an [attribute](Selections#attr) or [style](Selections#style), and you don’t have to worry about this; however, if you need to store the scale’s return value, use string coercion or create a copy as appropriate.

<a name="pow_invert" href="Quantitative-Scales#pow_invert">#</a> pow.<b>invert</b>(<i>y</i>)

Returns the value in the input domain *x* for the corresponding value in the output range *y*. This represents the inverse mapping from range to domain. For a valid value *y* in the output range, pow(pow.invert(<i>y</i>)) equals *y*; similarly, for a valid value *x* in the input domain, pow.invert(pow(<i>x</i>)) equals *x*. Equivalently, you can construct the invert operator by building a new scale while swapping the domain and range. The invert operator is particularly useful for interaction, say to determine the value in the input domain that corresponds to the pixel location under the mouse.

Note: the invert operator is only supported if the output range is numeric! D3 allows the output range to be any type; under the hood, [[d3.interpolate|Transitions#d3_interpolate]] or a custom interpolator of your choice is used to map the normalized parameter *t* to a value in the output range. Thus, the output range may be colors, strings, or even arbitrary objects. As there is no facility to "uninterpolate" arbitrary types, the invert operator is currently supported only on numeric ranges.

<a name="pow_domain" href="Quantitative-Scales#pow_domain">#</a> pow.<b>domain</b>([<i>numbers</i>])

If *numbers* is specified, sets the scale's input domain to the specified array of numbers. The array must contain two or more numbers. If the elements in the given array are not numbers, they will be coerced to numbers; this coercion happens similarly when the scale is called. Thus, a power scale can be used to encode any type that can be converted to numbers. If *numbers* is not specified, returns the scale's current input domain.

As with linear scales (see [linear.domain](Quantitative-Scales#linear_domain)), power scales can also accept more than two values for the domain and range, thus resulting in polypower scale.

<a name="pow_range" href="Quantitative-Scales#pow_range">#</a> pow.<b>range</b>([<i>values</i>])

If *values* is specified, sets the scale's output range to the specified array of values. The array must contain two or more values, to match the cardinality of the input domain, otherwise the longer of the two is truncated to match the other. The elements in the given array need not be numbers; any value that is supported by the underlying [interpolator](Quantitative-Scales#pow_interpolate) will work. However, numeric ranges are required for the invert operator. If *values* is not specified, returns the scale's current output range.

<a name="pow_rangeRound" href="Quantitative-Scales#pow_rangeRound">#</a> pow.<b>rangeRound</b>(<i>values</i>)

Sets the scale's output range to the specified array of values, while also setting the scale's interpolator to [[d3.interpolateRound|Transitions#d3_interpolateRound]]. This is a convenience routine for when the values output by the scale should be exact integers, such as to avoid antialiasing artifacts. It is also possible to round the output values manually after the scale is applied.

<a name="pow_exponent" href="Quantitative-Scales#pow_exponent">#</a> pow.<b>exponent</b>([<i>k</i>])

If *k* is specified, sets the current exponent to the given numeric value. If *k* is not specified, returns the current exponent. The default value is 1.

<a name="pow_interpolate" href="Quantitative-Scales#pow_interpolate">#</a> pow.<b>interpolate</b>([<i>factory</i>])

If *factory* is specified, sets the scale's output interpolator using the specified *factory*. The interpolator factory defaults to [[d3.interpolate|Transitions#d3_interpolate]], and is used to map the normalized domain parameter *t* in [0,1] to the corresponding value in the output range. The interpolator factory will be used to construct interpolators for each adjacent pair of values from the output range. If *factory* is not specified, returns the scale's interpolator factory.

<a name="pow_clamp" href="Quantitative-Scales#pow_clamp">#</a> pow.<b>clamp</b>([<i>boolean</i>])

If *boolean* is specified, enables or disables clamping accordingly. By default, clamping is disabled, such that if a value outside the input domain is passed to the scale, the scale may return a value outside the output range through linear extrapolation. For example, with the default domain and range of [0,1], an input value of 2 will return an output value of 2. If clamping is enabled, the normalized domain parameter *t* is clamped to the range [0,1], such that the return value of the scale is always within the scale's output range. If *boolean* is not specified, returns whether or not the scale currently clamps values to within the output range.

<a name="pow_nice" href="Quantitative-Scales#pow_nice">#</a> pow.<b>nice</b>([<i>m</i>])

Extends the domain so that it starts and ends on nice round values. This method typically modifies the scale's domain, and may only extend the bounds to the nearest round value. The precision of the round value is dependent on the extent of the domain *dx* according to the following formula: exp(round(log(<i>dx</i>)) - 1). Nicing is useful if the domain is computed from data and may be irregular. For example, for a domain of [0.20147987687960267, 0.996679553296417], the nice domain is [0.2, 1]. If the domain has more than two values, nicing the domain only affects the first and last value.

The optional *m* argument allows a tick count to be specified to control the step size used prior to extending the bounds.

<a name="pow_ticks" href="Quantitative-Scales#pow_ticks">#</a> pow.<b>ticks</b>([<i>count</i>])

Returns approximately *count* representative values from the scale's input domain. If *count* is not specified, it defaults to 10. The returned tick values are uniformly spaced, have human-readable values (such as multiples of powers of 10), and are guaranteed to be within the extent of the input domain. Ticks are often used to display reference lines, or tick marks, in conjunction with the visualized data. The specified *count* is only a hint; the scale may return more or fewer values depending on the input domain.

<a name="pow_tickFormat" href="Quantitative-Scales#pow_tickFormat">#</a> pow.<b>tickFormat</b>([<i>count</i>, [<i>format</i>]])

Returns a [[number format|Formatting#d3_format]] function suitable for displaying a tick value. The specified *count* should have the same value as the count that is used to generate the tick values. You don't have to use the scale's built-in tick format, but it automatically computes the appropriate precision based on the fixed interval between tick values.

The optional *format* argument allows a [[format specifier|Formatting#d3_format]] to be specified. If the format specifier doesn’t have a defined precision, the precision will be set automatically by the scale, returning the appropriate format. This provides a convenient, declarative way of specifying a format whose
precision will be automatically set by the scale.

<a name="pow_copy" href="#pow_copy">#</a> pow.<b>copy</b>()

Returns an exact copy of this scale. Changes to this scale will not affect the returned scale, and vice versa.

## Log Scales

Log scales are similar to linear scales, except there's a logarithmic transform that is applied to the input domain value before the output range value is computed. The mapping to the output range value *y* can be expressed as a function of the input domain value *x*: *y* = *m* log(<i>x</i>) + *b*.

As log(0) is negative infinity, a log scale must have either an exclusively-positive or exclusively-negative domain; the domain must not include or cross zero. A log scale with a positive domain has a well-defined behavior for positive values, and a log scale with a negative domain has a well-defined behavior for negative values (the input value is multiplied by -1, and the resulting output value is also multiplied by -1). The behavior of the scale is undefined if you pass a negative value to a log scale with a positive domain or vice versa.

<a name="log" href="Quantitative-Scales#log">#</a> d3.scale.<b>log</b>()

Constructs a new log scale with the default domain [1,10], the default range [0,1], and the base 10.

<a name="_log" href="Quantitative-Scales#_log">#</a> <b>log</b>(<i>x</i>)

Given a value *x* in the input domain, returns the corresponding value in the output range.

Note: some [interpolators](#log_interpolate) **reuse return values**. For example, if the domain values are arbitrary objects, then [d3.interpolateObject](Transitions#d3_interpolateObject) is automatically applied and the scale reuses the returned object. Often, the return value of a scale is immediately used to set an [attribute](Selections#attr) or [style](Selections#style), and you don’t have to worry about this; however, if you need to store the scale’s return value, use string coercion or create a copy as appropriate.

<a name="log_invert" href="Quantitative-Scales#log_invert">#</a> log.<b>invert</b>(<i>y</i>)

Returns the value in the input domain *x* for the corresponding value in the output range *y*. This represents the inverse mapping from range to domain. For a valid value *y* in the output range, log(log.invert(<i>y</i>)) equals *y*; similarly, for a valid value *x* in the input domain, log.invert(log(<i>x</i>)) equals *x*. Equivalently, you can construct the invert operator by building a new scale while swapping the domain and range. The invert operator is particularly useful for interaction, say to determine the value in the input domain that corresponds to the pixel location under the mouse.

Note: the invert operator is only supported if the output range is numeric! D3 allows the output range to be any type; under the hood, [[d3.interpolate|Transitions#d3_interpolate]] or a custom interpolator of your choice is used to map the normalized parameter *t* to a value in the output range. Thus, the output range may be colors, strings, or even arbitrary objects. As there is no facility to "uninterpolate" arbitrary types, the invert operator is currently supported only on numeric ranges.

<a name="log_domain" href="Quantitative-Scales#log_domain">#</a> log.<b>domain</b>([<i>numbers</i>])

If *numbers* is specified, sets the scale's input domain to the specified array of numbers. The array must contain two or more numbers. If the elements in the given array are not numbers, they will be coerced to numbers; this coercion happens similarly when the scale is called. Thus, a log scale can be used to encode any type that can be converted to numbers. If *numbers* is not specified, returns the scale's current input domain.

As with linear scales (see [linear.domain](Quantitative-Scales#linear_domain)), log scales can also accept more than two values for the domain and range, thus resulting in polylog scale.

<a name="log_range" href="Quantitative-Scales#log_range">#</a> log.<b>range</b>([<i>values</i>])

If *values* is specified, sets the scale's output range to the specified array of values. The array must contain two or more values, to match the cardinality of the input domain, otherwise the longer of the two is truncated to match the other. The elements in the given array need not be numbers; any value that is supported by the underlying [interpolator](Quantitative-Scales#log_interpolate) will work. However, numeric ranges are required for the invert operator. If *values* is not specified, returns the scale's current output range.

<a name="log_rangeRound" href="Quantitative-Scales#log_rangeRound">#</a> log.<b>rangeRound</b>(<i>values</i>)

Sets the scale's output range to the specified array of values, while also setting the scale's interpolator to [[d3.interpolateRound|Transitions#d3_interpolateRound]]. This is a convenience routine for when the values output by the scale should be exact integers, such as to avoid antialiasing artifacts. It is also possible to round the output values manually after the scale is applied.

<a name="log_base" href="Quantitative-Scales#log_base">#</a> log.<b>base</b>([<i>base</i>])

If *base* is specified, sets the base for this logarithmic scale. If *base* is not specified, returns the current base, which defaults to 10.

<a name="log_interpolate" href="Quantitative-Scales#log_interpolate">#</a> log.<b>interpolate</b>([<i>factory</i>])

If *factory* is specified, sets the scale's output interpolator using the specified *factory*. The interpolator factory defaults to [[d3.interpolate|Transitions#d3_interpolate]], and is used to map the normalized domain parameter *t* in [0,1] to the corresponding value in the output range. The interpolator factory will be used to construct interpolators for each adjacent pair of values from the output range. If *factory* is not specified, returns the scale's interpolator factory.

<a name="log_clamp" href="Quantitative-Scales#log_clamp">#</a> log.<b>clamp</b>([<i>boolean</i>])

If *boolean* is specified, enables or disables clamping accordingly. By default, clamping is disabled, such that if a value outside the input domain is passed to the scale, the scale may return a value outside the output range through linear extrapolation. For example, with the default domain and range of [0,1], an input value of 2 will return an output value of 2. If clamping is enabled, the normalized domain parameter *t* is clamped to the range [0,1], such that the return value of the scale is always within the scale's output range. If *boolean* is not specified, returns whether or not the scale currently clamps values to within the output range.

<a name="log_nice" href="Quantitative-Scales#log_nice">#</a> log.<b>nice</b>()

Extends the domain so that it starts and ends on nice round values. This method typically modifies the scale's domain, and may only extend the bounds to the nearest round value. The nearest round value is based on integer powers of the scale’s [base](#log_base), which defaults to 10. Nicing is useful if the domain is computed from data and may be irregular. For example, for a domain of [0.20147987687960267, 0.996679553296417], the nice domain is [0.1, 1]. If the domain has more than two values, nicing the domain only affects the first and last value.

<a name="log_ticks" href="Quantitative-Scales#log_ticks">#</a> log.<b>ticks</b>()

Returns representative values from the scale's input domain. The returned tick values are uniformly spaced within each power of ten, and are guaranteed to be within the extent of the input domain. Ticks are often used to display reference lines, or tick marks, in conjunction with the visualized data. Note that the number of ticks cannot be customized (due to the nature of log scales); however, you can filter the returned array of values if you want to reduce the number of ticks.

<a name="log_tickFormat" href="Quantitative-Scales#log_tickFormat">#</a> log.<b>tickFormat</b>([<i>count</i>, [<i>format</i>]])

Returns a [[number format|Formatting#d3_format]] function suitable for displaying a tick value. The returned tick format is implemented as `d.toPrecision(1)`. If a *count* is specified, then some of the tick labels may not be displayed; this is useful if there is not enough room to fit all of the tick labels. However, note that the tick marks will still be displayed (so that the log scale distortion remains visible). When specifying a count, you may also override the *format* function; you can also specify a format specifier as a string, and it will automatically be wrapped with [d3.format](Formatting). For example, to get a tick formatter that will display 20 ticks of a currency:

```js
scale.tickFormat(20, "$,.2f");
```

If the format specifier doesn’t have a defined precision, the precision will be set automatically by the scale, returning the appropriate format. This provides a convenient, declarative way of specifying a format whose precision will be automatically set by the scale.

<a name="log_copy" href="#log_copy">#</a> log.<b>copy</b>()

Returns an exact copy of this scale. Changes to this scale will not affect the returned scale, and vice versa.

## Quantize Scales

Quantize scales are a variant of linear scales with a discrete rather than continuous range. The input domain is still continuous, and divided into uniform segments based on the number of values in (the cardinality of) the output range. The mapping is *linear* in that the output range value *y* can be expressed as a linear function of the input domain value *x*: *y* = *mx* + *b*. The input domain is typically a dimension of the data that you want to visualize, such as the height of students (measured in meters) in a sample population. The output range is typically a dimension of the desired output visualization, such as the height of bars (measured in pixels) in a histogram.

<a name="quantize" href="Quantitative-Scales#quantize">#</a> d3.scale.<b>quantize</b>()

Constructs a new quantize scale with the default domain [0,1] and the default range [0,1]. Thus, the default quantize scale is equivalent to the [[round|https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Math/round]] function for numbers; for example quantize(0.49) returns 0, and quantize(0.51) returns 1.

```javascript
 var q = d3.scale.quantize().domain([0, 1]).range(['a', 'b', 'c']);
 //q(0.3) === 'a', q(0.4) === 'b', q(0.6) === 'b', q(0.7) ==='c';
 //q.invertExtent('a') returns [0, 0.3333333333333333]
```

<a name="_quantize" href="Quantitative-Scales#_quantize">#</a> <b>quantize</b>(<i>x</i>)

Given a value *x* in the input domain, returns the corresponding value in the output range.

<a name="quantize_invertExtent" href="#quantize_invertExtent">#</a> quantize.<b>invertExtent</b>(<i>y</i>)

Returns the extent of values in the input domain [<i>x0</i>, <i>x1</i>] for the corresponding value in the output range *y*, representing the inverse mapping from range to domain. This method is useful for interaction, say to determine the value in the input domain that corresponds to the pixel location under the mouse.

<a name="quantize_domain" href="Quantitative-Scales#quantize_domain">#</a> quantize.<b>domain</b>([<i>numbers</i>])

If *numbers* is specified, sets the scale's input domain to the specified two-element array of numbers. If the array contains more than two numbers, only the first and last number are used. If the elements in the given array are not numbers, they will be coerced to numbers; this coercion happens similarly when the scale is called. Thus, a quantize scale can be used to encode any type that can be converted to numbers. If *numbers* is not specified, returns the scale's current input domain.

<a name="quantize_range" href="Quantitative-Scales#quantize_range">#</a> quantize.<b>range</b>([<i>values</i>])

If *values* is specified, sets the scale's output range to the specified array of values. The array may contain any number of discrete values. The elements in the given array need not be numbers; any value or type will work. If *values* is not specified, returns the scale's current output range.

<a name="quantize_copy" href="#quantize_copy">#</a> quantize.<b>copy</b>()

Returns an exact copy of this scale. Changes to this scale will not affect the returned scale, and vice versa.

## Quantile Scales

Quantile scales map an input domain to a discrete range. Although the input domain is continuous and the scale will accept any reasonable input value, the input domain is specified as a discrete set of values. The number of values in (the cardinality of) the output range determines the number of quantiles that will be computed from the input domain. To compute the quantiles, the input domain is sorted, and treated as a [[population of discrete values|http://en.wikipedia.org/wiki/Quantile#Quantiles_of_a_population]]. The input domain is typically a dimension of the data that you want to visualize, such as the daily change of the stock market. The output range is typically a dimension of the desired output visualization, such as a diverging color scale.

<a name="quantile" href="Quantitative-Scales#quantile">#</a> d3.scale.<b>quantile</b>()

Constructs a new quantile scale with an empty domain and an empty range. The quantile scale is invalid until both a domain and range are specified.

<a name="_quantile" href="Quantitative-Scales#_quantile">#</a> <b>quantile</b>(<i>x</i>)

Given a value *x* in the input domain, returns the corresponding value in the output range.

<a name="quantile_invertExtent" href="#quantile_invertExtent">#</a> quantile.<b>invertExtent</b>(<i>y</i>)

Returns the extent of values in the input domain [<i>x0</i>, <i>x1</i>] for the corresponding value in the output range *y*, representing the inverse mapping from range to domain. This method is useful for interaction, say to determine the value in the input domain that corresponds to the pixel location under the mouse.

<a name="quantile_domain" href="Quantitative-Scales#quantile_domain">#</a> quantile.<b>domain</b>([<i>numbers</i>])

If *numbers* is specified, sets the input domain of the quantile scale to the specified set of discrete numeric values. The array must not be empty, and must contain at least one numeric value; NaN, null and undefined values are ignored and not considered part of the sample population. If the elements in the given array are not numbers, they will be coerced to numbers; this coercion happens similarly when the scale is called. A copy of the input array is sorted and stored internally. Thus, a quantile scale can be used to encode any type that can be converted to numbers. If *numbers* is not specified, returns the scale's current input domain.

<a name="quantile_range" href="Quantitative-Scales#quantile_range">#</a> quantile.<b>range</b>([<i>values</i>])

If *values* is specified, sets the discrete values in the output range. The array must not be empty, and may contain any type of value. The number of values in (the cardinality, or length, of) the *values* array determines the number of quantiles that are computed. For example, to compute quartiles, *values* must be an array of four elements such as [0, 1, 2, 3]. If *values* is not specified, returns the current output range.

<a name="quantile_quantiles" href="Quantitative-Scales#quantile_quantiles">#</a> quantile.<b>quantiles</b>()

Returns the quantile thresholds. If the output range contains *n* discrete values, the returned threshold array will contain *n* - 1 values. Values less than the first element in the thresholds array, quantiles()[0], are considered in the first quantile; greater values less than the second threshold are in the second quantile, and so on. Internally, the thresholds array is used with [[d3.bisect|Arrays#d3_bisect]] to find the output quantile associated with the given input value.

<a name="quantile_copy" href="#quantile_copy">#</a> quantile.<b>copy</b>()

Returns an exact copy of this scale. Changes to this scale will not affect the returned scale, and vice versa.

## Threshold Scales

Threshold scales are similar to quantize scales, except they allow you to map arbitrary subsets of the domain to discrete values in the range. The input domain is still continuous, and divided into slices based on a set of threshold values. The input domain is typically a dimension of the data that you want to visualize, such as the height of students (measured in meters) in a sample population. The output range is typically a dimension of the desired output visualization, such as a set of colors (represented as strings).

<a name="threshold" href="#threshold">#</a> d3.scale.<b>threshold</b>()

Constructs a new threshold scale with the default domain [.5] and the default range [0,1]. Thus, the default threshold scale is equivalent to the [[round|https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Math/round]] function for numbers; for example threshold(0.49) returns 0, and threshold(0.51) returns 1.

```javascript
var t = d3.scale.threshold().domain([0, 1]).range(['a', 'b', 'c']); 
t(-1) === 'a';
t(0) === 'b';
t(0.5) === 'b';
t(1) === 'c';
t(1000) === 'c';
t.invertExtent('a'); //returns [undefined, 0]
t.invertExtent('b'); //returns [0, 1]
t.invertExtent('c'); //returns [1, undefined]
```

<a name="_threshold" href="#_threshold">#</a> <b>threshold</b>(<i>x</i>)

Given a value *x* in the input domain, returns the corresponding value in the output range.

<a name="threshold_invertExtent" href="#threshold_invertExtent">#</a> threshold.<b>invertExtent</b>(<i>y</i>)

Returns the extent of values in the input domain [<i>x0</i>, <i>x1</i>] for the corresponding value in the output range *y*, representing the inverse mapping from range to domain. This method is useful for interaction, say to determine the value in the input domain that corresponds to the pixel location under the mouse.

<a name="threshold_domain" href="#threshold_domain">#</a> threshold.<b>domain</b>([<i>domain</i>])

If *domain* is specified, sets the scale's input domain to the specified array of values. The values must be in sorted ascending order, or the behavior of the scale is undefined. The values are typically numbers, but any naturally ordered values (such as strings) will work. Thus, a threshold scale can be used to encode any type that is ordered. If the number of values in the scale's range is N + 1, the number of values in the scale's domain must be N. If there are fewer than N elements in the domain, the additional values in the range are ignored. If there are more than N elements in the domain, the scale may return undefined for some inputs. If *domain* is not specified, returns the scale's current input domain.

<a name="threshold_range" href="#threshold_range">#</a> threshold.<b>range</b>([<i>values</i>])

If *values* is specified, sets the scale's output range to the specified array of values. If the number of values in the scale's domain is N, the number of values in the scale's range must be N + 1. If there are fewer than N+1 elements in the range, the scale may return undefined for some inputs. If there are more than N + 1 elements in the range, the additional values are ignored. The elements in the given array need not be numbers; any value or type will work. If *values* is not specified, returns the scale's current output range.

<a name="threshold_copy" href="#threshold_copy">#</a> threshold.<b>copy</b>()

Returns an exact copy of this scale. Changes to this scale will not affect the returned scale, and vice versa.