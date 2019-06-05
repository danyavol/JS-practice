// Сделать ввод матрицы по спирали (начиная с левого верхнего угла, по часовой стрелке)
'use strict'
// Ввод размерности матрицы
var w = 4;//randomInteger(3, 10);
var h = 4;//randomInteger(3, 10);

// Заполнение матрицы пустыми значениями
var matrix = [];
for (let i = 0; i < h; i++) {
  matrix.push([]);
  for (let j = 0; j < w; j++) {
    matrix[i].push(null);
  }
}

// Ввод матрицы в одномерный массив
var array = [];
var str = '';
for (var i = 0; i < w*h; i++) {
  array.push(randomInteger(1,9));
}
str += array.join(' ');
console.log(str);

// Заполнение матрицы спиралью
var count = getCircleCount(matrix);
for (let k = 0; k < count; k++) {
  let ind = getPerimeterElems(matrix,k);
   
}


function getCircleCount(array) {
  let count;
  if (array.length < array[0].length) {
    count = Math.ceil(array.length/2);
  } else {
    count = Math.ceil(array[0].length/2);
  }
  return count;
}

function getPerimeterElems(array, n) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if ((i == n && (j >= n && j <= array[i].length-1-n)) ||
          (i == array.length-1-n && (j >= n && j <= array[i].length-1-n)) ||
          ((i > 0 && i < array.length-1) && (j == n || j == array[i].length-1-n))) {
        newArray.push([i,j]);
      }
    }
  }
  return newArray;
}

function ifExistsInArray(array, i, j) {
  let res = false;
  for (let m = 0; m < array.length; m++) {
    for (let n = 0; n < array[m].length-1; n++) {
      if (array[m][n] == i && array[m][n+1] == j) res = true;
    }
  }
  return res;
}

function randomInteger(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
}
