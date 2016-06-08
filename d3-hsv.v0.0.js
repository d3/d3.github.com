// https://d3js.org/d3-hsv/ Version 0.0.0. Copyright 2016 Mike Bostock.
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.d3 = global.d3 || {})));
}(this, function (exports) { 'use strict';

  function rgbConvert() {}
  function Rgb() {}
  function hsvConvert(o) {
    if (o instanceof Hsv) return new Hsv(o.h, o.s, o.v, o.opacity);
    if (!(o instanceof Rgb)) o = rgbConvert(o);
    var r = o.r / 255,
        g = o.g / 255,
        b = o.b / 255,
        min = Math.min(r, g, b),
        max = Math.max(r, g, b),
        d = max - min,
        h = NaN,
        s = max ? d/max : 0,
        v = max;
    if (d) {
      if (r === max) h = (g - b) / d + (g < b) * 6;
      else if (g === max) h = (b - r) / d + 2;
      else h = (r - g) / d + 4;
      h *= 60;
    } else {
      s = v > 0 && v < 1 ? 0 : h;
    }
    return new Hsv(h, s, v, o.opacity);
  }

  function hsv(h, s, v, opacity) {
    return arguments.length === 1 ? hsvConvert(h) : new Hsv(h, s, v, opacity == null ? 1 : opacity);
  }

  function Hsv(h, s, v, opacity) {
    this.h = +h;
    this.s = +s;
    this.v = +v;
    this.opacity = +opacity;
  }

  exports.hsv = hsv;

  Object.defineProperty(exports, '__esModule', { value: true });

}));