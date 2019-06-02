// найти сумму элементов, которые находятся на четных индексах и удалить те элементы, которые находятся на нечетных индексах
'use strict'
var ar = [];
while (true) {
  let x = +prompt('Введите массив. 0 для остановки', 2);
  if (x == 0) break;
  ar.push(x);
}

console.log(ar.join(' / '));
var sum=0;
for (let i=0; i<ar.length; i++) {
  sum+=ar[i];
  if (i+1<ar.length) ar.splice(i+1,1);
}
console.log('sum = '+sum);
console.log(ar.join(' / '));


Исходный массив:
1 7 8 5 13

Сумма четных: 21

Массив с удаленными нечетными элементами:
1 8 13
