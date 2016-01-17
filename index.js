'use strict';

var loaderUtils = require("loader-utils");
var slm = require("slm");
var markdown = require("slm-markdown")
markdown.register(slm.template)

module.exports = function(source) {
  this.cacheable && this.cacheable(true);
  var query = loaderUtils.parseQuery(this.query);
  var req = loaderUtils.getRemainingRequest(this).replace(/^!/, "");
  var tmplFunc = slm.compile(source)
  return tmplFunc();
}
