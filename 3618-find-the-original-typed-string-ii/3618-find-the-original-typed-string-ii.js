function possibleStringCount(word, k) {
  const MOD = 1e9 + 7;
  const groups = [];
  let total = 1;
  let i = 0, n = word.length;

  // Build runs & compute total combos
  while (i < n) {
    let j = i + 1;
    while (j < n && word[j] === word[i]) j++;
    const g = j - i;
    groups.push(g);
    total = (total * g) % MOD;
    k--;  // you use 1 intended character per group
    i = j;
  }

  if (k <= 0) return total;

  // dp[j]: ways to build compressed length exactly j
  let dp = Array(k).fill(0);
  dp[0] = 1;

  for (const g of groups) {
    const newDp = Array(k).fill(0);
    let window = 0;
    // we build lengths from current group count (i.e. from 1 group upwards)
    for (let j = 0; j < k; j++) {
      // Expand window by dp[j]
      window = (window + dp[j]) % MOD;
      // If window too big – remove dp[j - g]
      if (j >= g) {
        window = (window - dp[j - g] + MOD) % MOD;
      }
      // Set new ways to reach compressed length (j + 1 ... implicitly)
      newDp[j] = window;
    }
    dp = newDp;
  }

  // Sum invalid (compressed len < k)
  const invalid = dp.reduce((a, b) => (a + b) % MOD, 0);
  return (total - invalid + MOD) % MOD;
}
