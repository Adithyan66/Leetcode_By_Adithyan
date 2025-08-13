/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {

    function check(k) {
        if (3 ** k == n) return true
        if (3 ** k > n) return false
        return check(k+1)
    }
    return check(0)
};