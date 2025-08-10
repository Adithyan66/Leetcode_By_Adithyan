/**
 * @param {number} n
 * @return {boolean}
 */
const reorderedPowerOf2 = (n) => {
  const sortDigits = (num) =>
    num.toString().split('').sort().join('');

  const target = sortDigits(n);

  // Precompute sorted-digit signatures of powers of 2 up to ~1e9
  const powerSet = new Set();
  for (let i = 0; i < 31; i++) {
    powerSet.add(sortDigits(1 << i));
  }

  return powerSet.has(target);
};
