/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {

    let map = new Map()

    for (let num of nums) {
        if(num%2 == 0){
            map[num] = (map[num] || 0) + 1
        }
    }
    let max = -1
    let arr = Object.values(map)
    let maxval = Math.max(...arr)

    console.log(arr)

    for(let m in map){
        // console.log("m",m)
        if(maxval == map[m]){
            return +m
        }
    }
    return max
};