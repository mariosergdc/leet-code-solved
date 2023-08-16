import React from "react";

const ValidParentheses = () => {
  /**
   * @param {string} s
   * @return {boolean}
   */
  const charMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  var isValid = function (s) {
    let arr = s.split("");
    let stack = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "(" || arr[i] === "{" || arr[i] === "[") {
        stack.push(arr[i]);
      } else {
        if (charMap[stack.pop()] != arr[i]) {
          return false;
        }
      }
    }
    if (stack.length != 0) return false;
    return true;
  };
  return <div>ValidParentheses</div>;
};

export default ValidParentheses;
