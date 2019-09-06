'use strict';
window.onload = function () {
  // дата последнего посещения
  // дата когда умрут куки
  // валидация имени фамилии(подсвечивать если не ввел что-либо)


  //



  if(checkCookie("name") && checkCookie("lastname")) {

    if (checkCookie("count")) {
      var num = getCookie("count");
      num++;
      setCookie("count",num, 90);
    } else {
      setCookie("count", "1", 90);
      var num = getCookie("count");
    }

    auth.remove();
    let cookieName1 = getCookie("name");
    let cookieName2 = getCookie("lastname");
    let div = ce("div");
    let span =  ce("span",`Привет, ${cookieName2} ${cookieName1}`);
    let countVisit = ce("p",`Количество просмотров: ${num}`);
    let exit =  ce("p",`Выход`,"click",reloadAll);
      div.appendChild(span);
      div.appendChild(countVisit);
      div.appendChild(exit);
      document.body.appendChild(div);
  }
  else{
    run.onclick= function functionName() {

      if(/^\w{3,15}$/.test(user_name.value) && /^\w{3,15}$/.test(user_lastname.value)){
        let val1 = user_name.value;
        let val2 = user_lastname.value;
        if(save_auth.checked){
          setCookie("name",val1, 90);
          setCookie("lastname",val2, 90);
          location.reload(true);
        }
        else {
          setCookie("name",val1);
          setCookie("lastname",val2);
          location.reload(true);
        }
      }




    }
  }



  function setCookie(key,val,time) {
    let cookie="";
    if(time===undefined) {
      cookie=`${key}=${val}`
    }
    else {
      let date =  new Date();
      date.setMinutes(time);
      cookie=`${key}=${val};expires=${date.toUTCString()}`
    }


    document.cookie = cookie;
  }

  function checkCookie(key) {
    return document.cookie.indexOf(key)!=-1 ? true : false;
  }

  function getCookie(key) {
    let arr = document.cookie.split("; ");
    let res;
    arr.forEach((item)=>{
      if(item.split("=")[0]===key){
        res=item.split("=")[1]
      }
    })

    if(res!=undefined) return res;
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

  function reloadAll() {
    setCookie("name","",-90);
    setCookie("lastname","",-90);
    setCookie("count","",-90);
    location.reload(true);
  }

}
