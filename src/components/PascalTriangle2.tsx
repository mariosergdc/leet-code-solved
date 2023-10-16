import React from "react";

const PascalTriangle2 = () => {
  /**
   * @param {number} rowIndex
   * @return {number[]}
   */
  var getRow = function (rowIndex) {
    if (rowIndex === 0) return [1];
    let a = [];
    a.push(1, 1);
    for (let i = 1; i < rowIndex; i++) {
      a = a.map((el, index) => {
        if (index < a.length - 1) {
          return el + a[index + 1];
        } else return el;
      });
      a.unshift(1);
    }
    return a;
  };
  return <div>PascalTriangle2</div>;
};

export default PascalTriangle2;
