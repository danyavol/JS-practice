// Вносит числа пока не введет 0. Вывести массив и вывести повторяющиеся значения(и количество повторений).
'use strict'
var arr = [];
var i = 0;
// Ввод массива
while (true) {
  let x = +prompt('Введите число');
  if (x == 0) break;
  while (isNaN(x)) {
    alert('Вы ввели не число');
    x = +prompt('Введите число');
  }
  arr[i] = x;
  i++;
}

// Копируем массив
var nArr = [];
for (i=0; i<arr.length; i++) {
  nArr.push(arr[i]);
}

var str='', k;
if (arr.length>0) {
  for (i = 0; i<arr.length-1; i++) {
    k = 1;
    for (let j = i+1; j<arr.length; j++) {
      if (arr[i] == arr[j]) {
        k++;
        arr.splice(j,1);
        j--;
      }
    }
    if (k>1) {
      if (str=='') {
        str += 'Число '+arr[i]+' повторяется '+k+' раз(а).';
      }
      else {
        str += '\nЧисло '+arr[i]+' повторяется '+k+' раз(а).';
      }
    }
  }
  console.log('Исходный массив:\n'+nArr.join(' ')+'\n\n'+str);
}
