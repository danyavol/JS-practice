'use strict';
window.onload = function () {
  let gal = document.getElementsByClassName('gallery');
  let img = gal[0].getElementsByTagName('img');

  big.src = img[0].getAttribute("data-src");
  //img[0].className="active";


  for (var i = 0; i < img.length; i++) {
    img[i].onclick = imgChange;
  }

  function imgChange() {
    let active = document.getElementsByClassName("active");
    if(active.length!=0) {
      active[0].className="";
    }

    big.src = this.getAttribute("src");
    this.className = "active"
  }
}
