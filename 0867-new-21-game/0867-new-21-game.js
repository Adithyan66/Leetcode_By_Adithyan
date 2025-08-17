/**
 * @param {number} n
 * @param {number} k
 * @param {number} maxPts
 * @return {number}
 */
var new21Game = function(N, K, W) {
    if (K === 0 || N >= K - 1 + W) return 1.0; // quick win case

    let dp = new Array(N + 1).fill(0);
    dp[0] = 1.0;

    let windowSum = 1.0, result = 0.0;

    for (let i = 1; i <= N; i++) {
        dp[i] = windowSum / W;

        if (i < K) {
            windowSum += dp[i];
        } else {
            result += dp[i];
        }

        if (i - W >= 0) {
            windowSum -= dp[i - W];
        }
    }

    return result;
};
