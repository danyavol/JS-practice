// Сделать ввод матрицы по спирали (начиная с левого верхнего угла, по часовой стрелке)
'use strict'
// Ввод размерности матрицы
var w = randomInteger(3,10);
var h = randomInteger(3,10);

// Ввод матрицы в одномерный массив
var array = [];
var str = '';
var k = 1;
for (var i = 0; i < w*h; i++) {
  array.push(k);
  k++;
}
str += array.join(' ');
array.reverse();

// Создание двумерной пустой матрицы
var matrix = [];
for (let i = 0; i < h; i++) {
  matrix.push([]);
}



// Заполнение матрицы спиралью значениями из array
var t = 0;
var up= 0, right = 1, down = 0, left = 1;
var circle = 0;
while (t < w*h) {
  // верх
  for (let i = up; i < w-up; i++) {
    matrix[circle][i] = array.pop();
    t++;
    if (t == w*h) break;
  }
  if (t == w*h) break;
  up++;
  // право
  for (let i = right; i < h-right; i++) {
    matrix[i][w-1-circle] = array.pop()
    t++;
    if (t == w*h) break;
  }
  if (t == w*h) break;
  right++;
  // низ
  for (let i = w-1-down; i > down-1; i--) {
    matrix[h-1-circle][i] = array.pop();
    t++;
    if (t == w*h) break;
  }
  if (t == w*h) break;
  down++
  // лево
  for (let i = h-1-left; i > left-1; i--) {
    matrix[i][circle] = array.pop();
    t++;
    if (t == w*h) break;
  }
  if (t == w*h) break;
  left++;
  circle++;
}



// Вывод матрицы
var str2 = ''
for (var i = 0; i < matrix.length; i++) {
  str2 += matrix[i].join(' ')+'\n';
}
console.log('Исходные данные:\n'+str+'\n\nМатрица:\n'+str2);


function randomInteger(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
}
