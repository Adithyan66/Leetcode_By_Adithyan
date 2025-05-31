/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function (board) {
    let n = board.length
    let queue = [[1, 0]]
    let visited = new Array(n + 1).fill(false)

    function getCordinate(s) {
        let quot = Math.floor((s - 1) / n)
        let rem = (s - 1) % n
        let row = n - 1 - quot
        let col = (quot % 2 == 0) ? rem : n - rem - 1
        return [row, col]
    }

    while (queue.length > 0) {
        let [s, move] = queue.shift()
        if (s == n * n) return move

        for (let i = 1; i <= 6; i++) {
            let next = s + i
            if (next > n * n) continue

            let [row, col] = getCordinate(next)

            if (board[row][col] != -1) {
                next = board[row][col]
            }

            if (!visited[next]) {
                visited[next] = true
                queue.push([next, move + 1])
            }
        }
    }
    return -1
};