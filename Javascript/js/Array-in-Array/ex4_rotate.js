// Cделать один оборот периметра по часовой стрелке
// 1 8 4   2 1 8
// 2 3 7   4 3 4
// 4 8 1   8 1 7
'use strict'
function randomInteger(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
}

// Ввод размерности матрицы
var w = randomInteger(3, 8);
var h = randomInteger(3, 8);

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

// Поворачиваем периметр
var strNew = '', temp, next, prev;
for (let i = 0; i < array.length; i++) {
  // Обработка первой строки
  if (i == 0) {
    prev = array[1][0];
    for (let j = 0; j < array[i].length; j++) {
      next = array[i][j];
      array[i][j] = prev;
      temp = next; next = prev; prev = temp;
      strNew += array[i][j] + ' ';
    }
    strNew += '\n';
  // Обработка строк между 0 и последним
  } else if (i > 0 && i < array.length-1) {
    for (let j = 0; j < array[i].length; j++) {
      // меняем левый край
      if (j == 0) {
        if (i < array.length-1) {
          array[i][j] = array[i+1][j];
        } else {
          array[i][j] = array[array.length-1][1];
        }
      // меняем правый край
      } else if (j == array[i].length-1) {
        next = array[i][j];
        array[i][j] = prev;
        temp = next; next = prev; prev = temp;
      }
      strNew += array[i][j] + ' ';
    }
    strNew += '\n';
  // Обработка последней строки
  } else if (i == array.length - 1) {
    for (let j = array[i].length-1; j >= 0; j--) {
      next = array[i][j];
      array[i][j] = prev;
      temp = next; next = prev; prev = temp;
    }
  }
}
strNew += array[array.length-1].join(' ');
console.log(str+'\n'+strNew);
