'use strict';
window.onload = function () {

  let data = [];
  let text = document.querySelectorAll('.text_field');
  text[0].focus();
  for (var i = 0; i < text.length; i++) {
    text[i].onblur = checkTextField;
  }

  message.oninput = function () {


    if(this.value.length>20){
      this.value=this.value.slice(0,19);
    }
    count.innerHTML = `${this.value.length} / 20`
  }

  function checkTextField() {
    if(this.value!="") {
      data.push([this.name,this.value]);
      this.disabled = true;
      console.log(data);
      this.classList.remove("error");
      return;
    }

    this.focus();
    this.classList.add("error");

  }

  send.onclick = function () {
    let form = document.forms.reg;
    let elems = form.elements;
    let select = elems.city.options;
    console.log(select);
    let str="";
    for (var i = 0; i < elems.length; i++) {
      if(elems[i].type=="text" || elems[i].type=="password"){
        str+=`${elems[i].name} - ${elems[i].value} \n`;
      }
    }


    for (var i = 0; i < select.length; i++) {
      if(select[i].selected){
        str+=`city - ${select[i].value} \n`;
        break;
      }
    }


    console.log(str);
  }
}
