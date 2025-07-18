class MinHeap {
    constructor() {
        this.heap = [];
    }
    push(val) {
        this.heap.push(val);
        this._bubbleUp(this.heap.length - 1);
    }
    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._bubbleDown(0);
        return top;
    }
    _bubbleUp(index) {
        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);
            if (this.heap[index] >= this.heap[parent]) break;
            [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
            index = parent;
        }
    }
    _bubbleDown(index) {
        const length = this.heap.length;
        while (true) {
            let smallest = index;
            const left = 2 * index + 1;
            const right = 2 * index + 2;
            if (left < length && this.heap[left] < this.heap[smallest]) smallest = left;
            if (right < length && this.heap[right] < this.heap[smallest]) smallest = right;
            if (smallest === index) break;
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
    size() {
        return this.heap.length;
    }
}

class MaxHeap {
    constructor() {
        this.heap = [];
    }
    push(val) {
        this.heap.push(val);
        this._bubbleUp(this.heap.length - 1);
    }
    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._bubbleDown(0);
        return top;
    }
    _bubbleUp(index) {
        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);
            if (this.heap[index] <= this.heap[parent]) break;
            [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
            index = parent;
        }
    }
    _bubbleDown(index) {
        const length = this.heap.length;
        while (true) {
            let largest = index;
            const left = 2 * index + 1;
            const right = 2 * index + 2;
            if (left < length && this.heap[left] > this.heap[largest]) largest = left;
            if (right < length && this.heap[right] > this.heap[largest]) largest = right;
            if (largest === index) break;
            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            index = largest;
        }
    }
    size() {
        return this.heap.length;
    }
}

function minimumDifference(nums) {
    const m = nums.length;
    const n = m / 3;
    let leftSum = 0;
    let rightSum = 0;
    const maxHeap = new MaxHeap(); // For smallest n elements in left part
    const minHeap = new MinHeap(); // For largest n elements in right part
    const minLeftSum = new Array(m).fill(0); // Store minimum sum of n elements up to index i
    const maxRightSum = new Array(m).fill(0); // Store maximum sum of n elements from index i

    // Compute minimum sum for first n elements up to index i (n <= i <= 2n)
    for (let i = 0; i < 2 * n; i++) {
        leftSum += nums[i];
        maxHeap.push(nums[i]);
        if (maxHeap.size() > n) {
            leftSum -= maxHeap.pop();
        }
        if (maxHeap.size() === n) {
            minLeftSum[i] = leftSum;
        }
    }

    // Compute maximum sum for last n elements from index i (2n >= i >= n)
    for (let i = m - 1; i >= n; i--) {
        rightSum += nums[i];
        minHeap.push(nums[i]);
        if (minHeap.size() > n) {
            rightSum -= minHeap.pop();
        }
        if (minHeap.size() === n) {
            maxRightSum[i] = rightSum;
        }
    }

    // Find minimum difference by checking all valid split points
    let ans = Number.MAX_SAFE_INTEGER;
    for (let i = n - 1; i < 2 * n; i++) {
        ans = Math.min(ans, minLeftSum[i] - maxRightSum[i + 1]);
    }

    return ans;
}