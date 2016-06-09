// https://d3js.org/d3-hsv/ Version 0.0.3. Copyright 2016 Mike Bostock.
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('d3-color')) :
  typeof define === 'function' && define.amd ? define(['exports', 'd3-color'], factory) :
  (factory((global.d3 = global.d3 || {}),global.d3));
}(this, function (exports,d3Color) { 'use strict';

  var darker = 0.7;
  var brighter = 1 / darker;
  function hsvConvert(o) {
    if (o instanceof Hsv) return new Hsv(o.h, o.s, o.v, o.opacity);
    if (!(o instanceof d3Color.rgb)) o = d3Color.rgb(o);
    var r = o.r / 255,
        g = o.g / 255,
        b = o.b / 255,
        min = Math.min(r, g, b),
        max = Math.max(r, g, b),
        d = max - min,
        h = NaN,
        s = d / max,
        v = max;
    if (d) {
      if (r === max) h = (g - b) / d + (g < b) * 6;
      else if (g === max) h = (b - r) / d + 2;
      else h = (r - g) / d + 4;
      h *= 60;
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

  var hsvPrototype = Hsv.prototype = hsv.prototype = Object.create(d3Color.color.prototype);

  hsvPrototype.constructor = Hsv;

  hsvPrototype.brighter = function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsv(this.h, this.s, this.v * k, this.opacity);
  };

  hsvPrototype.darker = function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsv(this.h, this.s, this.v * k, this.opacity);
  };

  hsvPrototype.rgb = function() {
    var h = isNaN(this.h) ? 0 : this.h % 360 + (this.h < 0) * 360,
        s = isNaN(this.h) || isNaN(this.s) ? 0 : this.s,
        v = this.v,
        a = this.opacity,
        c = v * s,
        x = c * (1 - Math.abs((h / 60) % 2 - 1)),
        m = v - c;
    return h < 60 ? hsv2rgb(c, x, 0, m, a)
        : h < 120 ? hsv2rgb(x, c, 0, m, a)
        : h < 180 ? hsv2rgb(0, c, x, m, a)
        : h < 240 ? hsv2rgb(0, x, c, m, a)
        : h < 300 ? hsv2rgb(x, 0, c, m, a)
        : hsv2rgb(c, 0, x, m, a);
  };

  hsvPrototype.displayable = function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.v && this.v <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  };

  function hsv2rgb(r1, g1, b1, m, a) {
    return d3Color.rgb((r1 + m) * 255, (g1 + m) * 255, (b1 + m) * 255, a);
  }

  exports.hsv = hsv;

  Object.defineProperty(exports, '__esModule', { value: true });

}));