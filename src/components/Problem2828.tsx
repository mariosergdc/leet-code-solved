import React from "react";

const Problem2828 = () => {
  /**
   * @param {string[]} words
   * @param {string} s
   * @return {boolean}
   */
  var isAcronym = function (words, s) {
    if (words.length != s.length) return false;
    for (let i = 0; i < words.length; i++) {
      if (words[i][0] != s[i]) return false;
    }
    return true;
  };
  return <div>Problem2828</div>;
};

export default Problem2828;
