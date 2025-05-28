/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {

    let output = []
    let sub = []
    for (let i = 0; i < arr.length; i++) {
        sub.push(arr[i])
        if (sub.length == size) {
            output.push(sub)
            sub = []
        }
    }
    if (sub.length > 0) output.push(sub)
    return output
};
