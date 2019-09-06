'use strict'
// methods:
// removeAll() -> string
// showItem()
// removeItem()
// updateItem()
// addItem()
//
//
// items:
// count:
//
//
// id:
// title:
// desc:
// completed:


















class Storage {
  constructor(arr=[]) {
    this.items = [...arr];
    this.count = this.items.length;
    for (var i = 0; i < this.count; i++) {
      if (("id" in this.items[i]) && ("title" in this.items[i]) && ("desc" in this.items[i])) {
        this.items[i].completed = true;
      } else this.items[i].completed = false;
    }
  }

  removeAll() {
    this.items = [];
    this.count = 0;
    console.log('Items removed!\n',this);
  }

  showItem(name) {
    let str = '';
    for (var i = 0; i < this.count; i++) {
      if (this.items[i].id == name) {
        str += `${this.items[i]}`;
      }
    }
    console.log(str);
  }

}



var x = new Storage([{id:13},{id:22, title:"yy", desc: "asfd"},{id:15}]);
console.log(x);
x.showItem("13");
