// Посчитать сумму элементов по периметру ( вывести в консоль сам периметр квадратом )
'use strict'
function randomInteger(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
}

// Ввод размерности матрицы
var w = randomInteger(3, 8);
var h = randomInteger(3, 8);

// Ввод матриц
var array = [];
var str = '';
for (let i = 0; i < h; i++) {
  array.push([]);
  for (let j = 0; j < w; j++) {
    array[i].push(randomInteger(1, 9));
  }
  str += array[i].join(' ')+'\n';
}

// Вывод периметр и подсчет суммы
var strPerimeter = '', sum = 0;
for (var i = 0; i < array.length; i++) {
  for (var j = 0; j < array[i].length; j++) {
    if (i == 0 || i == array.length-1) {
      strPerimeter += array[i][j] + ' ';
      sum += array[i][j];
    } else {
      if (j == 0 || j == array[i].length-1) {
        strPerimeter += array[i][j] + ' ';
        sum += array[i][j];
      } else {
        strPerimeter += '  ';
      }
    }
  }
  strPerimeter += '\n';
}

console.log(str+'\n'+strPerimeter+'\nСумма = '+sum);
