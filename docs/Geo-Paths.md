> [Wiki](Home) ▸ [[API Reference]] ▸ [[Geo]] ▸ **Geo Paths**

For cartographic visualizations, D3 supports a handful of components for displaying and manipulating **geographic data**. These components use the [GeoJSON format](http://geojson.org/geojson-spec.html)—a standard way of representing geographic features in JavaScript. (See also the [TopoJSON format](/mbostock/topojson), an extension of GeoJSON that is significantly more compact.) To convert shapefiles to GeoJSON, use ogr2ogr, part of the [GDAL package](http://www.gdal.org/).

<a href="http://bl.ocks.org/mbostock/4060606"><img src="http://bl.ocks.org/mbostock/raw/4060606/thumbnail.png" height="120"></a>

Some other tools you may be interested in:

* [TopoJSON](/mbostock/topojson) - shapefile simplification, topology construction and GeoJSON compression.
* [Shapely](https://github.com/Toblerity/Shapely) - manipulation of planar geometry objects.
* [ColorBrewer](http://colorbrewer2.org) - color scales for maps.
* [PostGIS](http://postgis.refractions.net/) - a geospatial database.

The primary mechanism for displaying geographic data is [d3.geo.path](#path). This class is similar to [d3.svg.line](SVG-Shapes#line) and the other SVG shape generators: given a geometry or feature object, it generates the path data string suitable for the "d" attribute of an SVG path element. The d3.geo.path class can [render directly to Canvas](http://bl.ocks.org/mbostock/3783604), which may offer better performance when animating the projection.

<a name="path" href="#path">#</a> d3.geo.<b>path</b>()

Creates a new geographic path generator with the default settings: the [albersUsa](Geo-Projections#albersUsa) projection and a point radius of 4.5 pixels.

<a name="_path" href="#_path">#</a> <b>path</b>(<i>feature</i>[, <i>index</i>])

Returns the path data string for the given *feature*, which may be any GeoJSON feature or geometry object:

* Point - a single position.
* MultiPoint - an array of positions.
* LineString - an array of positions forming a continuous line.
* MultiLineString - an array of arrays of positions forming several lines.
* Polygon - an array of arrays of positions forming a polygon (possibly with holes).
* MultiPolygon - a multidimensional array of positions forming multiple polygons.
* GeometryCollection - an array of geometry objects.
* Feature - a feature containing one of the above geometry objects.
* FeatureCollection - an array of feature objects.

The type "Sphere" is also supported, which is useful for rendering the outline of the globe. A sphere has no coordinates. An optional *index* may be specified, which is passed along to the [pointRadius](Geo-Paths#pointRadius) accessor; the *index* is passed automatically when the path generator is invoked by [selection.attr](Selections#attr).

**Important:** the *inside* of a polygon is all points that the polygon winds around in a clockwise order. If your GeoJSON input has polygons in the wrong winding order, you must reverse them, say via [ST_ForceRHR](http://www.postgis.org/docs/ST_ForceRHR.html); you can also convert your GeoJSON to [TopoJSON](https://github.com/mbostock/topojson), and this will happen automatically.

To display multiple features, you can place them in a single feature collection and a single path element:

```javascript
svg.append("path")
    .datum({type: "FeatureCollection", features: features})
    .attr("d", d3.geo.path());
```

Alternatively, you can create multiple distinct path elements:

```javascript
svg.selectAll("path")
    .data(features)
  .enter().append("path")
    .attr("d", d3.geo.path());
```

Using distinct path elements is typically slower than a single path element for a collection. However, distinct path elements are preferred if you want interact with features separately (e.g., using CSS :hover or click events).

<a name="path_projection" href="#path_projection">#</a> path.<b>projection</b>([<i>projection</i>])

If *projection* is specified, sets the projection used by the path generator to the specified projection function. If *projection* is not specified, returns the current projection, which defaults to [albersUsa](Geo-Projections#albersUsa). The projection is typically one of D3's built-in [geographic projections](Geo-Projections); however, any function can be used. A projection function takes a two-element array of numbers representing the coordinates of a location, [<i>longitude</i>, <i>latitude</i>], and returns a similar two-element array of numbers representing the projected pixel position [<i>x</i>, <i>y</i>]. For example, a rudimentary spherical Mercator projection:

```javascript
function mercator(coordinates) {
  return [
    coordinates[0] / 360,
    (-180 / Math.PI * Math.log(Math.tan(Math.PI / 4 + coordinates[1] * Math.PI / 360))) / 360
  ];
}
```

Internally, this point projection function is wrapped with a fallback [stream transformation](Geo-Streams) that performs [adaptive resampling](http://bl.ocks.org/mbostock/3795544). However, the fallback stream does not perform any clipping or cutting.

For more control over the stream transformation, the *projection* may be specified as an object that implements the *stream* method. ([See example.](http://bl.ocks.org/mbostock/5663666)) The stream method takes an output stream as input, and returns a wrapped stream that projects the input geometry; in other words, it implements [projection.stream](Geo-Projections#stream).

If *projection* is null, the path uses the identity transformation, where the input geometry is not projected and is instead rendered directly in raw coordinates. This can be useful for fast rendering of already-projected geometry, or for fast rendering of the equirectangular projection.

<a name="path_context" href="#path_context">#</a> path.<b>context</b>([<i>context</i>])

If *context* is specified, sets the render context and returns the path generator. If the context is null, then the path generator will return an SVG path string when [invoked](#_path) on a given feature. If the context is non-null, the path generator will instead call methods on the specified context to render geometry. The context must implement the following methods:

* beginPath()
* moveTo(x, y)
* lineTo(x, y)
* arc(x, y, radius, startAngle, endAngle)
* closePath()

Note that this is a subset of the canvas element’s [2D rendering context](http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html#2dcontext), and thus a canvas context can be passed to the path generator, in which case geometry will be rendered [directly to the canvas](http://bl.ocks.org/mbostock/3783604). If *context* is not specified, returns the current render context, which defaults to null.

<a name="path_area" href="#path_area">#</a> path.<b>area</b>(<i>feature</i>)

Computes the projected area (in square pixels) for the specified *feature*. Point, MultiPoint, LineString and MultiLineString features have zero area. For Polygon and MultiPolygon features, this method first computes the area of the exterior ring, and then subtracts the area of any interior holes. This method observes any clipping and resampling performed by the projection stream.

<a name="path_centroid" href="#path_centroid">#</a> path.<b>centroid</b>(<i>feature</i>)

Computes the projected centroid (in pixels) for the specified *feature*. This is handy for, say, labeling state or county boundaries, or displaying a symbol map. The [noncontiguous cartogram](http://mbostock.github.com/d3/ex/cartogram.html) example scales each state around its centroid. This method observes any clipping and resampling performed by the projection stream.

<a name="path_bounds" href="#path_bounds">#</a> path.<b>bounds</b>(<i>feature</i>)

Computes the projected bounding box (in pixels) for the specified *feature*. This is handy for, say, zooming in to a particular feature. This method observes any clipping and resampling performed by the projection stream.

<a name="path_pointRadius" href="#path_pointRadius">#</a> path.<b>pointRadius</b>([<i>radius</i>])

If *radius* is specified, sets the radius used to display Point and MultiPoint features to the specified number. If *radius* is not specified, returns the current radius. While the radius is commonly specified as a number constant, it may also be specified as a function which is computed per feature, being passed the *feature* and *index* arguments from the [path](Geo-Paths#_path) function. For example, if your GeoJSON data has additional properties, you might access those properties inside the radius function to vary the point size; alternatively, you could [d3.svg.symbol](SVG-Shapes#symbol) and a [projection](Geo-Projections) for more control over the display.

## Shape Generators

Note: to generate a great arc in D3, simply pass a LineString-type geometry object to d3.geo.path. D3’s projections use great-arc interpolation for intermediate points (with [adaptive resampling](http://bl.ocks.org/mbostock/3795544)), so there’s no need to use a shape generator to create great arcs.

<a name="graticule" href="#graticule">#</a> d3.geo.<b>graticule</b>

Constructs a feature generator for creating graticules.

<a name="_graticule" href="#_graticule">#</a> <b>graticule</b>()

Returns a MultiLineString geometry object representing all meridians and parallels for this graticule.

<a name="graticule_lines" href="#graticule_lines">#</a> graticule.<b>lines</b>()

Returns an array of LineString geometry objects, one for each meridian or parallel for this graticule.

<a name="graticule_outline" href="#graticule_outline">#</a> graticule.<b>outline</b>()

Returns a Polygon geometry object representing the outline of this graticule, i.e. along the meridians and parallels defining its extent.

<a name="graticule_extent" href="#graticule_extent">#</a> graticule.<b>extent</b>(<i>extent</i>)

If *extent* is specified, sets the major and minor extents of this graticule.  If *extent* is not specified, returns the current minor extent, which defaults to ⟨⟨-180°, -80° - ε⟩, ⟨180°, 80° + ε⟩⟩.

<a name="graticule_majorExtent" href="#graticule_majorExtent">#</a> graticule.<b>majorExtent</b>(<i>extent</i>)

If *extent* is specified, sets the major extent of this graticule.  If *extent* is not specified, returns the current major extent, which defaults to ⟨⟨-180°, -90° + ε⟩, ⟨180°, 90° - ε⟩⟩.

<a name="graticule_minorExtent" href="#graticule_minorExtent">#</a> graticule.<b>minorExtent</b>(<i>extent</i>)

If *extent* is specified, sets the minor extent of this graticule.  If *extent* is not specified, returns the current minor extent, which defaults to ⟨⟨-180°, -80° - ε⟩, ⟨180°, 80° + ε⟩⟩.

<a name="graticule_step" href="#graticule_step">#</a> graticule.<b>step</b>(<i>step</i>)

If *step* is specified, sets the major and minor step for this graticule.  If *step* is not specified, returns the current minor step, which defaults to ⟨10°, 10°⟩.

<a name="graticule_majorStep" href="#graticule_majorStep">#</a> graticule.<b>majorStep</b>(<i>step</i>)

If *step* is specified, sets the major step for this graticule.  If *step* is not specified, returns the current major step, which defaults to ⟨90°, 360°⟩.

<a name="graticule_minorStep" href="#graticule_minorStep">#</a> graticule.<b>minorStep</b>(<i>step</i>)

If *step* is specified, sets the minor step for this graticule.  If *step* is not specified, returns the current minor step, which defaults to ⟨10°, 10°⟩.

<a name="graticule_precision" href="#graticule_precision">#</a> graticule.<b>precision</b>(<i>precision</i>)

If *precision* is specified, sets the precision for this graticule, in degrees.  If *precision* is not specified, returns the current precision, which defaults to 2.5°.

<a name="circle" href="#circle">#</a> d3.geo.<b>circle</b>

Constructs a feature generator for creating circles centered at a given geographic location with a given radius in degrees.

<a name="_circle" href="#_circle">#</a> <b>circle</b>(<i>arguments…</i>)

Returns a GeoJSON Polygon approximating a circle. The origin accessor specifies how to determine the origin for the given *arguments*; the default accessor uses the constant ⟨0°,0°⟩.

<a name="circle_origin" href="#circle_origin">#</a> circle.<b>origin</b>([<i>origin</i>])

If *origin* is specified, sets the circle origin.  A two-element coordinate array should be specified, or an accessor function.  If *origin* is not specified, returns the current origin, which defaults to ⟨0°,0°⟩.

<a name="circle_angle" href="#circle_angle">#</a> circle.<b>angle</b>([<i>angle</i>])

If *angle* is specified, sets the angular radius of the circle in degrees.  If *angle* is not specified, returns the current radius, which defaults to 90°.

<a name="circle_precision" href="#circle_precision">#</a> circle.<b>precision</b>([<i>precision</i>])

If *precision* is specified, sets the precision of the interpolated circle segments in degrees.  These interpolated segments are inserted when a feature is clipped by the circle. If *precision* is not specified, returns the current precision, which defaults to 6°.

## Spherical Math

<a name="area" href="#area">#</a> d3.geo.<b>area</b>(<i>feature</i>)

Returns the spherical area of the specified *feature* in [steradians](http://mathworld.wolfram.com/Steradian.html). See also [path.area](#path_area), which computes the projected area on the Cartesian plane.

<a name="centroid" href="#centroid">#</a> d3.geo.<b>centroid</b>(<i>feature</i>)

Returns the spherical centroid of the specified *feature*. See also [path.centroid](#path_centroid), which computes the projected centroid on the Cartesian plane.

<a name="bounds" href="#bounds">#</a> d3.geo.<b>bounds</b>(<i>feature</i>)

Returns the spherical bounding box for the specified *feature*. The bounding box is represented by a two-dimensional array: [​[<i>left</i>, <i>bottom</i>], [<i>right</i>, <i>top</i>]​], where *left* is the minimum longitude, *bottom* is the minimum latitude, *right* is maximum longitude, and *top* is the maximum latitude. See also [path.bounds](#path_bounds), which computes the projected bounding box on the Cartesian plane.

<a name="distance" href="#distance">#</a> d3.geo.<b>distance</b>(<i>a</i>, <i>b</i>)

Returns the great-arc distance in radians between the two points <i>a</i> and <i>b</i>. Each point is specified as an array [<i>longitude</i>, <i>latitude</i>], with coordinates expressed in decimal degrees.

<a name="length" href="#length">#</a> d3.geo.<b>length</b>(<i>feature</i>)

Returns the great-arc length of the specified *feature* in [radians](http://mathworld.wolfram.com/Radian.html). For polygons, returns the perimeter of the exterior ring plus that of any interior rings.

<a name="interpolate" href="#interpolate">#</a> d3.geo.<b>interpolate</b>(<i>a</i>, <i>b</i>)

Returns an interpolator given the two locations *a* and *b*. Each location must be represented as a two-element array of [<i>longitude</i>, <i>latitude</i>]. The returned interpolator is a function which takes a single parameter *t* as input, where *t* ranges from 0 to 1. A value of 0 returns the location *a*, while a value of 1 returns the location *b*. Intermediate values interpolate from *a* to *b* along the spanning great arc.

<a name="rotation" href="#rotation">#</a> d3.geo.<b>rotation</b>(<i>rotate</i>)

Specifies a rotation in the form of an array, [λ, φ, γ]. The elements of the array are angles in degrees, and specify a rotation in the following order: longitudinal, latitudinal and about the origin. If the last element of the array, γ, is omitted, this defaults to 0.  Returns a function, which rotates a given location as described below.

<a name="_rotation" href="#_rotation">#</a> <b>rotation</b>(<i>location</i>)

Rotates a given location according to the angles specified for this rotation, in the order described above.  A location is specified as an array [<i>longitude</i>, <i>latitude</i>], with coordinates expressed in degrees.  Returns a new array representing the rotated location.

<a name="rotation_invert" href="#rotation_invert">#</a> rotation.<b>invert</b>(<i>location</i>)

Rotates a given location according to the angles specified for this rotation, but with the order described above reversed.  A location is specified as an array [<i>longitude</i>, <i>latitude</i>], with coordinates expressed in degrees.  Returns a new array representing the rotated location.
