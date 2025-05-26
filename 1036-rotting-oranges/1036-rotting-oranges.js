/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {

    let queue = []
    let fresh = 0
    let col = grid[0].length
    let row = grid.length
    let mins = 0

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] == 2) {
                queue.push([i, j])
            } else if (grid[i][j] == 1) {
                fresh++
            }
        }
    }
    if(fresh ==0) return 0

    let poss = [[0, 1], [0, -1], [-1, 0], [1, 0]]

    while (queue.length > 0) {
        let len = queue.length
        for (let k = 0; k < len; k++) {
            let [i, j] = queue.shift()
            for (let [a, b] of poss) {
                let newi = i + a
                let newj = j + b
                if (
                    newi >= 0 && newi < row &&
                    newj >= 0 && newj < col &&
                    grid[newi][newj] == 1
                ) {
                    grid[newi][newj] = 2
                    queue.push([newi, newj])
                    fresh--
                }
            }
        }
        mins++
    }

    return fresh === 0 ? mins-1 : -1;

};