// Дан массив целых чисел. Проверить, есть ли в нем одинаковые элементы. Вывести значение и количество
'use strict'
// Ввод массива
var arr = [];
for (let i = 1;; i++) {
  let x = +prompt('Введите число '+i);
  while (isNaN(x)) {
    alert('Вы ввели не число, попробуйте еще раз');
    x = +prompt('Введите число '+i);
  }
  if (x == 0) break;
  arr.push(x);
}

if (arr.length > 0) {
    // Поиск повторяющихся значений и их количество
    var num = [], count = [];
    for (let i = 0; i < arr.length-1; i++) {
      let k = 1;
      for (let j = i+1; j < arr.length; j++) {

        // Проверяем есть ли уже такое число в массиве со значениями
        let a = 0;
        for (let n = 0; n < num.length; n++) {
          if (arr[i] == num[n]) a++;
        }
        if (a > 0) break;

        if (arr[i] == arr[j]) k++;
      }
      if (k>1) {
        num.push(arr[i]);
        count.push(k);
      }
    }

    // Вывод в console.log
    var str = '';
    for (let i = 0; i < num.length; i++) {
      str += '\nЧисло '+num[i]+' повторяется '+count[i]+' раз(а).';
    }
    console.log('Исходный массив:\n'+arr.join(' ')+'\n'+str);
}
