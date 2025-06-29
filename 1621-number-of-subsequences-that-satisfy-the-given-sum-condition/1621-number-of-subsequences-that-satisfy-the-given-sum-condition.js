/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function(nums, target) {
    const MOD = 1e9 + 7;
    nums.sort((a, b) => a - b);

    const n = nums.length;
    const pows = new Array(n).fill(1);
    for (let i = 1; i < n; i++) {
        pows[i] = (pows[i - 1] * 2) % MOD;
    }

    let l = 0, r = n - 1, result = 0;

    while (l <= r) {
        if (nums[l] + nums[r] <= target) {
            result = (result + pows[r - l]) % MOD;
            l++;
        } else {
            r--;
        }
    }
    return result;
};