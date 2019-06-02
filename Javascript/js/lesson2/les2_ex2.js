// Пользователь вводит 3 числа, найти минимум и максимум
var x = +prompt('Введите x');
var y = +prompt('Введите y');
var z = +prompt('Введите z');

if (x<y && x<z)
  console.log('Минимальное - x => '+x);
else if (y<z && y<x)
  console.log('Минимальное - y => '+y);
else if (z<y && z<x)
  console.log('Минимальное - z => '+z);

if (x>y && x>z)
  console.log('Максимальное - x => '+x);
else if (y>z && y>x)
  console.log('Максимальное - y => '+y);
else if (z>y && z>x)
  console.log('Максимальное - z => '+z);
