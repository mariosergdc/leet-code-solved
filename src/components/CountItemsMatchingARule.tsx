import React from "react";

const CountItemsMatchingARule = () => {
  /**
   * @param {string[][]} items
   * @param {string} ruleKey
   * @param {string} ruleValue
   * @return {number}
   */
  var countMatches = function (items, ruleKey, ruleValue) {
    let res = 0;
    for (let i = 0; i < items.length; i++) {
      if (
        (ruleKey == "type" && ruleValue == items[i][0]) ||
        (ruleKey == "color" && ruleValue == items[i][1]) ||
        (ruleKey == "name" && ruleValue == items[i][2])
      )
        res++;
    }
    return res;
  };
  return <div>CountItemsMatchingARule</div>;
};

export default CountItemsMatchingARule;
