import React from "react";

const MoveZeroes = () => {
  /**
   * @param {number[]} nums
   * @return {void} Do not return anything, modify nums in-place instead.
   */
  var moveZeroes = function (nums) {
    let rest = 0;
    let len = nums.length;
    for (let i = 0; i < len; i++) {
      if (nums[i] === 0) {
        nums.splice(i, 1);
        rest++;
        i--;
        len--;
      }
    }
    for (let i = 0; i < rest; i++) {
      nums.push(0);
    }
    return;
  };
  return <div>MoveZeroes</div>;
};

export default MoveZeroes;
