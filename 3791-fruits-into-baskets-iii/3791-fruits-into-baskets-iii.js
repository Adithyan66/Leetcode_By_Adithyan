class SegmentTree {
    constructor(nums) {
        this.nums = nums;
        this.n = nums.length;
        this.tree = new Array(this.n * 4).fill(0);
        this.build(1, 0, this.n - 1);
    }

    // Build the segment tree
    build(node, start, end) {
        if (start === end) {
            this.tree[node] = this.nums[start];
            return;
        }
        const mid = Math.floor((start + end) / 2);
        this.build(node * 2, start, mid);
        this.build(node * 2 + 1, mid + 1, end);
        this.tree[node] = Math.max(this.tree[node * 2], this.tree[node * 2 + 1]);
    }

    // Update the value at index i to val
    update(node, start, end, i, val) {
        if (start === end) {
            this.tree[node] = val;
            return;
        }
        const mid = Math.floor((start + end) / 2);
        if (i <= mid) {
            this.update(node * 2, start, mid, i, val);
        } else {
            this.update(node * 2 + 1, mid + 1, end, i, val);
        }
        this.tree[node] = Math.max(this.tree[node * 2], this.tree[node * 2 + 1]);
    }

    // Query the first index where basket capacity >= target
    queryFirst(node, start, end, target) {
        if (this.tree[node] < target) return -1;
        if (start === end) {
            this.update(1, 0, this.n - 1, start, -1); // Mark as used
            return start;
        }
        const mid = Math.floor((start + end) / 2);
        if (this.tree[node * 2] >= target) {
            return this.queryFirst(node * 2, start, mid, target);
        }
        return this.queryFirst(node * 2 + 1, mid + 1, end, target);
    }
}

function numOfUnplacedFruits(fruits, baskets) {
    const tree = new SegmentTree(baskets);
    let unplaced = 0;

    for (const fruit of fruits) {
        if (tree.queryFirst(1, 0, baskets.length - 1, fruit) === -1) {
            unplaced++;
        }
    }

    return unplaced;
}