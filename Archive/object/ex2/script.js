'use strict'
class DOM {
  constructor(root) { // root ==   obj ->{ id, class, tag }
    var path;
    for (let key in root) {
      switch (key) {
        case 'id':
          path = document.getElementById(root.id);
          break;
        case 'tag':
          path = document.getElementsByTagName(root.tag)[0];
          break;
        case 'class':
          path = document.getElementsByClassName(root.class)[0];
          break;
      }
      if (path!=undefined) break;
    }
    path!=undefined ? this.root = path : 0;
  }
  ce(obj) { // obj = {name:div, click:func, text: "innertext"}
    var elem = document.createElement(obj.name);
    'text' in obj ? elem.innerText = obj.text : 0;
    'click' in obj ? elem.onclick = obj.click : 0;
    return elem;
  }
  render(elem) {
    var way = this.root;
    way.appendChild(elem);
  }
  clear(elem) {
    this.root.removeChild(elem);
  }
}

class Table extends DOM {
  constructor(obj) {
    super(obj);
    this.td = obj.td;
    this.tr = obj.tr;

    var table = super.ce({name: 'table'});
    for (var i = 0; i < this.tr; i++) {
      var row = super.ce({name: 'tr'});
      table.appendChild(row);
      for (var j = 0; j < this.td; j++) {
        var cell = super.ce({name: 'td', click: Table.clickTd});
        row.appendChild(cell);
      }
    }
    super.render(table);
  }
  static clickTd(){
    this.classList.toggle('active');
  }
  changeValue(){
    // при нажатии ПКМ меняем значение ячейки
  }
  modalShow(){

  }
}


// var t = new DOM({id:'my'});
// var element = t.ce({
//   name: 'div',
//   click: ale,
//   text: 'hello world гы'
// });
// t.render(element);
function ale() {
  alert(1);
}





var tab = new Table({id:'my', td: 4, tr: 5});
