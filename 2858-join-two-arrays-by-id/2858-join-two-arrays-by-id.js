/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {

    let res = new Map()
    for (let ar of arr1) {
        res[ar.id] = ar
    }

    for (let ar of arr2) {
        if (res[ar.id]) {
            res[ar.id] = { ...res[ar.id], ...ar }
        } else {
            res[ar.id] = ar
        }
    }

    return Object.values(res).sort((a, b) => a.id - b.id)
};