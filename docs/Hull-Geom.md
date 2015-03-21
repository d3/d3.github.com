> [Wiki](Home) ▸ [[API Reference]] ▸ [[Geometry]] ▸ **Hull Geom**

<a name="hull" href="Hull-Geom#hull">#</a> d3.geom.<b>hull</b>()

<a href="http://bl.ocks.org/mbostock/4341699"><img src="http://bl.ocks.org/mbostock/raw/4341699/thumbnail.png" width="202"></a>

Create a new hull layout with the default *x*- and *y*-accessors.

<a name="_hull" href="Hull-Geom#_hull">#</a> <b>hull</b>(<i>vertices</i>)

Returns the convex hull for the specified *vertices* array, using the current x- and y-coordinate accessors. The returned convex hull is represented as an array containing a subset of the input vertices, arranged in counterclockwise order (for consistency with [polygon.clip](Polygon-Geom#clip)).

Assumes the *vertices* array is greater than three in length. If *vertices* is of length <= 3, returns [].

<a name="x" href="Hull-Geom#x">#</a> hull.<b>x</b>([<i>x</i>])

If *x* is specified, sets the x-coordinate accessor. If *x* is not specified, returns the current x-coordinate accessor, which defaults to:

```js
function(d) { return d[0]; }
```

<a name="y" href="Hull-Geom#y">#</a> hull.<b>y</b>([<i>y</i>])

If *y* is specified, sets the y-coordinate accessor. If *y* is not specified, returns the current y-coordinate accessor, which defaults to:

```js
function(d) { return d[1]; }
```