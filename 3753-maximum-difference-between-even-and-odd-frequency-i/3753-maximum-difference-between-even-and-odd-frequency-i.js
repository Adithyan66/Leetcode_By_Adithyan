/**
 * @param {string} s
 * @return {number}
 */

var maxDifference = function (s) {
    let freqObj = {}

    for (let w of s) {
        freqObj[w] = (freqObj[w] || 0) + 1
    }

   let maxOdd = 0;
    let minEven = s.length;
    
    for (let freq of Object.values(freqObj)) {
        if (freq % 2 === 0) {
            minEven = Math.min(minEven, freq);
        } else {
            maxOdd = Math.max(maxOdd, freq);
        }
    }
    
    return maxOdd - minEven;
};