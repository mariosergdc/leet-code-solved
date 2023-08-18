import React from "react";

const DeepestLeavesSum = () => {
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
   * @return {number}
   */

  var dfs = function (node, deep, sum) {
    if (node == null) return;
    if (sum[deep] === undefined) {
      sum.push(0);
    }
    sum[deep] += node.val;
    dfs(node.left, deep + 1, sum);
    dfs(node.right, deep + 1, sum);
    return;
  };

  var deepestLeavesSum = function (root) {
    const arr = [];
    dfs(root, 0, arr);
    return arr[arr.length - 1];
  };
  return <div>DeepestLeavesSum</div>;
};

export default DeepestLeavesSum;
