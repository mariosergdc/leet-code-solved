import React from "react";

const ArrayWrapper = () => {
  /**
   * @param {number[]} nums
   */
  var ArrayWrapper = function (nums) {
    this.nums = nums;
  };

  ArrayWrapper.prototype.valueOf = function () {
    let res = 0;
    this.nums.map((el) => (res += el));
    return res;
  };

  ArrayWrapper.prototype.toString = function () {
    return "[" + this.nums.join(",") + "]";
  };

  /**
   * const obj1 = new ArrayWrapper([1,2]);
   * const obj2 = new ArrayWrapper([3,4]);
   * obj1 + obj2; // 10
   * String(obj1); // "[1,2]"
   * String(obj2); // "[3,4]"
   */
  return <div>ArrayWrapper</div>;
};

export default ArrayWrapper;
