class FenwickTree {
    constructor(size) {
        this.size = size;
        this.tree = new Array(size + 1).fill(Infinity);
    }

    update(i, value) {
        i += 1; // 1-based indexing
        while (i <= this.size) {
            this.tree[i] = Math.min(this.tree[i], value);
            i += i & -i;
        }
    }

    query(i) {
        i += 1; // 1-based indexing
        let result = Infinity;
        while (i > 0) {
            result = Math.min(result, this.tree[i]);
            i -= i & -i;
        }
        return result;
    }
}

var maxDifference = function(s, k) {
    const n = s.length;
    let maxDiff = -Infinity;

    // Try all pairs of digits a and b (0 to 4)
    for (let a = 0; a < 5; a++) {
        for (let b = 0; b < 5; b++) {
            if (a === b) continue;

            // Prefix arrays
            let D = new Array(n + 1).fill(0); // Net difference: count[a] - count[b]
            let pa = new Array(n + 1).fill(0); // Parity of count[a] (0: even, 1: odd)
            let pb = new Array(n + 1).fill(0); // Parity of count[b]
            let countB = new Array(n + 1).fill(0); // Count of digit b

            // Build prefix state arrays
            for (let i = 1; i <= n; i++) {
                const digit = parseInt(s[i - 1]);
                D[i] = D[i - 1] + (digit === a ? 1 : 0) - (digit === b ? 1 : 0);
                pa[i] = (pa[i - 1] + (digit === a ? 1 : 0)) & 1;
                pb[i] = (pb[i - 1] + (digit === b ? 1 : 0)) & 1;
                countB[i] = countB[i - 1] + (digit === b ? 1 : 0);
            }

            // 2x2 matrix of Fenwick Trees for parity combinations
            let trees = Array.from({ length: 2 }, () => 
                Array.from({ length: 2 }, () => new FenwickTree(n + 1))
            );

            // Process each position
            for (let j = 0; j <= n; j++) {
                if (j >= k) {
                    const idx = j - k;
                    trees[pa[idx]][pb[idx]].update(countB[idx], D[idx]);
                }
                if (j > 0 && countB[j] > 0) {
                    const needPa = 1 - pa[j]; // Want a to be odd
                    const needPb = pb[j]; // Want b to be even
                    const bestVal = trees[needPa][needPb].query(countB[j] - 1);
                    if (bestVal !== Infinity) {
                        maxDiff = Math.max(maxDiff, D[j] - bestVal);
                    }
                }
            }
        }
    }

    return maxDiff === -Infinity ? -1 : maxDiff;
};