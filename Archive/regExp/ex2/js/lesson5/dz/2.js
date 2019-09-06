// Заполнить массив нулями и единицами, при этом данные значения чередуются, начиная с нуля. 1:53
'use strict'
var arr = [];
var x = +prompt('Введите размерность массива');
for (var i = 0; i < x; i++) {
  if (i%2 == 0) arr.push(0);
  else arr.push(1);
}
console.log(arr.join('  '));
