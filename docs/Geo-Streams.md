> [Wiki](Home) ▸ [[API Reference]] ▸ [[Geo]] ▸ **Geo Streams**

For fast transformations of geometry without temporary copies of geometry objects, D3 uses **geometry streams**. The main [d3.geo.stream](#d3_geo_stream) method converts a GeoJSON input object to a stream: a series of method calls on a *stream listener*. In addition, D3 provides several stream transformations that wrap listeners and transform the geometry. For example, the [projection.stream](Geo-Projections#stream) interface transforms spherical coordinates to Cartesian coordinates, and [d3.geo.path](Geo-Paths) serializes geometry to either SVG or Canvas. Internally, clipping and rotating are also implemented as stream transformations.

<a name="stream" href="#stream">#</a> d3.geo.<b>stream</b>(<i>object</i>, <i>listener</i>)

Streams the specified [GeoJSON](http://geojson.org) *object* to the specified stream *listener*. (Despite the name “stream”, these method calls are currently synchronous.) While both features and geometry objects are supported as input, the stream interface only describes the geometry, and thus additional feature properties are not visible to listeners.

## Stream Listeners

Stream listeners must implement several methods to traverse geometry. Listeners are inherently stateful; the meaning of a [point](#point) depends on whether the point is inside of a [line](#lineStart), and likewise a line is distinguished from a ring by a [polygon](#polygonStart).

<a name="stream_point" href="#stream_point">#</a> listener.<b>point</b>(<i>x</i>, <i>y</i>[, <i>z</i>])

Indicates a point with the specified coordinates *x* and *y* (and optionally *z*). The coordinate system is unspecified and implementation-dependent; for example, [projection streams](Geo-Projections#stream) require spherical coordinates in degrees as input. Outside the context of a polygon or line, a point indicates a point geometry object ([Point](http://www.geojson.org/geojson-spec.html#point) or [MultiPoint](http://www.geojson.org/geojson-spec.html#multipoint)). Within a line or polygon ring, the point indicates a control point.

<a name="stream_lineStart" href="#stream_lineStart">#</a> listener.<b>lineStart</b>()

Indicates the start of a line or ring. Within a polygon, indicates the start of a ring. The first ring of a polygon is the exterior ring, and is typically clockwise. Any subsequent rings indicate holes in the polygon, and are typically counterclockwise.

<a name="stream_lineEnd" href="#stream_lineEnd">#</a> listener.<b>lineEnd</b>()

Indicates the end of a line or ring. Within a polygon, indicates the end of a ring. Unlike GeoJSON, the redundant closing coordinate of a ring is *not* indicated via [point](#point), and instead is implied via lineEnd within a polygon. Thus, the given polygon input:

```json
{
  "type": "Polygon",
  "coordinates": [
    [[0, 0], [1, 0], [1, 1], [0, 1], [0, 0]]
  ]
}
```

Will produce the following series of method calls on the listener:

```js
listener.polygonStart();
listener.lineStart();
listener.point(0, 0);
listener.point(1, 0);
listener.point(1, 1);
listener.point(0, 1);
listener.lineEnd();
listener.polygonEnd();
```

<a name="stream_polygonStart" href="#stream_polygonStart">#</a> listener.<b>polygonStart</b>()

Indicates the start of a polygon. The first line of a polygon indicates the exterior ring, and any subsequent lines indicate interior holes.

<a name="stream_polygonEnd" href="#stream_polygonEnd">#</a> listener.<b>polygonEnd</b>()

Indicates the end of a polygon.

<a name="stream_sphere" href="#stream_sphere">#</a> listener.<b>sphere</b>()

Indicates the sphere (the globe; the unit sphere centered at ⟨0,0,0⟩).

## Stream Transforms

A stream transform wraps a stream listener, transforming the geometry before passing it along to the wrapped listener. A [geographic projection](Geo-Projections) is one example of a stream transform. The [d3.geo.transform](#transform) class provides an easy way of implementing a custom stream transform.

<a name="transform" href="#transform">#</a> d3.geo.<b>transform</b>(<i>methods</i>)

Creates a new stream transform using the specified hash of methods. The hash may contain implementations of any of the standard stream listener methods: [sphere](#stream_sphere), [point](#stream_point), [lineStart](#stream_lineStart), [lineEnd](#stream_lineEnd), [polygonStart](#stream_polygonStart) and [polygonEnd](#stream_polygonEnd). Any method that is _not_ present in the specified hash will be implemented a pass-through directly to the wrapped stream. To access the wrapped stream within a method, use `this.stream`. For example, to implement a simple [2D matrix transform](http://bl.ocks.org/mbostock/5663666):

```js
function matrix(a, b, c, d, tx, ty) {
  return d3.geo.transform({
    point: function(x, y) { this.stream.point(a * x + b * y + tx, c * x + d * y + ty); },
  });
}
```

This transform can then be used in conjunction with [d3.geo.path](Geo-Paths). For example, to implement a 2D affine transform that flips the <i>y</i>-axis:

```js
var path = d3.geo.path()
    .projection(matrix(1, 0, 0, -1, 0, height));
```

<a name="transform_stream" href="#transform_stream">#</a> transform.<b>stream</b>(<i>listener</i>)

Given the specified stream *listener*, returns a wrapped stream listener that applies this transform to any input geometry before streaming it to the wrapped listener.

<a name="clipExtent" href="#clipExtent">#</a> d3.geo.<b>clipExtent</b>()

Create a new stream [transform](#transform) that implements axis-aligned rectangle clipping. This is typically used to clip geometry to the viewport after [projecting](Geo-Projections).

<a name="clipExtent_extent" href="#clipExtent_extent">#</a> clipExtent.<b>extent</b>([<i>extent</i>])

If *extent* is specified, sets the clip extent to the specified rectangle [​[<i>x0</i>, <i>y0</i>], [<i>x1</i>, <i>y1</i>]​] and returns this transform. If *extent* is not specified, returns the current clip extent, which defaults to [​[0, 0], [960, 500]​].
