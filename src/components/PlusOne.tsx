import React from "react";

const PlusOne = () => {
  /**
   * @param {number[]} digits
   * @return {number[]}
   */
  var plusOne = function (digits) {
    let rest = 1;
    for (let i = digits.length - 1; i >= 0; i--) {
      digits[i] += rest;
      if (digits[i] === 10) {
        digits[i] = 0;
        rest = 1;
      } else {
        rest = 0;
      }
    }
    if (rest === 1) digits.unshift(1);
    return digits;
  };
  return <div>PlusOne</div>;
};

export default PlusOne;
