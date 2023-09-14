import React from "react";

const SetMatrixZeroes = () => {
  /**
   * @param {number[][]} matrix
   * @return {void} Do not return anything, modify matrix in-place instead.
   */
  const setZero = (mat, i, j) => {
    let aux1 = i,
      aux2 = j;
    while (aux1 >= 0) {
      mat[aux1][j] = 0;
      aux1--;
    }
    aux1 = i;
    while (aux1 < mat.length) {
      mat[aux1][j] = 0;
      aux1++;
    }
    while (aux2 >= 0) {
      mat[i][aux2] = 0;
      aux2--;
    }
    aux2 = j;
    while (aux2 < mat[0].length) {
      mat[i][aux2] = 0;
      aux2++;
    }
    return;
  };
  var setZeroes = function (matrix) {
    let m = matrix.length,
      n = matrix[0].length;
    let mat = new Array(m);
    for (let i = 0; i < m; i++) {
      mat[i] = new Array(n);
      for (let j = 0; j < n; j++) {
        mat[i][j] = matrix[i][j];
      }
    }
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (matrix[i][j] === 0) {
          setZero(mat, i, j);
        }
      }
    }
    console.log(mat);
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        matrix[i][j] = mat[i][j] && matrix[i][j];
      }
    }
  };
  return <div>SetMatrixZeroes</div>;
};

export default SetMatrixZeroes;
