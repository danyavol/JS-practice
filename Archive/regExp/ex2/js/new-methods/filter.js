'use strict'
var arr = [1, -1, 2, -2, 3];
var newArr = arr.filter(function(number) {
  return number>0;
});

console.log(newArr);
