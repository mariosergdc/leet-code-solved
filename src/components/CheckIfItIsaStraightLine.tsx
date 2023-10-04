import React from "react";

const CheckIfItIsaStraightLine = () => {
  /**
   * @param {number[][]} coordinates
   * @return {boolean}
   */
  var checkStraightLine = function (coordinates) {
    let p1 = coordinates[0],
      p2 = coordinates[1];
    let m = (p1[0] - p2[0]) / (p1[1] - p2[1]),
      act,
      nom = p1[0];

    for (let i = 1; i < coordinates.length - 1; i++) {
      act =
        (coordinates[i][0] - coordinates[i + 1][0]) /
        (coordinates[i][1] - coordinates[i + 1][1]);
      if (act !== m && coordinates[i][1] - coordinates[i + 1][1] !== 0) {
        return false;
      }
      if (m === 0 && coordinates[i][0] !== coordinates[i + 1][0]) return false;
    }
    return true;
  };
  return <div>CheckIfItIsaStraightLine</div>;
};

export default CheckIfItIsaStraightLine;
