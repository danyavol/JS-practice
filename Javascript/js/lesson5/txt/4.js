// Найти два максимальных элемента массива
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
    // Скопируем массив
    var nArr = arr.concat([]);

    // Отсортируем массив
    for (let i = 0; i < arr.length-1; i++) {
      for (let j = i+1; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }

    var max = [arr[0],arr[1]];
    // Если два наибольших значения равны, берем значение по-меньше
    for (let i = 2; max[0] == max[1]; i++) {
      max[1] = arr[i];
    }

    // Вывод в консоль
    console.log('Исходный массив:\n'+nArr.join(' ')+'\n\nДва наибольших значения: '+max.join(' '));
}
