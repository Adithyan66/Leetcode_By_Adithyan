/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let res = new Set
    for(let i of nums1){
        if(nums2.includes(i)){
            res.add(i)
        }
    }

     for(let i of nums2){
        if(nums1.includes(i)){
            res.add(i)
        }
    }
    return Array.from(res)
};