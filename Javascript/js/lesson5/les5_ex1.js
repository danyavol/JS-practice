// Вносит числа до тех пор, пока не введет 0. Затем вносит число, которое надо удалить из массива.
// Так же нужна валидация данных(нельзя ввести строку)
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


if (arr.length>0) {
  // Ввод числа, которое нужно удалить
  var del = +prompt('Введите число, которое нужно удалить');
  while (isNaN(del)) {
    alert('Вы ввели не число');
    del = +prompt('Введите число, которое нужно удалить');
  }

  // Удаление числа из массива
  var newArr = [];
  for (let i = 0; i<arr.length; i++) {
    if (arr[i]!=del) newArr.push(arr[i]);
  }

  // Вывод в консоль
  console.log('Исходный массив:\n'+arr.join(' ')
              +'\n\nЧисло, которое удаляли: '+del
              +'\n\nПолучился массив:\n'+newArr.join(' '));
}
