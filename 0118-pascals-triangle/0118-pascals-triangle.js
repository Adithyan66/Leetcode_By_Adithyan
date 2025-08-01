/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let out = []
    for (let i = 0; i < numRows; i++) {
        out[i]=[]
        for (let j = 0; j <= i; j++) {
            if (j == 0 || j == i) {
                out[i][j] = 1
            } else {
                out[i][j] = out[i - 1][j - 1] + out[i - 1][j]
            }
        }
    }
    console.log(out)
    return out
}; 