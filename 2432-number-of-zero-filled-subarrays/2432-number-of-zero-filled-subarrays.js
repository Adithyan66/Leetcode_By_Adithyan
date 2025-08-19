/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function (nums) {
    let count = 0, res = 0
    for (let num of nums) {
        if (num == 0){
            count++
            res+=count
        }else{
            count = 0
        }
    }
    return res
}    