/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {

    let freq = new Map()

    for (let num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1)
    }

    count = 0

    for (let [val, fre] of freq) {
        if (freq.has(val + 1)) {
            count = Math.max((freq.get(val) + freq.get(val + 1)), count)
        }
    }

    return count
};