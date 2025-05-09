
var MyCircularQueue = function (k) {
    this.queue = []
    this.size = k-1
};


MyCircularQueue.prototype.enQueue = function (value) {
    if (this.isFull()) {
        return false
    }
    this.queue.push(value)
    return true
};

MyCircularQueue.prototype.deQueue = function () {
    if (this.isEmpty()) {
        return false
    }
    this.queue.shift()
    return true
};


MyCircularQueue.prototype.Front = function () {
    if (this.isEmpty()) {
        return -1
    }
    return this.queue[0]
};


MyCircularQueue.prototype.Rear = function () {
    if (this.isEmpty()) {
        return -1
    }
    return this.queue[this.queue.length - 1]
};


MyCircularQueue.prototype.isEmpty = function () {
    return this.queue.length === 0
};


MyCircularQueue.prototype.isFull = function () {
    return this.size === this.queue.length - 1
};