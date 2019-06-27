'use strict'
window.onload = function () {
  var arrayD = []; // массив содержащий координаты элементов-исключений(диагональных элементов)
  var s = 0, s2 = 0;

  for (var i = 0; i < table.rows.length; i++) { // i - по вертикали
    for (var j = 0; j < table.rows[i].cells.length; j++) { // j - по горизонтали
      table.rows[i].cells[j].innerText = randomInteger(1,10);
      if (i == j) { // главная диагональ
        arrayD.push([i,j]);
        table.rows[i].cells[j].className = "mainDiag";

        s += +table.rows[i].cells[j].innerText;
        sumM.innerText = `Сумма главной диагонали: ${s}`;
      }
      if (j == table.rows[i].cells.length - 1 - i) { // побочная диагональ
        arrayD.push([i,j]);
        table.rows[i].cells[j].className = "secondDiag";

        s2 += +table.rows[i].cells[j].innerText;
        sumP.innerText = `Сумма побочной диагонали: ${s2}`;
      }
      if ((i == 0) || (i == table.rows.length-1) || (j == 0) || (j == table.rows[0].cells.length-1)) {
        arrayD.push([i,j]);
        table.rows[i].cells[j].className = "perimetr";
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
      var prevElem = [0,0];

      table.rows[i].cells[j].onclick = function () {

        // Нахождение координат элемента this и запись их в cell[i,j]
        for (var i = 0; i < table.rows.length; i++) {
          for (var j = 0; j < table.rows[i].cells.length; j++) {
            if (this == table.rows[i].cells[j]) var cell = [i,j];
          }
        }
        // Проверка на то, является ли this элементом-исключением
        var flag = true;
        for (var i = 0; i < arrayD.length; i++) {
          if ((arrayD[i][0] == cell[0]) && (arrayD[i][1] == cell[1])) {
            flag = false;
          }
        }


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
            prevElem = [cell[0],cell[1]];

          } else if (event.shiftKey) {
            
            var flag1 = true;
            for (var i = prevElem[0]; i < cell[0] + 1; i++) {
              for (var j = 0; j < table.rows[0].cells.length; j++) {

                if (flag1) {
                  j = prevElem[1];
                  flag1 = false;
                }
                if (j == cell[1]+1 && i == cell[0]) break;

                var flag2 = true;
                for (var k = 0; k < arrayD.length; k++) {
                  if ( (arrayD[k][0] == i) && (arrayD[k][1] == j) ) {
                    flag2 = false;
                  }
                }
                if (flag2) {
                  if (table.rows[i].cells[j].className == "") {
                    table.rows[i].cells[j].className = "active";
                    summa += +table.rows[i].cells[j].innerText;
                    sum.innerText = `Сумма: ${summa}`;
                  }
                }

              }
            }

          } else {


            summa = +this.innerText;
            sum.innerText = `Сумма: ${summa}`;
            for (var i = 0; i < table.rows.length; i++) {
              for (var j = 0; j < table.rows[i].cells.length; j++) {
                var flag1 = true;
                for (var k = 0; k < arrayD.length; k++) {
                  if ((arrayD[k][0] == i) && (arrayD[k][1] == j)) {
                    flag1 = false;
                  }
                }
                if (flag1) table.rows[i].cells[j].className = "";
              }
            }
            this.className = "active";
            prevElem = [cell[0],cell[1]];
          }
        }



      }



    }
  }

}
