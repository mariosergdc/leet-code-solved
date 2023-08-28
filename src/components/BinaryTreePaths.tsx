import React from "react";

const BinaryTreePaths = () => {
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
   * @return {string[]}
   */
  var res;
  const dfs = (node, parents) => {
    if (node === null) return;
    if (node.left === null && node.right === null) {
      let newP = parents.concat(`->${node.val}`);
      res.push(newP);
    }
    let newP = parents.concat(`->${node.val}`);
    dfs(node.left, newP);
    dfs(node.right, newP);
  };

  var binaryTreePaths = function (root) {
    res = [];
    let result = [];
    dfs(root, "");
    for (let i = 0; i < res.length; i++) {
      result.push(res[i].slice(2));
    }
    return result;
  };
  return <div>BinaryTreePaths</div>;
};

export default BinaryTreePaths;
