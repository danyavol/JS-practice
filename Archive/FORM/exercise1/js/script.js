'use strict'
window.onload = function () {
  send.onclick = function () {
    var form = document.forms[0];
    for (var i = 0; i < 3; i++) {
      var textField = form.elements[i];
      checkTextField(textField);
    }


  }
  function checkTextField(elem) {
    if (elem.value == "") {
      if (elem.parentNode.childNodes.length == 1) {
        elem.classList.add('error');
        elem.parentNode.appendChild(errorText('Введите что-нибудь'));
      }
    } else {
      if (elem.parentNode.childNodes.length == 2) {
        elem.classList.remove('error');
        elem.parentNode.childNodes[1].remove();
      }
    }
  }
  function errorText(text) {
    var span = document.createElement('span');
    span.classList.add('errorText');
    span.innerText = text;
    return span;
  }
}
