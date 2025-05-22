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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {

    let sum = 0

    function count(node, sum) {
        if (!node) return false
        sum += node.val
        if (!node.left && !node.right && sum == targetSum) {
            return true
        }
       return count(node.left, sum) || count(node.right, sum)
         
    }
    return count(root, sum)==true


};