'use strict'
// Вводит числа до тех пор, пока не введет 0. Вывести эти числа и вывести минимальное и максимальное
var str='';
for (var i=1; i<2; i++) {
  var x = +prompt('Число');
  if (x==0) break;
  var min=x,max=x;   // min=0-Infinity; max=Infinity
  str+=x+' ';
  while(true) {
    x = +prompt('Число');
    if (x==0) break;
    str+=x+' ';
    if (x < min) min=x;
    if (x > max) max=x;
  }
  console.log(str,min,max);
}
