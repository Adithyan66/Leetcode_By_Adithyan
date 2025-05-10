/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let words = s.split(/\s+/)
    let rev = words.reverse()
    let ans = rev.join(" ")
    return ans.trim()

};