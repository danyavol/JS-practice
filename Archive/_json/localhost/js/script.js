'use strict';

window.onload = function () {

  let json = new XMLHttpRequest();
  json.open("GET","./json/info.json",true);
  json.send();
  var db;
  json.onload = function () {
    db = JSON.parse(json.responseText);
    console.log(db);
    for (let i = 0; i < db.length; i++) {
      tovar.appendChild(createItem(db[i]));
    }
  }
  function createItem(obj) {
    let div = ce({name:"div"});
    div.appendChild(ce({name:"p", text:obj.name}));
    div.appendChild(ce({name:"img", src:obj.gallery}));
    div.appendChild(ce({name:"p", text:obj.desc}));
    let info = ce({name:"div"});
    info.classList.add("info");
    info.appendChild(ce({name:"div", text:`${obj.price} BLR`}));
    info.appendChild(ce({name:"div", text:`${obj.count} шт.`}));
    div.appendChild(info);
    return div;
  }
  function ce(obj) { // obj = {name:"div", click:func, text: "innertext", src: "url"}
    var elem = document.createElement(obj.name);
    'text' in obj ? elem.innerText = obj.text : 0;
    'click' in obj ? elem.onclick = obj.click : 0;
    if (('src' in obj) && (obj.name == 'img')) {
      elem.src = obj.src;
    }
    return elem;
  }



  // выгружаем курс валют с nbrb.by и заносим в обьект todayCurr
  var todayCurr = new Object();
  let xhr = new XMLHttpRequest();
  xhr.open("GET","http://www.nbrb.by/API/ExRates/Rates?Periodicity=0",true);
  xhr.send();
  xhr.onload = function () {
    let  cur = JSON.parse(xhr.responseText);
    cur.forEach((obj)=>{
      switch (obj.Cur_ID) {
        case 145:
        case 292:
        case 298:
        let key = obj.Cur_Abbreviation;
        let val = obj.Cur_OfficialRate;
        todayCurr[key] = val;
          break;
      }
    });
    console.log(todayCurr);
  }



  function changeValue() {
    for (var i = 0; i < buttons.children.length; i++) {
      buttons.children[i].classList.remove("active");
    }
    this.classList.add("active");


    let abbr;
    switch (this.id) {
      case "dollar":
        abbr = "USD";
        break;
      case "euro":
        abbr = "EUR";
        break;
      case "rub":
        abbr = "RUB";
        break;
      case "belRub":
        abbr = "BLR";
        break;
      default:

    }


    if (abbr != "BLR") {
      let k = todayCurr[abbr];
      for (var i = 0; i < tovar.children.length; i++) {
        let item = tovar.children[i].getElementsByClassName('info')[0].firstChild;
        let price = db[i].price * k;
        price = Math.round(price * 100) / 100;
        item.innerText = `${price} ${abbr}`;
      }
    } else {
      for (var i = 0; i < tovar.children.length; i++) {
        let item = tovar.children[i].getElementsByClassName('info')[0].firstChild;
        item.innerText = `${db[i].price} ${abbr}`;
      }
    }

  }

  dollar.onclick = changeValue;
  euro.onclick = changeValue;
  rub.onclick = changeValue;
  belRub.onclick = changeValue;
}
