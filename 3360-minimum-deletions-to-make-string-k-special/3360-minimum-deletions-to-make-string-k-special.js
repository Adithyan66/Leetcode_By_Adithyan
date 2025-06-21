
/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var minimumDeletions = function(word, k) {
  const freq = Array(26).fill(0);
  for (const ch of word) {
    freq[ch.charCodeAt(0) - 97]++;
  }
  
  freq.sort((a, b) => a - b);
  let ans = Infinity;
  let i = 0;
  while (i < 26 && freq[i] === 0) i++;
  
  for (let j = i; j < 26; j++) {
    const x = freq[j];
    let deletions = 0;
    for (let t = i; t < 26; t++) {
      const f = freq[t];
      if (f < x) deletions += f;
      else if (f > x + k) deletions += f - (x + k);
    }
    ans = Math.min(ans, deletions);
  }
  
  return ans;
};
