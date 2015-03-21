> [Wiki](Home) ▸ [[API Reference]] ▸ [[Layouts]] ▸ [Hierarchy](Hierarchy-Layout) ▸ **Pack Layout**

Enclosure diagrams use containment (nesting) to represent the hierarchy. The size of each leaf node’s circle reveals a quantitative dimension of each data point. The enclosing circles show the approximate cumulative size of each subtree, but note that because of wasted space there is some distortion between levels; only the leaf nodes can be compared accurately. Although [circle packing](http://en.wikipedia.org/wiki/Circle_packing) does not use space as efficiently as a [[treemap|Treemap-Layout]], the “wasted” space more prominently reveals the hierarchy.

[![pack](pack.png)](http://bl.ocks.org/mbostock/4063530)

By flattening the hierarchy, the **pack layout** can also be used to create [bubble charts](http://www-958.ibm.com/software/data/cognos/manyeyes/page/Bubble_Chart.html):

[![bubble](bubble.png)](http://bl.ocks.org/mbostock/4063269)

Like other classes in D3, layouts follow the method chaining pattern where setter methods return the layout itself, allowing multiple setters to be invoked in a concise statement.

<a name="pack" href="#pack">#</a> d3.layout.<b>pack</b>()

Creates a new pack layout with the default settings: the default sort order is by ascending value; the default children accessor assumes each input data is an object with a children array; the default size is 1×1.

<a name="_pack" href="#_pack">#</a> <b>pack</b>(<i>root</i>)
<br><a name="nodes" href="#nodes">#</a> pack.<b>nodes</b>(<i>root</i>)

Runs the pack layout, returning the array of nodes associated with the specified *root* node. The cluster layout is part of D3's family of [hierarchical layouts](Hierarchy-Layout). These layouts follow the same basic structure: the input argument to the layout is the *root* node of the hierarchy, and the output return value is an array representing the computed positions of all nodes.  Several attributes are populated on each node:

* parent - the parent node, or null for the root.
* children - the array of child nodes, or null for leaf nodes.
* value - the node value, as returned by the value accessor.
* depth - the depth of the node, starting at 0 for the root.
* x - the computed *x*-coordinate of the node position.
* y - the computed *y*-coordinate of the node position.
* r - the computed node radius.

<a name="links" href="#links">#</a> pack.<b>links</b>(<i>nodes</i>)

Given the specified array of *nodes*, such as those returned by [nodes](Pack-Layout#nodes), returns an array of objects representing the links from parent to child for each node. Leaf nodes will not have any links. Each link is an object with two attributes:

* source - the parent node (as described above).
* target - the child node.

This method is useful for retrieving a set of link descriptions suitable for display, often in conjunction with the [diagonal](SVG-Shapes#diagonal) shape generator. For example:

```javascript
svg.selectAll("path")
    .data(cluster.links(nodes))
  .enter().append("path")
    .attr("d", d3.svg.diagonal());
```

<a name="children" href="#children">#</a> pack.<b>children</b>([<i>children</i>])

If *children* is specified, sets the specified children accessor function. If *children* is not specified, returns the current children accessor function, which by default assumes that the input data is an object with a children array:

```javascript
function children(d) {
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

The children accessor is first invoked for root node in the hierarchy. If the accessor returns null, then the node is assumed to be a leaf node and the layout traversal terminates. Otherwise, the accessor should return an array of data elements representing the child nodes.

<a name="sort" href="#sort">#</a> pack.<b>sort</b>([<i>comparator</i>])

If *comparator* is specified, sets the sort order of sibling nodes for the layout using the specified comparator function.  If *comparator* is not specified, returns the current group sort order, which defaults to ascending order by the associated input data's numeric value attribute:

```javascript
function comparator(a, b) {
  return a.value - b.value;
}
```

The comparator function is invoked for pairs of nodes, being passed the input data for each node. A null comparator disables sorting and uses tree traversal order. Comparator functions may also be implemented using [d3.ascending](Arrays#d3_ascending) or [d3.descending](Arrays#d3_descending).

<a name="value" href="#value">#</a> pack.<b>value</b>([<i>value</i>])

If *value* is specified, sets the value accessor to the specified function. If *value* is not specified, returns the current value accessor, which assumes that the input data is an object with a numeric value attribute:

```javascript
function value(d) {
  return d.value;
}
```

The value accessor is invoked for each input data element, and must return a number representing the numeric value of the node. This value is used to set the area of each circle proportionally to the value. However, note that circle size is strictly comparable only between leaf nodes; internal nodes cannot be compared accurately, as there is empty space between packed child circles and their parent.

<a name="size" href="#size">#</a> pack.<b>size</b>([<i>size</i>])

If *size* is specified, sets the available layout size to the specified two-element array of numbers representing *x* and *y*. If *size* is not specified, returns the current size, which defaults to 1×1.

<a name="radius" href="#radius">#</a> pack.<b>radius</b>([<i>radius</i>])

If *radius* is specified, sets the radius function for computing the radius of each node. If *radius* is null,  as it is by default, the radius is determined automatically from the node value, scaled to fit the layout size. If *radius* is not specified, returns the current radius function, which defaults to null. The *radius* can also be specified as a constant number for uniform circle size.

<a name="padding" href="#padding">#</a> pack.<b>padding</b>([<i>padding</i>])

If *padding* is specified, sets the approximate padding between adjacent circles, in pixels. If *padding* is not specified, returns the current padding, which defaults to zero.
