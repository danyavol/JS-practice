'use strict'
// Написать функцию, которая принимает строчку как аргумент и возвращает ту букву, которая встречается чаще всего
// (выводим букву и выводим количество)

function theMostSymbol(str) {
  var array = str.toUpperCase().split('');
  var symbols = [ [array[0]] ];
  
  for (let i = 1; i < array.length; i++) {
    let flag = true;
    for (let j = 0; j < symbols.length; j++) {
      if (symbols[j][0] == array[i]) {
        symbols[j].push(array[i]);
        flag = false;
        break;
      }
    }
    if (flag) {
      symbols.push([ array[i] ]);
    }
  }

  var num = symbols[0].length;
  var index = 0;
  for (let i = 1; i < symbols.length; i++) {
    if (symbols[i].length > num) {
      index = i;
      num = symbols[i].length;
    }
  }
  return [symbols[index][0], symbols[index].length];
}

var str = prompt('Введите строку', 'Прив6978ет ми567р лет435аю 5 8 90');
var result = theMostSymbol(str);
console.log(`${str}\n\nСимвол "${result[0]}" встречается чаще всего, ${result[1]} раз(а).`);
