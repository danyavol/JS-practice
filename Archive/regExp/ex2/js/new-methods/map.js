'use strict'
var arr = [1,2,3,4,5];
var newArr = arr.map(function(item, i, arr) {
  return item*item;
});

console.log(arr+'\n'+newArr);
