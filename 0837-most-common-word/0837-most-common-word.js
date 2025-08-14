/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
    let str = ""

    for (let i = 0; i < paragraph.length; i++) {
        let code = paragraph.charCodeAt(i)
        if (code <= 122 && code >= 65 || code == 32) {
            str += paragraph[i].toLowerCase()
        } else {
            str += " "
        }
    }

    let words = str.split(" ")

    for (let i = 0; i < words.length; i++) {
        if (words[i] == "") {
            words.splice(i, 1)
        }
    }
    console.log(words)

    let obj = {}
    for (let word of words) {
        obj[word] = (obj[word] || 0) + 1
    }

    let arr = Object.entries(obj)


    arr.sort((a, b) => {
        return b[1] - a[1]
    })


    for ([name, count] of arr) {
        if (!banned.includes(name)) {
            return name
        }
    }
};

//65
//122

//space - 32 