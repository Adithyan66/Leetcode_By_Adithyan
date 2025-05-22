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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    
    function swap(root){
        if(!root) return
        let store = root.left
        root.left = root.right
        root.right =store
        return swap(root.left) || swap(root.right)
    }
    swap(root)
    return root
};