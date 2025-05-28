/**
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @param {number} k
 * @return {number[]}
 */
var maxTargetNodes = function (edges1, edges2, k) {
    let graph1 = buildGraph(edges1)
    let graph2 = buildGraph(edges2)

    let n = edges1.length + 1
    let m = edges2.length + 1

    let maxIn2 = 0

    for (let i = 0; i < m; i++) {
        maxIn2 = Math.max(maxIn2, dfs(graph2, i, -1, k - 1))
    }
    let output = []

    for (let j = 0; j < n; j++) {
        let maxIn1 = dfs(graph1,j,-1,k)
        output.push(maxIn1+maxIn2)
    }
    return output

};

function buildGraph(edges) {
    let n = edges.length + 1
    let graph = Array.from({ length: n }, () => [])

    for (let [u, v] of edges) {
        graph[u].push(v)
        graph[v].push(u)
    }
    return graph
}

function dfs(graph, node, parent, depth) {
    if (depth < 0) return 0
    count = 1
    for (let neigh of graph[node]) {
        if (parent != neigh) {
            count += dfs(graph, neigh, node, depth - 1)
        }
    }
    return count
}