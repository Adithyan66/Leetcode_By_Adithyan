/**
 * @param {number} k
 * @param {number[]} operations
 * @return {character}
 */
function kthCharacter(k, operations) {
  let increases = 0;
  const opsCount = Math.ceil(Math.log2(k));

  for (let i = opsCount - 1; i >= 0; --i) {
    const halfSize = 1n << BigInt(i);
    if (BigInt(k) > halfSize) {
      k -= Number(halfSize);
      increases += operations[i];
    }
  }

  return String.fromCharCode('a'.charCodeAt(0) + (increases % 26));
}
