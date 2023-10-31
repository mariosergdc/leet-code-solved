import React from "react";

const ValidPalindrome = () => {
  /**
   * @param {string} s
   * @return {boolean}
   */
  var isPalindrome = function (s) {
    let str = "";
    for (let i = 0; i < s.length; i++) {
      if (
        (s[i] >= "a" && s[i] <= "z") ||
        (s[i] >= "A" && s[i] <= "Z") ||
        (s[i] >= "0" && s[i] <= "9")
      ) {
        str += s[i];
      }
    }
    str = str.toLowerCase();
    let i = 0,
      j = str.length - 1;
    while (i <= j) {
      if (str[i] != str[j]) return false;
      i++;
      j--;
    }
    return true;
  };
  return <div>ValidPalindrome</div>;
};

export default ValidPalindrome;
