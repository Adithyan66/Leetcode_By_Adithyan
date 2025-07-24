var minimumScore = function(nums, edges) {
    const n = nums.length;
    const graph = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }

    const xor = new Array(n).fill(0);   // subtree XORs
    const parent = new Array(n).fill(-1);

    // Step 1: Build subtree XORs with DFS
    function dfs(u, p) {
        xor[u] = nums[u];
        for (const v of graph[u]) {
            if (v !== p) {
                parent[v] = u;
                dfs(v, u);
                xor[u] ^= xor[v]; // accumulate XOR of subtree
            }
        }
    }

    dfs(0, -1);
    const totalXor = xor[0]; // total XOR of the tree

    let minScore = Infinity;

    // Step 2: Try all pairs of edges (as node removals)
    for (let i = 1; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let x = xor[i], y = xor[j], z = totalXor ^ x ^ y;

            // ensure components are valid (no overlap)
            if (isAncestor(i, j, parent)) {
                x = xor[j];
                y = xor[i] ^ xor[j];
                z = totalXor ^ xor[i];
            } else if (isAncestor(j, i, parent)) {
                x = xor[i];
                y = xor[j] ^ xor[i];
                z = totalXor ^ xor[j];
            }

            const maxVal = Math.max(x, y, z);
            const minVal = Math.min(x, y, z);
            minScore = Math.min(minScore, maxVal - minVal);
        }
    }

    return minScore;

    // Helper: check if u is ancestor of v
    function isAncestor(u, v, parent) {
        while (v !== -1) {
            if (v === u) return true;
            v = parent[v];
        }
        return false;
    }
};
