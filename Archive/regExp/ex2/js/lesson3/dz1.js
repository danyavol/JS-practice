// Пользователь вводит число. Перевернуть число ( 18714 => 41781 )
'use strict'
var x = +prompt('Число',18714);
console.log('Исходное число - ' + x);

// Считаем разряды
var i=1, count=0;
while (parseInt(x/i) != 0 ) {
  i = i*10;
  count++;
}

// Переворачиваем число
var k=1, num='';
for (i = 0; i<count; i++) {
  num += parseInt(x/k)%10;
  k = k*10;
}

console.log('Перевернутое   - ' + num);
