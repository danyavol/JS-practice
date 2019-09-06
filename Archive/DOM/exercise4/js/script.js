'use strict'
var arr = [1,[8,2,[3,[2,4,6,7]]],[2,4]];
var newArray = [];

name(arr);

function name(array) {
  var j = 0;
  while (j< array.length) {
    if (Array.isArray(array[j])) {
      name(array[j]);
    } else {
      newArray.push(array[j]);
    }
  j++;
  }
}

console.log(newArray);
