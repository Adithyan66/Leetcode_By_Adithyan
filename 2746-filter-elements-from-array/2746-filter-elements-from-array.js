/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
    let filtArray = []
    for (let i = 0; i < arr.length; i++) {
        if(fn(arr[i],i)){
            filtArray.push(arr[i])
        }
    }
    return filtArray
};