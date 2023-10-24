import React from "react";

const FindLargestValueInEachTreeRow = () => {
  /**
   * Definition for a binary tree node.
   * function TreeNode(val, left, right) {
   *     this.val = (val===undefined ? 0 : val)
   *     this.left = (left===undefined ? null : left)
   *     this.right = (right===undefined ? null : right)
   * }
   */
  /**
   * @param {TreeNode} root
   * @return {number[]}
   */

  var largestValues = function (root) {
    if (!root) return [];
    let res = [];
    const bfs = (row) => {
      if (row.length === 0) return;
      let max = -Infinity;
      for (let i = 0; i < row.length; i++) {
        if (row[i].val > max) {
          max = row[i].val;
        }
      }
      res.push(max);
      let newRow = [];
      for (let i = 0; i < row.length; i++) {
        if (row[i].left) newRow.push(row[i].left);
        if (row[i].right) newRow.push(row[i].right);
      }
      bfs(newRow);
    };
    let start = [root];
    bfs(start);
    return res;
  };
  return <div>FindLargestValueInEachTreeRow</div>;
};

export default FindLargestValueInEachTreeRow;
