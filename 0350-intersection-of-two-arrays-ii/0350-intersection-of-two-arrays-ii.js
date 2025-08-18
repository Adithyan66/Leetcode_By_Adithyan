/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let res = []
    
    for(let num of nums1){
        if(nums2.includes(num)){
            let ind = nums2.indexOf(num)
            nums2[ind]= null
            res.push(num)
        }
    }
    return res
};