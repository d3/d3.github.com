> [Wiki](Home) ▸ [[API Reference]] ▸ [[Core]] ▸ **Namespaces**

SVG has a different namespace from HTML, so D3 provides a few tools to simplify dealing with namespaces.

<a name="prefix" href="Namespaces#prefix">#</a> d3.ns.<b>prefix</b>

The map of registered namespace prefixes. The default value is:

```javascript
{
  svg: "http://www.w3.org/2000/svg",
  xhtml: "http://www.w3.org/1999/xhtml",
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
}
```

Additional prefixes may be assigned as needed to create elements or attributes in other namespaces.

<a name="qualify" href="Namespaces#qualify">#</a> d3.ns.<b>qualify</b>(<i>name</i>)

Qualifies the specified *name*, which may have a namespace prefix. If the name contains a colon (":"), the substring before the colon is interpreted as the namespace prefix, which must be registered in d3.ns.**prefix**; the return value is an object with `space` and `local` attributes containing the full namespace URL and the local name. For example, the result of qualify("svg:text") is:

```javascript
{space: "http://www.w3.org/2000/svg", local: "text"}
```

If the name does not contain a colon, this function merely returns the input name. This function is used internally to decide whether to use a namespaced method (such as `createElementNS`) or a non-namespaced equivalent.