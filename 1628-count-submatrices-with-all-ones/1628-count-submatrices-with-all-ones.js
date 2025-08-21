var numSubmat = function (mat) {
    let rows = mat.length, cols = mat[0].length
    let heights = Array(cols).fill(0)
    let total = 0

    for (let i = 0; i < rows; i++) {
        // build histogram heights
        for (let j = 0; j < cols; j++) {
            heights[j] = mat[i][j] === 0 ? 0 : heights[j] + 1
        }

        // count submatrices using stack
        let stack = [], sum = Array(cols).fill(0)
        for (let j = 0; j < cols; j++) {
            while (stack.length && heights[stack[stack.length - 1]] >= heights[j]) {
                stack.pop()
            }
            if (stack.length) {
                let prev = stack[stack.length - 1]
                sum[j] = sum[prev] + heights[j] * (j - prev)
            } else {
                sum[j] = heights[j] * (j + 1)
            }
            stack.push(j)
            total += sum[j]
        }
    }
    return total
}
