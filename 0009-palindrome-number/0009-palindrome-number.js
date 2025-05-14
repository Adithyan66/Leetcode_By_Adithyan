/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let k = Number(x.toString().split("").reverse().join(""))
    console.log(k)
    return x===k
};