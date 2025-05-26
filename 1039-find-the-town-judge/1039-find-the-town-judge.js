/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
    if(trust.length===0 && n==1) return n

    let map = new Set()

    let score = new Map()

    for (let [a, b] of trust) {
        map.add(a)
        map.add(b)

        score.set(a, (score.get(a) || 0) - 1)
        score.set(b, (score.get(b) || 0) + 1)
    }
    for (let ma of map){
        if(score.get(ma) == n-1) return ma
    }
    return -1
};