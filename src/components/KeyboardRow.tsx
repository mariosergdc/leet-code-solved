import React from "react";

const KeyboardRow = () => {
  /**
   * @param {string[]} words
   * @return {string[]}
   */
  var findWords = function (words) {
    let first = "qwertyuiop";
    console.log(first);
    let second = "asdfghjkl";
    let third = "zxcvbnm";
    let bfirst = true;
    let bsecond = true;
    let bthird = true;
    for (let i = 0; i < words.length; i++) {
      for (let j = 0; j < words[i].length; j++) {
        if (!first.includes(words[i][j])) {
          bfirst = false;
        }
      }
    }
  };
  return <div>KeyboardRow</div>;
};

export default KeyboardRow;
