import React from "react";

const KeyboardRow = () => {
  /**
   * @param {string[]} words
   * @return {string[]}
   */
  var findWords = function (words) {
    let first = "qwertyuiopQWERTYUIOP";
    let second = "asdfghjklASDFGHJKL";
    let third = "zxcvbnmZXCVBNM";
    let bfirst = 0;
    let bsecond = 0;
    let bthird = 0;
    let res = [];
    for (let i = 0; i < words.length; i++) {
      for (let j = 0; j < words[i].length; j++) {
        if (first.includes(words[i][j])) {
          bfirst++;
        } else if (second.includes(words[i][j])) {
          bsecond++;
        } else if (third.includes(words[i][j])) {
          bthird++;
        }
      }
      if (
        bfirst === words[i].length ||
        bsecond === words[i].length ||
        bthird === words[i].length
      ) {
        res.push(words[i]);
      }
      bfirst = 0;
      bsecond = 0;
      bthird = 0;
    }
    return res;
  };
  return <div>KeyboardRow</div>;
};

export default KeyboardRow;
