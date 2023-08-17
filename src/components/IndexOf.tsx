import React from "react";

const IndexOf = () => {
  /**
   * @param {string} haystack
   * @param {string} needle
   * @return {number}
   */
  var strStr = function (haystack, needle) {
    return haystack.indexOf(needle);
  };
  return <div>IndexOf</div>;
};

export default IndexOf;
