import React from "react";
const ValidSudoku = () => {
  /**
   * @param {character[][]} board
   * @return {boolean}
   */

  var isValidSudoku = function (board) {
    for (let i = 0; i < 9; i++) {
      let setx = {};
      let sety = {};
      for (let j = 0; j < 9; j++) {
        if (setx[board[i][j]] != undefined) {
          return false;
        }
        if (board[i][j] != ".") setx[board[i][j]] = "0";
        if (sety[board[j][i]] != undefined) {
          return false;
        }
        if (board[j][i] != ".") sety[board[j][i]] = "0";
      }
    }
    for (let i = 0; i < 9; i += 3) {
      for (let j = 0; j < 9; j += 3) {
        let set = {};
        for (let k = 0; k < 3; k++) {
          for (let l = 0; l < 3; l++) {
            if (board[k + i][l + j] != ".") {
              if (set[board[k + i][l + j]] != undefined) {
                return false;
              }
              set[board[k + i][l + j]] = "0";
            }
          }
        }
      }
    }
    return true;
  };
  return <div>ValidSudoku</div>;
};

export default ValidSudoku;
