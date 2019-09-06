'use strict'
// Написать функцию, которая принимает строчку как аргумент и возвращает количество гласных и количество согласных.
function LettersCount(str) {
  var array = str.toUpperCase().split('');
  var letters = [0,0]; // [гласные, согласные]
  var glasn = ['А','О','У','Э','Ы','Я','Ё','Е','Ю','И',
               'A','E','I','U','Y','O'];

  // Удаление лишних символов
  for (let i = 0; i < array.length; i++) {
    if ( !((array[i] >= 'А' && array[i] <= 'Я') ||
           (array[i] >= 'A' && array[i] <= 'Z')) ) {
      array.splice(i,1);
      i--;
    }
  }

  for (let i = 0; i < array.length; i++) {
    let flag = true;
    for (let j = 0; j < glasn.length; j++) {
      if (array[i] == glasn[j]) {
        letters[0] = ++letters[0];
        flag = false;
        break;
      }
    }
    if (flag) letters[1] = ++letters[1];
  }

  return letters;
}

var str = prompt('Введите строку', 'Прив6978ет ми567р лет435аю 5Hello brother 8 90');
var result = LettersCount(str);
console.log(`${str}\n\nКоличество гласных - ${result[0]}\nКоличество согласных - ${result[1]}`);
