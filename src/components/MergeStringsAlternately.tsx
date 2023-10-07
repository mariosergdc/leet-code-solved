import React from 'react'

const MergeStringsAlternately = () => {
    /**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let i=0,len1=word1.length,len2=word2.length,res=""
    if(len1<=len2){
        while(i<len1){
            res+=word1[i]+word2[i]
            i++
        }
        while(i<len2){
            res+=word2[i]
            i++
        }
    }else{
        while(i<len2){
            res+=word1[i]+word2[i]
            i++
        }
        while(i<len1){
            res+=word1[i]
            i++
        }
    }
    return res
};
  return (
    <div>MergeStringsAlternately</div>
  )
}

export default MergeStringsAlternately