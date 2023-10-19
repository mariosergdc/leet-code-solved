import React from "react";

const MaximumNestingDepthoftheParentheses = () => {
  /**
   * @param {string} s
   * @return {number}
   */
  var maxDepth = function (s) {
    let stack = [],
      res = 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "(") {
        stack.push("(");
        if (stack.length > res) res = stack.length;
      } else if (s[i] === ")") {
        stack.pop();
      }
    }
    return res;
  };
  //stack
  return <div>MaximumNestingDepthoftheParentheses</div>;
};

export default MaximumNestingDepthoftheParentheses;
