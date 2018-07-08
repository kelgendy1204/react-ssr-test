require("babel-register");
// var register = require('ignore-styles');
require('ignore-styles').default(['.css', '.svg']);
// register(['.css', '.svg']);
require("./server.js");
