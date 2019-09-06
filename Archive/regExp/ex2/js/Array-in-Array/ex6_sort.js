// Отсортировать все значения матрицы
'use strict'
function randomInteger(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
}

// Ввод размерности матрицы
var w = randomInteger(3, 10);
var h = randomInteger(3, 10);

// Ввод матрицы
var array = [];
var str = '';
for (let i = 0; i < h; i++) {
  array.push([]);
  for (let j = 0; j < w; j++) {
    array[i].push(randomInteger(1, 9));
  }
  str += array[i].join(' ')+'\n';
}

// Перевод матрицы в одномерный массив
var tmpArray = [];
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    tmpArray.push(array[i][j]);
  }
}

// Сортировка
for (let i = 0; i < tmpArray.length-1; i++) {
  for (let j = i+1; j < tmpArray.length; j++) {
    if (tmpArray[i] < tmpArray[j]) {
      let t = tmpArray[i];
      tmpArray[i] = tmpArray[j];
      tmpArray[j] = t;
    }
  }
}

// Вывод в матрицу
for (let i = 0; i < h; i++) {
  for (let j = 0; j < w; j++) {
    array[i][j] = tmpArray.pop();
  }
}

// Вывод в консоль
var strSort = '';
for (let i = 0; i < array.length; i++) {
  strSort += array[i].join(' ')+'\n';
}
console.log('Исходный массив:\n'+str+'\n\nОтсортированный:\n'+strSort);
