const MOD = 1_000_000_007n;

// Fast exponentiation under MOD
const modPow = (x, y) => {
  let res = 1n, base = BigInt(x), exp = BigInt(y);
  while (exp > 0n) {
    if (exp & 1n) res = (res * base) % MOD;
    base = (base * base) % MOD;
    exp >>= 1n;
  }
  return res;
};

// Precompute factorials & inverses up to N = 100k
function initFactorials(N = 100000) {
  const fact = new Array(N + 1).fill(1n);
  const invFact = new Array(N + 1).fill(1n);
  for (let i = 1; i <= N; i++) {
    fact[i] = fact[i - 1] * BigInt(i) % MOD;
  }
  invFact[N] = modPow(fact[N], MOD - 2n);
  for (let i = N; i > 0; i--) {
    invFact[i - 1] = invFact[i] * BigInt(i) % MOD;
  }
  return { fact, invFact };
}

const { fact, invFact } = initFactorials(100000);

const comb = (n, k) => {
  if (k < 0 || k > n) return 0n;
  return fact[n] * invFact[k] % MOD * invFact[n - k] % MOD;
};

/**
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
function countGoodArrays(n, m, k) {
  const ways = comb(n - 1, k)
    * BigInt(m)
    % MOD
    * modPow(m - 1, n - 1 - k)
    % MOD;
  return Number(ways);
}
