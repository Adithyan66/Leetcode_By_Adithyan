/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {

    // let diff = 0

    // for (let i = 0; i < nums.length - 1; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if (nums[i] < nums[j] && Math.abs(nums[j] - nums[i]) > diff) {
    //             diff = Math.abs(nums[j] - nums[i])
    //         }
    //     }
    // }

    // if(diff == 0){
    //     return -1
    // }else{
    //     return diff
    // }

    let min = nums[0]
    let diff = -1

    for(let i =1 ; i< nums.length ; i++){
        if(nums[i]>min){
            diff = Math.max(diff, nums[i]- min)
        }else{
            min = nums[i]
        }
    }
    return diff


};