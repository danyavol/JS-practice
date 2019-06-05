// Калькулятор матриц. Сложение.
'use strict'
function randomInteger(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
}

// Ввод размерности матрицы
var w = randomInteger(2, 8);
var h = randomInteger(2, 8);

// Ввод матриц
var array1 = [], array2 = [];
var str1 = '', str2 = '';
for (let i = 0; i < h; i++) {
  array1.push([]);
  array2.push([]);
  for (let j = 0; j < w; j++) {
    array1[i].push(randomInteger(1, 9)); //+prompt('Введите элемент ['+(i+1)+', '+(j+1)+'].');
    array2[i].push(randomInteger(1, 9));
  }
  str1 += array1[i].join(' ')+'\n';
  str2 += array2[i].join(' ')+'\n';
}

// Сложение матриц
var arraySum = [], strSum = '';
for (var i = 0; i < array1.length; i++) {
  arraySum.push([]);
  for (var j = 0; j < array1[i].length; j++) {
    arraySum[i][j] = array1[i][j] + array2[i][j];
  }
  strSum += arraySum[i].join(' ')+'\n';
}

// Вывод матриц
console.log(str1+'\n+\n\n'+str2+'\n=\n\n'+strSum);
