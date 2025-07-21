/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    let result = [];
    for (let c of s) {
        if (result.length >= 2 && result[result.length - 1] === c && result[result.length - 2] === c) {
            continue; // Skip if adding this character would create three consecutive identical characters
        }
        result.push(c);
    }
    return result.join('');
};