// https://github.com/d3/d3-selection-multi Version 1.0.0. Copyright 2016 Mike Bostock.
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('d3-selection'), require('d3-transition')) :
  typeof define === 'function' && define.amd ? define(['d3-selection', 'd3-transition'], factory) :
  (factory(global.d3,global.d3));
}(this, function (d3Selection,d3Transition) { 'use strict';

  function attrsFunction(selection, map) {
    return selection.each(function() {
      var x = map.apply(this, arguments), s = d3Selection.select(this);
      for (var name in x) s.attr(name, x[name]);
    });
  }

  function attrsObject(selection, map) {
    for (var name in map) selection.attr(name, map[name]);
    return selection;
  }

  function selection_attrs(map) {
    return (typeof map === "function" ? attrsFunction : attrsObject)(this, map);
  }

  function stylesFunction(selection, map, priority) {
    return selection.each(function() {
      var x = map.apply(this, arguments), s = d3Selection.select(this);
      for (var name in x) s.style(name, x[name], priority);
    });
  }

  function stylesObject(selection, map, priority) {
    for (var name in map) selection.style(name, map[name], priority);
    return selection;
  }

  function selection_styles(map, priority) {
    return (typeof map === "function" ? stylesFunction : stylesObject)(this, map, priority == null ? "" : priority);
  }

  function propertiesFunction(selection, map) {
    return selection.each(function() {
      var x = map.apply(this, arguments), s = d3Selection.select(this);
      for (var name in x) s.property(name, x[name]);
    });
  }

  function propertiesObject(selection, map) {
    for (var name in map) selection.property(name, map[name]);
    return selection;
  }

  function selection_properties(map) {
    return (typeof map === "function" ? propertiesFunction : propertiesObject)(this, map);
  }

  function attrsFunction$1(transition, map) {
    return transition.each(function() {
      var x = map.apply(this, arguments), t = d3Selection.select(this).transition(transition);
      for (var name in x) t.attr(name, x[name]);
    });
  }

  function attrsObject$1(transition, map) {
    for (var name in map) transition.attr(name, map[name]);
    return transition;
  }

  function transition_attrs(map) {
    return (typeof map === "function" ? attrsFunction$1 : attrsObject$1)(this, map);
  }

  function stylesFunction$1(transition, map, priority) {
    return transition.each(function() {
      var x = map.apply(this, arguments), t = d3Selection.select(this).transition(transition);
      for (var name in x) t.style(name, x[name], priority);
    });
  }

  function stylesObject$1(transition, map, priority) {
    for (var name in map) transition.style(name, map[name], priority);
    return transition;
  }

  function transition_styles(map, priority) {
    return (typeof map === "function" ? stylesFunction$1 : stylesObject$1)(this, map, priority == null ? "" : priority);
  }

  d3Selection.selection.prototype.attrs = selection_attrs;
  d3Selection.selection.prototype.styles = selection_styles;
  d3Selection.selection.prototype.properties = selection_properties;
  d3Transition.transition.prototype.attrs = transition_attrs;
  d3Transition.transition.prototype.styles = transition_styles;

}));