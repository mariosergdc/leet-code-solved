import React from "react";

const ReshapeTheMatrix = () => {
  /**
   * @param {number[][]} mat
   * @param {number} r
   * @param {number} c
   * @return {number[][]}
   */
  var matrixReshape = function (mat, r, c) {
    if (mat.length * mat[0].length !== r * c) return mat;
    let i,
      j,
      k = 0,
      l = 0;
    let res = new Array(r);
    for (let p = 0; p < res.length; p++) {
      res[p] = new Array(c);
    }
    for (i = 0; i < mat.length; i++) {
      for (j = 0; j < mat[0].length; j++) {
        res[k][l] = mat[i][j];
        l++;
        if (l === c) {
          l = 0;
          k++;
        }
      }
    }
    return res;
  };
  return <div>ReshapeTheMatrix</div>;
};

export default ReshapeTheMatrix;
