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
var countNodes = function (root) {
    if(!root) return 0
    let n = 1
    let queue = [root]

    while (queue.length) {
        let length = queue.length
        for (let i = 0; i < length; i++) {
            let node = queue.shift()
            if (node.left !== null) {
                queue.push(node.left)
                n++
            }
            if (node.right !== null) {
                queue.push(node.right)
                n++
            }
        }
    }
    return n
};

// var countNodes = function (root) {
//     if (!root) return 0;
//     let n = 1;
//     let queue = [root];

//     while (queue.length) {
//         let length = queue.length;
//         for (let i = 0; i < length; i++) {
//             let node = queue.shift();
//             if (node.left !== null) {
//                 queue.push(node.left);
//                 n++;
//             }
//             if (node.right !== null) {
//                 queue.push(node.right);
//                 n++;
//             }
//         }
//     }
//     return n;
// };
