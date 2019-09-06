'use strict';
var array = [];
var n = randomInteger(3,5);
var str = "";

function randomInteger(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
}

// Создание рандомного многомерного массива
for (var i = 0; i < n; i++) {
  array.push([]);
  for (var j = 0; j < n; j++) {
    array[i].push(randomInteger(1,9));
  }
  str+=array[i].join(" ") + "\n";
}
console.log('Исходный массив:\n'+str+'\n');




// Меняем 1 строчку с последней
var temp = array[0];
array[0] = array[array.length-1];
array[array.length-1] = temp;

str = '';
for (var i = 0; i < array.length; i++) {
  str+=array[i].join(" ") + "\n";
}
console.log('Поменяли 1 и последнюю строчку:\n'+str);




// Меняем 1 столбец с последним
for (var i = 0; i < array.length; i++) {
  temp = array[i][0];
  array[i][0] = array[i][array.length-1];
  array[i][array.length-1] = temp;
}

str = '';
for (var i = 0; i < array.length; i++) {
  str+=array[i].join(" ") + "\n";
}
console.log('\nПоменяли 1 и последний столбец:\n'+str+'\n');




// // Меняем четные на *, нечетные на $
// // array3.push([].concat(array[i]))
// for (var i = 0; i < array.length; i++) {
//   for (var j = 0; j < array[i].length; j++) {
//     if (array[i][j]%2 == 0) {
//       array[i][j] = '*';
//     } else {
//       array[i][j] = '$';
//     }
//   }
// }
//
// str = '';
// for (var i = 0; i < array.length; i++) {
//   str += array[i].join(" ") + "\n";
// }
// console.log('Четные числа - *, нечетные - $:\n' + str);



// Сумма элементов на главной диагонали
var sum = 0;
for (var i = 0; i < array.length; i++) {
    sum += array[i][i];
}
console.log('Сумма на главной диагонали - '+sum);

//Сумма на побочной
sum = 0;
k = array[0].length - 1;
for (var i = 0; i < array.length; i++) {
  sum += array[i][k];
  k--;
}
console.log('Сумма на побочной диагонали - '+sum);




// Вывести элементы ниже главное диагонали(с учетмо даигонали)(треугольником) и сумму этих элементов;
str = '';
sum = 0;
var k = 1;
for (var i = 0; i < array.length; i++) {
  for (var j = 0; j < k; j++) {
    str += array[i][j] + ' ';
    sum += array[i][j];
  }
  str +='\n';
  k++;
}
console.log(str+'Сумма  = '+sum);

// И то же самое выше главной диагонали.
str = '\n';
sum = 0;
var k = 0;
for (var i = 0; i < array.length; i++) {
  // Добавлене пробелов перед строчкой
  for (var j = 0; j<k; j++) str += '  ';

  for (var j = k; j < array[i].length; j++) {
    str += array[i][j] +' ';
    sum += array[i][j];
  }
  str += '\n';
  k++;
}
console.log(str+'Сумма  = '+sum+'\n');




// Отсортировать строчки по возрастанию
for (var i = 0; i < array.length; i++) {
  for (var j = 0; j < array[i].length-1; j++) {
    for (var k = j+1; k < array[i].length; k++) {
      if (array[i][j] > array[i][k]) {
        let t = array[i][j];
        array[i][j] = array[i][k];
        array[i][k] = t;
      }
    }
  }
}
str = '';
for (var i = 0; i < array.length; i++) {
  str+=array[i].join(" ") + "\n";
}
console.log(str);




// // Отсортировать столбики. НЕ ДОДЕЛАНО
// for (var i = 0; i < array.length; i++) {
//   for (var j = 0; j < array[i].length-1; j++) {
//     for (var k = j+1; k < array[i].length; k++) {
//
//       if (array[j][i] > array[k][i]) {
//         let t = array[i][j];
//         array[j][i] = array[k][i];
//         array[k][i] = t;
//       }
//
//     }
//   }
// }
// str = '';
// for (var i = 0; i < array.length; i++) {
//   str+=array[i].join(" ") + "\n";
// }
// console.log(str);





                         // ЗАДАНИЯ
// Посчитать сумму элементов по периметру ( вывести в консоль сам периметр квадратом )

// Сумма В периметре, без учета периметра ( вывести в консоль с правильными отступами )

// Создать калькулятор сложения матриц(по правилам сложения матриц)

// 1 8 4   2 1 8
// 2 3 7   4 3 4   - сделать один оборот периметра
// 4 8 1   8 1 7

// Сделать ввод матрицы по спирали  (начиная с левого верхнего угла, по часовой стрелке)

// Отсортировать все значения матрицы
// 1 8 4   1 1 2
// 7 4 2   3 4 4
// 3 7 1   7 7 8
