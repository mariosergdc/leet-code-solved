import React from "react";

const RelativeSortArray = () => {
  /**
   * @param {number[]} arr1
   * @param {number[]} arr2
   * @return {number[]}
   */
  var relativeSortArray = function (arr1, arr2) {
    let cant = new Map(),
      res = [];
    for (let i = 0; i < arr1.length; i++) {
      if (arr2.includes(arr1[i])) {
        if (cant[arr1[i]] >= 0) {
          cant[arr1[i]]++;
        } else {
          cant[arr1[i]] = 1;
        }
        arr1[i] = -1;
      }
    }
    for (let i = 0; i < arr2.length; i++) {
      for (let j = 0; j < cant[arr2[i]]; j++) {
        res.push(arr2[i]);
      }
    }
    arr1.sort((a, b) => a - b);
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] > -1) {
        res.push(arr1[i]);
      }
    }
    return res;
  };
  return <div>RelativeSortArray</div>;
};

export default RelativeSortArray;
