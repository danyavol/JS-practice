// Сортирвока по возрастанию(по количеству символов в слове).
'use strict'
var str = prompt('Введите строку','  Мир, 56 2344_    _/^приве))т34, дела отлично<() у меня good day today   ');
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

for (let i = 0; i < array.length-1; i++) {
  for (let j = i+1; j < array.length; j++) {
    if (array[i].length > array[j].length) {
      let tmp = array[i];
      array[i] = array[j];
      array[j] = tmp;
    }
  }
}

var strNew = '';
for (let i = 0; i < array.length; i++) {
  strNew += array[i].join('') + ' ';
}

console.log(str +'\n\n'+strNew);
