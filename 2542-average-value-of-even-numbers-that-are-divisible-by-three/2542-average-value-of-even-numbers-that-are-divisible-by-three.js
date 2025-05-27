/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function (nums) {
    let sum = 0
    let k = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0 && nums[i] % 3 == 0) {
            sum += nums[i]
            k++
        }
    }
    if (k == 0) return 0
    let output = Math.floor(sum / k)
    console.log( output)
    return output
};