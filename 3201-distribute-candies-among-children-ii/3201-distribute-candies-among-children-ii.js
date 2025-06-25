/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
var distributeCandies = function(n, limit) {
    let ways = 0;
    // Min candies for first child: ensure remaining candies don't exceed 2 * limit
    const ch1Min = Math.max(0, n - 2 * limit);
    // Max candies for first child: min of n or limit
    const ch1Max = Math.min(n, limit);
    
    // Iterate over possible candies for first child
    for (let i = ch1Min; i <= ch1Max; i++) {
        // Remaining candies after giving i to first child
        const remaining = n - i;
        // Min candies for second child: ensure third child doesn't exceed limit
        const ch2Min = Math.max(0, remaining - limit);
        // Max candies for second child: min of remaining or limit
        const ch2Max = Math.min(remaining, limit);
        // Number of valid values for second child (inclusive range)
        ways += ch2Max - ch2Min + 1;
    }
    
    return ways;
};