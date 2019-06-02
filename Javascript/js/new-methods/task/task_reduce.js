// Напишите функцию getSums(arr), которая возвращает массив его частичных сумм. Например:
// для arr = [ 1, 2, 3, 4, 5 ]
// getSums( arr ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]
// В решении используйте метод arr.reduce.
'use strict'
var arr = [1,2,3,4,5];

function getSum(arr) {
  let newArr = [];
  newArr.push( arr.reduce(function(sum, item) {
    newArr.push(sum);
    return sum + item;
  }) );
  return newArr;
}

alert(getSum(arr));
