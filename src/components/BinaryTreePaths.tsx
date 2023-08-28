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
      let newParents = new String(parents);
      let str = `->${node.val}`;
      let newP = newParents.concat(str);

      res.push(newP);
    }
    let newParents = new String(parents);
    let newParents2 = new String(parents);
    let str = `->${node.val}`;

    let newP = newParents.concat(str);
    let newP2 = newParents2.concat(str);
    console.log(newP);
    dfs(node.left, newP);
    dfs(node.right, newP2);
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
