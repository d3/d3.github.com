(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('d3-selection')) :
  typeof define === 'function' && define.amd ? define(['exports', 'd3-selection'], factory) :
  (factory((global.d3_selection_multi = global.d3_selection_multi || {}),global.d3_selection));
}(this, function (exports,d3Selection) { 'use strict';

  function selection_attrs(map) {
    if (typeof map === "function") return this.each(function() {
      var x = map.apply(this, arguments);
      for (var name in x) {
        var value = x[name];
        name = d3Selection.namespace(name);
        if (value == null) {
          if (name.local) this.removeAttributeNS(name.space, name.local);
          else this.removeAttribute(name);
        } else {
          if (name.local) this.setAttributeNS(name.space, name.local, value);
          else this.setAttribute(name, value);
        }
      }
    });

    for (var name in map) {
      this.attr(name, map[name]);
    }

    return this;
  };

  function selection_styles(map, priority) {
    if (arguments.length < 2) priority = "";

    if (typeof map === "function") return this.each(function() {
      var x = map.apply(this, arguments);
      for (var name in x) {
        var value = x[name];
        if (value == null) {
          this.style.removeProperty(name);
        } else {
          this.style.setProperty(name, value, priority);
        }
      }
    });

    for (var name in map) {
      this.style(name, map[name], priority);
    }

    return this;
  };

  function selection_properties(map) {
    if (typeof map === "function") return this.each(function() {
      var x = map.apply(this, arguments);
      for (var name in x) {
        var value = x[name];
        if (value == null) {
          delete this[name];
        } else {
          this[name] = value;
        }
      }
    });

    for (var name in map) {
      this.property(name, map[name]);
    }

    return this;
  };

  d3Selection.selection.prototype.attrs = selection_attrs;
  d3Selection.selection.prototype.styles = selection_styles;
  d3Selection.selection.prototype.properties = selection_properties;

  var version = "0.2.10";

  exports.version = version;

}));