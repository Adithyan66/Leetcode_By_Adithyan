/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {

    let graph = new Map()

    for (let [a, b] of prerequisites) {
        if (!graph.has(b)) {
            graph.set(b, [])
        }
        graph.get(b).push(a)
    }

    let arr = new Array(numCourses).fill(0)

    function dfs(course) {
        if (arr[course] == 1) return false
        if (arr[course] == 2) return true

        arr[course] = 1
        for (let neigh of graph.get(course) || []) {
            if (!dfs(neigh)) return false
        }
        arr[course] = 2
        return true
    }


    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)){
    console.log(arr)
            return false
        } 
    }

return true



};