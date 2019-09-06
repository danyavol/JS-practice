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
    let test = ft("http://www.nbrb.by/API/ExRates/Currencies",{
      method:"GET"
    }).then(data=>{
        console.log(data)
        //return data;
        data.forEach((obj)=>{
            let div =document.createElement("div");
            let p =document.createElement("p");
                p.innerHTML= `${obj.Cur_Code} - ${obj.Cur_Name}`
            div.appendChild(p);
            document.body.appendChild(div);
          })
    })
      .catch(error=>console.log(data));

    //console.log("привет promise");

        // xhr.onload = function () {
        //   console.log(xhr.status,xhr.statusText)
        //   let  cur = JSON.parse(xhr.responseText);
        //   cur.forEach((obj)=>{
        //     let div =document.createElement("div");
        //     let p =document.createElement("p");
        //         p.innerHTML= `${obj.Cur_Code} - ${obj.Cur_Name}`
        //     div.appendChild(p);
        //     document.body.appendChild(div);
        //   })
        //
        // }
  }

//"http://www.nbrb.by/API/ExRates/Currencies"
  function ft(url,options) {
    let xhr = new XMLHttpRequest();
        xhr.open(options.method,url,true);
        xhr.send();

        return new Promise((resolve,reject)=>{
          xhr.onload = function () {
            resolve(JSON.parse(xhr.responseText))
          }

          xhr.error = function () {
            reject({
              status:false,
              data : xhr.responseText
            })
          }
        })

  }




}
