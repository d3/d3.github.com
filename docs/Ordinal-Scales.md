> [Wiki](Home) ▸ [[API Reference]] ▸ [[Scales]] ▸ **Ordinal Scales**

**Scales** are functions that map from an input domain to an output range. **Ordinal** scales have a discrete domain, such as a set of names or categories. There are also [[quantitative scales|Quantitative-Scales]], which have a continuous domain, such as the set of real numbers. Scales are an optional feature in D3; you don't have to use them, if you prefer to do the math yourself. However, using scales can greatly simplify the code needed to map a dimension of data to a visual representation.

A scale object, such as that returned by [d3.scale.ordinal](Ordinal-Scales#ordinal), is both an object and a function. That is: you can call the scale like any other function, and the scale has additional methods that change its behavior. Like other classes in D3, scales follow the method chaining pattern where setter methods return the scale itself, allowing multiple setters to be invoked in a concise statement.

<a name="ordinal" href="Ordinal-Scales#ordinal">#</a> d3.scale.<b>ordinal</b>()

Constructs a new ordinal scale with an empty domain and an empty range. The ordinal scale is invalid (always returning undefined) until an output range is specified.

<a name="_ordinal" href="Ordinal-Scales#_ordinal">#</a> <b>ordinal</b>(<i>x</i>)

Given a value *x* in the input domain, returns the corresponding value in the output range.

If the range was specified explicitly (as by [range](#ordinal_range), but not [rangeBands](#ordinal_rangeBands), [rangeRoundBands](#ordinal_rangeRoundBands) or [rangePoints](#ordinal_rangePoints)), _and_ the given value *x* is not in the scale’s [domain](#ordinal_domain), then *x* is implicitly added to the domain; subsequent invocations of the scale given the same value *x* will return the same value *y* from the range.

<a name="ordinal_domain" href="Ordinal-Scales#ordinal_domain">#</a> ordinal.<b>domain</b>([<i>values</i>])

If *values* is specified, sets the input domain of the ordinal scale to the specified array of values. The first element in *values* will be mapped to the first element in the output range, the second domain value to the second range value, and so on. Domain values are stored internally in an associative array as a mapping from value to index; the resulting index is then used to retrieve a value from the output range. Thus, an ordinal scale's values must be coercible to a string, and the stringified version of the domain value uniquely identifies the corresponding range value. If *values* is not specified, this method returns the current domain.

Setting the domain on an ordinal scale is optional. If no domain is set, a [range](#ordinal_range) must be set explicitly. Then, each unique value that is passed to the scale function will be assigned a new value from the output range; in other words, the domain will be inferred implicitly from usage. Although domains may thus be constructed implicitly, it is still a good idea to assign the ordinal scale's domain explicitly to ensure deterministic behavior, as inferring the domain from usage will be dependent on ordering.

<a name="ordinal_range" href="Ordinal-Scales#ordinal_range">#</a> ordinal.<b>range</b>([<i>values</i>])

If *values* is specified, sets the output range of the ordinal scale to the specified array of values. The first element in the domain will be mapped to the first element in *values*, the second domain value to the second range value, and so on. If there are fewer elements in the range than in the domain, the scale will recycle values from the start of the range. If *values* is not specified, this method returns the current output range.

This method is intended for when the set of discrete output values is computed explicitly, such as a set of categorical colors. In other cases, such as determining the layout of an ordinal scatterplot or bar chart, you may find the [rangePoints](Ordinal-Scales#ordinal_rangePoints) or [rangeBands](Ordinal-Scales#ordinal_rangeBands) operators more convenient.

<a name="ordinal_rangePoints" href="Ordinal-Scales#ordinal_rangePoints">#</a> ordinal.<b>rangePoints</b>(<i>interval</i>[, <i>padding</i>])

Sets the output range from the specified continuous *interval*. The array *interval* contains two elements representing the minimum and maximum numeric value. This interval is subdivided into *n* evenly-spaced **points**, where *n* is the number of (unique) values in the input domain. The first and last point may be offset from the edge of the interval according to the specified *padding*, which defaults to zero. The *padding* is expressed as a multiple of the spacing between points. A reasonable value is 1.0, such that the first and last point will be offset from the minimum and maximum value by half the distance between points.

![rangepoints](https://f.cloud.github.com/assets/230541/538689/46d87118-c193-11e2-83ab-2008df7c36aa.png)

```javascript
var o = d3.scale.ordinal()
    .domain([1, 2, 3, 4])
    .rangePoints([0, 100]);

o.range(); // [0, 33.333333333333336, 66.66666666666667, 100]
```

<a name="ordinal_rangeRoundPoints" href="#ordinal_rangeRoundPoints">#</a> ordinal.<b>rangeRoundPoints</b>(<i>interval</i>[, <i>padding</i>])

Like [rangePoints](#ordinal_rangePoints), except guarantees that the range values are integers so as to avoid antialiasing artifacts.

```js
var o = d3.scale.ordinal()
    .domain([1, 2, 3, 4])
    .rangeRoundPoints([0, 100]);

o.range(); // [1, 34, 67, 100]
```

Note that rounding necessarily introduces additional outer padding which is, on average, proportional to the length of the domain. For example, for a domain of size 50, an additional 25px of outer padding on either side may be required. Modifying the range extent to be closer to a multiple of the domain length may reduce the additional padding.

```js
var o = d3.scale.ordinal()
    .domain(d3.range(50))
    .rangeRoundPoints([0, 95]);

o.range(); // [23, 24, 25, …, 70, 71, 72]
o.rangeRoundPoints([0, 100]);
o.range(); // [1, 3, 5, …, 95, 97, 98]
```

(Alternatively, you could round the output of the scale manually or apply shape-rendering: crispEdges. However, this will result in irregularly spaced points.)

<a name="ordinal_rangeBands" href="Ordinal-Scales#ordinal_rangeBands">#</a> ordinal.<b>rangeBands</b>(<i>interval</i>[, <i>padding</i>[, <i>outerPadding</i>]])

Sets the output range from the specified continuous *interval*. The array *interval* contains two elements representing the minimum and maximum numeric value. This interval is subdivided into *n* evenly-spaced **bands**, where *n* is the number of (unique) values in the input domain. The bands may be offset from the edge of the interval and other bands according to the specified *padding*, which defaults to zero. The padding is typically in the range [0,1] and corresponds to the amount of space in the range interval to allocate to padding. A value of 0.5 means that the band width will be equal to the padding width. The *outerPadding* argument is for the entire group of bands; a value of 0 means there will be padding only between rangeBands.

![rangebands](https://f.cloud.github.com/assets/230541/538688/46c298c0-c193-11e2-9a7e-15d9abcfab9b.png)

```javascript
var o = d3.scale.ordinal()
    .domain([1, 2, 3])
    .rangeBands([0, 100]);

o.rangeBand(); // 33.333333333333336
o.range(); // [0, 33.333333333333336, 66.66666666666667]
o.rangeExtent(); // [0, 100]
```

<a name="ordinal_rangeRoundBands" href="Ordinal-Scales#ordinal_rangeRoundBands">#</a> ordinal.<b>rangeRoundBands</b>(<i>interval</i>[, <i>padding</i>[, <i>outerPadding</i>]])

Like [rangeBands](Ordinal-Scales#ordinal_rangeBands), except guarantees that range values and band width are integers so as to avoid antialiasing artifacts.

```js
var o = d3.scale.ordinal()
    .domain([1, 2, 3])
    .rangeRoundBands([0, 100]);

o.range(); // [1, 34, 67]
o.rangeBand(); // 33
o.rangeExtent(); // [0, 100]
```

Note that rounding necessarily introduces additional outer padding which is, on average, proportional to the length of the domain. For example, for a domain of size 50, an additional 25px of outer padding on either side may be required. Modifying the range extent to be closer to a multiple of the domain length may reduce the additional padding.

```js
var o = d3.scale.ordinal()
    .domain(d3.range(50))
    .rangeRoundBands([0, 95]);

o.range(); // [23, 24, 25, …, 70, 71, 72]

o.rangeRoundBands([0, 100]);
o.range(); // [0, 2, 4, …, 94, 96, 98]
```

(Alternatively, you could round the output of the scale manually or apply shape-rendering: crispEdges. However, this will result in irregularly spaced and sized bands.)

<a name="ordinal_rangeBand" href="Ordinal-Scales#ordinal_rangeBand">#</a> ordinal.<b>rangeBand</b>()

Returns the band width. When the scale’s range is configured with rangeBands or rangeRoundBands, the scale returns the lower value for the given input. The upper value can then be computed by offsetting by the band width. If the scale’s range is set using range or rangePoints, the band width is zero.

<a name="ordinal_rangeExtent" href="Ordinal-Scales#ordinal_rangeExtent">#</a> ordinal.<b>rangeExtent</b>()

Returns a two-element array representing the extent of the scale's range, i.e., the smallest and largest values.

<a name="ordinal_copy" href="#ordinal_copy">#</a> ordinal.<b>copy</b>()

Returns an exact copy of this ordinal scale. Changes to this scale will not affect the returned scale, and vice versa.

## Categorical Colors

<a name="category10" href="Ordinal-Scales#category10">#</a> d3.scale.<b>category10</b>()

Constructs a new ordinal scale with a range of ten categorical colors:

![1f77b4](1f77b4.png) #1f77b4<br>
![ff7f0e](ff7f0e.png) #ff7f0e<br>
![2ca02c](2ca02c.png) #2ca02c<br>
![d62728](d62728.png) #d62728<br>
![9467bd](9467bd.png) #9467bd<br>
![8c564b](8c564b.png) #8c564b<br>
![e377c2](e377c2.png) #e377c2<br>
![7f7f7f](7f7f7f.png) #7f7f7f<br>
![bcbd22](bcbd22.png) #bcbd22<br>
![17becf](17becf.png) #17becf<br>

<a name="category20" href="Ordinal-Scales#category20">#</a> d3.scale.<b>category20</b>()

Constructs a new ordinal scale with a range of twenty categorical colors:

![1f77b4](1f77b4.png) #1f77b4<br>
![aec7e8](aec7e8.png) #aec7e8<br>
![ff7f0e](ff7f0e.png) #ff7f0e<br>
![ffbb78](ffbb78.png) #ffbb78<br>
![2ca02c](2ca02c.png) #2ca02c<br>
![98df8a](98df8a.png) #98df8a<br>
![d62728](d62728.png) #d62728<br>
![ff9896](ff9896.png) #ff9896<br>
![9467bd](9467bd.png) #9467bd<br>
![c5b0d5](c5b0d5.png) #c5b0d5<br>
![8c564b](8c564b.png) #8c564b<br>
![c49c94](c49c94.png) #c49c94<br>
![e377c2](e377c2.png) #e377c2<br>
![f7b6d2](f7b6d2.png) #f7b6d2<br>
![7f7f7f](7f7f7f.png) #7f7f7f<br>
![c7c7c7](c7c7c7.png) #c7c7c7<br>
![bcbd22](bcbd22.png) #bcbd22<br>
![dbdb8d](dbdb8d.png) #dbdb8d<br>
![17becf](17becf.png) #17becf<br>
![9edae5](9edae5.png) #9edae5<br>

<a name="category20b" href="Ordinal-Scales#category20b">#</a> d3.scale.<b>category20b</b>()

Constructs a new ordinal scale with a range of twenty categorical colors:

![393b79](393b79.png) #393b79<br>
![5254a3](5254a3.png) #5254a3<br>
![6b6ecf](6b6ecf.png) #6b6ecf<br>
![9c9ede](9c9ede.png) #9c9ede<br>
![637939](637939.png) #637939<br>
![8ca252](8ca252.png) #8ca252<br>
![b5cf6b](b5cf6b.png) #b5cf6b<br>
![cedb9c](cedb9c.png) #cedb9c<br>
![8c6d31](8c6d31.png) #8c6d31<br>
![bd9e39](bd9e39.png) #bd9e39<br>
![e7ba52](e7ba52.png) #e7ba52<br>
![e7cb94](e7cb94.png) #e7cb94<br>
![843c39](843c39.png) #843c39<br>
![ad494a](ad494a.png) #ad494a<br>
![d6616b](d6616b.png) #d6616b<br>
![e7969c](e7969c.png) #e7969c<br>
![7b4173](7b4173.png) #7b4173<br>
![a55194](a55194.png) #a55194<br>
![ce6dbd](ce6dbd.png) #ce6dbd<br>
![de9ed6](de9ed6.png) #de9ed6<br>

<a name="category20c" href="Ordinal-Scales#category20c">#</a> d3.scale.<b>category20c</b>()

Constructs a new ordinal scale with a range of twenty categorical colors:

![3182bd](3182bd.png) #3182bd<br>
![6baed6](6baed6.png) #6baed6<br>
![9ecae1](9ecae1.png) #9ecae1<br>
![c6dbef](c6dbef.png) #c6dbef<br>
![e6550d](e6550d.png) #e6550d<br>
![fd8d3c](fd8d3c.png) #fd8d3c<br>
![fdae6b](fdae6b.png) #fdae6b<br>
![fdd0a2](fdd0a2.png) #fdd0a2<br>
![31a354](31a354.png) #31a354<br>
![74c476](74c476.png) #74c476<br>
![a1d99b](a1d99b.png) #a1d99b<br>
![c7e9c0](c7e9c0.png) #c7e9c0<br>
![756bb1](756bb1.png) #756bb1<br>
![9e9ac8](9e9ac8.png) #9e9ac8<br>
![bcbddc](bcbddc.png) #bcbddc<br>
![dadaeb](dadaeb.png) #dadaeb<br>
![636363](636363.png) #636363<br>
![969696](969696.png) #969696<br>
![bdbdbd](bdbdbd.png) #bdbdbd<br>
![d9d9d9](d9d9d9.png) #d9d9d9<br>

## ColorBrewer

D3 also bundles some fantastic categorical color scales by [[Cynthia Brewer|http://colorbrewer2.org/]]. You can find those in either CSS or JavaScript form in [lib/colorbrewer](/mbostock/d3/tree/master/lib/colorbrewer).

For CSS, assign a class such as "q0-3", "q1-3" or "q2-3" to the element you wish it be filled. Then, set the class attribute on a parent element (such as the SVG element) with the desired color scale name, such as "RdBu" or "Blues". For examples, see: [calendar heatmap](http://mbostock.github.com/d3/talk/20111116/calendar.html), [choropleth](http://mbostock.github.com/d3/talk/20111018/choropleth.html).

For JavaScript, you can use colorbrewer.RdBu[9] or equivalent as the range of a d3.scale.ordinal. For example:

```js
var o = d3.scale.ordinal()
    .domain(["foo", "bar", "baz"])
    .range(colorbrewer.RdBu[9]);
```