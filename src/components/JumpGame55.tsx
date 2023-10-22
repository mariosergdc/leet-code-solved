import React from "react";

const JumpGame55 = () => {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */

  var canJump = function (nums) {
    let len = nums.length - 1,
      end = nums[0];
    for (let i = 0; i <= end; i++) {
      if (end >= len) {
        return true;
      }
      end = Math.max(end, nums[i] + i);
    }
    return false;
  };
  return <div>JumpGame55</div>;
};

export default JumpGame55;
