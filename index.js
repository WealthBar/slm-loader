'use strict';

var loaderUtils = require("loader-utils");
var slm = require("slm");
var markdown = require("slm-markdown");
var loaderUtils = require("loader-utils");

markdown.register(slm.template);

module.exports = function(source) {
  var loader = this
  this.cacheable && this.cacheable(true);
  var options = loaderUtils.getLoaderConfig(this, 'slmLoader');
  options.basePath || options.basePath = this.conext
  options.filename = this.resource;
  var tmplFunc = slm.compile(source, options);
  return tmplFunc();
}
