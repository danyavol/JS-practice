'use strict'
window.onload = function () {

  var n = randomInteger(1,6), m = randomInteger(2,6); // n - по вертикали tr, m - по горизонтали td
  var tab = ce("table");
  tab.id="table";
  document.body.insertAdjacentElement("afterBegin", tab);
  var thead = ce("thead");
  table.appendChild(thead);
  thead.appendChild(ce('tr'));
  var tbody = ce("tbody")
  table.appendChild(tbody);
  var tfoot = ce("tfoot");
  table.appendChild(tfoot);
  tfoot.appendChild(ce("tr"));


  // Создание таблицы
  for (var i = 0; i < n; i++) {
    let tr = ce("tr");
    tbody.appendChild(tr);
    for (var j = 0; j < m; j++) {
      let td = ce("td", randomInteger(1,10));
      tr.appendChild(td);
    }
  }




  // Сорировочный столбец слева
  for (var i = 0; i < tbody.children.length; i++) {
    var elem1 = tbody.children[i];
    var elem2 = ce("td");
    elem2.classList.add("sort");
    var elem3 = tbody.children[i].children[0];
    elem1.insertBefore(elem2, elem3);
  }

  paintDiag();
  updateFooter();
  updateRigthSide();
  updateHeader();


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
      var rand = min + Math.random() * (max - min)
      rand = Math.round(rand);
      return rand;
    }
  function addRow() {
    let tr = ce("tr");
    tbody.appendChild(tr);
    for (var i = 0; i < tbody.children[0].children.length-1; i++) {
      if (i == 0) {
        let elem = ce('td');
        elem.classList.add("sort");
        tr.appendChild(elem);
      }
      tr.appendChild(ce("td", randomInteger(1,10)));
    }
    paintDiag();
    updateFooter();
    updateRigthSide();
    updateHeader();
  }
  function addColumn() {
    var tr = tbody.getElementsByTagName("tr");
    var len = tbody.children[0].children.length;
    for (var i = 0; i < tr.length; i++) {
      tbody.children[i].children[len-1].innerText = randomInteger(1,10)+'';
      tr[i].appendChild(ce("td", randomInteger(1,10)));
    }
    paintDiag();
    updateFooter();
    updateRigthSide();
    updateHeader();
  }
  var diagFlag = true;
  function paintDiag() {
    if (tbody.children.length == tbody.children[0].children.length-2) {
      for (var i = 0; i < tbody.children.length; i++) {
          tbody.children[i].children[i+1].classList.add("active");
      }
      diagFlag = true;
    } else {
      for (var i = 0; i < tbody.children.length; i++) {
        for (var j = 0; j < tbody.children[0].children.length-1; j++) {
          if (i == j) tbody.children[i].children[j+1].classList.remove("active");
        }
      }
      diagFlag = false;
    }

  }
  function updateFooter() {
   while (tbody.children[0].children.length-1 >= tfoot.children[0].children.length) {
     tfoot.children[0].appendChild(ce("td"));
   }
   for (var i = 1; i < tbody.children[0].children.length-1; i++) {
     let sum = 0;
     for (var k = 0; k < tbody.children.length; k++) {
       sum += +tbody.children[k].children[i].innerText;
     }
     tfoot.children[0].children[i].innerText = sum;
   }
   if (diagFlag) {
     let l = tfoot.children[0].children.length
     let sum = 0;
     for (var i = 1; i < l-1; i++) {
       sum += +tbody.children[i-1].children[i].innerText;
       tfoot.children[0].children[i].style.background = "#FAF3D2";
     }
     tfoot.children[0].children[l-1].style.background = "#4b4a45";
     tfoot.children[0].children[l-1].innerText = sum;
   } else {
     let l = tfoot.children[0].children.length;
     tfoot.children[0].children[l-1].innerText = '';
     for (var i = 1; i < l-1; i++) {
       tfoot.children[0].children[i].style.background = "#FAF3D2";
     }
     tfoot.children[0].children[l-1].style.background = "url(img/smile.jpg)";
   }
  }
  function updateRigthSide() {
    var l = tbody.children.length;
    var len = tbody.children[0].children.length;
    for (var i = 0; i < l; i++) {
      let sum = 0;
      for (var j = 0; j < len-1; j++) {
        sum += +tbody.children[i].children[j].innerText;
      }
      tbody.children[i].children[len-1].innerText = sum;
    }
  }
  function updateHeader() {
    if (thead.children[0].children.length < 1) {
      let elem = ce('td');
      thead.children[0].appendChild(elem);
    }
    while (thead.children[0].children.length < tbody.children[0].children.length-1) {
      let elem = ce('td');
      elem.classList.add('sort');
      thead.children[0].appendChild(elem);
    }
  }

// Создание панели с кнопками управления
  var div = ce("div");
  div.classList.add("noselect");
  div.id = "buttonPanel";
  document.body.insertAdjacentElement("afterBegin",div);
  div.appendChild(ce("div","Добавить строку","click",addRow));
  div.appendChild(ce("div","Добавить столбец","click",addColumn));
  var but = div.getElementsByTagName("div");
  for (var i = 0; i < but.length; i++) {
    but[i].classList.add('button');
  }
}
