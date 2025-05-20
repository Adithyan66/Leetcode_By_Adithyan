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
 * @return {boolean}
 */
var isBalanced = function (root) {

    let  isBal = true

    function check(node) {
        if (!node) return 0

        let left = check(node.left)
        let right = check(node.right)

        if(Math.abs(left-right)>1) isBal = false

        return Math.max(left, right) + 1
    }

    check(root)
    return isBal

};