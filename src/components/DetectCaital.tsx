import React from "react";

const DetectCaital = () => {
  /**
   * @param {string} word
   * @return {boolean}
   */
  var detectCapitalUse = function (w) {
    if (w.length === 1) return true;
    let res = true;
    if (w[0] >= "a" && w[0] <= "z") {
      for (let i = 1; i < w.length; i++) {
        if (w[i] < "a" || w[i] > "z") {
          return false;
        }
      }
      return true;
    } else {
      if (w[1] >= "a" && w[1] <= "z") {
        for (let i = 2; i < w.length; i++) {
          if (w[i] < "a" || w[i] > "z") {
            return false;
          }
        }
        return true;
      } else {
        for (let i = 2; i < w.length; i++) {
          if (w[i] >= "a" && w[i] <= "z") {
            return false;
          }
        }
        return true;
      }
    }
  };
  return <div>DetectCaital</div>;
};

export default DetectCaital;
