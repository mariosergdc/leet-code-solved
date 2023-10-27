import React from "react";

const RemoveDuplicatesFromSortedArray = () => {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  var removeDuplicates = function (nums) {
    let act = nums[0];
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] === nums[i - 1]) {
        nums.splice(i, 1);
        i--;
      }
    }
  };
  return <div>RemoveDuplicatesFromSortedArray</div>;
};

export default RemoveDuplicatesFromSortedArray;
