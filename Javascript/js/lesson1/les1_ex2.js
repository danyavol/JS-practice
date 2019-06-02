// Пользователь вводит четырехзначное число, посчитать сумму цифр числа
var  x = +prompt('Введите 4х значное число');
var sum = parseInt(x/1000) + parseInt(x/100)%10 + parseInt(x/10)%10 + x%10;
console.log(sum);
