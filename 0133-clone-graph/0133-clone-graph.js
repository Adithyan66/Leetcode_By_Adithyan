/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
    if(!node) return null

    let visited = new Map()

    function dfs(curr){

        if(visited.has(curr)) return visited.get(curr)

        const clone = new _Node(curr.val)

        visited.set(curr,clone)

        for(neighbor of curr.neighbors){
            clone.neighbors.push(dfs(neighbor))
        }

        return clone
    }

    return dfs(node)
};