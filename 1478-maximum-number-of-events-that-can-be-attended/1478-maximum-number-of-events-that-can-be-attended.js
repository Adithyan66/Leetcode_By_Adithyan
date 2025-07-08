/**
 * @param {number[][]} events
 * @return {number}
 */
function maxEvents(events) {
    // Custom Min-Heap for end times
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
            const min = this.heap[0];
            this.heap[0] = this.heap.pop();
            this._bubbleDown(0);
            return min;
        }
        
        peek() {
            return this.heap[0] || Infinity;
        }
        
        size() {
            return this.heap.length;
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
                
                if (left < length && this.heap[left] < this.heap[smallest]) {
                    smallest = left;
                }
                if (right < length && this.heap[right] < this.heap[smallest]) {
                    smallest = right;
                }
                if (smallest === index) break;
                
                [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
                index = smallest;
            }
        }
    }
    
    // Sort events by start time, then by end time for same start
    events.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
    
    const minHeap = new MinHeap();
    let maxEvents = 0;
    let eventIndex = 0;
    let currentDay = events[0][0]; // Start at the earliest event
    
    while (eventIndex < events.length || minHeap.size() > 0) {
        // Add all events that start on or before currentDay
        while (eventIndex < events.length && events[eventIndex][0] <= currentDay) {
            minHeap.push(events[eventIndex][1]);
            eventIndex++;
        }
        
        // Remove expired events (end time < currentDay)
        while (minHeap.size() > 0 && minHeap.peek() < currentDay) {
            minHeap.pop();
        }
        
        // Attend one event if available
        if (minHeap.size() > 0) {
            minHeap.pop(); // Attend event ending earliest
            maxEvents++;
            currentDay++; // Move to next day
        } else {
            // No events available; jump to next event's start day
            if (eventIndex < events.length) {
                currentDay = events[eventIndex][0];
            } else {
                break; // No more events to process
            }
        }
    }
    
    return maxEvents;
}