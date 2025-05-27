/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

class Heap {
    constructor() {
        this.heap = []
    }
    add(val) {
        this.heap.push(val)
        this.heapifyUp()
    }
    heapifyUp() {
        let i = this.heap.length - 1
        while (i > 0) {
            let parent = Math.floor((i - 1) / 2)
            if (this.heap[parent] > this.heap[i]) {
                [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]]
                i = parent
            } else break
        }
    }

    display() {
        console.log(this.heap)
    }
    size() {
        return this.heap.length
    }

    pop() {
        let res = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown()
        return res
    }

    heapifyDown() {
        let i = 0
        while (true) {
            let biger = i
            let left = 2 * biger + 1
            let right = 2 * biger + 2
            if (this.heap[biger] > this.heap[left]) {
                biger = left
            }
            if (this.heap[biger] > this.heap[right]) {
                biger = right
            }
            if (biger == i) break
            [this.heap[biger], this.heap[i]] = [this.heap[i], this.heap[biger]]
            i = biger
        }
    }
}


var findKthLargest = function (nums, k) {

    let hp = new Heap()
    for (let i = 0; i < nums.length; i++) {
        hp.add(nums[i])
        if (hp.size() >k) hp.pop()
    }
    return hp.heap[0]

};