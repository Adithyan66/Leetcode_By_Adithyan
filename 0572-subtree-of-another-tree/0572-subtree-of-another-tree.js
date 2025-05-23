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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {

    function check(s1, s2) {
        if (!s1 && !s2) return true
        if (!s1 || !s2) return false
        if (s1.val != s2.val) return false

        return check(s1.left, s2.left) && check(s1.right, s2.right)
    }

    function find(node){
        if(!node) return false

        if(check(node,subRoot)) return true

        return find(node.left) || find(node.right)
    }
    
    return find(root)
};