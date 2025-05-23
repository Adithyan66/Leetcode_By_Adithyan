class MyQueue {
    constructor() {
        this.inQueue = []
        this.outQueue = []
    }

    push(x) {
        this.inQueue.push(x)
    }

    pop() {
        this.transfer()
        return this.outQueue.pop()
    }

    peek() {
        this.transfer()
        return this.outQueue[this.outQueue.length - 1]
    }

    empty() {
        return this.inQueue.length === 0 && this.outQueue.length === 0
    }

    transfer() {
        if (this.outQueue.length === 0) {
            while (this.inQueue.length > 0) {
                this.outQueue.push(this.inQueue.pop())
            }
        }
    }
}
