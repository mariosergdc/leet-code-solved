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
 * @return {string}
 */
var s = "";
const preorder = (node) => {
  if (node === null) return;
  s += node.val;
  if (node.left) {
    s += "(";
    preorder(node.left);
    s += ")";
  }
  if (node.right) {
    s += "(";
    preorder(node.right);
    s += ")";
  }
  return;
};
var tree2str = function (root) {
  s = "";
  preorder(root);
  return s;
};
