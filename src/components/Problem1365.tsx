import React from "react";

const Problem1365 = () => {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  var smallerNumbersThanCurrent = function (nums) {
    let res = [],
      cont;
    for (let i = 0; i < nums.length; i++) {
      cont = 0;
      for (let j = 0; j < nums.length; j++) {
        if (nums[j] < nums[i]) {
          cont++;
        }
      }
      res[i] = cont;
    }
    return res;
  };
  return <div>Problem1365</div>;
};

export default Problem1365;
