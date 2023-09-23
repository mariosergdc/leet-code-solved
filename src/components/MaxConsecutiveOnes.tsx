import React from "react";

const MaxConsecutiveOnes = () => {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  var findMaxConsecutiveOnes = function (nums) {
    let i = 0,
      cont,
      max = 0,
      len = nums.length;
    while (i < len) {
      cont = 0;
      while (nums[i] === 1) {
        cont++;
        i++;
      }
      if (max < cont) {
        max = cont;
      }
      i++;
    }
    return max;
  };
  return <div>MaxConsecutiveOnes</div>;
};

export default MaxConsecutiveOnes;
