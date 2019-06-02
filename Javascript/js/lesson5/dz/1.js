//Заполнить массив нулями, кроме первого и последнего элементов, которые должны быть равны единице. 2:36
'use strict'
var arr = [];
var x = +prompt('Введите размерность массива');
for (var i = 0; i < x; i++) {
  if (i == 0 || i == x-1) {
    arr.push(1);
  } else arr.push(0);
}

console.log(arr.join('  '));
