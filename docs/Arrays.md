> [Wiki](Home) ▸ [[API Reference]] ▸ [[Core]] ▸ **Arrays**

When using D3—and doing data visualization in general—you tend to do a lot of **array manipulation**. That's because D3's canonical representation of data is an array. Some common forms of array manipulation include taking a contiguous slice (subset) of an array, filtering an array using a predicate function, and mapping an array to a parallel set of values using a transform function. Before looking at the set of utilities that D3 provides for arrays, you should familiarize yourself with the powerful [array methods built-in to JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype).

JavaScript includes **mutator methods** that modify the array:

* [array.pop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) - Remove the last element from the array.
* [array.push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) - Add one or more elements to the end of the array.
* [array.reverse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) - Reverse the order of the elements of the array.
* [array.shift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) - Remove the first element from the array.
* [array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) - Sort the elements of the array.
* [array.splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) - Add or remove elements from the array.
* [array.unshift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) - Add one or more elements to the front of the array.

There are also **accessor methods** that return some representation of the array:

* [array.concat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) - Join the array with other array(s) or value(s).
* [array.join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) - Join all elements of the array into a string.
* [array.slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) - Extract a section of the array.
* [array.indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) - Find the first occurrence of a value within the array.
* [array.lastIndexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf) - Find the last occurrence of a value within the array.

And finally, **iteration methods** that apply functions to elements in the array:

* [array.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) - Create a new array with only the elements for which a predicate is true.
* [array.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) - Call a function for each element in the array.
* [array.every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every) - See if every element in the array satisfies a predicate.
* [array.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) - Create a new array with the result of calling a function on every element in the array.
* [array.some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some) - See if at least one element in the array satisfies a predicate.
* [array.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) - Apply a function to reduce the array to a single value (from left-to-right).
* [array.reduceRight](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight) - Apply a function to reduce the array to a single value (from right-to-left).

## Ordering

<a name="d3_ascending" href="#d3_ascending">#</a> d3.<b>ascending</b>(<i>a</i>, <i>b</i>)

Returns -1 if *a* is less than *b*, or 1 if *a* is greater than *b*, or 0. This is the comparator function for natural order, and can be used in conjunction with the built-in array sort method to arrange elements in ascending order. It is implemented as:

```js
function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}
```

Note that if no comparator function is specified to the built-in sort method, the default order is lexicographic (alphabetical), not natural! This can lead to surprising behavior when sorting an array of numbers.

<a name="d3_descending" href="#d3_descending">#</a> d3.<b>descending</b>(<i>a</i>, <i>b</i>)

Returns -1 if *a* is greater than *b*, or 1 if *a* is less than *b*, or 0. This is the comparator function for reverse natural order, and can be used in conjunction with the built-in array sort method to arrange elements in descending order.  It is implemented as:

```js
function descending(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
}
```

Note that if no comparator function is specified to the built-in sort method, the default order is lexicographic (alphabetical), not natural! This can lead to surprising behavior when sorting an array of numbers.

<a name="d3_min" href="#d3_min">#</a> d3.<b>min</b>(<i>array</i>[, <i>accessor</i>])

Returns the minimum value in the given *array* using natural order. If the array is empty, returns undefined. An optional *accessor* function may be specified, which is equivalent to calling *array.map(accessor)* before computing the minimum value. Unlike the built-in [Math.min](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Math/min), this method ignores undefined values; this is useful for computing the domain of a [[scale|Scales]] while only considering the defined region of the data. In addition, elements are compared using natural order rather than numeric order. For example, the minimum of ["20", "3"] is "20", while the minimum of [20, 3] is 3.

<a name="d3_max" href="#d3_max">#</a> d3.<b>max</b>(<i>array</i>[, <i>accessor</i>])

Returns the maximum value in the given *array* using natural order. If the array is empty, returns undefined. An optional *accessor* function may be specified, which is equivalent to calling *array.map(accessor)* before computing the maximum value. Unlike the built-in [Math.max](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Math/max), this method ignores undefined values; this is useful for computing the domain of a [[scale|Scales]] while only considering the defined region of the data. In addition, elements are compared using natural order rather than numeric order. For example, the maximum of ["20", "3"] is "3", while the maximum of [20, 3] is 20.

<a name="d3_extent" href="#d3_extent">#</a> d3.<b>extent</b>(<i>array</i>[, <i>accessor</i>])

Returns the minimum and maximum value in the given *array* using natural order. This is equivalent to calling [d3.min](#d3_min) and [d3.max](#d3_max) simultaneously.

<a name="d3_sum" href="#d3_sum">#</a> d3.<b>sum</b>(<i>array</i>[, <i>accessor</i>])

Returns the sum of the given *array*. If the array is empty, returns 0. An optional *accessor* function may be specified, which is equivalent to calling *array.map(accessor)* before computing the sum. This method ignores invalid values such as NaN and undefined; this is useful for computing the sum of data while only considering the well-defined values.

<a name="d3_mean" href="#d3_mean">#</a> d3.<b>mean</b>(<i>array</i>[, <i>accessor</i>])

Returns the mean of the given *array*. If the array is empty, returns undefined. An optional *accessor* function may be specified, which is equivalent to calling *array.map(accessor)* before computing the mean. This method ignores invalid values such as NaN and undefined; this is useful for computing the mean of data while only considering the well-defined values.

<a name="d3_median" href="#d3_median">#</a> d3.<b>median</b>(<i>array</i>[, <i>accessor</i>])

Returns the median of the given *array* using the [R-7](http://en.wikipedia.org/wiki/Quantile#Quantiles_of_a_population) algorithm. If the array is empty, returns undefined. An optional *accessor* function may be specified, which is equivalent to calling *array.map(accessor)* before computing the median. This method ignores invalid values such as NaN and undefined; this is useful for computing the median of data while only considering the well-defined values.

<a name="d3_quantile" href="#d3_quantile">#</a> d3.<b>quantile</b>(<i>numbers</i>, <i>p</i>)

Returns the *p*-quantile of the given sorted array of *numbers*, where *p* is a number in the range [0,1]. For example, the median can be computed using *p* = 0.5, the first quartile at *p* = 0.25, and the third quartile at *p* = 0.75. This particular implementation uses the [R-7](http://en.wikipedia.org/wiki/Quantile#Quantiles_of_a_population) algorithm, which is the default for the R programming language and Excel. This method requires that *numbers* contains numeric elements and is already sorted in ascending order, such as by [d3.ascending](#d3_ascending).

```javascript
var a = [0, 1, 3];
d3.quantile(a, 0); // 0
d3.quantile(a, 0.5); // 1
d3.quantile(a, 1); // 3
d3.quantile(a, 0.25); // 0.5
d3.quantile(a, 0.75); // 2
d3.quantile(a, 0.1); // 0.19999999999999996 
```

<a name="d3_variance" href="#d3_variance">#</a> d3.<b>variance</b>(<i>array</i>[, <i>accessor</i>])

Returns an [unbiased estimator of the population variance](http://mathworld.wolfram.com/SampleVariance.html) of the given *array* of numbers. If the array has fewer than two values, returns undefined. An optional *accessor* function may be specified, which is equivalent to calling *array.map(accessor)* before computing the variance. This method ignores invalid values such as NaN and undefined.

<a name="d3_deviation" href="#d3_deviation">#</a> d3.<b>deviation</b>(<i>array</i>[, <i>accessor</i>])

Returns the standard deviation, defined as the square root of the [bias-corrected variance](#d3_variance), of the given *array* of numbers. If the array has fewer than two values, returns undefined. An optional *accessor* function may be specified, which is equivalent to calling *array.map(accessor)* before computing the standard deviation. This method ignores invalid values such as NaN and undefined.

<a name="d3_bisectLeft" href="#d3_bisectLeft">#</a> d3.<b>bisectLeft</b>(<i>array</i>, <i>x</i>[, <i>lo</i>[, <i>hi</i>]])

Locate the insertion point for *x* in *array* to maintain sorted order. The arguments *lo* and *hi* may be used to specify a subset of the array which should be considered; by default the entire array is used. If *x* is already present in *array*, the insertion point will be before (to the left of) any existing entries. The return value is suitable for use as the first argument to [[splice|https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/splice]] assuming that *array* is already sorted. The returned insertion point *i* partitions the *array* into two halves so that all *v* < *x* for *v* in *array*.slice(lo, i) for the left side and all v >= x for v in *array*.slice(i, hi) for the right side.

<a name="d3_bisect" href="#d3_bisect">#</a> d3.<b>bisect</b>(<i>array</i>, <i>x</i>[, <i>lo</i>[, <i>hi</i>]])<br>
<a name="d3_bisectRight" href="#d3_bisectRight">#</a> d3.<b>bisectRight</b>(<i>array</i>, <i>x</i>[, <i>lo</i>[, <i>hi</i>]])

Similar to bisectLeft, but returns an insertion point which comes after (to the right of) any existing entries of *x* in *array*. The returned insertion point *i* partitions the *array* into two halves so that all *v* <= *x* for *v* in *array*.slice(lo, i) for the left side and all *v* > *x* for *v* in *array*.slice(i, hi) for the right side.

<a name="d3_bisector" href="#d3_bisector">#</a> d3.<b>bisector</b>(<i>accessor</i>)
<br><a name="d3_bisector" href="#d3_bisector">#</a> d3.<b>bisector</b>(<i>comparator</i>)

Returns a bisector using the specified *accessor* or *comparator* function. The returned object has `left` and `right` properties which are similar to [bisectLeft](#d3_bisectLeft) and [bisectRight](#d3_bisectRight), respectively. This method can be used to bisect arrays of objects instead of being limited to simple arrays of primitives. For example, given the following array of objects:

```js
var data = [
  {date: new Date(2011, 1, 1), value: 0.5},
  {date: new Date(2011, 2, 1), value: 0.6},
  {date: new Date(2011, 3, 1), value: 0.7},
  {date: new Date(2011, 4, 1), value: 0.8}
];
```

A suitable bisect function could be constructed as:

```js
var bisect = d3.bisector(function(d) { return d.date; }).right;
```

This is equivalent to specifying a comparator:

```js
var bisect = d3.bisector(function(a, b) { return a.date - b.date; }).right;
```

And then applied as `bisect(data, new Date(2011, 1, 2))`, returning an index. Use a comparator rather than an accessor if you want values to be sorted in an order different than natural order, such as in descending rather than ascending order.

<a name="d3_shuffle" href="#d3_shuffle">#</a> d3.<b>shuffle</b>(<i>array</i>[, <i>lo</i>[, <i>hi</i>]])

Randomizes the order of the specified *array* using the [Fisher–Yates shuffle](http://bost.ocks.org/mike/shuffle/).

## Associative Arrays

Another common data type in JavaScript is the associative array, or more simply the object, which has a set of named properties. In Java this is referred to as a map, and in Python, a dictionary. JavaScript provides a standard mechanism for iterating over the keys (or property names) in an associative array: the [for…in loop](https://developer.mozilla.org/en/JavaScript/Reference/Statements/for...in). However, note that the iteration order is undefined. D3 provides several operators for converting associative arrays to standard indexed arrays.

<a name="d3_keys" href="#d3_keys">#</a> d3.<b>keys</b>(<i>object</i>)

Returns an array containing the property names of the specified object (an associative array). The order of the returned array is undefined.

<a name="d3_values" href="#d3_values">#</a> d3.<b>values</b>(<i>object</i>)

Returns an array containing the property values of the specified object (an associative array). The order of the returned array is undefined.

<a name="d3_entries" href="#d3_entries">#</a> d3.<b>entries</b>(<i>object</i>)

Returns an array containing the property keys and values of the specified object (an associative array). Each entry is an object with a key and value attribute, such as `{key: "foo", value: 42}`. The order of the returned array is undefined.

```js
d3.entries({foo: 42, bar: true}); // [{key: "foo", value: 42}, {key: "bar", value: true}]
```

### Maps

While it is tempting to use bare objects as maps in JavaScript, this can lead to [unexpected behavior](http://www.devthought.com/2012/01/18/an-object-is-not-a-hash/) when built-in property names are used as keys. For example, if you try to set `object["__proto__"] = 42`, it probably won't do what you expect. The same is true if you attempt to query whether a given key is defined in the map; `"hasOwnProperty" in object` returns true because your bare object inherits the hasOwnProperty method from the Object prototype. To avoid these problems, ES6 proposes [simple maps and sets](http://wiki.ecmascript.org/doku.php?id=harmony:simple_maps_and_sets); until modern browsers support these collections, you can use d3.map instead.

Note: unlike the proposed ES6 map, d3.map still uses string-coercion for keys rather than strict equality.

<a name="d3_map" href="#d3_map">#</a> d3.<b>map</b>([<i>object</i>][, <i>key</i>])

Constructs a new map. If *object* is specified, copies all enumerable properties from the specified object into this map. The specified object may be an array. An optional *key* function may be specified to compute the key for each value in the array. For example:

```js
var m = d3.map([{name: "foo"}, {name: "bar"}], function(d) { return d.name; });
m.get("foo"); // {"name": "foo"}
m.get("bar"); // {"name": "bar"}
m.get("baz"); // undefined
```

See also [d3.nest](#-nest).

<a name="map_has" href="#map_has">#</a> map.<b>has</b>(<i>key</i>)

Returns true if and only if this map has an entry for the specified *key* string. Note: the value may be null or undefined.

<a name="map_get" href="#map_get">#</a> map.<b>get</b>(<i>key</i>)

Returns the value for the specified *key* string. If the map does not have an entry for the specified *key*, returns undefined.

<a name="map_set" href="#map_set">#</a> map.<b>set</b>(<i>key</i>, <i>value</i>)

Sets the *value* for the specified *key* string; returns the new *value*. If the map previously had an entry for the same *key* string, the old entry is replaced with the new value.

<a name="map_remove" href="#map_remove">#</a> map.<b>remove</b>(<i>key</i>)

If the map has an entry for the specified *key* string, removes the entry and returns true. Otherwise, this method does nothing and returns false.

<a name="map_keys" href="#map_keys">#</a> map.<b>keys</b>()

Returns an array of string keys for every entry in this map. The order of the returned keys is arbitrary.

<a name="map_values" href="#map_values">#</a> map.<b>values</b>()

Returns an array of values for every entry in this map. The order of the returned values is arbitrary.

<a name="map_entries" href="#map_entries">#</a> map.<b>entries</b>()

Returns an array of key-value objects for each entry in this map. The order of the returned entries is arbitrary. Each entry’s key is a string, but the value has arbitrary type.

<a name="map_forEach" href="#map_forEach">#</a> map.<b>forEach</b>(<i>function</i>)

Calls the specified *function* for each entry in this map, passing the entry's key and value as two arguments. The `this` context of the *function* is this map. Returns undefined. The iteration order is arbitrary.

<a name="map_empty" href="#map_empty">#</a> map.<b>empty</b>()

Returns true if and only if this map has zero entries.

<a name="map_size" href="#map_size">#</a> map.<b>size</b>()

Returns the number of entries in this map.

### Sets

<a name="d3_set" href="#d3_set">#</a> d3.<b>set</b>([<i>array</i>])

Constructs a new set. If *array* is specified, adds the given *array* of string values to the returned set.

<a name="set_has" href="#set_has">#</a> set.<b>has</b>(<i>value</i>)

Returns true if and only if this set has an entry for the specified *value* string.

<a name="set_add" href="#set_add">#</a> set.<b>add</b>(<i>value</i>)

Adds the specified *value* string to this set. Returns *value*.

<a name="set_remove" href="#set_remove">#</a> set.<b>remove</b>(<i>value</i>)

If the set contains the specified *value* string, removes it and returns true. Otherwise, this method does nothing and returns false.

<a name="set_values" href="#set_values">#</a> set.<b>values</b>()

Returns an array of the string values in this set. The order of the returned values is arbitrary. Can be used as a convenient way of computing the unique values for a set of strings. For example:

```js
d3.set(["foo", "bar", "foo", "baz"]).values(); // "foo", "bar", "baz"
```

<a name="set_forEach" href="#set_forEach">#</a> set.<b>forEach</b>(<i>function</i>)

Calls the specified *function* for each value in this set, passing the value as an argument. The `this` context of the *function* is this set. Returns undefined. The iteration order is arbitrary.

<a name="set_empty" href="#set_empty">#</a> set.<b>empty</b>()

Returns true if and only if this set has zero values.

<a name="set_size" href="#set_size">#</a> set.<b>size</b>()

Returns the number of values in this set.

## Array Operators

<a name="d3_merge" href="#d3_merge">#</a> d3.<b>merge</b>(<i>arrays</i>)

Merges the specified *arrays* into a single array. This method is similar to the built-in array concat method; the only difference is that it is more convenient when you have an array of arrays.

```js
d3.merge([ [1], [2, 3] ]); // returns [1, 2, 3]
```

<a name="d3_range" href="#d3_range">#</a> d3.<b>range</b>([<i>start</i>, ]<i>stop</i>[, <i>step</i>])

Generates an array containing an arithmetic progression, similar to the Python built-in [[range|http://docs.python.org/library/functions.html#range]]. This method is often used to iterate over a sequence of numeric or integer values, such as the indexes into an array. Unlike the Python version, the arguments are not required to be integers, though the results are more predictable if they are due to floating point precision. If *step* is omitted, it defaults to 1. If *start* is omitted, it defaults to 0. The *stop* value is not included in the result. The full form returns an array of numbers [*start*, *start* + *step*, *start* + 2 \* *step*, …]. If *step* is positive, the last element is the largest *start* + *i* \* *step* less than *stop*; if *step* is negative, the last element is the smallest *start* + *i* \* *step* greater than *stop*. If the returned array would contain an infinite number of values, an error is thrown rather than causing an infinite loop.

<a name="d3_permute" href="#d3_permute">#</a> d3.<b>permute</b>(<i>array</i>, <i>indexes</i>)

Returns a permutation of the specified *array* using the specified array of *indexes*. The returned array contains the corresponding element in array for each index in indexes, in order. For example, permute(["a", "b", "c"], [1, 2, 0])
returns ["b", "c", "a"]. It is acceptable for the array of indexes to be a different length from the array of elements, and for indexes to be duplicated or omitted.

This method can also be used to extract the values from an object into an array with a stable order. (Array indexes in JavaScript are simply properties which have a special relationship to `.length`.) Extracting keyed values in order can be useful for generating data arrays in nested selections. For example, we could display some of the Minnesota barley yield data above in table form:

```js
var cols = ["site", "variety", "yield"];
thead.selectAll('th').data(cols)
    .enter().append('th').text(function (d) { return d.toUpperCase(); });
tbody.selectAll('tr').data(yields)
    .enter().append('tr').selectAll('td').data(function (row) { return d3.permute(row, cols); })
        .enter().append('td').text(function (d) { return d; });
```

<a name="d3_zip" href="#d3_zip">#</a> d3.<b>zip</b>(<i>arrays…</i>)

Returns an array of arrays, where the ith array contains the ith element from each of the argument *arrays*. The returned array is truncated in length to the shortest array in *arrays*. If *arrays* contains only a single array, the returned array contains one-element arrays. With no arguments, the returned array is empty.

```js
d3.zip([1, 2], [3, 4]); // returns [[1, 3], [2, 4]]
```

<a name="d3_transpose" href="#d3_transpose">#</a> d3.<b>transpose</b>(<i>matrix</i>)

Equivalent to `d3.zip.apply(null, matrix)`; uses the zip operator as a two-dimensional [[matrix transpose|http://en.wikipedia.org/wiki/Transpose]].

<a name="d3_pairs" href="#d3_pairs">#</a> d3.<b>pairs</b>(<i>array</i>)

For each adjacent pair of elements in the specified *array*, returns a new array of tuples of element *i* and element *i* - 1. For example:

```js
d3.pairs([1, 2, 3, 4]); // returns [[1, 2], [2, 3], [3, 4]]
```

If the specified array has fewer than two elements, returns the empty array.

### <a name="_nest"></a> Nest

Nesting allows elements in an array to be grouped into a hierarchical tree structure; think of it like the GROUP BY operator in SQL, except you can have multiple levels of grouping, and the resulting output is a tree rather than a flat table. The levels in the tree are specified by key functions. The leaf nodes of the tree can be sorted by value, while the internal nodes can be sorted by key. An optional rollup function will collapse the elements in each leaf node using a summary function. The nest operator (the object returned by [d3.nest](#d3_nest)) is reusable, and does not retain any references to the data that is nested.

For example, consider the following tabular data structure of Barley yields, from various sites in Minnesota during 1931-2:

```js
var yields = [
  {yield: 27.00, variety: "Manchuria", year: 1931, site: "University Farm"},
  {yield: 48.87, variety: "Manchuria", year: 1931, site: "Waseca"},
  {yield: 27.43, variety: "Manchuria", year: 1931, site: "Morris"},
  ...
];
```

To facilitate visualization, it may be useful to nest the elements first by year, and then by variety, as follows:

```js
var nest = d3.nest()
    .key(function(d) { return d.year; })
    .key(function(d) { return d.variety; })
    .entries(yields);
```

This returns a nested array. Each element of the outer array is a key-values pair, listing the values for each distinct key:

```js
[{key: "1931", values: [
   {key: "Manchuria", values: [
     {yield: 27.00, variety: "Manchuria", year: 1931, site: "University Farm"},
     {yield: 48.87, variety: "Manchuria", year: 1931, site: "Waseca"},
     {yield: 27.43, variety: "Manchuria", year: 1931, site: "Morris"}, ...]},
   {key: "Glabron", values: [
     {yield: 43.07, variety: "Glabron", year: 1931, site: "University Farm"},
     {yield: 55.20, variety: "Glabron", year: 1931, site: "Waseca"}, ...]}, ...]},
 {key: "1932", values: ...}]
```

The nested form allows easy iteration and generation of hierarchical structures in SVG or HTML.

For a longer introduction to d3.nest, see:

* Phoebe Bright’s [D3 Nest Tutorial and examples](http://bl.ocks.org/phoebebright/raw/3176159/) 
* Shan Carter’s [Mister Nester](http://bl.ocks.org/shancarter/raw/4748131/)

<a name="d3_nest" href="#d3_nest">#</a> d3.<b>nest</b>()

Creates a new nest operator. The set of keys is initially empty. If the [map](#nest_map) or [entries](#nest_entries) operator is invoked before any key functions are registered, the nest operator simply returns the input array. Examples of nest: [http://bl.ocks.org/phoebebright/raw/3176159/](http://bl.ocks.org/phoebebright/raw/3176159/) 

<a name="nest_key" href="#nest_key">#</a> nest.<b>key</b>(<i>function</i>)

Registers a new key *function*. The key function will be invoked for each element in the input array, and must return a string identifier that is used to assign the element to its group. Most often, the function is implemented as a simple accessor, such as the year and variety accessors in the example above. The function is _not_ passed the input array index. Each time a key is registered, it is pushed onto the end of an internal keys array, and the resulting map or entries will have an additional hierarchy level. There is not currently a facility to remove or query the registered keys. The most-recently registered key is referred to as the current key in subsequent methods.

<a name="nest_sortKeys" href="#nest_sortKeys">#</a> nest.<b>sortKeys</b>(<i>comparator</i>)

Sorts key values for the current key using the specified *comparator*, such as [d3.descending](#d3_descending). If no comparator is specified for the current key, the order in which keys will be returned is undefined. Note that this only affects the result of the entries operator; the order of keys returned by the map operator is always undefined, regardless of comparator.

```javascript
var nest = d3.nest()
    .key(function(d) { return d.year; })
    .sortKeys(d3.ascending)
    .entries(yields);
```

<a name="nest_sortValues" href="#nest_sortValues">#</a> nest.<b>sortValues</b>(<i>comparator</i>)

Sorts leaf elements using the specified *comparator*, such as [d3.descending](#d3_descending). This is roughly equivalent to sorting the input array before applying the nest operator; however it is typically more efficient as the size of each group is smaller. If no value comparator is specified, elements will be returned in the order they appeared in the input array. This applies to both the map and entries operators.

<a name="nest_rollup" href="#nest_rollup">#</a> nest.<b>rollup</b>(<i>function</i>)

Specifies a rollup *function* to be applied on each group of leaf elements. The return value of the rollup function will replace the array of leaf values in either the associative array returned by the map operator, or the values attribute of each entry returned by the entries operator.

<a name="nest_map" href="#nest_map">#</a> nest.<b>map</b>(<i>array</i>[, <i>mapType</i>])

Applies the nest operator to the specified *array*, returning an associative array. Each entry in the returned associative array corresponds to a distinct key value returned by the first key function. The entry value depends on the number of registered key functions: if there is an additional key, the value is another nested associative array; otherwise, the value is the array of elements filtered from the input *array* that have the given key value.

If a *mapType* is specified, the specified function is used to construct a map rather than returning a simple JavaScript object. It is recommended that you use [d3.map](#d3_map) for this purpose. For example:

```js
var yieldsByYearAndVariety = d3.nest()
    .key(function(d) { return d.year; })
    .key(function(d) { return d.variety; })
    .map(yields, d3.map);
```

Using d3.map rather than an object offers conveniences (e.g., the returned map has [keys](#map_keys) and [values](#map_values) functions), and protects against unusual key names that conflict with built-in JavaScript properties, such as "__proto__".

<a name="nest_entries" href="#nest_entries">#</a> nest.<b>entries</b>(<i>array</i>)

Applies the nest operator to the specified *array*, returning an array of key-values entries. Conceptually, this is similar to applying [d3.entries](#d3_entries) to the associative array returned by [map](#nest_map), but it applies to every level of the hierarchy rather than just the first (outermost) level. Each entry in the returned array corresponds to a distinct key value returned by the first key function. The entry value depends on the number of registered key functions: if there is an additional key, the value is another nested array of entries; otherwise, the value is the array of elements filtered from the input *array* that have the given key value.
