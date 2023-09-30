import React from "react";

const RunningSum = () => {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  var runningSum = function (nums) {
    let res = [];
    res.push(nums[0]);
    for (let i = 1; i < nums.length; i++) {
      res.push(nums[i] + res[i - 1]);
    }
    return res;
  };
  return <div>RunningSum</div>;
};

export default RunningSum;
