import React from "react";

const Candy = () => {
  /**
   * @param {number[]} ratings
   * @return {number}
   */
  var candy = function (ratings) {
    let res = ratings.length;
    let candies = new Array(res).fill(1);
    for (let i = 0; i < ratings.length; i++) {
      if (
        ratings[i] > ratings[i + 1] &&
        candies[i] <= candies[i + 1] &&
        i + 1 < ratings.length
      ) {
        let rest = candies[i + 1] - candies[i];
        res += rest + 1;
        candies[i] = candies[i + 1] + 1;
        i -= 2;
      } else if (
        ratings[i] > ratings[i - 1] &&
        candies[i] <= candies[i - 1] &&
        i - 1 >= 0
      ) {
        let rest = candies[i - 1] - candies[i];
        res += rest + 1;
        candies[i] = candies[i - 1] + 1;
        i -= 2;
      }
    }
    return res;
  };
  return <div>Candy</div>;
};

export default Candy;
