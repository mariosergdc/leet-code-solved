import React from "react";

const CountServersthatCommunicate = () => {
  /**
   * @param {number[][]} grid
   * @return {number}
   */
  var countServers = function (grid) {
    let rows = new Array(grid.length);
    cols = new Array(grid[0].length);
    res = 0;
    rows.fill(0);
    cols.fill(0);

    for (let i = 0; i < rows.length; i++) {
      for (let j = 0; j < cols.length; j++) {
        if (grid[i][j] === 1) {
          if (rows[i] === 0 && cols[j] === 0) {
            rows[i] = 1;
            cols[j] = 1;
          } else if (rows[i] === 0 && cols[j] === 1) {
            rows[i] = 2;
            cols[j] = 2;
            res += 2;
            for (let k = i; k >= 0; k--) {
              if (grid[k][j] === 1) {
                rows[k] = 2;
                //k=0
              }
            }
          } else if (rows[i] === 0 && cols[j] === 2) {
            rows[i] = 2;
            res++;
          } else if (rows[i] === 1 && cols[j] === 0) {
            rows[i] = 2;
            cols[j] = 2;
            res += 2;
            for (let k = j; k >= 0; k--) {
              if (grid[i][k] === 1) {
                cols[k] = 2;
                //k=0
              }
            }
          } else if (rows[i] === 1 && cols[j] === 1) {
            rows[i] = 2;
            cols[j] = 2;
            res += 3;
            for (let k = i; k >= 0; k--) {
              if (grid[k][j] === 1) {
                rows[k] = 2;
                //k=0
              }
            }
            for (let k = j; k >= 0; k--) {
              if (grid[i][k] === 1) {
                cols[k] = 2;
                //k=0
              }
            }
          } else if (rows[i] === 1 && cols[j] === 2) {
            rows[i] = 2;
            res += 2;
            for (let k = j; k >= 0; k--) {
              if (grid[i][k] === 1) {
                cols[k] = 2;
                //k=0
              }
            }
          } else if (rows[i] === 2 && cols[j] === 0) {
            cols[j] = 2;
            res++;
          } else if (rows[i] === 2 && cols[j] === 1) {
            cols[j] = 2;
            res += 2;
            for (let k = i; k >= 0; k--) {
              if (grid[k][j] === 1) {
                rows[k] = 2;
                //k=0
              }
            }
          } else if (rows[i] === 2 && cols[j] === 2) {
            res++;
          }
        }
      }
    }
    return res;
  };
  return <div>CountServersthatCommunicate</div>;
};

export default CountServersthatCommunicate;
