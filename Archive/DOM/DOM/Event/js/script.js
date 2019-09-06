'use strict';
window.onload = function () {
  window.onkeydown = function () {
    if(event.which === 32) {
      let r = randomInteger(0,255);
      let g = randomInteger(0,255);
      let b = randomInteger(0,255);
      document.body.style.background = `rgb(${r},${g},${b})`
    }
  }

  //document.body.onmousemove =  eventClicker;
  //document.body.onclick=  eventClicker;
  document.body.oncontextmenu =  eventContext;
  document.body.onwheel = wheelRun;
  function eventClicker() {
    //console.log(event.clientX,event.clientY)
    console.log(event.target);
    console.log(event.which);
  }

  function eventContext() {
    event.preventDefault();
    console.log(event.which);

  }

  function wheelRun() {
    console.log(event.wheelDelta);
  }


  function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  }

  let li = document.getElementsByClassName("menu")[0].children;
  for (var i = 0; i < li.length; i++) {
    li[i].onclick = liClick;
  }

  function liClick() {
    if(event.ctrlKey) {
      this.classList.toggle("active");
    }
    else {
      for (var i = 0; i < li.length; i++) {
        li[i].className = "";
      }
      // div class="col-md-12 run test"
      // this.className = this.className + " active";
      /*
        let data = this.className => "col-md-12 run test active"
        let arr= data.split(" ");
      */
      this.className = "active";
    }


  }

}
