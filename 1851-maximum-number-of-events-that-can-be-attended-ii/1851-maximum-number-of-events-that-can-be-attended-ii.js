/**
 * @param {number[][]} events
 * @param {number} k
 * @return {number}
 */
// Adhi’s go-to JS for LC1751
var maxValue = function(events, k) {
  events.sort((a,b) => a[0] - b[0]); // sort by start

  const n = events.length;
  const starts = events.map(e => e[0]);

  const memo = Array.from({ length: n }, () => Array(k+1).fill(-1));

  function dp(i, rem) {
    if (i >= n || rem === 0) return 0;
    if (memo[i][rem] !== -1) return memo[i][rem];

    // Option 1: skip
    let res = dp(i+1, rem);

    // Option 2: take
    const [s,e,value] = events[i];
    const j = upperBound(starts, e); // next non-overlapping
    res = Math.max(res, value + dp(j, rem - 1));

    memo[i][rem] = res;
    return res;
  }

  return dp(0, k);
};

// helper: first index > target in 'arr' (sorted)
function upperBound(arr, target) {
  let lo = 0, hi = arr.length;
  while (lo < hi) {
    let mid = (lo + hi) >> 1;
    if (arr[mid] <= target) lo = mid + 1;
    else hi = mid;
  }
  return lo;
}
