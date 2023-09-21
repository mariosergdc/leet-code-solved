import React from "react";

const NUmberComplement = () => {
  /**
   * @param {number} num
   * @return {number}
   */
  function binaryToDecimal(binaryNumber) {
    let decimalNumber = 0;
    let binaryDigits = binaryNumber.split("").reverse();
    for (let i = 0; i < binaryDigits.length; i++) {
      decimalNumber += binaryDigits[i] * Math.pow(2, i);
    }
    return decimalNumber;
  }
  var findComplement = function (num) {
    let bin = num.toString(2);
    let compBin = "";
    for (let i = 0; i < bin.length; i++) {
      compBin += bin[i] === "1" ? "0" : "1";
    }
    return binaryToDecimal(compBin);
  };
  return <div>NUmberComplement</div>;
};

export default NUmberComplement;
