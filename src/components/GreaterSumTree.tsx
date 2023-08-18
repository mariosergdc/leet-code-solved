import React from "react";

const GreaterSumTree = () => {
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

  const recorrer = (root, val) => {
    if (root === null) {
      return 0;
    }
    root.val = root.val + recorrer(root.right, val);
    if (root.right === null) {
      root.val += val;
    }
    let izqVal = recorrer(root.left, root.val);
    return izqVal >= newVal ? izqVal : newVal;
  };

  var bstToGst = function (root) {
    recorrer(root, 0);
    return root;
  };
  return <div>GreaterSumTree</div>;
};

export default GreaterSumTree;
