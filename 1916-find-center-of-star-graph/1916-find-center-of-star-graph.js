/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {

    let nodes = new Set()
    let connection = new Map()

    for (let [a, b] of edges) {
        nodes.add(a)
        nodes.add(b)

        connection.set(a, (connection.get(a) || 0) + 1)
        connection.set(b, (connection.get(b) || 0) + 1)
    }
    let size = nodes.size

    for (let i of nodes) {
        if (connection.get(i) == size - 1) return i
    }
};