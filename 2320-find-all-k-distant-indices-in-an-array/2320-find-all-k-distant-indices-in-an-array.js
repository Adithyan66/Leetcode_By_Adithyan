/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function (nums, key, k) {
    let set = new Set()

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == key) {
            let start = Math.max(0, i - k)
            let end = Math.min(nums.length - 1, i + k)
            for (let j = start; j <= end; j++) {
                set.add(j)
            }
        }
    }
    return Array.from(set).sort((a,b)=>a-b)
};