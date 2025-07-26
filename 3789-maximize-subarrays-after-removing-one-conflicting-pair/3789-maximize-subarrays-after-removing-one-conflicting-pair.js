/**
 * @param {number} n
 * @param {number[][]} conflictingPairs
 * @return {number}
 */
function maxSubarrays(n, conflictingPairs) {
  // 1. Build groups: for each a, record all b > a that conflict
  const groups = Array.from({ length: n + 2 }, () => []);
  for (const [x, y] of conflictingPairs) {
    const a = Math.min(x, y), b = Math.max(x, y);
    groups[a].push(b);
  }

  let ans = 0;                                 // base count of valid subarrays
  const extra = new Array(n + 2).fill(0);      // extra gains indexed by b0
  let maxExtra = 0;                            // track best removal gain

  // 2. Reverse scan: maintain the two smallest endpoints b0, b1
  let b0 = n + 1, b1 = n + 1;
  for (let i = n; i >= 1; i--) {
    // incorporate any new conflicts that start at i
    for (const b of groups[i]) {
      if (b < b0) {
        b1 = b0;
        b0 = b;
      } else if (b < b1) {
        b1 = b;
      }
    }
    // valid subarrays starting at i if we didn't remove anything
    ans += (b0 - i);

    // if we “remove” the pair causing b0, we gain (b1 - b0)
    extra[b0] += (b1 - b0);
    maxExtra = Math.max(maxExtra, extra[b0]);
  }

  // 3. Best we can do = base + best single removal gain
  return ans + maxExtra;
}

// Example tests
console.log(maxSubarrays(4, [[2,3],[1,4]]));          // 9
console.log(maxSubarrays(5, [[1,2],[2,5],[3,5]]));    // 12
console.log(maxSubarrays(
  25,
  [[25,18],[2,13],[15,12],[12,15]]
));                                                    // 189
