import React from "react";

const EvenOddTree = () => {
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
   * @return {boolean}
   */
  var isEvenOddTree = function (root) {
    let flag = true;
    const isEven = (arr, even) => {
      if (arr.length === 0) return;
      if (!flag) return;
      if (even) {
        //console.log("par",arr)
        for (let i = 0; i < arr.length - 1; i++) {
          if (arr[i].val <= arr[i + 1].val || arr[i].val % 2 !== 0) {
            //console.log("fffff",arr)
            flag = false;
            return;
          }
        }
        if (arr[arr.length - 1].val % 2 !== 0 && arr.length - 1 >= 0) {
          // console.log("aaaaa")
          flag = false;
          return;
        }
      } else {
        //console.log("impar",arr)
        for (let i = 0; i < arr.length - 1; i++) {
          if (arr[i].val >= arr[i + 1].val || arr[i].val % 2 === 0) {
            //console.log("bbbb")
            flag = false;
            return;
          }
        }
        if (arr[arr.length - 1].val % 2 === 0 && arr.length - 1 >= 0) {
          //console.log("zzz")
          flag = false;
          return;
        }
      }
      //new row
      let newRow = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].left) newRow.push(arr[i].left);
        if (arr[i].right) newRow.push(arr[i].right);
      }
      isEven(newRow, !even);
    };
    isEven([root], false);
    return flag;
  };
  return <div>EvenOddTree</div>;
};

export default EvenOddTree;
