//запрашиваем дату рождения пользователя(через форму). год/месяц/день
//выводим день недели, когда он родился
'use strict'
window.onload = function () {
  but.onclick = function () {
    event.preventDefault();
    var d = new Date(date.value);

    result.innerText = d.toLocaleString('ru-RU', {weekday: 'long'});
  }
}
