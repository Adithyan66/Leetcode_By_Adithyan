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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {

    if (!root) return []

    let main = []
    let queue = [root]
    let j = 0

    while (queue.length > 0) {

        let size = queue.length
        let out = []

        for (let i = 0; i < size; i++) {
            let node = queue.shift()
            out.push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        j++
        if(j%2 ==0) out.reverse()

        main.push(out)

    }

    console.log(main)

    return main

};




