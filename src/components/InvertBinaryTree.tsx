import React from "react";

const InvertBinaryTree = () => {
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
   * @return {TreeNode}
   */
  var invertTree = function (root) {
    if (!root) return null;
    let aux = root.left;
    root.left = root.right;
    root.right = aux;
    invertTree(root.left);
    invertTree(root.right);
    return root;
  };
  return <div>InvertBinaryTree</div>;
};

export default InvertBinaryTree;
