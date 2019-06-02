'use strict'
var arr = ['Яблоко', 'Груша', 'Апельсин'];
arr.forEach(function(item, i, arr) {
  console.log(i+': '+item+' ( Массив: '+arr+' )');
});
