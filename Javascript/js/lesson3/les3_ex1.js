'use strict'
//Пользователь вводит числа до тех пор, пока не введет 0. Найти среднее арифметическое и вывести последовательность чисел.
var i = 0;
var sum = 0;
var str = '';
do {
  var x = +prompt('Число');
  if (x == 0) break;
  str+=x+' ';
  sum+=x;
  i++;
} while(x!=0)

console.log(str,(sum/i);
