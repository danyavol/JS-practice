// Удалить некоторое коилчество символов
'use strict'
var str = prompt('Введите строку', 'Здесь находится некоторое количество символов(в строке)кокоприветко.');
var del = prompt('Введите символ для удаления', 'ко');

var k = str.indexOf(del);
var array = str.split('');
var n = 0;
while (k > -1) {
  array.splice(k-n,del.length);

  k = str.indexOf(del,k+del.length);
  n += del.length;
}

console.log(str +'\n\n'+'Удалён фрагмент: '+del+'\n\n'+array.join(''));
