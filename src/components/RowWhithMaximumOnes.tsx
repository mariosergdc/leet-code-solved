import React from "react";

const RowWhithMaximumOnes = () => {
  /**
   * @param {number[][]} mat
   * @return {number[]}
   */
  var rowAndMaximumOnes = function (mat) {
    let cont,
      max = 0,
      row = 0;
    for (let i = 0; i < mat.length; i++) {
      cont = 0;
      for (let j = 0; j < mat[i].length; j++) {
        cont += mat[i][j];
      }
      if (cont > max) {
        max = cont;
        row = i;
      }
    }
    return [row, max];
  };
  return <div>RowWhitMaximumOnes</div>;
};

export default RowWhithMaximumOnes;
