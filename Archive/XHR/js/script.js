'use strict';
// import Homework from "./homeObject.js";
// import AJAX from "./ajax.js";
// let core = new Homework();
window.onload = function () {
  let json = new XMLHttpRequest();
      json.open("GET","/json/info.json",true);
      json.send();
      json.onload = function () {
        console.log(JSON.parse(json.responseText));
      }

  run.onclick = function () {

    let xhr = new XMLHttpRequest();
        xhr.open("GET","http://www.nbrb.by/API/ExRates/Currencies",true);
        xhr.send();
        xhr.onload = function () {
          console.log(xhr.status,xhr.statusText)
          let  cur = JSON.parse(xhr.responseText);
          cur.forEach((obj)=>{
            let div =document.createElement("div");
            let p =document.createElement("p");
                p.innerHTML= `${obj.Cur_Code} - ${obj.Cur_Name}`
            div.appendChild(p);
            document.body.appendChild(div);
          })

        }
  }

}
