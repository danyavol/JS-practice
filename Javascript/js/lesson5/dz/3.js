// Заполнить массив последовательными нечетными числами, начиная с единицы. 2:56
'use strict'
var arr = [];
var x = +prompt('Введите длину массива');
var k = 1;
for (var i = 0; i < x; i++) {
  arr.push(k);
  k += 2;
}
console.log(arr.join('  '));
