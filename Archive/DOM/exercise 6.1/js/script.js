'use strict'
// функция принимает массив чисел, возвращает уникальные числа в массиве
var arr = [1,4,12,7,3,2,1,7,4];
function uniqueElems(array) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    var flag = true;
    for (var j = 0; j < array.length; j++) {
      if (array[i] == array[j] && i != j) flag = false;
    }
    if (flag) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}
console.log(uniqueElems(arr));







// функция принмает массив уникальных чисел от 1 до n. и возвращает отсутствующие числа
var arr = [4,12,3,6,7,15];
// [3,4,6,7,12,15]
function missingElems(arr) {
  var array = [].concat(arr);
  var newArray = [];

  for (var i = 0; i < array.length-1; i++) {
    for (var j = i+1; j < array.length; j++) {
      if (array[i] > array[j]) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }

  if (array[0] > 1) {
    for (var i = 1; i < array[0]; i++) {
      newArray.push(i);
    }
  }

  for (var i = 0; i < array.length; i++) {
    for (var j = array[i]+1; j < array[i+1]; j++) {
      if (array[i+1] - array[i] == 1) break;
      else {
        newArray.push(j);
      }
    }
  }
  return newArray;
}
console.log(missingElems(arr));
