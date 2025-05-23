/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    
    let res =[]

    function dfs(node){
        if(!node) return
        for(let chil of node.children){
            dfs(chil)
        }
        res.push(node.val)
    }
    dfs(root)
    return res
};