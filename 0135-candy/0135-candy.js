/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
    let ans = new Array(ratings.length).fill(1)
    let count = ans.length

    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] > ratings[i - 1]) {
            ans[i] = ans[i - 1] + 1
        }
    }

    for (let j = ratings.length - 2; j >= 0; j--) {
        if (ratings[j] > ratings[j + 1]) {
            ans[j] = Math.max(ans[j], ans[j + 1] + 1)
        }
    }
    return ans.reduce((a, b) => a + b, 0)
};