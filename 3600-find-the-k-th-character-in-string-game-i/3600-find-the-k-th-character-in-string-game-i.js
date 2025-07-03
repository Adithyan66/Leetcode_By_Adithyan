/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function (k) {

    let word = `a`
    while (word.length < k) {
        word += getWord(word)
    }
    function getWord(word) {
        let sam = ``
        for (let i = 0; i < word.length; i++) {
            let code = word.charCodeAt(i)
            sam += String.fromCharCode(code == 122 ? 97 : code+1)
        }
        return sam
    }
    return word[k - 1]

};