import React from "react";

const Problem1647 = () => {
  /**
   * @param {string} s
   * @return {number}
   */
  var minDeletions = function (s) {
    const cont = {};
    for (let i = 0; i < s.length; i++) {
      if (cont[s[i]]) {
        cont[s[i]] += 1;
      } else {
        cont[s[i]] = 1;
      }
    }
    const contKeys = Object.keys(cont);
    const freqArr = [];
    for (let i = 0; i < contKeys.length; i++) {
      freqArr.push(cont[contKeys[i]]);
    }
    freqArr.sort((a, b) => b - a);
    let res = 0;
    while (freqArr.length > 0) {
      console.log(freqArr.length);
      let currentFreq = freqArr.shift();
      if (freqArr.includes(currentFreq)) {
        while (freqArr.includes(currentFreq)) {
          currentFreq--;
          res++;
        }
        if (currentFreq > 0) {
          freqArr.push(currentFreq);
          freqArr.sort((a, b) => b - a);
        }
      }
    }
    return res;
  };
  return <div>Problem1647</div>;
};

export default Problem1647;
