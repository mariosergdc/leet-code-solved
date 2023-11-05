import React from 'react'

const SignOfAProductOfAnArray = () => {
    /**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let contNeg=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]===0)return 0
        if(nums[i]<0)contNeg++
    }
    return contNeg%2===0?1:-1
};
  return (
    <div>SignOfAProductOfAnArray</div>
  )
}

export default SignOfAProductOfAnArray