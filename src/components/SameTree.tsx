import React from "react";

const SameTree = () => {
  /**
   * Definition for a binary tree node.
   * function TreeNode(val, left, right) {
   *     this.val = (val===undefined ? 0 : val)
   *     this.left = (left===undefined ? null : left)
   *     this.right = (right===undefined ? null : right)
   * }
   */
  /**
   * @param {TreeNode} p
   * @param {TreeNode} q
   * @return {boolean}
   */
  var res = true;
  const dfs = (p, q) => {
    if (!res) return;

    if (p === null) {
      if (q === null) {
        console.log("true1");
        return;
      }
      console.log("false1");
      return (res = false);
    }
    if (q === null) {
      if (p === null) {
        console.log("true2");
        return;
      }
      console.log("false2");
      return (res = false);
    }
    if (p.val != q.val) {
      console.log("false3");
      return (res = false);
    }
    dfs(p.left, q.left);
    dfs(p.right, q.right);
    return;
  };
  var isSameTree = function (p, q) {
    res = true;
    dfs(p, q);
    return res;
  };
  return <div>SameTree</div>;
};

export default SameTree;
