import React from "react";

const Problem1008 = () => {
  /**
   * Definition for a binary tree node.
   * function TreeNode(val, left, right) {
   *     this.val = (val===undefined ? 0 : val)
   *     this.left = (left===undefined ? null : left)
   *     this.right = (right===undefined ? null : right)
   * }
   */
  /**
   * @param {number[]} preorder
   * @return {TreeNode}
   */

  const insert = (node, preorder, i) => {
    if (preorder[i] < node.val) {
      if (!node.left) {
        node.left = new TreeNode(preorder[i]);
      } else {
        insert(node.left, preorder, i);
      }
    } else if (preorder[i] > node.val) {
      if (!node.right) {
        node.right = new TreeNode(preorder[i]);
      } else {
        insert(node.right, preorder, i);
      }
    }
  };

  var bstFromPreorder = function (preorder) {
    let root = new TreeNode(preorder[0]);
    for (let i = 0; i < preorder.length; i++) {
      insert(root, preorder, i);
    }
    return root;
  };
  return <div>Problem1008</div>;
};

export default Problem1008;
