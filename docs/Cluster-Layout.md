> [Wiki](Home) ▸ [[API Reference]] ▸ [[Layouts]] ▸ [Hierarchy](Hierarchy-Layout) ▸ **Cluster Layout**

The **cluster layout** produces [dendrograms](http://en.wikipedia.org/wiki/Dendrogram): node-link diagrams that place leaf nodes of the tree at the same depth. For example, a cluster layout can be used to organize software classes in a package hierarchy:

[![cluster](cluster.png)](http://mbostock.github.com/d3/ex/cluster.html)

Like other classes in D3, layouts follow the method chaining pattern where setter methods return the layout itself, allowing multiple setters to be invoked in a concise statement.

<a name="cluster" href="#cluster">#</a> d3.layout.<b>cluster</b>()

Creates a new cluster layout with the default settings: the default sort order is null; the default children accessor assumes each input data is an object with a children array; the default separation function uses one node width for siblings, and two node widths for non-siblings; the default size is 1×1.

<a name="_cluster" href="#_cluster">#</a> <b>cluster</b>(<i>root</i>)
<br><a name="nodes" href="#nodes">#</a> cluster.<b>nodes</b>(<i>root</i>)

Runs the cluster layout, returning the array of nodes associated with the specified *root* node. The cluster layout is part of D3's family of [[hierarchical|Hierarchy-Layout]] layouts. These layouts follow the same basic structure: the input argument to the layout is the *root* node of the hierarchy, and the output return value is an array representing the computed positions of all nodes. Several attributes are populated on each node:

* parent - the parent node, or null for the root.
* children - the array of child nodes, or null for leaf nodes.
* depth - the depth of the node, starting at 0 for the root.
* x - the computed *x*-coordinate of the node position.
* y - the computed *y*-coordinate of the node position.

Although the layout has a size in *x* and *y*, this represents an arbitrary coordinate system; for example, you can treat *x* as a radius and *y* as an angle to produce a radial rather than Cartesian layout.

<a name="links" href="#links">#</a> cluster.<b>links</b>(<i>nodes</i>)

Given the specified array of *nodes*, such as those returned by [nodes](Cluster-Layout#nodes), returns an array of objects representing the links from parent to child for each node. Leaf nodes will not have any links. Each link is an object with two attributes:

* source - the parent node (as described above).
* target - the child node.

This method is useful for retrieving a set of link descriptions suitable for display, often in conjunction with the [diagonal](SVG-Shapes#diagonal) shape generator. For example:

```javascript
svg.selectAll("path")
    .data(cluster.links(nodes))
  .enter().append("path")
    .attr("d", d3.svg.diagonal());
```

<a name="children" href="#children">#</a> cluster.<b>children</b>([<i>children</i>])

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

The children accessor is first invoked for root node in the hierarchy. If the accessor returns null, then the node is assumed to be a leaf node at the layout traversal terminates. Otherwise, the accessor should return an array of data elements representing the child nodes.

<a name="sort" href="#sort">#</a> cluster.<b>sort</b>([<i>comparator</i>])

If *comparator* is specified, sets the sort order of sibling nodes for the layout using the specified comparator function.  If *comparator* is not specified, returns the current group sort order, which defaults to null for no sorting. The comparator function is invoked for pairs of nodes, being passed the input data for each node. The default comparator is null, which disables sorting and uses tree traversal order. For example, to sort sibling nodes in descending order by the associated input data's string name attribute, say:

```javascript
function comparator(a, b) {
  return d3.ascending(a.name, b.name);
}
```

See [d3.ascending](Arrays#d3_ascending) or [d3.descending](Arrays#d3_descending) for details.

<a name="separation" href="#separation">#</a> cluster.<b>separation</b>([<i>separation</i>])

If *separation* is specified, uses the specified function to compute separation between neighboring nodes. If *separation* is not specified, returns the current separation function, which defaults to:

```javascript
function separation(a, b) {
  return a.parent == b.parent ? 1 : 2;
}
```

A variation that is more appropriate for radial layouts reduces the separation gap proportionally to the radius:

```javascript
function separation(a, b) {
  return (a.parent == b.parent ? 1 : 2) / a.depth;
}
```

The separation function is passed two neighboring nodes *a* and *b*, and must return the desired separation between nodes. The nodes are typically siblings, though the nodes may also be cousins (or even more distant relations) if the layout decides to place such nodes adjacent.

<a name="size" href="#size">#</a> cluster.<b>size</b>([<i>size</i>])

If *size* is specified, sets the available layout size to the specified two-element array of numbers representing *x* and *y*. If *size* is not specified, returns the current size, which defaults to 1×1, or null if a <a href="#nodeSize">nodeSize</a> is in use. Although the layout has a size in *x* and *y*, this represents an arbitrary coordinate system. For example, to produce a radial layout where the tree breadth (*x*) in measured in degrees, and the tree depth (*y*) is a radius *r* in pixels, say [360, *r*].

<a name="nodeSize" href="#nodeSize">#</a> cluster.<b>nodeSize</b>([<i>nodeSize</i>])

If *nodeSize* is specified, sets a fixed size for each node as a two-element array of numbers representing *x* and *y*. If *nodeSize* is not specified, returns the current node size, which defaults to null, meaning that the layout has an overall fixed size, which can be retrieved using <a href="#size">size</a>.

<a name="value" href="#value">#</a> cluster.<b>value</b>([<i>value</i>])

If *value* is specified, sets the value accessor to the specified function. If *value* is not specified, returns the current value accessor which defaults to null, meaning that the value attribute is not computed. If specified, the value accessor is invoked for each input data element, and must return a number representing the numeric value of the node. This value has no effect on the cluster layout, but is generic functionality provided by hierarchy layouts.
