import React from "react";

const ReverseVowels = () => {
  /**
   * @param {string} s
   * @return {string}
   */
  var reverseVowels = function (s) {
    let v = [],
      indx = [];
    let arr = s.split("");

    for (let i = 0; i < s.length; i++) {
      if (/[aeiou]/i.test(s[i])) {
        indx.push(i);
        v.push(s[i]);
      }
    }
    v.reverse();
    for (let i = 0; i < indx.length; i++) {
      arr[indx[i]] = v[i];
    }
    return arr.join("");
  };
  return <div>ReverseVowels</div>;
};

export default ReverseVowels;
