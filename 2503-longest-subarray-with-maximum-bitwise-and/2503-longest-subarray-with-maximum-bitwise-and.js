/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    const max = Math.max(...nums);
    let maxLen = 0, count = 0;

    for (let num of nums) {
        if (num === max) {
            count++;
            maxLen = Math.max(maxLen, count);
        } else {
            count = 0;
        }
    }

    return maxLen;
};
