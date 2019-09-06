// Определить, содержит ли массив данное число x
'use strict'
var arr = [];

var x = +prompt('Введите число');
while(isNaN(x)) {
  alert('Вы ввели не число!');
  x = +prompt('Введите число');
}

for (let i = 1; ; i++) {
  let k = +prompt('Введите '+i+' элемент массива.');
  if (isNaN(k)) break;
  arr.push(k);
}

var task = false;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == x) task = true;
}

if (task) console.log('Число '+x+' содержится в массиве:\n'+arr.join(' '));
else console.log('Число '+x+' НЕ содержится в массиве:\n'+arr.join(' '));


0 1 0 0
0 0 1 0
0 0 0 1
