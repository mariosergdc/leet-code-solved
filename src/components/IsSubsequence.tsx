import React from "react";

const IsSubsequence = () => {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  var isSubsequence = function (s, t) {
    if (s === "") return true;
    let j = 0,
      itr = s[0],
      len = s.length;
    for (let i = 0; i < t.length; i++) {
      if (t[i] === itr) {
        j++;
        if (j === len) return true;
        itr = s[j];
      }
    }
    return false;
  };
  return <div>IsSubsequence</div>;
};

export default IsSubsequence;
