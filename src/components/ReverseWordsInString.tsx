import React from "react";

const ReverseWordsInString = () => {
  /**
   * @param {string} s
   * @return {string}
   */
  var reverseWords = function (s) {
    return s
      .split(" ")
      .map((w) => w.split("").reverse().join(""))
      .join(" ");
  };
  return <div>ReverseWordsInString</div>;
};

export default ReverseWordsInString;
