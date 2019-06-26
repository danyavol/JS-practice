'use strict'
window.onload = function() {
  tab1.onclick = function() {
    block1.style.display="block";
    block2.style.display="none";
    tab1.style.border = "1px solid black";
    tab1.style.borderBottom = "1px solid white";
    tab2.style.border = "1px solid white";
    tab2.style.borderBottom = "1px solid black";
  }
  tab2.onclick = function() {
    block1.style.display="none";
    block2.style.display="block";
    tab2.style.border = "1px solid black";
    tab2.style.borderBottom = "1px solid white";
    tab1.style.border = "1px solid white";
    tab1.style.borderBottom = "1px solid black";
  }
}
