> [Wiki](Home) ▸ [[API Reference]] ▸ [[Layouts]] ▸ **Hierarchy Layout**

The hierarchy layout is an *abstract* layout that is not used directly, but instead allows code sharing between multiple hierarchical layouts. For an implementation, see one of:

* [[Cluster|Cluster-Layout]] - cluster entities into a dendrogram.
* [[Pack|Pack-Layout]] - produce a hierarchical layout using recursive circle-packing.
* [[Partition|Partition-Layout]] - recursively partition a node tree into a sunburst or icicle.
* [[Tree|Tree-Layout]] - position a tree of nodes tidily.
* [[Treemap|Treemap-Layout]] - use recursive spatial subdivision to display a tree of nodes.

Although not a hierarchy layout, the [bundle layout](Bundle-Layout) is also designed to work in conjunction with hierarchies.

<a name="hierarchy" href="#hierarchy">#</a> d3.layout.<b>hierarchy</b>()

Creates a new hierarchy layout with the default settings: the default sort order is by descending value; the default value accessor assumes each input data is an object with a numeric value attribute; and the default children accessor assumes each input data is an object with a children array.

<a name="_hierarchy" href="#_hierarchy">#</a> <b>hierarchy</b>(<i>root</i>)

Runs the hierarchy layout, returning the array of nodes associated with the specified *root* node. The input argument to the layout is the root node of the hierarchy, and the output return value is an array representing the computed positions of all nodes. Several attributes are populated on each node:

* parent - the parent node, or null for the root.
* children - the array of child nodes, or null for leaf nodes.
* value - the node value, as returned by the value accessor.
* depth - the depth of the node, starting at 0 for the root.

In addition, most hierarchy layouts also compute *x* and *y* positions for nodes; see the implementing class for details.

<a name="links" href="#links">#</a> hierarchy.<b>links</b>(<i>nodes</i>)

Given the specified array of *nodes* returns an array of objects representing the links from parent to child for each node. Leaf nodes will not have any links. Each link is an object with two attributes:

* source - the parent node (as described above).
* target - the child node.

This method is useful for retrieving a set of link descriptions suitable for display, often in conjunction with the [diagonal](SVG-Shapes#diagonal) shape generator. For example:

```javascript
svg.selectAll("path")
    .data(partition.links(nodes))
  .enter().append("path")
    .attr("d", d3.svg.diagonal());
```

<a name="children" href="#children">#</a> hierarchy.<b>children</b>([<i>accessor</i>])

If *accessor* is specified, sets the specified children accessor function. If *accessor* is not specified, returns the current children accessor function, which by default assumes that the input data is an object with a children array:

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

The children accessor is first invoked for root node in the hierarchy. If the accessor returns null, then the node is assumed to be a leaf node and the layout traversal terminates. Otherwise, the accessor should return an array of data elements representing the child nodes. The accessor is called with arguments *node* and *depth*.

<a name="sort" href="#sort">#</a> hierarchy.<b>sort</b>([<i>comparator</i>])

If *comparator* is specified, sets the sort order of sibling nodes for the layout using the specified comparator function.  If *comparator* is not specified, returns the current group sort order, which defaults to descending order by the associated input data's numeric value attribute:

```javascript
function comparator(a, b) {
  return b.value - a.value;
}
```

The comparator function is invoked for pairs of nodes, being passed the input data for each node. A null comparator disables sorting and uses tree traversal order. Comparator functions may also be implemented using [d3.ascending](Arrays#d3_ascending) or [d3.descending](Arrays#d3_descending).

<a name="value" href="#value">#</a> hierarchy.<b>value</b>([<i>value</i>])

If *value* is specified, sets the value accessor to the specified function. If *value* is not specified, returns the current value accessor. The default accessor assumes that the input data is an object with a numeric value attribute:

```javascript
function value(d) {
  return d.value;
}
```

The value accessor is invoked for each input data element, and must return a number representing the numeric value of the node. For area-proportional layouts such as treemaps, this value is used to set the area of each node proportionally to the value; for other hierarchical layouts, the value has no effect on the layout.

<a name="revalue" href="#revalue">#</a> hierarchy.<b>revalue</b>(<i>root</i>)

Re-evaluates the values of each node in the specified tree starting at *root*, without re-sorting or recomputing the child nodes. This method can be used to recompute the values of each node without making any structural changes to the hierarchy. Primarily, it exists to support [sticky treemaps](Treemap-Layout#sticky).