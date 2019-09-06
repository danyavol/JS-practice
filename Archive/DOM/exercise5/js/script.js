'use strict'
window.onload = function() {
  var p = document.getElementsByClassName('tooltip')[0];
  console.log(p);
  p.onmouseover = function () {
    console.log(1);
  }
}
