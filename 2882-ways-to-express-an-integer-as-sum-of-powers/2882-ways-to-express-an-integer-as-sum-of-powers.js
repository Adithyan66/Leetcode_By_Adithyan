// /**
//  * @param {number} n
//  * @param {number} x
//  * @return {number}
//  */
// var numberOfWays = function (n, x) {

//     let res = []

//     for (let i = 1; i ** x <= n; i++) {
//         res.push(i ** x)
//     }

//     console.log(res)

//     let map = new Map()

//     function dfs(ind, sum) {
//         if (sum == n) return 1
//         if (ind >= res.length || sum > n) return 0


//         let key = `${ind},${sum}`

//         if (map.has(key)) {
//             return map.get(key)
//         } else {
//             let re = dfs(ind + 1, sum + res[ind]) + dfs(ind + 1, sum)
//             map.set(key, re)
//         }

//         return map.get(key)
//     }

//     return dfs(0, 0)

// };







/**
 * @param {number} n
 * @param {number} x
 * @return {number}
 */
var numberOfWays = function(n, x) {
    const MOD = 1e9 + 7;
    const powers = [];

    // Precompute all powers <= n
    for (let i = 1; Math.pow(i, x) <= n; i++) {
        powers.push(Math.pow(i, x));
    }

    // Memoization map: key -> "index,sum"
    const memo = new Map();

    const dfs = (index, sum) => {
        if (sum === n) return 1;        // Found valid combination
        if (sum > n || index >= powers.length) return 0; // Invalid path

        const key = `${index},${sum}`;
        if (memo.has(key)) return memo.get(key);

        // Two choices: take current power OR skip it
        const take = dfs(index + 1, sum + powers[index]);
        const skip = dfs(index + 1, sum);

        const ans = (take + skip) % MOD;
        memo.set(key, ans);
        return ans;
    };

    return dfs(0, 0);
};
