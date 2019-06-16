// Реверс. Перевернуть строчку
'use strict'
var str = prompt('Введите строку','Мир привет дела отлично у меня');
var array = str.split('');
for (var i = 0; i < array.length/2; i++) {
  var tmp = array[i];
  array[i] = array[array.length-1-i];
  array[array.length-1-i] = tmp;
}
console.log(str+'\n'+array.join(''));
