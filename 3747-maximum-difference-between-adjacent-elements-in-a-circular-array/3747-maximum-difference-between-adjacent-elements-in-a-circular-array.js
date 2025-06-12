/**
 * @param {number[]} nums
 * @return {number}
 */
function maxAdjacentDistance(nums) {
  let maxDiff = Math.abs(nums[0] - nums[nums.length - 1]);
  for (let i = 1; i < nums.length; i++) {
    const diff = Math.abs(nums[i] - nums[i - 1]);
    if (diff > maxDiff) maxDiff = diff;
  }
  return maxDiff;
}
