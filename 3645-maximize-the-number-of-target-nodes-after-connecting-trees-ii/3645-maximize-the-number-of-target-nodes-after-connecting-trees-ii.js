/**
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @return {number[]}
 */
var maxTargetNodes = function (edges1, edges2) {

    function buildGraph(edges, n) {
        const graph = Array.from({ length: n }, () => [])
        for ([a, b] of edges) {
            graph[a].push(b)
            graph[b].push(a)
        }
        return graph
    };

    function bfs(graph, n) {
        let parity = Array.from({ length: n }).fill(0)
        let visited = Array.from({ length: n }).fill(false)
        let queue = [[0, 0]]
        visited[0] = true

        while (queue.length > 0) {
            const [node, depth] = queue.shift()
            parity[node] = depth % 2
            for (let neigh of graph[node]) {
                if (!visited[neigh]) {
                    visited[neigh] = true
                    queue.push([neigh, depth + 1])
                }
            }
        }
        return parity
    }

    function countParity(parity) {
        count = [0, 0]
        for (let p of parity) {
            count[p]++
        }
        return count
    }

    let n1 = edges1.length + 1
    let n2 = edges2.length + 1

    let graph1 = buildGraph(edges1, n1)
    let graph2 = buildGraph(edges2, n2)

    let parity1 = bfs(graph1, n1)
    let parity2 = bfs(graph2, n2)

    let [even1, odd1] = countParity(parity1)
    let [even2, odd2] = countParity(parity2)

    let maxSecTree = Math.max(even2, odd2)

    let res = []

    for (let i = 0; i < n1; i++) {
        let ans = parity1[i] === 0 ? even1 : odd1
        res.push(ans+maxSecTree)
    }

    return res
}