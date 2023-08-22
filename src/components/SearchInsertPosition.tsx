import React from "react";

const SearchInsertPosition = () => {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number}
   */
  var res = 0,
    solved = false;
  const recursive = (nums, target, start, end) => {
    if (solved) {
      return;
    }
    let mid;
    if ((end - start) % 2 === 0) {
      mid = (end - start) / 2 + start;
    } else {
      mid = (end - start + 1) / 2 + start;
    }
    if (target < nums[start]) {
      solved = true;
      res = start;
      return start;
    }
    if (target > nums[end]) {
      solved = true;
      res = end + 1;
      return end + 1;
    }
    if (end - start === 1) {
      if (target === nums[start]) {
        solved = true;
        res = start;
        return start;
      }

      solved = true;
      res = end;
      return end;
    }
    if (nums[start] <= target && target <= nums[mid]) {
      recursive(nums, target, start, mid);
    } else if (nums[mid] <= target && target <= nums[end]) {
      recursive(nums, target, mid, end);
    }
  };

  var searchInsert = function (nums, target) {
    let mid,
      i = 0,
      n = nums.length - 1;
    solved = false;
    res = 0;
    if (nums.length === 1) {
      if (target <= nums[0]) {
        return 0;
      }
      return 1;
    }
    recursive(nums, target, 0, nums.length - 1);
    solved = false;
    let resp = res;
    res = 0;
    return resp;
  };
  return <div>SearchInsertPosition</div>;
};

export default SearchInsertPosition;
