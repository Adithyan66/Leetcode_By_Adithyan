/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function (n, m) {
    let a1 = []
    let a2 = []
    for (let i = 1; i <= n; i++) {
        if (i % m != 0) a1.push(i)
        if (i % m == 0) a2.push(i)
    }
    let b1 = a1.reduce((acc, cur) => acc + cur, 0)
    let b2 = a2.reduce((acc, cur) => acc + cur, 0)
    return b1 - b2
    console.log(a1)
};