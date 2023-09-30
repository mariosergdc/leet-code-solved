import React from "react";

const MonotonicArray = () => {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  var isMonotonic = function (nums) {
    let asc = true,
      des = true;
    for (let i = 0; i < nums.length; i++) {
      j = i + 1;
      if (asc && nums[i] > nums[j]) {
        if (!des) return false;
        asc = false;
      } else if (des && nums[i] < nums[j]) {
        if (!asc) return false;
        des = false;
      }
    }
    return asc || des;
  };
  return <div>MonotonicArray</div>;
};

export default MonotonicArray;
