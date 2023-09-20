import React from "react";

const HeightChecker = () => {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  var heightChecker = function (heights) {
    let res = 0,
      expected = [...heights].sort((a, b) => a - b);
    for (let i = 0; i < heights.length; i++) {
      if (heights[i] != expected[i]) res++;
    }
    return res;
  };
  return <div>HeightChecker</div>;
};

export default HeightChecker;
