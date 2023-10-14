import React from "react";

const CombinationSum = () => {
  /**
   * @param {number[]} candidates
   * @param {number} target
   * @return {number[][]}
   */
  var combinationSum = function (candidates, target) {
    let res = [];
    const back = (index, path, actualSum) => {
      let aux = candidates[index] + actualSum;
      path.push(candidates[index]);
      if (aux === target) {
        res.push(path);
        return;
      }
      if (aux > target) return;
      for (let i = index; i < candidates.length; i++) {
        back(i, [...path], aux);
      }
      return;
    };
    for (let j = 0; j < candidates.length; j++) {
      back(j, [], 0);
    }
    return res;
  };
  return <div>CombinationSum</div>;
};

export default CombinationSum;
