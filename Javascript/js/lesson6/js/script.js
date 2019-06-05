'use strict';
var array = [];
var n = randomInteger(3,5);
var str = "";

for (var i = 0; i < n; i++) {
  array.push([]);
  for (var j = 0; j < n; j++) {
    array[i].push(randomInteger(1,9));
  }
  str+=array[i].join(" ") + "\n";
}

console.log(array);

n=null;
var strSum = "";
var strSum2 = '';

// Сумма значений в строках
for (var i = 0; i < array.length; i++) {
  var sum=0;
  for (var j = 0; j < array[i].length; j++) {
    sum+=array[i][j];
  }
  strSum+="Сумма элементов в строке " +(i+1) +" = " +sum + "\n";
}

// Сумма значений в столбцах
for (var i = 0; i < array.length; i++) {
  var sum=0;
  for (var j = 0; j < array[i].length; j++) {
    sum+=array[j][i];
  }
  strSum+="Сумма элементов в столбце " +(i+1) +" = " +sum + "\n";
}

console.log('Исходный массив:\n'+ str + '\n' + strSum + strSum2);





var array1 = array.concat([]);
var str1 = '';

// Меняем 1 строчку с последней
var temp = array1[0];
array1[0] = array1[array1.length-1];
array1[array1.length-1] = temp;

for (var i = 0; i < array1.length; i++) {
  str1+=array1[i].join(" ") + "\n";
}

console.log('\nПоменяли 1 и последнюю строчку:\n'+str1);






var array2 = array.concat([]);
var str2 = '';

// Меняем 1 столбец с последним
for (var i = 0; i < array2.length; i++) {
  temp = array2[i][0];
  array2[i][0] = array2[i][array2.length-1];
  array2[i][array2.length-1] = temp;
}

for (var i = 0; i < array2.length; i++) {
  str2+=array2[i].join(" ") + "\n";
}

console.log('\nПоменяли 1 и последний столбец:\n'+str2);




// Меняем четные на *, нечетные на $
var array3 = array.concat([]);
array3.push([].concat(array[i]))
var str3 = '';
console.log(array);
console.log(array3);
for (var i = 0; i < array3.length; i++) {
  for (var j = 0; j < array3[i].length; j++) {
    if (array3[i][j]%2 == 0) {
      array3[i][j] = '*';
    } else {
      array3[i][j] = '$';
    }
  }
}

for (var i = 0; i < array3.length; i++) {
  str3+=array3[i].join(" ") + "\n";
}

console.log('\n Четные числа - *, нечетные - $:\n' + str3);





function randomInteger(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
}
