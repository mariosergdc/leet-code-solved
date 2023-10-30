import React from "react";

const PathSum = () => {
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
   * @param {number} targetSum
   * @return {boolean}
   */
  var hasPathSum = function (root, targetSum) {
    if (!root) return false;
    let res = false;
    const bfs = (node, actualSum) => {
      if (!node) return;
      if (res) return;
      let newSum = actualSum + node.val;
      if (node.left === null && node.right === null && newSum === targetSum) {
        res = true;
        return;
      }
      bfs(node.left, newSum);
      bfs(node.right, newSum);
    };
    bfs(root, 0);
    return res;
  };
  return <div>PathSum</div>;
};

export default PathSum;
