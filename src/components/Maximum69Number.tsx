import React from "react";

const Maximum69Number = () => {
  /**
   * @param {number} num
   * @return {number}
   */
  var maximum69Number = function (num) {
    let snum = num.toString();
    let res = "",
      i = 0,
      j;
    while (i < snum.length) {
      if (snum[i] === "6") {
        res += "9";
        i++;
        j = i;
        i = snum.length;
      } else {
        res += "9";
      }
      i++;
    }
    while (j < snum.length) {
      res += snum[j];
      j++;
    }
    return res;
  };
  return <div>Maximum69Number</div>;
};

export default Maximum69Number;
