"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loader;

var _core = require("@babel/core");

var _ejs = require("ejs");

var _loaderUtils = require("loader-utils");

function loader(source, map, meta) {
  var options = (0, _loaderUtils.getOptions)(this);
  var template = (0, _ejs.transform)(source, Object.assign({}, options, {
    inputSourceMap: map
  }));

  if (template.map === null) {
    template.map = undefined;
  }

  this.callback(null, template.code, template.map, meta);
  return;
}

;
