/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function (root) {
    let map = {}
    let queue = [root]

    while (queue.length) {
        let node = queue.shift()
        map[node.val] = (map[node.val] || 0) + 1
        if (node.left) {
            queue.push(node.left)
        }
        if (node.right) {
            queue.push(node.right)
        }
    }
    console.log("map", map)
    let highest = 0

    for (let m in map) {
       highest = Math.max(highest,map[m])
    }
    let res = []

    for(let m in map){
        if(map[m] === highest){
            res.push(Number(m))
        }
    }
    return res
    
};