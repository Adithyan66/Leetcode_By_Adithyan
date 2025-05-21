/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (str) {
    let s = str.split("")
    let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    let res = []

    for (let i = 0; i < s.length; i++) {
        if(vowels.includes(s[i]))  res.push(s[i])
    }

    for(let j = s.length-1; j>=0; j--){
        if(vowels.includes(s[j])) s[j] = res.shift()
    }
    return s.join("")
};