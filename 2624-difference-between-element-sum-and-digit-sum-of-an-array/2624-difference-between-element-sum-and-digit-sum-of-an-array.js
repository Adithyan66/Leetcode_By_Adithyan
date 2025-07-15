/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
    let sum = 0
    let digitSum = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        digitSum += getSum(nums[i])
    }
    return sum - digitSum
};


function getSum(num) {
    let str = num.toString()
    let res = 0
    for (let i = 0; i < str.length; i++) {
        res+=Number(str[i])
    }
    return res
}