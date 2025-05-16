/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {

    let i = a.length - 1
    let j = b.length - 1

    let carry = 0
    let res = ""

    while (i >= 0 || j >= 0 || carry) {
        let bit1 = (i >= 0) ? parseInt(a[i]) : 0
        let bit2 = (j >= 0) ? parseInt(b[j]) : 0

        let sum = bit1 + bit2 + carry

        res = (sum % 2) + res
        carry = Math.floor(sum / 2)

        j--
        i--
    }
    return res


};