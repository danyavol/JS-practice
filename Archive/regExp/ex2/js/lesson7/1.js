// Реверс. Перевернуть строчку
// Кол-во слов в строке
// Сортирвока по возрастанию(по количеству символов в слове).
// Удалить некоторое коилчество символов
// Дана строка 'Прив69ет ми5р лет435аю' вывести 69 + 5 + 435

// Найти в строке слово с максимальной длиной
'use strict'
var str = prompt('Введите строку','  Мир,     _/^приве))т34, дела отлично<() у меня good day today   ');
var array = str.split(' ');

for (let i = 0; i < array.length; i++) {
  if (array[i] == '') {
    array.splice(i,1);
    i--;
  } else {
    array[i] = array[i].split('');
    for (let j = 0; j < array[i].length; j++) {
      if (!((array[i][j] >= 'А' && array[i][j] <= 'я') ||
          (array[i][j] >= 'A' && array[i][j] <= 'Z') ||
          (array[i][j] >= 'a' && array[i][j] <= 'z'))) {
        array[i].splice(j,1);
        j--;
      }
    }
    if (array[i] == '') {
      array.splice(i,1);
      i--;
    }
  }
}

var max = array[0];
for (let i = 0; i < array.length; i++) {
  if (max.length < array[i].length) max = array[i];
}
console.log(str+'\n\n'+'Самое длиное слово: '+max.join(''));
