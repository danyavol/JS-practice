window.onload = function() {
  var tab = document.getElementsByClassName('tab');
  for (var i = 0; i < tab.length; i++) {

    tab[i].onclick = function() {
      var elem = this.nextElementSibling;
      if (elem.style.display.length == 0 || elem.style.display == "none") {
        elem.style.display = "block";
      } else {
        elem.style.display = "none";
      }
    }

  }
}
