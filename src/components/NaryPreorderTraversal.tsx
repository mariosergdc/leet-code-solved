import React from "react";

const NaryPreorderTraversal = () => {
  /**
   * // Definition for a Node.
   * function Node(val, children) {
   *    this.val = val;
   *    this.children = children;
   * };
   */

  /**
   * @param {Node|null} root
   * @return {number[]}
   */
  var preorder = function (root) {
    let res = [];
    const pre = (node) => {
      if (!node) return;
      res.push(node.val);
      for (let i = 0; i < node.children.length; i++) {
        pre(node?.children[i]);
      }
    };
    pre(root);
    return res;
  };
  return <div>NaryPreorderTraversal</div>;
};

export default NaryPreorderTraversal;
