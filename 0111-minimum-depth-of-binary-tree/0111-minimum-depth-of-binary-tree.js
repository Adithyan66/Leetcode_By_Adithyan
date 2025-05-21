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
var minDepth = function (root) {

    function find(node) {
        if (!node) return 0
        let left = find(node.left)
        let right = find(node.right)
        if (left == 0 || right == 0) return (left + right) + 1
        return Math.min(left, right) + 1
    }

    return find(root)
};