import React from "react";

const ValidAnagram = () => {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  var isAnagram = function (s, t) {
    let ns = s.split("").sort().join(),
      nt = t.split("").sort().join();
    return ns === nt;
  };
  return <div>ValidAnagram</div>;
};

export default ValidAnagram;
