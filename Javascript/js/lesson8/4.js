'use strict'
// Написать функцию, которая принимает две матрицы и оператор(+ - * /). Вывести результат если это возможно.
function Determinant(A)   // Определитель матрицы (используется алгоритм Барейса)
{
    var N = A.length, B = [], denom = 1, exchanges = 0;
    for (var i = 0; i < N; ++i)
     { B[i] = [];
       for (var j = 0; j < N; ++j) B[i][j] = A[i][j];
     }
    for (var i = 0; i < N-1; ++i)
     { var maxN = i, maxValue = Math.abs(B[i][i]);
       for (var j = i+1; j < N; ++j)
        { var value = Math.abs(B[j][i]);
          if (value > maxValue){ maxN = j; maxValue = value; }
        }
       if (maxN > i)
        { var t = B[i]; B[i] = B[maxN]; B[maxN] = t;
          ++exchanges;
        }
       else { if (maxValue == 0) return maxValue; }
       var value1 = B[i][i];
       for (var j = i+1; j < N; ++j)
        { var value2 = B[j][i];
          B[j][i] = 0;
          for (var k = i+1; k < N; ++k) B[j][k] = (B[j][k]*value1-B[i][k]*value2)/denom;
        }
       denom = value1;
     }                                           //@ http://mathhelpplanet.com/viewtopic.php?f=44&t=22390
    if (exchanges%2) return -B[N-1][N-1];
    else return B[N-1][N-1];
}

function InverseMatrix(A)   // Обратная матрица
{
    var det = Determinant(A);
    if (det == 0) return false;
    var N = A.length, invA = [];
    for (var i = 0; i < N; i++)
     { invA[i] = [];
       for (var j = 0; j < N; j++)
        { var B = [], sign = ((i+j)%2==0) ? 1 : -1;
          for (var m = 0; m < j; m++)
           { B[m] = [];
             for (var n = 0; n < i; n++)   B[m][n] = A[m][n];
             for (var n = i+1; n < N; n++) B[m][n-1] = A[m][n];
           }
          for (var m = j+1; m < N; m++)
           { B[m-1] = [];
             for (var n = 0; n < i; n++)   B[m-1][n] = A[m][n];
             for (var n = i+1; n < N; n++) B[m-1][n-1] = A[m][n];
           }
          invA[i][j] = sign*Determinant(B)/det;
        }
     }
    return invA;
}

function MatrixCalc(arr1, arr2, operation) {
    var result = [];
    switch (operation) {
        case '+':
            // количество строк и столбцов должно быть одинаковым
            if ((arr1[0].length == arr2[0].length) && (arr1.length == arr2.length)) {
                for (let i = 0; i < arr1.length; i++) {
                    result.push([]);
                    for (let j = 0; j < arr1[i].length; j++) {
                        result[i][j] = arr1[i][j] + arr2[i][j];
                    }
                }
            }
            break;
        case '-':
            // количество строк и столбцов должно быть одинаковым
            if ((arr1[0].length == arr2[0].length) && (arr1.length == arr2.length)) {
                for (let i = 0; i < arr1.length; i++) {
                    result.push([]);
                    for (let j = 0; j < arr1[i].length; j++) {
                        result[i][j] = arr1[i][j] - arr2[i][j];
                    }
                }
            }
            break;
        case '*':
            // число столбцов матрицы А должно быть равно числу строк матрицы Б
            if (arr1[0].length == arr2.length) {
                for (let k = 0; k < arr2[0].length; k++) {
                    for (let i = 0; i < arr1.length; i++) {
                        if (result.length <= i) result.push([]); // !!
                        let n = 0;
                        for (let j = 0; j < arr1[i].length; j++) {
                            n += arr1[i][j]*arr2[j][k];
                        }
                        result[i].push(n);
                    }
                }
            }
            break;
        case '/':
            // матрица Б должна быть квадратной
            // детерминант матрицы Б не равен 0
            // число столбцов матрицы А должно быть равно числу строк матрицы Б
            // умножать матрицу А на ОБРАТНУЮ матрицу Б
            if ((arr2[0].length == arr2.length) && (arr1[0].length == arr2.length)) {
                var arr2New = InverseMatrix(arr2);
                if (arr2New != false) {
                    for (let k = 0; k < arr2New[0].length; k++) {
                        for (let i = 0; i < arr1.length; i++) {
                            if (result.length <= i) result.push([]); // !!
                            let n = 0;
                            for (let j = 0; j < arr1[i].length; j++) {
                                n += arr1[i][j]*arr2New[j][k];
                            }
                            result[i].push(n);
                        }
                    }
                }
            }
            break;
    }
    return result;
}









var array1 = [[13, 26],
              [39, 13]];
var array2 = [[7, 4],
              [2, 3]];
var result = MatrixCalc(array1,array2,'/');

var str1 = '';
for (let i = 0; i < array1.length; i++) {
  str1 += array1[i].join(' ') + '\n';
}

var str2 = '';
for (let i = 0; i < array2.length; i++) {
  str2 += array2[i].join(' ') + '\n';
}

var str3 = '';
for (let i = 0; i < result.length; i++) {
  str3 += result[i].join(' ') + '\n';
}

console.log(str1+'\n'+str2+'\n'+str3);
