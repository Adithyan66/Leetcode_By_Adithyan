/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function (nums, ko) {

    let arr = nums.sort((a, b) => a - b)
    let newarr = [], kooy = []
    for (let i = 0; i < arr.length; i += 3) {
        kooy = [arr[i], arr[i + 1], arr[i + 2]]
        if (kooy[kooy.length - 1] - kooy[0] > ko) {
            return []
        } else {
            newarr.push(kooy)
        }
    }
    console.log(newarr)


    return newarr
};