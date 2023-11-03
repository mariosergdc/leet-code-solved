import React from "react";

const NumberOfOneBits = () => {
  /**
   * @param {number} n - a positive integer
   * @return {number}
   */
  var hammingWeight = function (n) {
    let s = n.toString(2),
      c = 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "1") c++;
    }
    return c;
  };
  return <div>NumberOfOneBits</div>;
};

export default NumberOfOneBits;
