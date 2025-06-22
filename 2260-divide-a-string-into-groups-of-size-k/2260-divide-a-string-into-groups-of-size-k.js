/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function (s, k, fill) {

    let output = []
    for (let i = 0; i < s.length; i += k) {
        let str = ''
        for (let p = i; p < i+k; p++) {
            s[p] ? str += s[p] : str += fill

        }
        output.push(str)
    }
    console.log(output)
    return output
};