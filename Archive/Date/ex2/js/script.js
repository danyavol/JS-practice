// сколько дней до нового года

'use strict'
window.onload = function () {
  setInterval(function () {
    var now = new Date();
    var newYear = new Date(`01-01-${now.getFullYear() + 1}`);

    var ms = newYear.getTime() - now.getTime();
    var days = Math.floor(ms/1000/60/60/24);
      ms -= days*1000*60*60*24;
    var hours = Math.floor(ms/1000/60/60);
      ms -= hours*1000*60*60;
    var minutes = Math.floor(ms/1000/60);
      ms -= minutes*1000*60;
    var seconds = Math.floor(ms/1000);

    result.innerText = `До нового года осталось ${days} дней ${hours} часов ${minutes} минут ${seconds} секунд`;
  }, 1000);

  document.onkeydown = function () {
    console.log(event.keyCode);
  }
}
