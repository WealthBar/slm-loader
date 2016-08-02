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
  
  // watch for changes in every referenced file
  Object.keys(slm.template.VM.prototype._cache).forEach(function(dep) {
    this.addDependency(dep);
  }, this);

  // slm cache used to remember paths to all referenced files
  // purge cache after each run to force rebuild on changes

  // each cached chunk is deleted from original object,
  // cause it's referenced by slm internally in other places
  // replacing cache with new object {} will break hot reload
  Object.keys(slm.template.VM.prototype._cache).forEach(function(dep) {
    delete slm.template.VM.prototype._cache[dep];
  });
  
  return tmplFunc();
};
