import React from "react";

const ZigZag = () => {
  /**
   * @param {string} s
   * @param {number} numRows
   * @return {string}
   */
  var convert = function (s, numRows) {
    let res = [];
    let index = 0;
    for (let i = 0; i < numRows; i++) {
      res[i] = new Array();
    }

    let len = s.length;
    let j = 0;
    let flag = true;
    while (flag) {
      for (let i = 0; i < numRows; i++) {
        res[i][j] = s[index];
        index++;
        if (index === len) {
          flag = false;
          i = numRows;
        }
      }
      if (flag) {
        for (let i = numRows - 2; i > 0; i--) {
          j++;
          res[i][j] = s[index];
          index++;
          if (index === len) {
            flag = false;
            i = numRows;
          }
        }
      }
      j++;
    }
    let arr = [];
    //console.log(res[1][2]);
    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < len; j++) {
        if (res[i][j]) {
          arr.push(res[i][j]);
        }
      }
    }
    let str = arr.join("");
    return str;
  };
  return <div>ZigZag</div>;
};

export default ZigZag;
