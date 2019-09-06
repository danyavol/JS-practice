'use strict'
var re = /-?\d+(\.\d+)?/g;

var str = "-1.5 0 2 -123.4.";

console.log( str.match(re) );   // 1.5, 0, 12, 123.4
