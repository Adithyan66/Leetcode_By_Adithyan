/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function (word) {

    // let out = []
    // for (let i = 0; i < word.length; i++) {
    //     k = i + 1
    //     if (word[i] == word[k]) {
    //         for (let j = k; j < word.length; j++) {
    //             if(word[i] != word[j]) break
    //             out.push(`${word.slice(0,k)}${word.slice(k+1)}`)
    //         }
    //     }
    // }
    // console.log(out)

    count =1
    for(let i =1; i<word.length ; i++){
        if(word[i-1]==word[i])count++
    }
    return count
};