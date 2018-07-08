require("babel-register");

// var register = require('ignore-styles');
require('ignore-styles').default(['.css']);

var extendRequire = require("isomorphic-loader/lib/extend-require");

extendRequire().then(function () {
    require("./server.js");
}).catch(function (err) {
    console.log(err);
});

// register(['.css', '.svg']);
