class TrieNode {
    constructor() {
        this.children = new Map(); // Map of folder name to child node
        this.deleted = false; // Flag to mark if node is deleted
    }
}

var deleteDuplicateFolder = function(paths) {
    const root = new TrieNode();
    const subtreeToNodes = new Map(); // Maps serialized subtrees to list of nodes
    
    // Step 1: Build the trie
    paths.sort(); // Sort paths for consistent traversal
    for (const path of paths) {
        let node = root;
        for (const folder of path) {
            if (!node.children.has(folder)) {
                node.children.set(folder, new TrieNode());
            }
            node = node.children.get(folder);
        }
    }
    
    // Step 2: Serialize subtrees and identify duplicates
    function buildSubtree(node) {
        let subtree = "(";
        for (const [name, child] of [...node.children.entries()].sort()) {
            subtree += name + buildSubtree(child);
        }
        subtree += ")";
        if (subtree !== "()") { // Only store non-empty subtrees
            if (!subtreeToNodes.has(subtree)) {
                subtreeToNodes.set(subtree, []);
            }
            subtreeToNodes.get(subtree).push(node);
        }
        return subtree;
    }
    buildSubtree(root);
    
    // Step 3: Mark duplicate subtrees for deletion
    for (const nodes of subtreeToNodes.values()) {
        if (nodes.length > 1) {
            for (const node of nodes) {
                node.deleted = true;
            }
        }
    }
    
    // Step 4: Construct result paths
    const ans = [];
    function constructPath(node, path) {
        if (node.deleted) return; // Skip deleted nodes
        if (path.length > 0) {
            ans.push([...path]); // Add path to result if non-empty
        }
        for (const [name, child] of [...node.children.entries()].sort()) {
            path.push(name);
            constructPath(child, path);
            path.pop();
        }
    }
    constructPath(root, []);
    
    return ans;
};