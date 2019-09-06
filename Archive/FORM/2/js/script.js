'use strict';
window.onload = function () {
  var arr= [1,2,3,1,7,3,1,6,9];
  function uniq(arr){
    let copy = [].concat(arr);
    let res = [];
    let count = 0;
    for (var i = 0; i < copy.length; i++) {
      for (var j = 0; j < copy.length; j++) {
        if(copy[i]==copy[j]) count++
      }


      if(count==1){
        res.push(copy[i]);
      }

      count=0;
    }

    return res
  }






  message.oninput = function () {


    if(this.value.length>20){
      this.value=this.value.slice(0,19);
    }
    count.innerHTML = `${this.value.length} / 20`
  }

  function checkRequire(arr) {
    let flag = true;
    for (var i = 0; i < arr.length; i++) {
      let elem = document.getElementById(arr[i]);
      if(elem.value==""){
        runError(elem,true,"Поле не заполнено");
        flag=false;
      }
      else {
        runError(elem,false);
      }
    }
  }

  function checkPass(arr) {
      let p1 = document.querySelector(`#${arr[0]}`);
      let p2 = document.querySelector(`#${arr[1]}`);
      if( p1.value==p2.value){
        runError( p1,false);
        runError( p2,false);

        return true

      }
      else {
        runError(p1,true,"Поле не заполнено");
        runError(p2 ,true,"Поле не заполнено");
        return false
      }

  }
  function runError(elem,set=true,text="поле не очень") {

    if(set) {
      if(elem.parentNode.querySelectorAll(".error").length==0){
        let err = document.createElement("span");
            err.className="error";
            err.innerHTML=text;
            elem.parentNode.appendChild(err);
      }
    }
    else {
      if(elem.parentNode.querySelector(".error")!=null){
        elem.parentNode.querySelector(".error").remove();
      }

    }



  }

  function getValue(arr) {
    let res = [];
    for (var i = 0; i < arr.length; i++) {
      let elem =  document.getElementById(arr[i]);
      res.push([elem.getAttribute("data-name"), elem.value]);
    }

    return res;
  }

  send.onclick = function () {
      let fields = checkRequire(["login","pass1","pass2","message"])
      let pass = checkPass(["pass1","pass2"]);
      if(pass && fields){
          let data = getValue(["login","pass1","message"])
          console.log(data);
      }

  }
}
