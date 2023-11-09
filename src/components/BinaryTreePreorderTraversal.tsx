import React from "react";

const BinaryTreePreorderTraversal = () => {
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
  var preorderTraversal = function (root) {
    let res = [];
    const pre = (node) => {
      if (!node) return;
      res.push(node.val);
      pre(node.left);
      pre(node.right);
    };
    pre(root);
    return res;
  };
  return <div>BinaryTreePreorderTraversal</div>;
};

export default BinaryTreePreorderTraversal;
