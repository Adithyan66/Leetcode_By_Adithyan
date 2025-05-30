/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
var closestMeetingNode = function (edges, node1, node2) {

    let n = edges.length

    function findDist(start) {
        let curr = start
        let dist = new Array(n).fill(-1)
        let distance = 0

        while (dist[curr] == -1 && curr != -1) {
            dist[curr] = distance++
            curr = edges[curr]
        }
        return dist
    }

    let dist1 = findDist(node1)
    let dist2 = findDist(node2)
    let minDist
    let minAllDist = Infinity
    let ans = -1
    for (let i = 0; i < n; i++) {
        if (dist1[i] != -1 && dist2[i] != -1) {
            minDist = Math.max(dist1[i], dist2[i])
            if (minDist < minAllDist){
                minAllDist = minDist
                ans = i
            }
        }
    }
    return ans
};