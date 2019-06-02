// если остаток деления значения на инедкс равен нулю, то возвести значение в куб
'use strict'
var ar=[];
while (true) {
  let x = +prompt('Введите число',6);
  if (x == 0) break;
  ar.push(x);
}
console.log(ar.join(' / '));

for (let i=0; i<ar.length; i++) {
  if (ar[i]%i == 0) {
    ar[i] = ar[i]*ar[i]*ar[i];
  }
}
console.log(ar.join(' / '));
