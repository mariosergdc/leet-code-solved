import React from "react";

const SortTheStudents = () => {
  /**
   * @param {number[][]} score
   * @param {number} k
   * @return {number[][]}
   */
  var sortTheStudents = function (score, k) {
    let aux;
    for (let i = 0; i < score.length; i++) {
      for (let j = i + 1; j < score.length; j++) {
        if (score[j][k] > score[i][k]) {
          aux = score[i];
          score[i] = score[j];
          score[j] = aux;
        }
      }
    }
    return score;
  };
  return <div>SortTheStudents</div>;
};

export default SortTheStudents;
