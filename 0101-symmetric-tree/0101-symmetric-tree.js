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
var isSymmetric = function (root) {
    function check(t1, t2) {
        if (!t1 && !t2) return true
        if (!t1 || !t2 || t1.val !== t2.val) return false
        return check(t1.left, t2.right) && check(t2.left,t1.right)
    }
    return check(root.left,root.right)
};