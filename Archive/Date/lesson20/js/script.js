'use strict';
window.onload = function () {
  setInterval(function () {
    var d = new Date();
    app.innerHTML =`${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()}`
    app2.innerHTML =`${d.toLocaleString('ru-RU',{
        weekday: 'long',
        year : "numeric",
        day : "2-digit"
    })}`

    app3.innerHTML =`${d.toUTCString()}`
    app4.innerHTML =`${d.getTime()}`
  },1000)
}
