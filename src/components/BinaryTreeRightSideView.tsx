import React from "react";

const BinaryTreeRightSideView = () => {
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
  var rightSideView = function (root) {
    if (!root) return [];
    let res = [];
    const bfs = (row) => {
      res.push(row[row.length - 1]?.val);
      let newRow = [];
      for (let i = 0; i < row.length; i++) {
        if (row[i].left) newRow.push(row[i].left);
        if (row[i].right) newRow.push(row[i].right);
      }
      if (newRow.length !== 0) bfs(newRow);
    };
    bfs([root]);
    return res;
  };
  return <div>BinaryTreeRightSideView</div>;
};

export default BinaryTreeRightSideView;
