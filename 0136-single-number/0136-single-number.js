/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let res = {}
    for (let num of nums) {
        res[num] = (res[num] || 0) + 1
    }
    for(let ar in res){
        if(res[ar]== 1){
            return Number(ar)
        }
    }
};