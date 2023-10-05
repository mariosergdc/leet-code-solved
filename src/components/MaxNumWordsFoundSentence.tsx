import React from "react";

const MaxNumWordsFoundSentence = () => {
  /**
   * @param {string[]} sentences
   * @return {number}
   */
  var mostWordsFound = function (sentences) {
    let max = 0,
      aux;
    sentences.map((el) => {
      aux = el.split(" ").length;
      if (aux > max) max = aux;
    });
    return max;
  };
  return <div>MaxNumWordsFoundSentence</div>;
};

export default MaxNumWordsFoundSentence;
