/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let str = s.split(" ")
    for (let i = str.length - 1; i >= 0; i--) {
        console.log(str)
        if(str[i]!="") return str[i].length
    }
};