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
var preorderTraversal = function(root) {
    let output =[]

    function traverse(node){
        if(!node) return
        output.push(node.val)
        traverse(node.left)
        traverse(node.right)
    }
    traverse(root)
    return output
};