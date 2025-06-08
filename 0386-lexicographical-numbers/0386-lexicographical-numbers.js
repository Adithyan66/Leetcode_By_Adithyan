/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {
    let arr = []
    // for (let i = 1; i <= n ; i++) {
    //     arr.push(i)
    // }
    // return arr.sort()

    function funk(num) {
        if (num > n) return
        arr.push(num)
        for (let i = 0; i <= 9; i++) {
            let nxt = num * 10 + i
            if (nxt > n) break
            funk(nxt)
        }
    }
    for (let i = 1; i <= 9; i++) {
        funk(i)
    }
    return arr
};