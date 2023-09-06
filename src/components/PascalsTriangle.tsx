import React from "react";

const PascalsTriangle = () => {
  /**
   * @param {number} numRows
   * @return {number[][]}
   */
  var res = [];
  res[0] = [1];
  res[1] = [1, 1];
  for (let i = 2; i < 31; i++) {
    res[i] = new Array();
    res[i].push(1);
    for (let j = 0; j < res[i - 1].length - 1; j++) {
      res[i].push(res[i - 1][j] + res[i - 1][j + 1]);
    }
    res[i].push(1);
  }
  var generate = function (numRows) {
    let resp = [];
    for (let i = 0; i < numRows; i++) {
      resp[i] = res[i];
    }
    return resp;
  };
  return <div>PascalsTriangle</div>;
};

export default PascalsTriangle;
