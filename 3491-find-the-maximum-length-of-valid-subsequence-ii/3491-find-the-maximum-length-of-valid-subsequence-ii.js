/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function maximumLength(nums, k) {
  // initialize DP matrix k×k with zeros
  const f = Array.from({ length: k }, () => Array(k).fill(0));
  let ans = 0;

  for (const num of nums) {
    const x = num % k;
    // we need to enumerate all possible previous residues y
    for (let y = 0; y < k; y++) {
      const prev = f[y][x];
      // potential new length extending a subsequence ending (y, x)
      f[x][y] = Math.max(f[x][y], prev + 1);
      ans = Math.max(ans, f[x][y]);
    }
  }

  return ans;
}

