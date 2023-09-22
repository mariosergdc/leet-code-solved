import React from "react";

const LongestCommonPrefix = () => {
  /**
   * @param {string[]} strs
   * @return {string}
   */
  var longestCommonPrefix = function (strs) {
    let len = strs.length;
    let k = 0;
    let itr,
      res = "";
    while (true) {
      if (k >= strs[0].length) {
        return res;
      }
      itr = strs[0][k];
      for (let i = 1; i < len; i++) {
        if (strs[i][k] !== itr || k >= strs[i].length) {
          return res;
        }
      }
      res += itr;
      k++;
    }
  };
  return <div>LongestCommonPrefix</div>;
};

export default LongestCommonPrefix;
