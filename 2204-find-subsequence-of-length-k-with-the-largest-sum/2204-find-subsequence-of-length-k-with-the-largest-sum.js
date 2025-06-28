/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function (nums, k) {
    let arr =[...nums]
    arr.sort((a, b) => b - a)
    let newi = []
    for (let i = 0; i < k; i++) {
        newi.push(arr[i])
    }
    let res = []

    for (let i = 0; i < nums.length; i++) {
        if (res.length >= k) break
        for (let j = 0; j < newi.length; j++) {
            if (nums[i] == newi[j]) {
                res.push(newi[j])
                newi.splice(j, 1)
                break
            }
        }
    }



    console.log(nums)

return res
};