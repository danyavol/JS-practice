'use strict'
window.onload = function() {
  tab1.onclick = function() {
    block1.style.display="block";
    block2.style.display="none";
  }
  tab2.onclick = function() {
    block1.style.display="none";
    block2.style.display="block";
  }
}
