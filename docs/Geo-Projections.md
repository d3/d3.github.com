> [Wiki](Home) ▸ [[API Reference]] ▸ [[Geo]] ▸ **Geo Projections**

D3 includes several common projections by default, as shown below. Numerous (less-commonly used) projections are available in the [extended geographic projections plugin](https://github.com/d3/d3-geo-projection/) and the [polyhedral projection plugin](https://github.com/d3/d3-plugins/tree/master/geo/polyhedron).

<table class="highlight">
  <tr height="146" valign="top">
    <td>d3.geo.albersUsa<br><a href="http://bl.ocks.org/mbostock/4090848"><img src="http://bl.ocks.org/mbostock/raw/4090848/thumbnail.png" width="202"></a></td>
    <td>d3.geo.azimuthalEqualArea<br><a href="http://bl.ocks.org/mbostock/3757101"><img src="http://bl.ocks.org/mbostock/raw/3757101/thumbnail.png" width="202"></a></td>
    <td>d3.geo.azimuthalEquidistant<br><a href="http://bl.ocks.org/mbostock/3757110"><img src="http://bl.ocks.org/mbostock/raw/3757110/thumbnail.png" width="202"></a></td>
  </tr>
  <tr height="146" valign="top">
    <td>d3.geo.conicEqualArea<br><a href="http://bl.ocks.org/mbostock/3734308"><img src="http://bl.ocks.org/mbostock/raw/3734308/thumbnail.png" width="202"></a></td>
    <td>d3.geo.conicConformal<br><a href="http://bl.ocks.org/mbostock/3734321"><img src="http://bl.ocks.org/mbostock/raw/3734321/thumbnail.png" width="202"></a></td>
    <td>d3.geo.conicEquidistant<br><a href="http://bl.ocks.org/mbostock/3734317"><img src="http://bl.ocks.org/mbostock/raw/3734317/thumbnail.png" width="202"></a></td>
  </tr>
  <tr height="146" valign="top">
    <td>d3.geo.equirectangular<br><a href="http://bl.ocks.org/mbostock/3757119"><img src="http://bl.ocks.org/mbostock/raw/3757119/thumbnail.png" width="202"></a></td>
    <td>d3.geo.gnomonic<br><a href="http://bl.ocks.org/mbostock/3757349"><img src="http://bl.ocks.org/mbostock/raw/3757349/thumbnail.png" width="202"></a></td>
    <td>d3.geo.mercator<br><a href="http://bl.ocks.org/mbostock/3757132"><img src="http://bl.ocks.org/mbostock/raw/3757132/thumbnail.png" width="202"></a></td>
  </tr>
  <tr height="146" valign="top">
    <td>d3.geo.orthographic<br><a href="http://bl.ocks.org/mbostock/3757125"><img src="http://bl.ocks.org/mbostock/raw/3757125/thumbnail.png" width="202"></a></td>
    <td>d3.geo.stereographic<br><a href="http://bl.ocks.org/mbostock/3757137"><img src="http://bl.ocks.org/mbostock/raw/3757137/thumbnail.png" width="202"></a></td>
    <td>d3.geo.transverseMercator<br><a href="http://bl.ocks.org/mbostock/5126418"><img src="http://bl.ocks.org/mbostock/raw/5126418/thumbnail.png" width="202"></a></td>
  </tr>
</table>

## Standard Abstract Projection

Most projections provided by D3 are created via d3.geo.projection and are configurable: you can rotate the globe, scale or transform the canvas, etc. Unless you’re implementing a new raw projection, you probably won’t use the d3.geo.projection constructor, but you are likely to use the configuration methods.

<a name="projection" href="#projection">#</a> d3.geo.<b>projection</b>(<i>raw</i>)

Constructs a new projection from the specified *raw* point projection function. For example, a Mercator projection can be implemented as:

```js
var mercator = d3.geo.projection(function(λ, φ) {
  return [
    λ,
    Math.log(Math.tan(π / 4 + φ / 2))
  ];
});
```

(See [src/geo/mercator.js](/mbostock/d3/blob/master/src/geo/mercator.js) for the full implementation.) If the raw function supports an *invert* method, then the returned projection will expose a corresponding [invert](#invert) method.

<a name="_projection" href="#_projection">#</a> <b>projection</b>(<i>location</i>)

Projects forward from spherical coordinates (in degrees) to Cartesian coordinates (in pixels). Returns an array [<i>x</i>, <i>y</i>] given the input array [<i>longitude</i>, <i>latitude</i>]. May return null if the specified *location* has no defined projected position, such as when the location is outside the clipping bounds of the projection.

<a name="invert" href="#invert">#</a> projection.<b>invert</b>(<i>point</i>)

Projects backward from Cartesian coordinates (in pixels) to spherical coordinates (in degrees). Returns an array [<i>longitude</i>, <i>latitude</i>] given the input array [<i>x</i>, <i>y</i>]. Not all projections implement *invert*; for noninvertible projections, this method is undefined.

<a name="rotate" href="#rotate">#</a> projection.<b>rotate</b>([<i>rotation</i>])

If *rotation* is specified, sets the projection’s [three-axis rotation](http://bl.ocks.org/mbostock/4282586) to the specified angles λ, φ and γ ([yaw, pitch and roll](http://en.wikipedia.org/wiki/Aircraft_principal_axes), or equivalently [longitude, latitude](http://en.wikipedia.org/wiki/Geographic_coordinate_system) and roll) in degrees and returns the projection. If *rotation* is not specified, returns the current rotation which defaults [0, 0, 0]. If the specified *rotation* has only two values, rather than three, the roll is assumed to be 0°.

<a name="center" href="#center">#</a> projection.<b>center</b>([<i>location</i>])

If *center* is specified, sets the projection’s center to the specified *location*, a two-element array of longitude and latitude in degrees and returns the projection. If *center* is not specified, returns the current center which defaults to ⟨0°,0°⟩.

<a name="translate" href="#translate">#</a> projection.<b>translate</b>([<i>point</i>])

If *point* is specified, sets the projection’s translation offset to the specified two-element array [<i>x</i>, <i>y</i>] and returns the projection. If *point* is not specified, returns the current translation offset which defaults to [480, 250]. The translation offset determines the pixel coordinates of the projection’s [center](#center). The default translation offset places ⟨0°,0°⟩ at the center of a 960×500 area.

<a name="scale" href="#scale">#</a> projection.<b>scale</b>([<i>scale</i>])

If *scale* is specified, sets the projection’s scale factor to the specified value and returns the projection. If *scale* is not specified, returns the current scale factor which defaults to 150. The scale factor corresponds linearly to the distance between projected points. However, scale factors are not consistent across projections.

<a name="clipAngle" href="#clipAngle">#</a> projection.<b>clipAngle</b>(<i>angle</i>)

If *angle* is specified, sets the projection’s clipping circle radius to the specified angle in degrees and returns the projection. If *angle* is null, switches to [antimeridian cutting](http://bl.ocks.org/mbostock/3788999) rather than small-circle clipping. If *angle* is not specified, returns the current clip angle which defaults to null. Small-circle clipping is independent of viewport clipping via [clipExtent](#clipExtent).

<a name="clipExtent" href="#clipExtent">#</a> projection.<b>clipExtent</b>(<i>extent</i>)

If *extent* is specified, sets the projection’s viewport clip extent to the specified bounds in pixels and returns the projection. The *extent* bounds are specified as an array [​[<i>x0</i>, <i>y0</i>], [<i>x1</i>, <i>y1</i>]​], where <i>x0</i> is the left-side of the viewport, <i>y0</i> is the top, <i>x1</i> is the right and <i>y1</i> is the bottom. If *extent* is null, no viewport clipping is performed. If *extent* is not specified, returns the current viewport clip extent which defaults to null. Viewport clipping is independent of small-circle clipping via [clipAngle](#clipAngle).

<a name="precision" href="#precision">#</a> projection.<b>precision</b>(<i>precision</i>)

If *precision* is specified, sets the threshold for the projection’s [adaptive resampling](http://bl.ocks.org/mbostock/3795544) to the specified value in pixels and returns the projection. This value corresponds to the [Douglas–Peucker](http://en.wikipedia.org/wiki/Ramer–Douglas–Peucker_algorithm) distance. If *precision* is not specified, returns the projection’s current resampling precision which defaults to `Math.SQRT(1/2)`.

A *precision* of `0` disables adaptive resampling.

<a name="stream" href="#stream">#</a> projection.<b>stream</b>(<i>listener</i>)

Returns a projecting [stream](Geo-Streams) wrapper for the specified *listener*. Any geometry streamed to the wrapper is projected before being streamed to the wrapped listener. A typical projection involves several stream transformations: the input geometry is first converted to radians, rotated on three axes, clipped to the small circle or cut along the antimeridian, and lastly projected to the Cartesian plane with adaptive resampling, scale and translation.

<a name="projectionMutator" href="#projectionMutator">#</a> d3.geo.<b>projectionMutator</b>(<i>rawFactory</i>)

Constructs a new projection from the specified *raw* point projection function *factory*. This function does not return the projection directly, but instead returns a *mutate* method that you can call whenever the raw projection function changes. For example, say you’re implementing the Albers equal-area conic projection, which requires configuring the projection's two parallels. Using closures, you can implement the raw projection as follows:

```js
// φ0 and φ1 are the two parallels
function albersRaw(φ0, φ1) {
  return function(λ, φ) {
    return [
      /* compute x here */,
      /* compute y here */
    ];
  };
}
```

Using d3.geo.projectionMutator, you can implement a standard projection that allows the parallels to be changed, reassigning the raw projection used internally by d3.geo.projection:

```js
function albers() {
  var φ0 = 29.5,
      φ1 = 45.5,
      mutate = d3.geo.projectionMutator(albersRaw),
      projection = mutate(φ0, φ1);

  projection.parallels = function(_) {
    if (!arguments.length) return [φ0, φ1];
    return mutate(φ0 = +_[0], φ1 = +_[1]);
  };

  return projection;
}
```

Thus, when creating a mutable projection, the *mutate* function is never exposed, but can be used to recreate the underlying raw projection easily. For the full implementation, see [src/geo/albers.js](/mbostock/d3/blob/master/src/geo/albers.js).

## Standard Projections

<a name="albers" href="#albers">#</a> d3.geo.<b>albers</b>()

An alias for [d3.geo.conicEqualArea](#conicEqualArea), with USA-centric defaults: scale 1000, translate [480, 250], rotation [96°, 0°], center ⟨-0.6°, 38.7°⟩ and parallels [29.5°, 45.5°], making it suitable for displaying the United States, centered around [Hutchinson, Kansas](https://maps.google.com/maps?q=Hutchinson,+Kansas&z=5) in a 960×500 area. The central meridian and parallels are specified by the [USGS](http://www.usgs.gov/) in the 1970 [National Atlas](http://www.nationalatlas.gov/).

<a name="albersUsa" href="#albersUsa">#</a> d3.geo.<b>albersUsa</b>()

<a href="http://bl.ocks.org/mbostock/4090848"><img src="http://bl.ocks.org/mbostock/raw/4090848/thumbnail.png" width="202"></a>

The Albers USA projection is a composite projection of four Albers projections designed to display the forty-eight lower United States alongside Alaska and Hawaii. Although intended for choropleths, it scales the area of Alaska by a factor of 0.35x (a <i>lie factor</i> of 3); Hawaii is shown at the same scale as the lower forty-eight.

The Albers USA projection does not support rotation or centering.

<a name="azimuthalEqualArea" href="#azimuthalEqualArea">#</a> d3.geo.<b>azimuthalEqualArea</b>()

<a href="http://bl.ocks.org/mbostock/3757101"><img src="http://bl.ocks.org/mbostock/raw/3757101/thumbnail.png" width="202"></a>

The azimuthal equal-area projection is also suitable for choropleths. A [polar aspect](http://bl.ocks.org/mbostock/4364903) of this projection is used for the United Nations logo.

<a name="azimuthalEquidistant" href="#azimuthalEquidistant">#</a> d3.geo.<b>azimuthalEquidistant</b>()

<a href="http://bl.ocks.org/mbostock/3757110"><img src="http://bl.ocks.org/mbostock/raw/3757110/thumbnail.png" width="202"></a>

The azimuthal equidistant projection preserves distances from the projection’s center: the distance from any projected point to the projection’s center is proportional to the great arc distance. Thus, circles around the projection’s center are projected to circles on the Cartesian plane. This can be useful for visualizing distances relative to a point of reference, such as commute distances.

<a name="conicConformal" href="#conicConformal">#</a> d3.geo.<b>conicConformal</b>()

<a href="http://bl.ocks.org/mbostock/3734321"><img src="http://bl.ocks.org/mbostock/raw/3734321/thumbnail.png" width="202"></a>
<a href="http://bl.ocks.org/mbostock/9764521"><img src="http://bl.ocks.org/mbostock/raw/9764521/thumbnail.png" width="202"></a>

Lambert’s conformal conic projection projects the globe conformally onto a cone.

<a name="conicConformal_parallels" href="#conicConformal_parallels">#</a> conicConformal.<b>parallels</b>([<i>parallels</i>])

If *parallels* is specified, sets the projection’s standard parallels to the specified two-element array of latitudes (in degrees) and returns the projection. If *parallels* is not specified, returns the current parallels.

<a name="conicEqualArea" href="#conicEqualArea">#</a> d3.geo.<b>conicEqualArea</b>()

<a href="http://bl.ocks.org/mbostock/3734308"><img src="http://bl.ocks.org/mbostock/raw/3734308/thumbnail.png" width="202"></a>

The Albers projection, as an [equal-area](http://en.wikipedia.org/wiki/Map_projection#Equal-area) projection, is recommended for [choropleths](http://mbostock.github.com/d3/ex/choropleth.html) as it preserves the relative areas of geographic features.

<a name="conicEqualArea_parallels" href="#conicEqualArea_parallels">#</a> conicEqualArea.<b>parallels</b>([<i>parallels</i>])

If *parallels* is specified, sets the Albers projection’s standard parallels to the specified two-element array of latitudes (in degrees) and returns the projection. If *parallels* is not specified, returns the current parallels. To minimize distortion, the parallels should be chosen to surround the projection’s [center](#center).

<a name="conicEquidistant" href="#conicEquidistant">#</a> d3.geo.<b>conicEquidistant</b>()

<a href="http://bl.ocks.org/mbostock/3734317"><img src="http://bl.ocks.org/mbostock/raw/3734317/thumbnail.png" width="202"></a>

<a name="conicEquidistant_parallels" href="#conicEquidistant_parallels">#</a> conicEquidistant.<b>parallels</b>([<i>parallels</i>])

If *parallels* is specified, sets the projection’s standard parallels to the specified two-element array of latitudes (in degrees) and returns the projection. If *parallels* is not specified, returns the current parallels.

<a name="equirectangular" href="#equirectangular">#</a> d3.geo.<b>equirectangular</b>()

<a href="http://bl.ocks.org/mbostock/3757119"><img src="http://bl.ocks.org/mbostock/raw/3757119/thumbnail.png" width="202"></a>

The equirectangular, or plate carrée projection, is the simplest possible geographic projection: the identity function. It is neither equal-area nor conformal, but is sometimes used for raster data. See [raster reprojection](http://bl.ocks.org/mbostock/4329423) for an example; the source image uses the equirectangular projection.

<a name="gnomonic" href="#gnomonic">#</a> d3.geo.<b>gnomonic</b>()

<a href="http://bl.ocks.org/mbostock/3757349"><img src="http://bl.ocks.org/mbostock/raw/3757349/thumbnail.png" width="202"></a>

The gnomonic projection is an azimuthal projection that projects great circles as straight lines. See the [interactive gnomonic](http://bl.ocks.org/mbostock/3795048) for an example.

<a name="mercator" href="#mercator">#</a> d3.geo.<b>mercator</b>()

<a href="http://bl.ocks.org/mbostock/3757132"><img src="http://bl.ocks.org/mbostock/raw/3757132/thumbnail.png" width="202"></a>

The spherical Mercator projection is commonly used by tiled mapping libraries (such as [OpenLayers](http://openlayers.org/) and [Leaflet](http://leafletjs.com)). For an example displaying raster tiles with the Mercator projection, see the [d3.geo.tile plugin](http://bl.ocks.org/mbostock/4150951). It is [conformal](http://en.wikipedia.org/wiki/Map_projection#Conformal); however, it introduces severe area distortion at world scale and thus is not recommended for choropleths.

<a name="orthographic" href="#orthographic">#</a> d3.geo.<b>orthographic</b>()

<a href="http://bl.ocks.org/mbostock/3757125"><img src="http://bl.ocks.org/mbostock/raw/3757125/thumbnail.png" width="202"></a>

The orthographic projection is an azimuthal projection suitable for displaying a single hemisphere; the point of perspective is at infinity. See the [animated world tour](http://bl.ocks.org/mbostock/4183330) and [interactive orthographic](http://bl.ocks.org/mbostock/3795040) for examples. For a general perspective projection, see the [satellite projection](http://bl.ocks.org/mbostock/3790444).

<a name="stereographic" href="#stereographic">#</a> d3.geo.<b>stereographic</b>()

<a href="http://bl.ocks.org/mbostock/3757137"><img src="http://bl.ocks.org/mbostock/raw/3757137/thumbnail.png" width="202"></a>

The stereographic projection is another perspective (azimuthal) projection. The point of perspective is on the surface of the sphere, looking in; it is thus commonly used for celestial charts. See the [interactive stereographic](http://bl.ocks.org/mbostock/3763057) for an example.

<a name="transverseMercator" href="#transverseMercator">#</a> d3.geo.<b>transverseMercator</b>()

<a href="http://bl.ocks.org/mbostock/5126418"><img src="http://bl.ocks.org/mbostock/raw/5126418/thumbnail.png" width="202"></a>
<a href="http://bl.ocks.org/mbostock/4695821"><img src="http://bl.ocks.org/mbostock/raw/4695821/thumbnail.png" width="202"></a>

The transverse Mercator projection.

## Raw Projections

D3 exposes several raw projections, designed for reuse when implementing a composite projection (such as [Sinu–Mollweide](http://bl.ocks.org/mbostock/4319903), which combines the raw [sinusoidal](http://bl.ocks.org/mbostock/3712399) and [Mollweide](http://bl.ocks.org/mbostock/3734336) projections). Raw projections are typically wrapped using [d3.geo.projection](#projection) before use. These are point functions that take spherical coordinates λ and φ (in radians) as input and return a two-element array (also in radians) as output. Many raw projections also implement an inverse projection for mapping from planar to spherical coordinates.

<a name="albers_raw" href="#albers_raw">#</a> d3.geo.albers.<b>raw</b>(φ<sub>0</sub>, φ<sub>1</sub>)

An alias for [d3.geo.conicEqualArea.raw](#conicEqualArea_raw).

<a name="azimuthalEqualArea_raw" href="#azimuthalEqualArea_raw">#</a> d3.geo.azimuthalEqualArea.<b>raw</b>

The raw [azimuthal equal-area projection](#azimuthalEqualArea).

<a name="azimuthalEquidistant_raw" href="#azimuthalEquidistant_raw">#</a> d3.geo.azimuthalEquidistant.<b>raw</b>

The raw [azimuthal equidistant projection](#azimuthalEquidistant).

<a name="conicConformal_raw" href="#conicConformal_raw">#</a> d3.geo.conicConformal.<b>raw</b>(φ<sub>0</sub>, φ<sub>1</sub>)

Returns a raw [conformal conic projection](#conicConformal) with the specified parallels in radians.

<a name="conicEqualArea_raw" href="#conicEqualArea_raw">#</a> d3.geo.conicEqualArea.<b>raw</b>(φ<sub>0</sub>, φ<sub>1</sub>)

Returns a raw [Albers projection](#conicEqualArea) with the specified parallels in radians.

<a name="conicEquidistant_raw" href="#conicEquidistant_raw">#</a> d3.geo.conicEquidistant.<b>raw</b>(φ<sub>0</sub>, φ<sub>1</sub>)

Returns a raw [equidistant conic projection](#conicEquidistant) with the specified parallels in radians.

<a name="equirectangular_raw" href="#equirectangular_raw">#</a> d3.geo.equirectangular.<b>raw</b>

The raw [equirectangular projection](#equirectangular).

<a name="gnomonic_raw" href="#gnomonic_raw">#</a> d3.geo.gnomonic.<b>raw</b>

The raw [gnomonic projection](#gnomonic).

<a name="mercator_raw" href="#mercator_raw">#</a> d3.geo.mercator.<b>raw</b>

The raw [Mercator projection](#mercator).

<a name="orthographic_raw" href="#orthographic_raw">#</a> d3.geo.orthographic.<b>raw</b>

The raw [orthographic projection](#orthographic).

<a name="stereographic_raw" href="#stereographic_raw">#</a> d3.geo.stereographic.<b>raw</b>

The raw [stereographic projection](#stereographic).