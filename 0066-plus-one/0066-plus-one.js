/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {

    let n = digits.length - 1
    let sum = 0
    let carry = 1
    for (let i = n; i >= 0; i--) {
        sum = digits[i] + carry
        carry = Math.floor(sum / 10)
        digits[i] = sum%10
    }
    if(carry>0){
        digits.unshift(carry)
    }
    return digits
};