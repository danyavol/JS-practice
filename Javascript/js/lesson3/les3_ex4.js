'use strict'
// вводит число, вывести количество разрядов и сумму цифр
var x = +prompt('Число');
var i=1, sum=0, count=0;

// подсчет зазрядов
while (parseInt(x/i) != 0 ) {
  i=i*10;
  count++;
}

// подсчет суммы цифр
i = 1;
var k = 1;
while (i <= count) {
sum+=parseInt(x/k)%10;
k=k*10;
i++;
}

console.log(count, sum);
