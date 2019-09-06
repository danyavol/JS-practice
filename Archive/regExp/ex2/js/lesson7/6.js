// Дана строка 'Прив69ет ми5р лет435аю' вывести 69 + 5 + 435
'use strict'
var str = prompt('Введите строку','Прив6978ет ми567р лет435аю 5 8 90');
var array = str.split('');
var num = [];
var n = '';

for (let i = 0; i < array.length; i++) {
  if (array[i] >= '0' && array[i] <= '9') {

            for (let j = i; j < array.length; j++) {

              if (array[j] >= '0' && array[j] <= '9') {
                n += array[j];
              } else break;

            }

            num.push(n);
            i += n.length;
            n = '';

  }
}

var sum = 0;
for (let i = 0; i < num.length; i++) {
  sum += +num[i];
}

console.log(str+'\n\n'+num.join(' + ') + ' = '+sum);
