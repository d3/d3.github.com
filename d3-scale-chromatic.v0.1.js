(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('d3-scale'), require('d3-interpolate')) :
  typeof define === 'function' && define.amd ? define(['exports', 'd3-scale', 'd3-interpolate'], factory) :
  (factory((global.d3_scale_chromatic = global.d3_scale_chromatic || {}),global.d3_scale,global.d3_interpolate));
}(this, function (exports,d3Scale,d3Interpolate) { 'use strict';

  var version = "0.1.0";

  function colors(colors) {
    return colors.match(/.{6}/g).map(function(x) {
      return "#" + x;
    });
  }

  var colorsAccent = colors("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666");

  function accent() {
    return d3Scale.scaleOrdinal().range(colorsAccent);
  }

  var colorsDark2 = colors("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666");

  function dark2() {
    return d3Scale.scaleOrdinal().range(colorsDark2);
  }

  var colorsPaired = colors("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928");

  function paired() {
    return d3Scale.scaleOrdinal().range(colorsPaired);
  }

  var colorsPastel1 = colors("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2");

  function pastel1() {
    return d3Scale.scaleOrdinal().range(colorsPastel1);
  }

  var colorsPastel2 = colors("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc");

  function pastel2() {
    return d3Scale.scaleOrdinal().range(colorsPastel2);
  }

  var colorsSet1 = colors("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999");

  function set1() {
    return d3Scale.scaleOrdinal().range(colorsSet1);
  }

  var colorsSet2 = colors("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3");

  function set2() {
    return d3Scale.scaleOrdinal().range(colorsSet2);
  }

  var colorsSet3 = colors("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f");

  function set3() {
    return d3Scale.scaleOrdinal().range(colorsSet3);
  }

  function ramp(range) {
    var i = d3Interpolate.interpolateRgbBasis(colors(range));
    return function() {
      return d3Scale.scaleSequential(i);
    };
  }

  var brBG = ramp("5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30");

  var pRGn = ramp("40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b");

  var piYG = ramp("8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419");

  var puOr = ramp("7f3b08b35806e08214fdb863fee0b6f7f7f7d8daebb2abd28073ac5427882d004b");

  var rdBu = ramp("67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061");

  var rdGy = ramp("67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a");

  var rdYlBu = ramp("a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695");

  var rdYlGn = ramp("a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837");

  var spectral = ramp("9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2");

  var buGn = ramp("f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b");

  var buPu = ramp("f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b");

  var gnBu = ramp("f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081");

  var orRd = ramp("fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000");

  var puBuGn = ramp("fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636");

  var puBu = ramp("fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858");

  var puRd = ramp("f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f");

  var rdPu = ramp("fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a");

  var ylGnBu = ramp("ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58");

  var ylGn = ramp("ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529");

  var ylOrBr = ramp("ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506");

  var ylOrRd = ramp("ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026");

  var blues = ramp("f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b");

  var greens = ramp("f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b");

  var greys = ramp("fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000");

  var purples = ramp("fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d");

  var reds = ramp("fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d");

  var oranges = ramp("fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704");

  exports.version = version;
  exports.scaleAccent = accent;
  exports.scaleDark2 = dark2;
  exports.scalePaired = paired;
  exports.scalePastel1 = pastel1;
  exports.scalePastel2 = pastel2;
  exports.scaleSet1 = set1;
  exports.scaleSet2 = set2;
  exports.scaleSet3 = set3;
  exports.scaleBrBG = brBG;
  exports.scalePRGn = pRGn;
  exports.scalePiYG = piYG;
  exports.scalePuOr = puOr;
  exports.scaleRdBu = rdBu;
  exports.scaleRdGy = rdGy;
  exports.scaleRdYlBu = rdYlBu;
  exports.scaleRdYlGn = rdYlGn;
  exports.scaleSpectral = spectral;
  exports.scaleBuGn = buGn;
  exports.scaleBuPu = buPu;
  exports.scaleGnBu = gnBu;
  exports.scaleOrRd = orRd;
  exports.scalePuBuGn = puBuGn;
  exports.scalePuBu = puBu;
  exports.scalePuRd = puRd;
  exports.scaleRdPu = rdPu;
  exports.scaleYlGnBu = ylGnBu;
  exports.scaleYlGn = ylGn;
  exports.scaleYlOrBr = ylOrBr;
  exports.scaleYlOrRd = ylOrRd;
  exports.scaleBlues = blues;
  exports.scaleGreens = greens;
  exports.scaleGreys = greys;
  exports.scalePurples = purples;
  exports.scaleReds = reds;
  exports.scaleOranges = oranges;

  Object.defineProperty(exports, '__esModule', { value: true });

}));