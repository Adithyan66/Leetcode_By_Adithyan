/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {

    let graph = new Map()
    let degree = Array(numCourses).fill(0)

    for (let [course, pre] of prerequisites) {
        if (!graph.has(pre)) {
            graph.set(pre, [])
        }
        graph.get(pre).push(course)
        degree[course]++
    }
    console.log(degree)

    let queue = []
    let out = []

    for (let i = 0; i < numCourses; i++) {
        if (degree[i] == 0) {
            queue.push(i)
        }
    }
    while (queue.length) {
        let curr = queue.shift()
        out.push(curr)

        for (let course of graph.get(curr) || []) {
            degree[course]--
            if (degree[course] == 0) {
                queue.push(course)
            }
        }
    }
    return out.length == numCourses ? out : []

};

