'use strict'
// вывести все числа в диапазоне от 1 до 1 000 000, кратные числам 3 и 2
var str = "";
for (var i=1; i<=1000000; i++) {
  if (i%2==0 && i%3==0) str+=i+' ';
}
console.log(str);

/*
// Вариант через while
var i=1;
while (i<=1000000) {
  if (i%2==0 && i%3==0) str+=i+' ';
  i++;
}
console.log(str);
*/
