// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  */
// var FindSumPairs = function(nums1, nums2) {
    
// };

// /** 
//  * @param {number} index 
//  * @param {number} val
//  * @return {void}
//  */
// FindSumPairs.prototype.add = function(index, val) {
    
// };

// /** 
//  * @param {number} tot
//  * @return {number}
//  */
// FindSumPairs.prototype.count = function(tot) {
    
// };

// /** 
//  * Your FindSumPairs object will be instantiated and called as such:
//  * var obj = new FindSumPairs(nums1, nums2)
//  * obj.add(index,val)
//  * var param_2 = obj.count(tot)
//  */


class FindSumPairs {
  constructor(nums1, nums2) {
    this.nums1 = nums1;
    this.nums2 = nums2;
    this.count2 = new Map();
    for (const v of nums2) {
      this.count2.set(v, (this.count2.get(v) || 0) + 1);
    }
  }

  add(index, val) {
    const old = this.nums2[index];
    this.count2.set(old, this.count2.get(old) - 1);
    this.nums2[index] = old + val;
    this.count2.set(this.nums2[index], (this.count2.get(this.nums2[index]) || 0) + 1);
  }

  count(tot) {
    let res = 0;
    for (const x of this.nums1) {
      res += this.count2.get(tot - x) || 0;
    }
    return res;
  }
}
