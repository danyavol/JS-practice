// Пользователь вводить свою ЗП, посчитать налог и чистый доход
'use sctrict'
var zp = +prompt('Введите вашу ЗП');
var nalog;

if (zp>0 && zp<=500)
  nalog = 0.05;
else if (zp>500 && zp<=800)
  nalog = 0.07;
else if (zp>800 && zp<=1500)
  nalog = 0.1;
else if (zp>1500)
  nalog = 0.13;
else
  alert('ОБЭП в гости едет');

if (nalog)
  console.log('Грязные - '+zp+ '\nНалог - '+(nalog*100)+'%'+ '\n- '+(zp*nalog)+ '\nЧистыми - '+(zp-zp*nalog));
