import React from "react";

const Problem1282 = () => {
  /**
   * @param {number[]} groupSizes
   * @return {number[][]}
   */
  var groupThePeople = function (groupSizes) {
    let res = [];
    let obj = {};
    for (let i = 0; i < groupSizes.length; i++) {
      if (!obj[groupSizes[i]]) {
        let arr = [];
        arr.push(i);
        obj[groupSizes[i]] = { arr, size: groupSizes[i] };
      } else {
        obj[groupSizes[i]].arr.push(i);
      }
      if (obj[groupSizes[i]].size === obj[groupSizes[i]].arr.length) {
        res.push(obj[groupSizes[i]].arr);
        delete obj[groupSizes[i]];
      }
    }
    return res;
  };
  return <div>Problem1282</div>;
};

export default Problem1282;
