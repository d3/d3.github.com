> [Wiki](Home) ▸ [[API Reference]] ▸ [[Layouts]] ▸ [Hierarchy](Hierarchy-Layout) ▸ **Treemap Layout**

Introduced by [Ben Shneiderman](http://www.cs.umd.edu/hcil/treemap-history/) in 1991, a **treemap** recursively subdivides area into rectangles. As with [adjacency diagrams](Partition-Layout), the size of any node in the tree is quickly revealed. “Squarified” treemaps use approximately-square rectangles, which offer better readability and size estimation than naïve “slice-and-dice” subdivision. Fancier algorithms such as [Voronoi](http://portal.acm.org/citation.cfm?id=1056018.1056041) and [jigsaw](http://hint.fm/papers/158-wattenberg-final3.pdf) treemaps also exist but are less common.

[![treemap](treemap.png)](http://bl.ocks.org/mbostock/4063582)

Like other classes in D3, layouts follow the method chaining pattern where setter methods return the layout itself, allowing multiple setters to be invoked in a concise statement.

<a name="treemap" href="#treemap">#</a> d3.layout.<b>treemap</b>()

Creates a new treemap layout with the default settings: the default sort order is by descending value; the default value accessor assumes each input data is an object with a numeric value attribute; the default children accessor assumes each input data is an object with a children array; the default size is 1×1.

<a name="_treemap" href="#_treemap">#</a> <b>treemap</b>(<i>root</i>)
<br><a name="nodes" href="#nodes">#</a> treemap.<b>nodes</b>(<i>root</i>)

Runs the treemap layout, returning the array of nodes associated with the specified *root* node. The treemap layout is part of D3's family of [hierarchical layouts](Hierarchy-Layout). These layouts follow the same basic structure: the input argument to the layout is the root node of the hierarchy, and the output return value is an array representing the computed positions of all nodes. Several attributes are populated on each node:

* parent - the parent node, or null for the root.
* children - the array of child nodes, or null for leaf nodes.
* value - the node value, as returned by the value accessor.
* depth - the depth of the node, starting at 0 for the root.
* x - the minimum *x*-coordinate of the node position.
* y - the minimum *y*-coordinate of the node position.
* dx - the *x*-extent of the node position.
* dy - the *y*-extent of the node position.

Note that this will modify the nodes that you pass in!

Although the layout has a size in *x* and *y*, this represents an arbitrary coordinate system; for example, you can treat *x* as a radius and *y* as an angle to produce a radial rather than Cartesian layout. In Cartesian orientation, *x*, *y*, *dx* and *dy* correspond to the "x", "y", "width" and "height" attributes of the SVG [[rect|SVG-Shapes#svg_rect]] element.

<a name="links" href="#links">#</a> treemap.<b>links</b>(<i>nodes</i>)

Given the specified array of *nodes*, such as those returned by [nodes](Treemap-Layout#nodes), returns an array of objects representing the links from parent to child for each node. Leaf nodes will not have any links. Each link is an object with two attributes:

* source - the parent node (as described above).
* target - the child node.

This method is useful for retrieving a set of link descriptions suitable for display, often in conjunction with the [diagonal](SVG-Shapes#diagonal) shape generator. For example:

```javascript
svg.selectAll("path")
    .data(partition.links(nodes))
  .enter().append("path")
    .attr("d", d3.svg.diagonal());
```

<a name="children" href="#children">#</a> treemap.<b>children</b>([<i>children</i>])

If *children* is specified, sets the specified children accessor function. If *children* is not specified, returns the current children accessor function, which by default assumes that the input data is an object with a children array:

```javascript
function children(d, depth) {
  return d.children;
}
```

Often, it is convenient to load the node hierarchy using [d3.json](Requests#d3_json), and represent the input hierarchy as a nested [JSON](http://json.org) object. For example:

```javascript
{
 "name": "flare",
 "children": [
  {
   "name": "analytics",
   "children": [
    {
     "name": "cluster",
     "children": [
      {"name": "AgglomerativeCluster", "size": 3938},
      {"name": "CommunityStructure", "size": 3812},
      {"name": "MergeEdge", "size": 743}
     ]
    },
    {
     "name": "graph",
     "children": [
      {"name": "BetweennessCentrality", "size": 3534},
      {"name": "LinkDistance", "size": 5731}
     ]
    }
   ]
  }
 ]
}
```

The children accessor is first invoked for root node in the hierarchy. If the accessor returns null, then the node is assumed to be a leaf node at the layout traversal terminates. Otherwise, the accessor should return an array of data elements representing the child nodes.

<a name="sort" href="#sort">#</a> treemap.<b>sort</b>([<i>comparator</i>])

If *comparator* is specified, sets the sort order of sibling nodes for the layout using the specified comparator function.  If *comparator* is not specified, returns the current group sort order, which defaults to descending order by the associated input data's numeric value attribute:

```javascript
function comparator(a, b) {
  return b.value - a.value;
}
```

The comparator function is invoked for pairs of nodes, being passed the input data for each node. A null comparator disables sorting and uses tree traversal order. Comparator functions may also be implemented using [d3.ascending](Arrays#d3_ascending) or [d3.descending](Arrays#d3_descending).

<a name="value" href="#value">#</a> treemap.<b>value</b>([<i>value</i>])

If *value* is specified, sets the value accessor to the specified function. If *value* is not specified, returns the current value accessor, which assumes that the input data is an object with a numeric value attribute:

```javascript
function value(d) {
  return d.value;
}
```

The value accessor is invoked for each input data element, and must return a number representing the numeric value of the node. This value is used to set the area of each node proportionally to the value.

<a name="size" href="#size">#</a> treemap.<b>size</b>([<i>size</i>])

If *size* is specified, sets the available layout size to the specified two-element array of numbers representing *x* and *y*. If *size* is not specified, returns the current size, which defaults to 1×1.

<a name="padding" href="#padding">#</a> treemap.<b>padding</b>([<i>padding</i>])

Get or set the padding for each treemap cell, in pixels. The padding determines the amount of extra space to reserve between the parent and its children; this space can be used to indicate the hierarchy through enclosure, or to reserve space for parent labels. If no padding is used, then the leaves of the tree will completely fill the layout's size.

If *padding* is specified, sets the new padding and returns the treemap layout; if *padding* is not specified, returns the current padding. The padding may be specified several ways:

* A null value disables padding; null is equivalent to zero.
* A number indicates uniform padding, in pixels, on all four sides.
* An array of numbers indicates the top, right, bottom and left padding values.

The padding may also be specified as a function which returns one of the three above values. This function is evaluated for each internal (non-leaf) node, and can be used to compute padding dynamically.

<a name="round" href="#round">#</a> treemap.<b>round</b>([<i>round</i>])

If *round* is specified, sets whether or not the treemap layout will round to exact pixel boundaries. This can be nice to avoid antialiasing artifacts in SVG. If *round* is not specified, returns whether the treemap will be rounded.

<a name="sticky" href="#sticky">#</a> treemap.<b>sticky</b>([<i>sticky</i>])

If *sticky* is specified, sets whether or not the treemap layout is "sticky": a *sticky* treemap layout will preserve the relative arrangement of nodes across transitions. The allocation of nodes into squarified horizontal and vertical rows is persisted across updates by storing a *z* attribute on the last element in each row; this allows nodes to be resized smoothly, without shuffling or occlusion that would impede perception of changing values. Note, however, that this results in a suboptimal layout for one of the two states. If *sticky* is not specified, returns whether the treemap layout is sticky.

Implementation note: sticky treemaps cache the array of nodes internally; therefore, it is not possible to reuse the same layout instance on multiple datasets. To reset the cached state when switching datasets with a sticky layout, call sticky(true) again. Since version [1.25.0](https://github.com/mbostock/d3/tree/v1.25.0), hierarchy layouts no longer copy the input data by default on each invocation, so it may be possible to eliminate caching and make the layout fully stateless.

<a name="mode" href="#mode">#</a> treemap.<b>mode</b>([<i>mode</i>])

If *mode* is specified, sets the layout algorithm. If *mode* is not specified, returns the current layout algorithm, which defaults to "squarify". The following modes are supported:

* squarify - rectangular subdivision; squareness controlled via the target [ratio](#ratio).
* slice - horizontal subdivision.
* dice - vertical subdivision.
* slice-dice - alternating between horizontal and vertical subdivision.

<a name="ratio" href="#ratio">#</a> treemap.<b>ratio</b>([<i>ratio</i>])

If *ratio* is specified, sets the layout ratio. If *ratio* is not specified, returns the current layout ratio, which defaults to `.5 * (1 + Math.sqrt(5))`