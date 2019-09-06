// Удалить в массиве все числа, которые повторяются более двух раз.
'use strict'
var arr = [];
var i = 0, j = 0;
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

if (arr.length>0) {
  // Копируем массив
  var nArr = [];
  for (i=0; i<arr.length; i++) {
    nArr.push(arr[i]);
  }

  // Находим индексы элементов, которые нужно удалить и заносим их в массив del
  var k, del = [], temp;
  for (i = 0; i<arr.length-1; i++) {
    k = 1;
    temp = []; // temp - массив с индексами, которые возможно подойдут
    temp.push(i);
    // Ищем повторяющиеся значения и запоминаем их индексы
    for (j = i+1; j<arr.length; j++) {
      if (arr[i]==arr[j]) {
        k++;
        temp.push(j);
      }
    }
    // Если число поворяется больше двух раз, то заносим индексы этих чисел в массив del
    if (k>2) {
      for (j=0; j<temp.length; j++) {
        del.push(temp[j]);
      }
    }
  }

  // //                 ВАРИАНТ 1
  // // Заменяем нулями нужные индексы
  // while (del.length!=0) {
  //   arr.splice(del[del.length-1],1,0);
  //   del.pop();
  // }
  // // Удаляем нули
  // for (i=0;i<arr.length;i++) {
  //   if (arr[i]==0) {
  //     arr.splice(i,1);
  //     i--;
  //   }
  // }

  //                 ВАРИАНТ 2
  //Сортируем массив с индексами для удаления
  for (i=0; i<del.length-1; i++) {
    for (j=i+1; j<del.length; j++) {
      if (del[i]>del[j]) {
        var t = del[i];
        del[i] = del[j];
        del[j] = t;
      }
    }
  }

  // Удаляем нужные индексы из исходного массива
  var n = 0;
  for (i=0; i<del.length; i++) {
    arr.splice(del[i]-n,1);
    n++;
  }

  console.log('Исходный массив:\n'+nArr.join(' ')+'\n\nУдаляем числа, встречающиеся больше 2х раз и получаем:\n'+arr.join(' '));
}
