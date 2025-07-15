/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function (word) {
    if (word.length < 3) return false
    let vowel = false
    let consonant = false

    let vowelChar = "aeiouAEIOU"

    //   console.log(typeof Number("e"))
    console.log("0e".charCodeAt(0))

    for (let i = 0; i < word.length; i++) {
        // if (typeof Number(word[i]) == "number") continue

        let code = word[i].charCodeAt(0)

        if (code >= 48 && code <= 57) continue

        // if (code < 65 || code > 90){
        //     return false
        // }else if (code <97 && code >122){
        //     return false
        // }
        if ((code < 65 || code > 90) && (code < 97 || code > 122)) {
            return false
        }

        if (vowelChar.includes(word[i])) {
            vowel = true
        } else {
            consonant = true
        }
    }

    return (vowel == consonant)
};