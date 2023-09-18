import React from "react";

const FlippingAnImage = () => {
  /**
   * @param {number[][]} image
   * @return {number[][]}
   */
  var flipAndInvertImage = function (image) {
    let res = [];
    for (let i = 0; i < image.length; i++) {
      res[i] = image[i].map((e) => (e ? 0 : 1)).reverse();
    }
    return res;
  };
  return <div>FlippingAnImage</div>;
};

export default FlippingAnImage;
