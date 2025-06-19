/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var partitionArray = function (nums, k) {
    let arr = nums.sort((a, b) => a - b)
    let a = arr[0]
    let count =1
    for (let b of arr) {
        if (b - a > k) {
            count++
            a = b
        }
    }
    return count
};