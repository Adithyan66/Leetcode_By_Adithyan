/**
 * @param {number} n
 * @return {number}
 */
var soupServings = function(n) {
    if (n >= 4800) return 1.0; // Shortcut for large n
    
    const k = Math.ceil(n / 25); // Scale down to 25ml units
    const memo = new Map();

    const dfs = (a, b) => {
        if (a <= 0 && b <= 0) return 0.5; // Both empty at same time
        if (a <= 0) return 1.0;           // A empties first
        if (b <= 0) return 0.0;           // B empties first

        const key = `${a},${b}`;
        if (memo.has(key)) return memo.get(key);

        const prob = 0.25 * (
            dfs(a - 4, b) +
            dfs(a - 3, b - 1) +
            dfs(a - 2, b - 2) +
            dfs(a - 1, b - 3)
        );

        memo.set(key, prob);
        return prob;
    };

    return dfs(k, k);
};
