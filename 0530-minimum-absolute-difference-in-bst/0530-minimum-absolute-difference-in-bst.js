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
 * @return {number}
 */
var getMinimumDifference = function (root) {

    let diff = Infinity
    let prev = null

    function dfs(node) {
        if (!node) return

        dfs(node.left)

        if (prev != null) {
            diff = Math.min(diff, node.val - prev)
        }

        prev = node.val

        dfs(node.right)
    }

    dfs(root)

    return diff

};