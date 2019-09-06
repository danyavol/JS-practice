'use strict';
window.onload = function () {
var n=randomInteger(3,10);
var m=randomInteger(3,10);

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



  let table = ce("table");
  table.id="table";
for (var i = 0; i < n; i++) {
    let tr = ce("tr");

  for (var j = 0; j < m; j++) {
      let td = ce("td", randomInteger(0, 9));
      tr.appendChild(td);
      td.className="td";
  }
  table.appendChild(tr);

}
document.body.appendChild(table);
sumTd();

  let addTr = ce("div","Add tr","click",funcAddTr);
  document.body.appendChild(addTr);
  let addTd = ce("div","Add td","click",funcAddTd);
  document.body.appendChild(addTd);

  function funcAddTr() {
    let clone = table.children[0].cloneNode(true);
    for (var i = 0; i < clone.children.length; i++) {
      clone.children[i].innerHTML=randomInteger(0,9);
    }
    table.appendChild(clone);
    checkD();
  }

  function funcAddTd() {
    let tr = table.children;
    console.log(tr);
    for (var i = 0; i < tr.length; i++) {
      let td = ce("td",randomInteger(0,9));
      td.className="td";
      tr[i].appendChild(td);

    }
    checkD();
  }

  function checkD() {
    let sum=0;
    if (table.children.length == table.children[0].children.length) {
      for (var i = 0; i < table.children.length; i++) {
        table.children[i].children[i].className="D";
        sum+=+table.children[i].children[i].innerText;

      }
      console.log(sum);
    }
    else {
      for (var i = 0; i < table.children.length; i++) {
        for (var j = 0; j < table.children[i].children.length; j++) {
          table.children[i].children[j].className="td";
        }
      }
    }

  }

  function sumTd() {


    for (var i = 0; i < table.children[0].children.length; i++) {
      let sum=0;
      for (var j = 0; j < table.children.length; j++) {
          sum+=+table.children[j].children[i].innerText;
      }
      console.log(sum);
    }



  }



/*
  let cloneBut = ce("div","Clone","click",cloneElem);
      cloneBut.id = "point";
  document.body.appendChild(but);
  document.body.appendChild(cloneBut);


  for (var i = 0; i < k; i++) {
    let li = ce("li",`Элемент ${i}`,"click",liClick);
    ul.appendChild(li);
  }

  document.body.appendChild(ul);
*/
}
