import React from "react";

const ArrayReduceTransformation = () => {
  /**
   * @param {number[]} nums
   * @param {Function} fn
   * @param {number} init
   * @return {number}
   */
  var reduce = function (nums, fn, init) {
    return nums.reduce((acc, val) => fn(acc, val), init);
  };
  return <div>ArrayReduceTransformation</div>;
};

export default ArrayReduceTransformation;
