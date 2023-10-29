import React from "react";

const MaximumDepthOfABinaryTree = () => {
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
  var maxDepth = function (root) {
    if (!root) return 0;
    let res = 1;
    const dfs = (root, depth) => {
      if (!root) return;
      if (depth > res) {
        res = depth;
      }
      dfs(root.left, depth + 1);
      dfs(root.right, depth + 1);
    };
    dfs(root, 1);
    return res;
  };
  return <div>MaximumDepthOfABinaryTree</div>;
};

export default MaximumDepthOfABinaryTree;
