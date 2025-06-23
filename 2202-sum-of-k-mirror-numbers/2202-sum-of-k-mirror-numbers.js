/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */

function kMirror(k, n) {
  let count = 0, sum = 0;

  // helper to check palindromes
  const isPal = (s) => {
    let i = 0, j = s.length - 1;
    while (i < j) if (s[i++] !== s[j--]) return false;
    return true;
  };

  // helper to build palindrome from half
  const buildPal = (half, oddLen) => {
    let s = half.toString();
    let t = oddLen ? s.slice(0, -1) : s;
    return parseInt(s + t.split('').reverse().join(''), 10);
  };

  let len = 1;
  while (count < n) {
    const start = 10 ** Math.floor((len - 1) / 2);
    const end = 10 ** Math.floor((len + 1) / 2);
    for (let half = start; half < end && count < n; half++) {
      const pal = buildPal(half, len % 2 === 1);
      const baseK = pal.toString(k);
      if (isPal(baseK)) {
        sum += pal;
        count++;
      }
    }
    len++;
  }
  return sum;
}
