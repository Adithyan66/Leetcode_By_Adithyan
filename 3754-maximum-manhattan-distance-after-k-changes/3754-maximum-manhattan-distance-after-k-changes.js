/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const maxDistance = (s, k) => {
  const dirs = [['N','E'], ['N','W'], ['S','E'], ['S','W']];
  let ans = 0;

  for (const [d1, d2] of dirs) {
    let curr = 0, rem = k;
    for (const ch of s) {
      if (ch === d1 || ch === d2) {
        curr++; // supports direction
      } else {
        if (rem > 0) {
          rem--;
          curr += 1; // flip opposing to supportive
        } else {
          curr -= 1; // no flips left, it's a setback
        }
      }
      ans = Math.max(ans, curr);
    }
  }

  return ans;
};
