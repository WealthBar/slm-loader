'use strict';

var loaderUtils = require("loader-utils");
var slm = require("slm");
var markdown = require("slm-markdown");
markdown.register(slm.template);

module.exports = function(source) {
  var loader = this;
  loader.cacheable && loader.cacheable(true);
  
  var options = loaderUtils.getLoaderConfig(loader, 'slmLoader');
  options.basePath = options.basePath || loader.context;
  options.filename = loader.resource;
  
  var tmplFunc = slm.compile(source, options);
  
  return tmplFunc();
};
