'use strict'
window.onload = function () {

  var arrayD = [];
  var s = 0, s2 = 0;

  for (var i = 0; i < table.rows.length; i++) {
    for (var j = 0; j < table.rows[i].cells.length; j++) {
      table.rows[i].cells[j].innerText = randomInteger(1,10);
      if (i == j) {
        arrayD.push([i,j]);
        table.rows[i].cells[j].style.background = "red";

        s += +table.rows[i].cells[j].innerText;
        sumM.innerText = `Сумма главной диагонали: ${s}`;
      }
      if (j == table.rows[i].cells.length - 1 - i) {
        arrayD.push([i,j]);
        table.rows[i].cells[j].style.background = "green";

        s2 += +table.rows[i].cells[j].innerText;
        sumP.innerText = `Сумма побочной диагонали: ${s2}`;
      }
    }
  }


  function randomInteger(min, max) {
    var rand = min + Math.random() * (max - min)
    rand = Math.round(rand);
    return rand;
  }




  for (var i = 0; i < table.rows.length; i++) {
    for (var j = 0; j < table.rows[i].cells.length; j++) {


      var summa = 0;


      table.rows[i].cells[j].onclick = function () {
        var cell = [i,j];
        var flag = true;
        for (var i = 0; i < arrayD.length; i++) {
          if ((cell[0] == arrayD[i][0]) && (cell[1] == arrayD[i][1])) {
            flag = false;
          }
        }
        console.log(flag);

        if (flag) {
          if (event.ctrlKey) {

            if (this.className == "") {
              this.classList.toggle("active");
              summa += +this.innerText;
              sum.innerText = `Сумма: ${summa}`;
            } else {
              this.classList.toggle("active");
              summa -= +this.innerText;
              sum.innerText = `Сумма: ${summa}`;
            }


          } else {

            summa = +this.innerText;
            sum.innerText = `Сумма: ${summa}`;
            for (var i = 0; i < table.rows.length; i++) {
              for (var j = 0; j < table.rows[i].cells.length; j++) {
                table.rows[i].cells[j].classList = "";
              }
            }
            this.className = "active";

          }
        }



      }



    }
  }

}
