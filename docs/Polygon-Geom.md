> [Wiki](Home) ▸ [[API Reference]] ▸ [[Geometry]] ▸ **Polygon Geom**

<a name="polygon" href="Polygon-Geom#polygon">#</a> d3.geom.<b>polygon</b>(<i>vertices</i>)

Returns the input array of vertices with additional methods attached, as described below.

<a name="area" href="Polygon-Geom#area">#</a> polygon.<b>area</b>()

Returns the signed area of this polygon. If the vertices are in counterclockwise order, the area is positive, otherwise it is negative.

<a name="centroid" href="Polygon-Geom#centroid">#</a> polygon.<b>centroid</b>()

Returns a two-element array representing the centroid of this polygon.

<a name="clip" href="Polygon-Geom#clip">#</a> polygon.<b>clip</b>(<i>subject</i>)

Clips the *subject* polygon against this polygon. In other words, returns a polygon representing the intersection of this polygon and the *subject* polygon. Assumes the clip polygon is counterclockwise and convex.