// Пользователь вводит 3 числа, вычислить уравнение с этими числами и вывести в консоль
var x = +prompt("Введите x");
var y = +prompt("Введите y");
var z = +prompt("Введите z");
if ( !isNaN(x) && !isNaN(y) && !isNaN(z) ) {
  var rez = x*x/4 + (x+y)/8 + x*x*x/(y-z);
  console.log("x = "+x+ "\ny = "+y+ "\nz = "+z+ "\nrez = "+rez);
} else alert("Вы ввели не число");
