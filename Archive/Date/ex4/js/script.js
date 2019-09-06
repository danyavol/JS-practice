// таймер

'use strict'
window.onload = function () {
  var miliseconds = 0;
  var seconds = 0;
  var minutes = 0;
  var hours = 0;

  function toNL(x, count=2) {
    var y = x + '';
    if (y.length < count) {
      var add = '';
      for (var i = 0; i < (count - y.length); i++) {
        add += '0';
      }
      y = add + y;
    }
    return y;
  }

  var timerId = setInterval(function () {
    miliseconds += 4;

    if (miliseconds >= 1000) {
      seconds++;
      miliseconds = 0;
      if (seconds >= 60) {
        minutes++;
        seconds = 0;
        if (minutes >= 60) {
          hours++;
          minutes = 0;
        }
      }
    }

    time.innerText = `${hours} : ${toNL(minutes)} : ${toNL(seconds)} : ${toNL(miliseconds, 3)}`;
  }, 4);

  setTimeout(function() {
  clearInterval(timerId);
  alert( 'стоп' );
}, 8945);
}
