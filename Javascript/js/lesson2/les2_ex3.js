// Пользователь вводит два двузначных числа, найти сумму четных цифр чисел
'use sctrict'
var x = +prompt('Введите первое число');
var y = +prompt('Введите второе число');
var sum = 0;


if (parseInt(x/10)%2 == 0)
  sum = sum + parseInt(x/10);

if (x%10%2 == 0)
  sum = sum + x%10;

if (parseInt(y/10)%2 == 0)
  sum = sum + parseInt(y/10);

if (y%10%2 == 0)
  sum = sum + y%10;

alert(sum);
