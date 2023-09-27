import React from "react";

const AddDigits = () => {
  /**
   * @param {number} num
   * @return {number}
   */
  var addDigits = function (num) {
    let a = num;
    while (true) {
      a = a.toString().split("");
      if (a.length === 1) {
        return a[0];
      } else {
        a = a.reduce((acc, el) => acc + +el, 0);
      }
    }
  };
  return <div>AddDigits</div>;
};

export default AddDigits;
