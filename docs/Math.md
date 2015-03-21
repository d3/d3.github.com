> [Wiki](Home) ▸ [[API Reference]] ▸ [[Core]] ▸ **Math**

## Pseudorandom Number Generation

You can use the built-in [Math.random](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/random) to generate uniform distributions. For example, to generate a random integer between 0 and 99 (inclusive), you can say `Math.floor(Math.random() * 100)`. 

<a name="d3_random_normal" href="#d3_random_normal">#</a> d3.random.<b>normal</b>([<i>mean</i>, [<i>deviation</i>]])

Returns a function for generating random numbers with a [normal (Gaussian) distribution](http://en.wikipedia.org/wiki/Normal_distribution). The expected value of the generated pseudorandom numbers is *mean*, with the given standard *deviation*. If *deviation* is not specified, it defaults to 1.0; if *mean* is not specified, it defaults to 0.0.

<a name="d3_random_logNormal" href="#d3_random_logNormal">#</a> d3.random.<b>logNormal</b>([<i>mean</i>, [<i>deviation</i>]])

Returns a function for generating random numbers with a [log-normal distribution](http://en.wikipedia.org/wiki/Log-normal_distribution). The expected value of the random variable’s natural logrithm is *mean*, with the given standard *deviation*. If *deviation* is not specified, it defaults to 1.0; if *mean* is not specified, it defaults to 0.0.

<a name="d3_random_bates" href="#d3_random_bates">#</a> d3.random.<b>bates</b>(<i>count</i>)

Returns a function for generating random numbers with a [Bates distribution](http://en.wikipedia.org/wiki/Bates_distribution). The number of independent variables is specified by *count*.

<a name="d3_random_irwinHall" href="#d3_random_irwinHall">#</a> d3.random.<b>irwinHall</b>(<i>count</i>)

Returns a function for generating random numbers with an [Irwin–Hall distribution](http://en.wikipedia.org/wiki/Irwin–Hall_distribution). The number of independent variables is specified by *count*.

## 2D Transforms

<a name="d3_transform" href="#d3_transform">#</a> d3.<b>transform</b>(<i>string</i>)

Parses the given 2D affine transform string, as defined by SVG's [transform attribute](http://www.w3.org/TR/SVG/coords.html#TransformAttribute). The transform is then decomposed to an object with fields for translate, rotate, x-skew and scale. This behavior is standardized by CSS: see [matrix decomposition for animation](http://www.w3.org/TR/css3-2d-transforms/#matrix-decomposing).

<a name="transform_rotate" href="#transform_rotate">#</a> transform.<b>rotate</b>

Returns the rotation angle θ of this transform, in degrees.

<a name="transform_translate" href="#transform_translate">#</a> transform.<b>translate</b>

Returns the [dx, dy] translation of this transform, as a two-element array in local coordinates (typically pixels).

<a name="transform_skew" href="#transform_skew">#</a> transform.<b>skew</b>

Returns the *x*-skew φ of this transform, in degrees.

<a name="transform_scale" href="#transform_scale">#</a> transform.<b>scale</b>

Returns the [kx, ky] scale of this transform, as a two-element array.

<a name="transform_toString" href="#transform_toString">#</a> transform.<b>toString()</b>

Returns a string representation of this transform, in the form "translate(dx,dy)rotate(θ)skewX(φ)scale(kx,ky)".