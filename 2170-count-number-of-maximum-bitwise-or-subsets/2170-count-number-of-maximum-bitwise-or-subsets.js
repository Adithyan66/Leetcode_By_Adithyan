/**
 * @param {number[]} nums
 * @return {number}
 */
function countMaxOrSubsets(nums) {
  const n = nums.length;
  let maxOr = 0, count = 0;
  
  // Compute maximum OR from all numbers
  for (const num of nums) maxOr |= num;
  
  function dfs(index, currentOr) {
    if (index === n) {
      if (currentOr === maxOr) count++;
      return;
    }
    dfs(index + 1, currentOr);               // Exclude current num
    dfs(index + 1, currentOr | nums[index]); // Include current num
  }
  
  dfs(0, 0);
  return count;
}
