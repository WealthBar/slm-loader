'use strict';

var loaderUtils = require("loader-utils");
var slm = require("slm");
var markdown = require("slm-markdown");

markdown.register(slm.template);

module.exports = function(source) {
  this.cacheable && this.cacheable(true);
  var resolveRoot = this.options && this.options.resolve && this.options.resolve.root;
  var options = loaderUtils.getLoaderConfig(this, 'slmLoader') || {};
  if (!options.basePath && resolveRoot) options.basePath = resolveRoot;
  options.filename = this.resource;
  var tmplFunc = slm.compile(source, options);
  return tmplFunc();
}
