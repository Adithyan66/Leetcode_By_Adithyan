/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {

    if (!nums.length) return null

    function addToTree(left, right) {
        
        if (left > right) return null

            let mid = Math.floor((left + right) / 2)
            let node = new TreeNode(nums[mid])

            node.left = addToTree(left, mid - 1)
            node.right = addToTree(mid + 1, right)

            return node
        
    }
    return addToTree(0,nums.length-1)
};