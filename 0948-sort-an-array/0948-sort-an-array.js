/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (arr) {
    if (arr.length <= 1) return arr
    let n = arr.length
    let mid = Math.floor((n ) / 2)
    let left = sortArray(arr.slice(0, mid))
    let right = sortArray(arr.slice(mid))

    return merge(left, right)
};

function merge(left, right) {
    let result = []
    let i = 0
    let j = 0
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i])
            i++
        } else {
            result.push(right[j])
            j++
        }
    }

    return [...result, ...left.slice(i), ...right.slice(j)]
}