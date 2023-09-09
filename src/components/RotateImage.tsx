import React from "react";

const RotateImage = () => {
  /**
   * @param {number[][]} matrix
   * @return {void} Do not return anything, modify matrix in-place instead.
   */
  var rotate = function (matrix) {
    let aux,
      len = matrix.length;
    let mat = [];
    for (let i = 0; i < len; i++) {
      mat[i] = new Array();
      for (j = 0; j < len; j++) {
        mat[i][j] = matrix[i][j];
      }
    }
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        matrix[j][len - 1 - i] = mat[i][j];
      }
    }
  };
  return <div>RotateImage</div>;
};

export default RotateImage;
