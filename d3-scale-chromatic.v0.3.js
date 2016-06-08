// https://d3js.org/d3-scale-chromatic/ Version 0.3.0. Copyright 2016 Mike Bostock.
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('d3-interpolate')) :
  typeof define === 'function' && define.amd ? define(['exports', 'd3-interpolate'], factory) :
  (factory((global.d3 = global.d3 || {}),global.d3));
}(this, function (exports,d3Interpolate) { 'use strict';

  function colors(colors) {
    return colors.match(/.{6}/g).map(function(x) {
      return "#" + x;
    });
  }

  var Accent = colors("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666");

  var Dark2 = colors("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666");

  var Paired = colors("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928");

  var Pastel1 = colors("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2");

  var Pastel2 = colors("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc");

  var Set1 = colors("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999");

  var Set2 = colors("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3");

  var Set3 = colors("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f");

  function ramp(range) {
    return d3Interpolate.interpolateRgbBasis(colors(range));
  }

  var BrBG = ramp("5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30");

  var PRGn = ramp("40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b");

  var PiYG = ramp("8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419");

  var PuOr = ramp("7f3b08b35806e08214fdb863fee0b6f7f7f7d8daebb2abd28073ac5427882d004b");

  var RdBu = ramp("67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061");

  var RdGy = ramp("67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a");

  var RdYlBu = ramp("a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695");

  var RdYlGn = ramp("a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837");

  var Spectral = ramp("9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2");

  var BuGn = ramp("f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b");

  var BuPu = ramp("f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b");

  var GnBu = ramp("f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081");

  var OrRd = ramp("fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000");

  var PuBuGn = ramp("fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636");

  var PuBu = ramp("fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858");

  var PuRd = ramp("f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f");

  var RdPu = ramp("fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a");

  var YlGnBu = ramp("ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58");

  var YlGn = ramp("ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529");

  var YlOrBr = ramp("ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506");

  var YlOrRd = ramp("ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026");

  var Blues = ramp("f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b");

  var Greens = ramp("f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b");

  var Greys = ramp("fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000");

  var Purples = ramp("fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d");

  var Reds = ramp("fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d");

  var Oranges = ramp("fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704");

  exports.schemeAccent = Accent;
  exports.schemeDark2 = Dark2;
  exports.schemePaired = Paired;
  exports.schemePastel1 = Pastel1;
  exports.schemePastel2 = Pastel2;
  exports.schemeSet1 = Set1;
  exports.schemeSet2 = Set2;
  exports.schemeSet3 = Set3;
  exports.interpolateBrBG = BrBG;
  exports.interpolatePRGn = PRGn;
  exports.interpolatePiYG = PiYG;
  exports.interpolatePuOr = PuOr;
  exports.interpolateRdBu = RdBu;
  exports.interpolateRdGy = RdGy;
  exports.interpolateRdYlBu = RdYlBu;
  exports.interpolateRdYlGn = RdYlGn;
  exports.interpolateSpectral = Spectral;
  exports.interpolateBuGn = BuGn;
  exports.interpolateBuPu = BuPu;
  exports.interpolateGnBu = GnBu;
  exports.interpolateOrRd = OrRd;
  exports.interpolatePuBuGn = PuBuGn;
  exports.interpolatePuBu = PuBu;
  exports.interpolatePuRd = PuRd;
  exports.interpolateRdPu = RdPu;
  exports.interpolateYlGnBu = YlGnBu;
  exports.interpolateYlGn = YlGn;
  exports.interpolateYlOrBr = YlOrBr;
  exports.interpolateYlOrRd = YlOrRd;
  exports.interpolateBlues = Blues;
  exports.interpolateGreens = Greens;
  exports.interpolateGreys = Greys;
  exports.interpolatePurples = Purples;
  exports.interpolateReds = Reds;
  exports.interpolateOranges = Oranges;

  Object.defineProperty(exports, '__esModule', { value: true });

}));