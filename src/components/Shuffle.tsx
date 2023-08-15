import React from "react";

const Shuffle = () => {
  /**
   * @param {number[]} nums
   * @param {number} n
   * @return {number[]}
   */
  var shuffle = function (nums: number[], n: number) {
    let res: number[] = [];
    for (let i = 0; i < n; i++) {
      res.push(nums[i]);
      res.push(nums[i + n]);
    }
    return res;
  };
  return <div>Shuffle</div>;
};

export default Shuffle;
