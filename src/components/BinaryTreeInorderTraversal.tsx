const BinaryTreeInorderTraversal = () => {
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

  let inorderTraversal = function (root) {
    const res = [];
    const nodes = [];

    let current = root;

    while (current || nodes.length) {
      while (current) {
        nodes.push(current);
        current = current.left;
      }
      let currentNode = nodes.pop();
      res.push(currentNode.val);
      current = currentNode.right;
    }
    return res;
  };
  return <div>BinaryTreeInorderTraversal</div>;
};

export default BinaryTreeInorderTraversal;
