// шестизначное число, определить счастливое ли оно. (сумма первых трех цифр равна сумме вторых трех цифр)
'use strict'
var x = +prompt('Введите шестизначное число');
var x1,x2;

function num(x,n) {
  if (n==1) return x%10;
  else if (n==2) return parseInt(x/10)%10;
  else if (n==3) return parseInt(x/100)%10;
  else if (n==4) return parseInt(x/1000)%10;
  else if (n==5) return parseInt(x/10000)%10;
  else if (n==6) return parseInt(x/100000)%10;
}

x1 = num(x,1) + num(x,2) + num(x,3);
x2 = num(x,4) + num(x,5) + num(x,6);
console.log(x1+'\n'+x2)
if (x1 == x2) alert('Число счастливое');
else alert('Число не счастливое :(');
