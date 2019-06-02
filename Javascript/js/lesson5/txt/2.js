// Удалить повторяющиеся элементы из массива.
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
    // Копируем массив
    var nArr = arr.concat([]);

    // Поиск повторяющихся элементов
    var del = [], t = [];
    for (let i = 0; i < arr.length-1; i++) {
      t = [i];
      for (let j = i+1; j < arr.length; j++) {
        if (arr[i] == arr[j]) t.push(j);
      }
      if (t.length > 1) {
        for (let j = 0; j < t.length; j++) {
          del.push(t[j]);
        }
      }
    }

    // Сортировка индексов для удаления
    for (let i = 0; i < del.length-1; i++) {
      for (let j = i+1; j < del.length; j++) {
        if (del[i] < del[j]) {
          let temp = del[i];
          del[i] = del[j];
          del[j] = temp;
        }
      }
    }

    // Удаление повторяющихся элементов
    for (var i = 0; i < del.length; i++) {
      arr.splice(del[i],1);
    }

    // Вывод в console.log
    console.log('Исходный массив:\n'+nArr.join(' ')+'\n\nУдалили повторяющиеся значения:\n'+arr.join(' '));
}
