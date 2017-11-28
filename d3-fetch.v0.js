// https://d3js.org/d3-fetch/ Version 0.1.0. Copyright 2017 Mike Bostock.
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('d3-dsv')) :
	typeof define === 'function' && define.amd ? define(['exports', 'd3-dsv'], factory) :
	(factory((global.d3 = global.d3 || {}),global.d3));
}(this, (function (exports,d3Dsv) { 'use strict';

function responseBlob(response) {
  return response.blob();
}

var blob = function(url) {
  return fetch(url).then(responseBlob);
};

function responseArrayBuffer(response) {
  return response.arrayBuffer();
}

var buffer = function(url) {
  return fetch(url).then(responseArrayBuffer);
};

function responseText(response) {
  return response.text();
}

var text = function(url) {
  return fetch(url).then(responseText);
};

var csv = function(url, row) {
  return text(url).then(function(response) {
    return d3Dsv.csvParse(response, row);
  });
};

var image = function(url, anonymous) {
  return new Promise(function(resolve, reject) {
    var image = new Image;
    if (anonymous) image.crossOrigin = "anonymous";
    image.onerror = reject;
    image.onload = function() { resolve(image); };
    image.src = url;
  });
};

function responseJson(response) {
  return response.json();
}

var json = function(url) {
  return fetch(url).then(responseJson);
};

var tsv = function(url, row) {
  return text(url).then(function(response) {
    return d3Dsv.tsvParse(response, row);
  });
};

exports.blob = blob;
exports.buffer = buffer;
exports.csv = csv;
exports.image = image;
exports.json = json;
exports.text = text;
exports.tsv = tsv;

Object.defineProperty(exports, '__esModule', { value: true });

})));
