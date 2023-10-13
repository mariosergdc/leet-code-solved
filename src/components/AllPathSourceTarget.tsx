import React from "react";

const AllPathSourceTarget = () => {
  /**
   * @param {number[][]} graph
   * @return {number[][]}
   */
  var allPathsSourceTarget = function (g) {
    let res = [],
      target = g.length - 1;
    const search = (node, path) => {
      path.push(node);
      if (node === target) {
        res.push(path);
      }
      for (let i = 0; i < g[node].length; i++) {
        search(g[node][i], [...path]);
      }
    };
    search(0, []);
    return res;
  };
  return <div>AllPathSourceTarget</div>;
};

export default AllPathSourceTarget;
