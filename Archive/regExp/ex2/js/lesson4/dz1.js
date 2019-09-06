// вносит элементы до тех пор, пока не введт 0. Вывести полученный массив и перевернутый массив
'use strict'
var ar = [];
// ввод массива
while (true) {
  let x = +prompt('Введите число');
  if (x == 0) break;
  ar.push(x);
}
console.log(ar.join(' / '));

// переворачиваем массив
for (let i=0; i<parseInt(ar.length/2); i++) {
  let x = ar[i];
  ar[i] = ar[ar.length-1-i];
  ar[ar.length-1-i] = x;
}
console.log(ar.join(' / '));
