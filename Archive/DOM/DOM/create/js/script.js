'use strict';
window.onload = function () {
  let n=0;
  window.onkeydown =  function () {
      if(event.which===46) {
        let active = document.querySelectorAll('ul.menu li.active');
        //let active = document.getElementsByClassName('active');

        for (var i = 0; i < active.length; i++) {
          active[i].remove();
        }
      }
  }

  function ce(name="div",text,event,fn) {
    let element =document.createElement(name);
    if(text!=undefined) {
      element.innerHTML = text;
    }

    if(event!=undefined) {
      element.addEventListener(event,fn);
    }

    return element;
  }
  function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  }
  function addElem() {
    let ul = document.querySelectorAll('.menu');
    ++k;
    for (var i = 0; i < ul.length; i++) {
      let li = ce("li",`Элемент ${k}`,"click",liClick);
      ul[i].appendChild(li);
    }
    //ul.appendChild(li);
  }
  function liClick() {
    this.classList.toggle("active");
  }
  function cloneElem() {
    let clone = document.querySelector('.menu');
        clone = clone.cloneNode(true);
        for (var i = 0; i < clone.children.length; i++) {
          clone.children[i].addEventListener('click',liClick);
        }
        clone.setAttribute('data-ul-id',++n);
        document.getElementById("point").insertAdjacentElement("afterEnd", clone);

  }

  let but = ce("div","Add","click",addElem);
  let cloneBut = ce("div","Clone","click",cloneElem);
      cloneBut.id = "point";
  document.body.appendChild(but);
  document.body.appendChild(cloneBut);

  let k = randomInteger(5,15);
  let ul = ce("ul");
      ul.className = "menu";

  for (var i = 0; i < k; i++) {
    let li = ce("li",`Элемент ${i}`,"click",liClick);
    ul.appendChild(li);
  }

  document.body.appendChild(ul);

}
