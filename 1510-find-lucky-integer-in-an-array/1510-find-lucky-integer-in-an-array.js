/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
    let map = new Map()

    for (let i = 0; i < arr.length; i++) {
        map[arr[i]] = (map[arr[i]] || 0) +1
    }
    let ar = []
    for(let ma in map){
        if(Number(ma) == map[ma])ar.push(map[ma])
    }
    let max = Math.max(...ar,-1)
    return max
};