// Пользователь вводит число. Найти все числа в диапазоне от 100 до 1000, сумма цифр которых равна введенному число
'use strict'
var x = +prompt('Число', 14);
var str = '';

for (var i = 100; i<=1000; i++) {
  // Считаем разряды
  var k = 1, count = 0;
  while (parseInt(i/k) != 0 ) {
    k = k*10;
    count++;
  }

  // Считаем сумму цифр
  k = 1;
  var j = 1, sum = 0;
  while (k <= count) {
    sum += parseInt(i/j)%10;
    j = j*10;
    k++;
  }

  // Проверяем число
  if (sum == x) {
    str += i + ' ';
  }
}

console.log(str);
