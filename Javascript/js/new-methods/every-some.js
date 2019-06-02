'use strict'
var arr = [2, 1, 5, 4];
console.log( arr.every(function(item, i, array) {
  return item < array.length;
}) );
console.log( arr.some(function(item, i, array) {
  return item < array.length;
}) );
