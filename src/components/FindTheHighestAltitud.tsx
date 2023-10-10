import React from "react";

const FindTheHighestAltitud = () => {
  /**
   * @param {number[]} gain
   * @return {number}
   */
  var largestAltitude = function (gain) {
    let aux = 0,
      max = 0;
    for (let i = 0; i < gain.length; i++) {
      aux += gain[i];
      if (aux > max) max = aux;
    }
    return max;
  };
  return <div>FindTheHighestAltitud</div>;
};

export default FindTheHighestAltitud;
