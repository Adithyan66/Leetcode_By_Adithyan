/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallestSubarrays = function(nums) {
    const n = nums.length;
    const res = Array(n).fill(1);
    let lastSeen = Array(32).fill(-1); // 32 bits for 32-bit integers

    for (let i = n - 1; i >= 0; i--) {
        for (let bit = 0; bit < 32; bit++) {
            if ((nums[i] & (1 << bit)) !== 0) {
                lastSeen[bit] = i;
            }
        }
        
        let maxIdx = i;
        for (let bit = 0; bit < 32; bit++) {
            if (lastSeen[bit] !== -1) {
                maxIdx = Math.max(maxIdx, lastSeen[bit]);
            }
        }
        
        res[i] = maxIdx - i + 1;
    }
    
    return res;
};
