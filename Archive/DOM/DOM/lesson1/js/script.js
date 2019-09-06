'use strict';
window.onload = function () {
  var x = 13;
  text.onclick = function () {
    content.style.fontSize = ++x+"px";
    if(content.style.display.length==0 || content.style.display=="none"){
      content.style.display="block";
      //text.innerText = text.innerText.split("").reverse().join("");
      //console.log(text.innerText);
      text.innerText="Скрыть"

    }
    else {
      content.style.display="none";
      text.innerText="Показать"
    }

  }
}
