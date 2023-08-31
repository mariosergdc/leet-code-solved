import React from "react";

const IslandPerimeter = () => {
  /**
   * @param {number[][]} grid
   * @return {number}
   */
  const perimeter = (grid, i, j) => {
    let cont = 0;
    if (i - 1 < 0 || grid[i - 1][j] === 0) cont++;
    if (j - 1 < 0 || grid[i][j - 1] === 0) cont++;
    if (i + 1 === grid.length || grid[i + 1][j] === 0) cont++;
    if (j + 1 === grid[0].length || grid[i][j + 1] === 0) cont++;

    return cont;
  };
  var islandPerimeter = function (grid) {
    let res = 0;
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] === 1) {
          res += perimeter(grid, i, j);
        }
      }
    }
    return res;
  };
  return <div>IslandPerimeter</div>;
};

export default IslandPerimeter;
