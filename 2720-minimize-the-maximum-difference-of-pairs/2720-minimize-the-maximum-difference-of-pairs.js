/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
function minimizeMax(nums, p) {
  nums.sort((a, b) => a - b);

  let left = 0;
  let right = nums[nums.length - 1] - nums[0];

  const canForm = (maxDiff) => {
    let count = 0;
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] - nums[i - 1] <= maxDiff) {
        count++;
        i++; // skip next, since these two are paired
      }
    }
    return count >= p;
  };

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (canForm(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}
